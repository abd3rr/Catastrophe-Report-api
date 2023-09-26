import { inject, injectable } from "tsyringe";
import { EventTypeRepository } from "../repository/EventTypeRepository";
import { EventType } from "../models/EventType";


@injectable()
export class EventTypeService{
    constructor(@inject("EventTypeRepository") private eventTypeRpository: EventTypeRepository)
     {}
     async getEventTypes(){
            return await this.eventTypeRpository.getEventTypes();
        }
        async getEventTypeById(id: number){
            return await this.eventTypeRpository.getEventTypeById(id);
        }
        async createEventType(eventType: EventType){
            return await this.eventTypeRpository.createEventType(eventType);
        }
        async updateEventType(id: number, updatedEventType: EventType){
            return await this.eventTypeRpository.updateEventType(id, updatedEventType);
        }
        async deleteEventType(id: number){
            return await this.eventTypeRpository.deleteEventType(id);
        }
}