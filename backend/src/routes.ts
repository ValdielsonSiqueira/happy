import { Router } from 'express';
import multer from 'multer';
import RefugesController from './controllers/RefugesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/refuges', RefugesController.index);
routes.get('/refuges/:id', RefugesController.show);
routes.post('/refuges', upload.array('images'), RefugesController.create);

export default routes;
