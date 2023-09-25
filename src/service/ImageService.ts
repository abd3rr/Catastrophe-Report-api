import { ImageRepository } from "../repository/ImageRepository";
import { Image } from "../models/Image";
import { inject, injectable } from "tsyringe";
import { UploadImageService } from "./UploadImageService";  
import express from 'express';



@injectable()
export class ImageService {
      
    constructor(
        @inject("ImageRepository") private imageRepository: ImageRepository,
        @inject("UploadImageService") private uploadImageService: UploadImageService
    ) {}

    async getImages(): Promise<Image[]> {
        return await this.imageRepository.getImages();
    }

    async getOne(id: number): Promise<Image | null> {
        const image = await this.imageRepository.getImageById(id);
        return image ? image : null;
    }

    async create(file: Express.Multer.File): Promise<Image> {
        const metadata = await this.uploadImageService.getMetaData(file);
        const image = new Image();
        image.filename = metadata.filename;
        image.filePath = metadata.filePath;
        image.size = metadata.size;
        image.format = metadata.format;

        return await this.imageRepository.createImage(image);
    }

    async update(id: number, updatedImage: Image): Promise<Image | null> {
        const image = await this.imageRepository.updateImage(id, updatedImage);
        return image ? image : null;
    }

    async delete(id: number): Promise<boolean> {
        return await this.imageRepository.deleteImage(id);
    }
}
