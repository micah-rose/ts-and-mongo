import IBook from "../interfaces/book";
import mongoose = require('mongoose');
import { Schema } from 'mongoose';

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    extraInformation: { type: String }
    },
    {
        timestamps: true
    }
);

BookSchema.post<IBook>('save', function () {
    this.extraInformation = 'This is some extra stuff!';
})

export default mongoose.model<IBook>('Book', BookSchema);