import { inject, injectable } from "tsyringe";
import { SeverityService } from "../service/SeverityService";
import { Request, Response } from "express";


@injectable()
export class SeverityController{
    constructor(@inject("SeverityService") private severityService: SeverityService)
    {}
    async getAll(req: Request, res: Response) {
        try {
            const severities = await this.severityService.getSeverities();
            res.json(severities);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const severity = await this.severityService.getSeverityById(id);
            if (severity) {
                res.json(severity);
            } else {
                res.status(404).json({ message: "Severity not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async create(req: Request, res: Response) {
        try {
            const newSeverity = req.body;
            const severity = await this.severityService.createSeverity(newSeverity);
            res.status(201).json(severity);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const updatedSeverity = req.body;
            const severity = await this.severityService.updateSeverity(id, updatedSeverity);
            if (severity) {
                res.json(severity);
            } else {
                res.status(404).json({ message: "Severity not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await this.severityService.deleteSeverity(id);
            if (result) {
                res.sendStatus(204);
            } else {
                res.status(404).json({ message: "Severity not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    
}
