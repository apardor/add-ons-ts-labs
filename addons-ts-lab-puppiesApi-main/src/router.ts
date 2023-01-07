import {Router, Request, Response,} from 'express';
import { body } from 'express-validator';
import { getPuppies } from './handlers/puppies';
import { handleInputErrors } from './modules/middleware';

const router = Router();

router.get('/puppies', getPuppies);
router.get('/puppies/:id', () =>{});
router.post('/puppies', body('name').isString(),handleInputErrors, (_req: Request, _res: Response)=>{
    
});
router.put('/puppies/:id', body('name', 'breed').isString(), handleInputErrors, (_req: Request, _res: Response) =>{

});
router.delete('/puppies/:id', () =>{});

export default router;