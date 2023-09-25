import { inject, injectable } from "tsyringe";
import { Location } from "../models/Location";
import { LocationRepository } from "../repository/LocationRepository";



@injectable()
export class LocationService {

    constructor(
        @inject("LocationRepository") private locationRepository: LocationRepository
    ) {}

    async getLocations(): Promise<Location[]> {
        return await this.locationRepository.getLocations();
    }

    async getOne(id: number): Promise<Location | null> {
        const location = await this.locationRepository.getLocationById(id);
        return location ? location : null;
    }

    async create(location: Location): Promise<Location> {
        if (!location || !location.coordinates) {
            throw new Error('Location or Coordinates are not defined');
        }
    
        const { longitude, latitude } = location.coordinates as any;
    
        if (longitude === undefined || latitude === undefined) {
            throw new Error('Longitude or Latitude are not defined in coordinates');
        }
        
        location.coordinates = {
            type: "Point",
            coordinates: [longitude, latitude]
        } as any; 
    
        return await this.locationRepository.createLocation(location);
    }
    
    
    
    

    async update(id: number, updatedLocation: Location): Promise<Location | null> {
        const location = await this.locationRepository.updateLocation(id, updatedLocation);
        return location ? location : null;
    }

    async delete(id: number): Promise<boolean> {
        return await this.locationRepository.deleteLocation(id);
    }
}
