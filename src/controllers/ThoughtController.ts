import { Request, Response } from 'express';
import { Thought } from '../models/models';
import { reactToThought } from '../services/services';

class ThoughtController {
    static async createThought(req: Request, res: Response) {
        try {
            const thought = new Thought(req.body);
            await thought.save();
            res.status(201).json(thought);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getThought(req: Request, res: Response) {
        try {
            const thought = await Thought.findById(req.params.id).populate('author');
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }
            res.json(thought);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateThought(req: Request, res: Response) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }
            res.json(thought);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deleteThought(req: Request, res: Response) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }
            res.json({ message: 'Thought deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export { ThoughtController };