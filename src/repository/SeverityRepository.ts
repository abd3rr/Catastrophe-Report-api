import { Repository, getRepository } from "typeorm";
import { Severity } from "../models/Severity";
import { injectable } from "tsyringe";

@injectable()
export class SeverityRepository{
    private repo: Repository<Severity>;
    constructor(){
        this.repo = getRepository(Severity);
    }
    async getSeverities(){
        return await this.repo.find();
    }
    async getSeverityById(id: number): Promise<Severity | undefined>{
        return await this.repo.findOne({where: {id}});
    }
    async createSeverity(severity: Severity): Promise<Severity>{
        return await this.repo.save(severity);
    }
    async updateSeverity(id: number, updatedSeverity: Severity): Promise<Severity | undefined>{
        await this.repo.update(id, updatedSeverity);
        return this.getSeverityById(id);
    }
    async deleteSeverity(id: number): Promise<boolean>{
        const result = await this.repo.delete(id);
        return result.affected === 1;
    }
}