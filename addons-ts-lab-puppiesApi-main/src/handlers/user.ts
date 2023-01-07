import { comparePasswords, createJWT, hashPassword } from "../modules/auth";
import prisma from "../db";
import { Request, Response } from "express";

export const createNewUser = async (req: Request ,res: Response) => {

    const hash = await hashPassword(req.body.password);

    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: hash,
        }
    })
    const token = createJWT(user)
    res.json({token})
}

export const signin = async (req: Request ,res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.body.username
        }
    })

    const isValid = await comparePasswords(req.body.password, user.password);
    
    if(!isValid){
        res.status(401);
        res.json({message: 'nope'})
    }

    const token = createJWT(user)
    res.json({ token })
}
