import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (password, hash) =>{
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}

export const createJWT = (puppy) =>{
    const token = jwt.sign({
        id: puppy.id,
        name: puppy.name
        },
         process.env.JWT_SECRET
        );
    return token;
}

export const protect = (req, res, next) => {
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
        const puppy = jwt.verify(token, process.env.JWT_SECRET);
        req.puppy = puppy;
        next()
    } catch(e) {
        console.log(e);
        res.status(401);
        res.send({message: 'not valid token'});
        return
    }

}