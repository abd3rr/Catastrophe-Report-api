import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from "tsyringe";
import { ImageService } from '../service/ImageService';
import { UploadImageService } from '../service/UploadImageService';
import { Image } from '../models/Image';

@injectable()
export class ImageController {
    constructor(
        @inject("ImageService") private imageService: ImageService,
        @inject("UploadImageService") private uploadImageService: UploadImageService
    ) {}

    async getAll(req: Request, res: Response) {
        try {
            const images = await this.imageService.getImages();
            res.json(images);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const image = await this.imageService.getOne(id);
            if (image) {
                res.json(image);
            } else {
                res.status(404).json({ message: "Image not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            console.log(this.imageService); // Log this.imageService to see if it is defined
            this.uploadImageService.any()(req, res, async (error) => {
                if (error) {
                    throw error;
                }
    
                if (!req.files) {
                    res.status(400).json({ message: 'No image provided.' });
                    return;
                }
    
                console.log(this.imageService); // Log this.imageService again to see if it is defined within the callback
                const savedImage = await this.imageService.create(req.files[0] as Express.Multer.File);
                res.status(201).json(savedImage);
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const updatedImage = await this.imageService.update(id, req.body as Image); 
            if (updatedImage) {
                res.json(updatedImage);
            } else {
                res.status(404).json({ message: "Image not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const success = await this.imageService.delete(id);
            if (success) {
                res.status(204).end(); // Successfully deleted, no content to send
            } else {
                res.status(404).json({ message: "Image not found" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
