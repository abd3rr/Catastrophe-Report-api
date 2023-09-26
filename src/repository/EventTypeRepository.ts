import { injectable } from "tsyringe";
import { Repository, getRepository } from "typeorm";
import { EventType } from "../models/EventType";

@injectable()
export class EventTypeRepository{
    private repo: Repository<EventType>;
    constructor(){
        this.repo = getRepository(EventType);
    }
    async getEventTypes(){
        return await this.repo.find();
    }
    async getEventTypeById(id: number): Promise<EventType | undefined>{
        return await this.repo.findOne({where: {id}});
    }
    async createEventType(eventType: EventType): Promise<EventType>{
        return await this.repo.save(eventType);
    }
    async updateEventType(id: number, updatedEventType: EventType): Promise<EventType | undefined>{
        await this.repo.update(id, updatedEventType);
        return this.getEventTypeById(id);
    }
    async deleteEventType(id: number): Promise<boolean>{
        const result = await this.repo.delete(id);
        return result.affected === 1;
    }
    
}