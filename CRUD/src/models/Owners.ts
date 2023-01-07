import mongoose, { Document, Schema } from 'mongoose';

export interface IOwner {
    name: string;
}

export interface IOwnerModel extends IOwner, Document {}

const OwnerSchema: Schema = new Schema(
    {
        name: { type: String, required: true}
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IOwnerModel>('Owner', OwnerSchema);