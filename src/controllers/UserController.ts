// Import necessary modules and models
import { Request, Response } from 'express';
import { User } from '../models/models';
import { addFriend, removeFriend } from '../services/services';

// UserController class to handle user-related operations
class UserController {
    // Method to create a new user
    static async createUser(req: Request, res: Response) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    // Method to get a user by ID
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

    // Method to update a user by ID
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

    // Method to delete a user by ID
    static async deleteUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    // Method to add a friend to a user's friend list
    static async addFriend(req: Request, res: Response) {
        try {
            const user = await addFriend(req.params.userId, req.params.friendId);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }

    // Method to remove a friend from a user's friend list
    static async removeFriend(req: Request, res: Response) {
        try {
            const user = await removeFriend(req.params.userId, req.params.friendId);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    }
}

// Export the UserController class
export default UserController;