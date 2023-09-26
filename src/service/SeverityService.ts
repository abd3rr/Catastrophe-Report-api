import { inject, injectable } from "tsyringe";
import { SeverityRepository } from "../repository/SeverityRepository";
import { Severity } from "../models/Severity";


@injectable()
export class SeverityService{
    constructor(@inject("SeverityRepository") private severityRepository: SeverityRepository
    ) {}

    async getSeverities(){
        return await this.severityRepository.getSeverities();
    }
    async getSeverityById(id: number){
        return await this.severityRepository.getSeverityById(id);
    }
    async createSeverity(severity: Severity){
        return await this.severityRepository.createSeverity(severity);
    }
    async updateSeverity(id: number, updatedSeverity: Severity){
        return await this.severityRepository.updateSeverity(id, updatedSeverity);
    }
    async deleteSeverity(id: number){
        return await this.severityRepository.deleteSeverity(id);
    }

}