import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

const upload = multer(multerConfig);
const routes = express.Router();

import DummyController from './controller/DummyController';
import InvestidorController from './controller/InvestidorController';


routes.get('/teste', DummyController.index);

routes.get('/investidores', InvestidorController.index);
routes.get('/investidor/:id', InvestidorController.show);

routes.post('/investidor', upload.fields([
    { name: 'fotocnh', maxCount: 1 },
    { name: 'fotocpf', maxCount: 1 },
    { name: 'fotorg', maxCount: 1 },
    { name: 'fotocpf', maxCount: 1 },
    { name: 'fotocomprovanteresidencia', maxCount: 1 },
    { name: 'fotoinvestidor', maxCount: 1 },
]), InvestidorController.create);

export default routes;