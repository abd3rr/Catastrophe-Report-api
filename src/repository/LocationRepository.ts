import { injectable } from "tsyringe";
import { Repository, getRepository } from "typeorm";
import { Location } from "../models/Location";
import { get } from "http";


@injectable()
export class LocationRepository{
    private repo: Repository<Location>;
    constructor() {
        this.repo = getRepository(Location);
    }

    async getLocations() {
        return await this.repo.find();
    }

    async getLocationById(id: number): Promise<Location | undefined> {
        return await this.repo.findOne({ where: { id } });
    }
    
    async createLocation(location: Location): Promise<Location> {
        return await this.repo.save(location);
    }
    async updateLocation(id: number, updatedLocation: Location): Promise<Location | undefined> {
        await this.repo.update(id, updatedLocation);
        return this.getLocationById(id);
    }
    async deleteLocation(id: number): Promise<boolean> {
        const result = await this.repo.delete(id);
        return result.affected === 1;
    }
    
}