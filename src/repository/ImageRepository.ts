import { injectable } from "tsyringe";
import { Image } from "../models/Image";
import { Repository, getRepository } from "typeorm";



@injectable()
export class ImageRepository{
    private repo: Repository<Image>;
    constructor() {
        this.repo = getRepository(Image);
    }
    
    async getImages() {
        return await this.repo.find();
    }
    
    async getImageById(id: number): Promise<Image | undefined> {
        return await this.repo.findOne({ where: { id } });
    }

    async getImagesByIds(ids: number[]): Promise<Image[]> {
        return await this.repo.findByIds(ids);
    }
    
    async createImage(image: Image): Promise<Image> {
        return await this.repo.save(image);
    }

    async updateImage(id: number, updatedImage: Image): Promise<Image | undefined> {
        await this.repo.update(id, updatedImage);
        return this.getImageById(id);
    }

    async deleteImage(id: number): Promise<boolean> {
        const result = await this.repo.delete(id);
        return result.affected === 1;
    }
    
}