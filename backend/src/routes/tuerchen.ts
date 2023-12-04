import express from 'express';
import controller  from '../controllers/tuerchen';
const router = express.Router();

router.get('/tuerchen', controller.getTuerchen);

export = router;