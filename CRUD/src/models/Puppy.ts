import mongoose, { Document, Schema } from "mongoose";

export interface IPuppy {
    name: string;
    owner: string;
}

export interface IPuppyModel extends IPuppy, Document{}

const PuppySchema: Schema = new Schema({
    title: {type: String, required: true},
    owner: { type: Schema.Types.ObjectId, required : true , ref: 'Owner'}
},
{
    timestamps: true,
    versionKey: true
}); 

export default mongoose.model<IPuppyModel>('Puppy', PuppySchema);