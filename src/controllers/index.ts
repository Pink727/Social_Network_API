import { Request, Response } from 'express';

class UserController {
    createUser(req: Request, res: Response) {
        // Logic to create a user
    }

    getUser(req: Request, res: Response) {
        // Logic to get a user
    }

    updateUser(req: Request, res: Response) {
        // Logic to update a user
    }

    deleteUser(req: Request, res: Response) {
        // Logic to delete a user
    }
}

class ThoughtController {
    createThought(req: Request, res: Response) {
        // Logic to create a thought
    }

    getThought(req: Request, res: Response) {
        // Logic to get a thought
    }

    updateThought(req: Request, res: Response) {
        // Logic to update a thought
    }

    deleteThought(req: Request, res: Response) {
        // Logic to delete a thought
    }
}

export { UserController, ThoughtController };