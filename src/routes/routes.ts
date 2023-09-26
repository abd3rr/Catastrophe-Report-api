import { Router } from "express";
import { ReportController } from "../controllers/ReportController";
import { container } from "tsyringe";
import { ReportService } from "../service/ReportService";
import { ImageController } from "../controllers/ImageController";
import { LocationController } from "../controllers/LocationController";
import { EventTypeController } from "../controllers/EventTypeController";
import { SeverityController } from "../controllers/SeverityController";


const router =  Router();

// routes for reports
router.get('/reports', async (req, res) => {
    const reportController = container.resolve(ReportController);
    await reportController.getAll(req, res);
});
router.get('/reports/:id', async (req, res) => {
    const reportController = container.resolve(ReportController);
    await reportController.getOne(req, res);
});
router.post('/reports', async (req, res) => {
    const reportController = container.resolve(ReportController);
    await reportController.create(req, res);
});
router.put('/reports/:id', async (req, res) => {
    const reportController = container.resolve(ReportController);
    await reportController.update(req, res);
});
router.delete('/reports/:id', async (req, res) => {
    const reportController = container.resolve(ReportController);
    await reportController.delete(req, res);
});
// routes for image
router.get('/images', async (req, res) => {
    const imageController = container.resolve(ImageController);
    await imageController.getAll(req, res);
});
router.get('/images/:id', async (req, res) => {
    const imageController = container.resolve(ImageController);
    await imageController.getOne(req, res);
});
router.post('/images', async (req, res) => {
    const imageController = container.resolve(ImageController);
    await imageController.create(req, res);
});
router.put('/images/:id', async (req, res) => {
    const imageController = container.resolve(ImageController);
    await imageController.update(req, res);
});
router.delete('/images/:id', async (req, res) => {
    const imageController = container.resolve(ImageController);
    await imageController.delete(req, res);
});
// routes for location
router.get('/locations', async (req, res) => {
    const locationController = container.resolve(LocationController);
    await locationController.getAll(req, res);
});
router.get('/locations/:id', async (req, res) => {
    const locationController = container.resolve(LocationController);
    await locationController.getOne(req, res);
});
router.post('/locations', async (req, res) => {
    const locationController = container.resolve(LocationController);
    await locationController.create(req, res);
});
router.put('/locations/:id', async (req, res) => {
    const locationController = container.resolve(LocationController);
    await locationController.update(req, res);
});
router.delete('/locations/:id', async (req, res) => {
    const locationController = container.resolve(LocationController);
    await locationController.delete(req, res);
});
// routes for event type
router.get('/eventtypes', async (req, res) => {
    const eventTypeController = container.resolve(EventTypeController);
    await eventTypeController.getAll(req, res);
});
router.get('/eventtypes/:id', async (req, res) => {
    const eventTypeController = container.resolve(EventTypeController);
    await eventTypeController.getOne(req, res);
});
router.post('/eventtypes', async (req, res) => {
    const eventTypeController = container.resolve(EventTypeController);
    await eventTypeController.create(req, res);
});
router.put('/eventtypes/:id', async (req, res) => {
    const eventTypeController = container.resolve(EventTypeController);
    await eventTypeController.update(req, res);
});
router.delete('/eventtypes/:id', async (req, res) => {
    const eventTypeController = container.resolve(EventTypeController);
    await eventTypeController.delete(req, res);
});
// routes for severity
router.get('/severities', async (req, res) => {
    const severityController = container.resolve(SeverityController);
    await severityController.getAll(req, res);
});
router.get('/severities/:id', async (req, res) => {
    const severityController = container.resolve(SeverityController);
    await severityController.getOne(req, res);
});
router.post('/severities', async (req, res) => {
    const severityController = container.resolve(SeverityController);
    await severityController.create(req, res);
});
router.put('/severities/:id', async (req, res) => {
    const severityController = container.resolve(SeverityController);
    await severityController.update(req, res);
});
router.delete('/severities/:id', async (req, res) => {
    const severityController = container.resolve(SeverityController);
    await severityController.delete(req, res);
});

export default router;