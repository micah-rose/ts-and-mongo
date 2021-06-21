import IBook from "../interfaces/book";
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

export default mongoose.model<IBook>('Book', BookSchema);