import { NextFunction, Request, Response  } from "express";
import mongoose from "mongoose";
import Owner from "../models/Owner";

const createOwner = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const owner = new Owner({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return owner
        .save()
        .then((owner) => res.status(201).json({owner}))
        .catch((error) => res.status(500).json({error}));
};
const readOwner = (req: Request, res: Response, next: NextFunction) => {
    const ownerId = req.params.ownerId;

    return Owner.findById(ownerId)
    .then(owner => owner ? res.status(200).json({ owner }) : res.status(404).json({ message: 'Not found'}))
    .catch((error) => res.status(500).json({error}));
};
const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Owner.find()
    .then((owners) => res.status(200).json({owners}))
    .catch((error) => res.status(500).json({error}));
};
const updateOwner = (req: Request, res: Response, next: NextFunction) => {
    const ownerId = req.params.ownerId;

    return Owner.findById(ownerId)
    .then((owner) => {
        if(owner)
        {
            owner.set(req.body);

            return owner
            .save()
            .then((owner) => res.status(201).json({owner}))
            .catch((error) => res.status(500).json({error}));
        }
        else
        {
            res.status(404).json({ message: 'Not found'});
        }
    })
    .catch((error) => res.status(500).json({error}));

};
const deleteOwner = (req: Request, res: Response, next: NextFunction) => {
    const ownerId = req.params.ownerId;

    return Owner.findByIdAndDelete(ownerId)
        .then((owner) => (owner ? res.status(201).json({message: 'deleted'}) : res.status(404)
        .json({message : 'Not found'})))
        .catch((error) => res.status(500).json({error}));
};

export default { createOwner, readAll, readOwner, updateOwner, deleteOwner };