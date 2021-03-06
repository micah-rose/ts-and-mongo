import { NextFunction, Request, Response } from 'express';
import Book from '../models/book';
import mongoose from 'mongoose';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Book ({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    return book.save()
    .then((result: any) => {
        return res.status(201).json({
            book: result
        })
    })
    .catch((error: any) => {
        return res.status(500).json({
            message: error.message,
            error
        })
    })
}

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
    .exec()
    .then((results: any) => {
        return res.status(200).json({
            books: results,
            count: results.length
        })
    })
    .catch((error: any) => {
        return res.status(500).json({
            message: error.message,
            error
        })
    })
};

export default { getAllBooks, createBook };
