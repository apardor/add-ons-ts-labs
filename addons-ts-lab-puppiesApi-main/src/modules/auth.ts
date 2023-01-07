import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';

export const comparePasswords = (password: string, hash: string) =>{
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password: string) => {
    return bcrypt.hash(password, 5)
}

export const createJWT = (user) =>{
    const token = jwt.sign({
        id: user.id,
        username: user.username
        },
         process.env.JWT_SECRET
        );
    return token;
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;

    if(!bearer){
        res.status(401);
        res.send({message: 'not authorize'});
        return
    }

    const [, token] = bearer.split(' ');

    if(!token){
        res.status(401);
        res.send({message: 'not valid token'});
        return
    }

    try{
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next()
    } catch(e) {
        console.log(e);
        res.status(401);
        res.send({message: 'not valid token'});
        return
    }

}