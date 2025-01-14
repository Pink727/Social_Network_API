import { Router } from 'express';
import UserController from '../controllers/index';
import ThoughtController from '../controllers/index';

const router = Router();

export const setRoutes = () => {
    // User routes
    router.post('/users', UserController.createUser);
    router.get('/users/:id', UserController.getUser);
    router.put('/users/:id', UserController.updateUser);
    router.delete('/users/:id', UserController.deleteUser);

    // Thought routes
    router.post('/thoughts', ThoughtController.createThought);
    router.get('/thoughts/:id', ThoughtController.getThought);
    router.put('/thoughts/:id', ThoughtController.updateThought);
    router.delete('/thoughts/:id', ThoughtController.deleteThought);

    return router;
};