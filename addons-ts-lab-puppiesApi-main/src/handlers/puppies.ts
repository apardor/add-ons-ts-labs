import prisma from "../db";
import { Request, Response } from 'express';

//Get all
export const getPuppies = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            puppies: true  
        }
    })
    res.json({data: user.puppies})
}

//Get one
export const getOnePuppy = async (req: Request, res: Response ) => {
    const id = req.params.id;
    const puppy = await prisma.puppy.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        }
    });
    res.json({data: puppy})
}

//Create one
export const createPuppy = async (req: Request, res: Response) => {
    const puppy = await prisma.puppy.create({
        data:{
            name: req.body.name,
            breed: req.body.breed,
            birthDate: req.body.birthDate,
            belongsToId: req.user.id
        }
    })
    res.json({data: puppy})
}

//Update puppy
export const updatePuppy = async(req: Request, res: Response) => {
    const updated = await prisma.puppy.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        },
        data:{
            name: req.body.name,
            breed: req.body.breed,
            birthDate: req.body.birthDate,
        }
    })
    res.json({ data: updated})
}

//Delete puppy
export const deletePuppy = async (req: Request, res: Response) => {
    const deleted = await prisma.puppy.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
        }}
    })
    res.json({data: deleted})
}