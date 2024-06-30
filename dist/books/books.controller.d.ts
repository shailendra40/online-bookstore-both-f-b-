import { BooksService } from './books.service';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<import("./schemas/book.schema").Book[]>;
    findOne(id: string): Promise<import("./schemas/book.schema").Book>;
    create(createBookDto: any): Promise<import("./schemas/book.schema").Book>;
}
