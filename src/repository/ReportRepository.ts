import {  Repository, getRepository } from "typeorm";
import { Report } from "../models/Report";
import { injectable } from "tsyringe";

@injectable()
export class ReportRepository {
    private repo: Repository<Report>;
    constructor() {
        this.repo = getRepository(Report);
    }

    async getReports() {
        return await this.repo.find({ relations: ["location", "images"] });
    }

    async getReportById(id: number): Promise<Report | undefined> {
        return await this.repo.findOne({ where: { id }, relations: ["location", "images"] });
    }
    
    async createReport(report: Report): Promise<Report> {
        return await this.repo.save(report);
    }

    async updateReport(id: number, updatedReport: Report): Promise<Report | undefined> {
        await this.repo.update(id, updatedReport);
        return this.getReportById(id);
    }

    async deleteReport(id: number): Promise<boolean> {
        const result = await this.repo.delete(id);
        return result.affected === 1;
    }
    
}