import express from 'express';
import controller from '../controllers/Puppy';

const router = express.Router();

router.post('/puppies', controller.createPuppy);
router.get('/puppies/:puppyId', controller.readPuppy);
router.get('/puppies', controller.readAllPuppies);
router.put('/puppies/:puppyId', controller.updatePuppy);
router.delete('/puppies/:puppyId', controller.deletePuppy);

export = router;