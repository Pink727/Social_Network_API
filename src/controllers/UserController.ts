import { Request, Response } from 'express';
import { User } from '../models/models';
import { addFriend, removeFriend } from '../services/services';

class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    static async getUser(req: Request, res: Response) {
        try {
            const user = await User.findById(req.params.id).populate('friends');
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted' });
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    static async addFriend(req: Request, res: Response) {
        try {
            await addFriend(req.params.userId, req.params.friendId);
            res.json({ message: 'Friend added' });
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    static async removeFriend(req: Request, res: Response) {
        try {
            await removeFriend(req.params.userId, req.params.friendId);
            res.json({ message: 'Friend removed' });
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }
}

export { UserController };