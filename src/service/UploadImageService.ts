import * as fs from "fs";
import * as path from "path";
import multer, { FileFilterCallback } from 'multer';

import { Image } from "../models/Image";
import { injectable } from "tsyringe";

const ALLOWED_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg', '.webp', '.tiff'];
const UPLOAD_PATH = "../uploads"; 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(UPLOAD_PATH)) {
            fs.mkdirSync(UPLOAD_PATH, { recursive: true });
        }
        cb(null, UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req: any, file: Express.Multer.File, cb: FileFilterCallback) => {
    const fileExt = path.extname(file.originalname).toLowerCase();
    
    if (ALLOWED_IMAGE_EXTENSIONS.includes(fileExt)) {
        cb(null, true);
    } else {
        cb(new Error(`Invalid file type. Only ${ALLOWED_IMAGE_EXTENSIONS.join(', ')} are allowed.`) as any, false);


    }
};


const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

@injectable()
export class UploadImageService {
    private bytesToMegabytes(bytes: number): number {
        return Math.round((bytes / 1048576) * 100) / 100;  // rounded to two decimal places
    }
     any() {
        return upload.any();
    }

    async getMetaData(file: Express.Multer.File): Promise<Omit<Image, 'id' | 'created_at' | 'updated_at' | 'report'>> {
        return {
            filename: file.filename,
            filePath: path.join(UPLOAD_PATH, file.filename),
            size: this.bytesToMegabytes(file.size), 
            format: path.extname(file.filename).replace(".", "")
        };
    }
    
}
