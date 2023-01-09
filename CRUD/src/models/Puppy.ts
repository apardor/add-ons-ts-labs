import mongoose, { Document, Schema } from "mongoose";

export interface IPuppy {
    name: string;
    owner: string;
    breed: string;
    birth: string
}

export interface IPuppyModel extends IPuppy, Document{}

const PuppySchema: Schema = new Schema({
    name: {type: String, required: true},
    owner: { type: Schema.Types.ObjectId, required : false , ref: 'Owner'},
    breed: {type: String, required: true},
    birth: {type: String, required: true},
},
{
    timestamps: true,
    versionKey: false
}); 

export default mongoose.model<IPuppyModel>('Puppy', PuppySchema);
