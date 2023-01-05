import prisma from "../db";
import { Request, Response,} from 'express';

//Get all
export const getPuppies = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            puppy: true
        }
    })
    res.json({data: user.puppy})
}

//Get one
export const getOnePuppy = async (req: Request, res: Response ) => {
    const id = req.params.id;
    const puppy = await prisma.puppy.findFirst({
        where: {
            id,
            belongsTo: req.user.id
        }
    });
    res.json({data: puppy})
}

