import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { LocationService } from "../service/LocationService";
import { Location } from "../models/Location";

@injectable()
export class LocationController {
    constructor(
        @inject("LocationService") private locationService: LocationService,
    ) {}

    async getAll(req: Request, res: Response) {
        try {
            const locations = await this.locationService.getLocations();
            res.json(locations);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const location = await this.locationService.getOne(id);
            if (location) {
                res.json(location);
            } else {
                res.status(404).json({ message: "Location not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const newLocation: Location = req.body;
            const location = await this.locationService.create(newLocation);
            res.status(201).json(location);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const updatedLocation: Location = req.body;
            const location = await this.locationService.update(id, updatedLocation);
            if (location) {
                res.json(location);
            } else {
                res.status(404).json({ message: "Location not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const success = await this.locationService.delete(id);
            if (success) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: "Location not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
