  import { ReportRepository } from "../repository/ReportRepository";
  import { Report } from "../models/Report";
  import { inject, injectable } from "tsyringe";
import { LocationRepository } from "../repository/LocationRepository";
import { ImageRepository } from "../repository/ImageRepository";

  @injectable()
  export class ReportService{
      
    constructor(
      @inject("ReportRepository") private reportRepository: ReportRepository,
      @inject("LocationRepository") private locationRepository: LocationRepository,
      @inject("ImageRepository") private imageRepository: ImageRepository,

    ) {}

      async getReports():Promise<Report[]>{
          return await this.reportRepository.getReports();
      }

      async getOne(id: number): Promise<Report | null> {
        const report = await this.reportRepository.getReportById(id);
        return report ? report : null;
      }
    
      async create(reportData: any): Promise<Report> {
        const location = await this.locationRepository.getLocationById(reportData.locationId);
        if (!location) throw new Error('Invalid location ID');

        const images = await this.imageRepository.getImagesByIds(reportData.imageIds);
        if (images.length !== reportData.imageIds.length) throw new Error('Invalid image IDs');

        const report = new Report();
        report.title = reportData.title;
        report.description = reportData.description;
        report.eventType = reportData.eventType; 
        report.severity = reportData.severity;   
        report.verified = false as boolean;
        report.location = location;
        report.images = images;
        
        return await this.reportRepository.createReport(report);
    }
    
      async update(id: number, updatedReport: Report): Promise<Report | null> {
        const report = await this.reportRepository.updateReport(id, updatedReport);
        return report ? report : null;
      }
    
      async delete(id: number): Promise<boolean> {
        return await this.reportRepository.deleteReport(id);
}

  }