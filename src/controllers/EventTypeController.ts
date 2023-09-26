import { inject, injectable } from "tsyringe";
import { EventTypeService } from "../service/EventTypeService";
import { Request, Response } from "express";

@injectable()
export class EventTypeController{
    constructor(@inject("EventTypeService") private eventTypeService:EventTypeService) 
    {}
    async getAll(req: Request, res: Response) {
        try {
            const eventTypes = await this.eventTypeService.getEventTypes();
            res.json(eventTypes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const eventType = await this.eventTypeService.getEventTypeById(id);
            if (eventType) {
                res.json(eventType);
            } else {
                res.status(404).json({ message: "EventType not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async create(req: Request, res: Response) {
        try {
            const newEventType = req.body;
            const eventType = await this.eventTypeService.createEventType(newEventType);
            res.status(201).json(eventType);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const updatedEventType = req.body;
            const eventType = await this.eventTypeService.updateEventType(id, updatedEventType);
            if (eventType) {
                res.json(eventType);
            } else {
                res.status(404).json({ message: "EventType not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await this.eventTypeService.deleteEventType(id);
            if (result) {
                res.sendStatus(204);
            } else {
                res.status(404).json({ message: "EventType not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}