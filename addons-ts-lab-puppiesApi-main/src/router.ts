import {Router, Request, Response,} from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from './modules/middleware';

const router = Router();

router.get('/puppies', (_req: Request, res: Response) =>{
    res.status(200);
    res.json({message: 'hello'});
});
router.get('/puppies/:id', () =>{});
router.post('/puppies', body('name').isString(),handleInputErrors, (_req: Request, _res: Response)=>{
    
});
router.put('/puppies/:id', body('name').isString(), handleInputErrors, (_req: Request, _res: Response) =>{

});
router.delete('/puppies/:id', () =>{});

export default router;