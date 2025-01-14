import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { ThoughtController } from '../controllers/ThoughtController';
import { addFriend, removeFriend, reactToThought } from '../services/services';

const router = Router();

export const setRoutes = () => {
    // User routes
    router.post('/users', UserController.createUser);
    router.get('/users/:id', UserController.getUser);
    router.put('/users/:id', UserController.updateUser);
    router.delete('/users/:id', UserController.deleteUser);
    router.get('/users', UserController.getAllUsers); // Add this line

    // Thought routes
    router.post('/thoughts', ThoughtController.createThought);
    router.get('/thoughts/:id', ThoughtController.getThought);
    router.put('/thoughts/:id', ThoughtController.updateThought);
    router.delete('/thoughts/:id', ThoughtController.deleteThought);

    // Friend routes
    router.post('/users/:id/friends/:friendId', async (req, res) => {
        try {
            await addFriend(req.params.id, req.params.friendId);
            res.status(200).json({ message: 'Friend added' });
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    });
    router.delete('/users/:id/friends/:friendId', async (req, res) => {
        try {
            await removeFriend(req.params.id, req.params.friendId);
            res.status(200).json({ message: 'Friend removed' });
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    });

    // Reaction routes
    router.post('/thoughts/:id/reactions', async (req, res) => {
        try {
            await reactToThought(req.params.id, req.body.reaction, req.body.authorId);
            res.status(200).json({ message: 'Reaction added' });
        } catch (error) {
            res.status(400).json({ error: (error as any).message });
        }
    });

    return router;
};