import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ReportService } from "../service/ReportService";
import { LocationRepository } from "../repository/LocationRepository";
import { ImageRepository } from "../repository/ImageRepository";

@injectable()
export class ReportController {
    constructor(
        @inject("ReportService") private reportService: ReportService,
    ) {}

    async getAll(req: Request, res: Response) {
        try {
            const reports = await this.reportService.getReports();
            res.json(reports);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const report = await this.reportService.getOne(id);
            if (report) {
                res.json(report);
            } else {
                res.status(404).json({ message: "Report not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async create(req: Request, res: Response) {
      
        try {
            const newReport = await this.reportService.create(req.body);
            res.status(201).json(newReport);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
        
    }
    

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const updatedReport = await this.reportService.update(id, req.body);
            if (updatedReport) {
                res.json(updatedReport);
            } else {
                res.status(404).json({ message: "Report not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const success = await this.reportService.delete(id);
            if (success) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: "Report not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
