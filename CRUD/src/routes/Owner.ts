import express from 'express';
import controller from '../controllers/Owner';

const router = express.Router();

router.post('/create', controller.createOwner);
router.get('/get/:ownerId', controller.readOwner);
router.get('/get', controller.readAll);
router.put('/update/:ownerId', controller.updateOwner);
router.delete('/delete/:ownerId', controller.deleteOwner);

export = router;