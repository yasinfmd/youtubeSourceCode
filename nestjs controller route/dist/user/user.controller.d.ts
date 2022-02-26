import { Request, Response } from 'express';
export declare class UserController {
    getUser(req: Request, res: Response): string;
    findUserQuery(query: any, q: any, lname: any): string;
    findUserById(id: string): string;
    wildCard(): string;
    updateUser(id: string, req: Request): string;
    deleteUser(data: {
        id: string;
    }): string;
    createUser(data: {
        id: string | number;
        name: string;
    }): string;
}
