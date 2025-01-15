// Import necessary modules and types from express and models
import { Request, Response } from 'express';
import { Thought, IReaction } from '../models/models';

// Define the ThoughtController class
class ThoughtController {
    // Method to create a new thought
    static async createThought(req: Request, res: Response) {
        try {
            // Create a new Thought instance with content and author from the request body
            const thought = new Thought({
                content: req.body.content,
                author: req.body.author
            });
            // Save the thought to the database
            await thought.save();
            // Respond with the created thought and a 201 status code
            res.status(201).json(thought);
        } catch (error) {
            // Handle errors and respond with a 400 status code and error message
            res.status(400).json({ error: (error as any).message });
        }
    }

    // Method to get a thought by its ID
    static async getThought(req: Request, res: Response) {
        try {
            // Find the thought by ID and populate the author field
            const thought = await Thought.findById(req.params.id).populate('author');
            // If the thought is not found, respond with a 404 status code and error message
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }
            // Respond with the found thought
            res.json(thought);
        } catch (error) {
            // Handle errors and respond with a 400 status code and error message
            res.status(400).json({ error: (error as any).message });
        }
    }

    // Method to update a thought by its ID
    static async updateThought(req: Request, res: Response) {
        try {
            // Find the thought by ID and update it with the request body, returning the new document
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            // If the thought is not found, respond with a 404 status code and error message
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }
            // Respond with the updated thought
            res.json(thought);
        } catch (error) {
            // Handle errors and respond with a 400 status code and error message
            res.status(400).json({ error: (error as any).message });
        }
    }

    // Method to add a reaction to a thought
    static async addReaction(req: Request, res: Response) {
        try {
            // Find the thought by ID
            const thought = await Thought.findById(req.params.id);
            // If the thought is not found, respond with a 404 status code and error message
            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }

            // Create a new reaction with content, author, and createdAt from the request body
            const reaction: IReaction = {
                content: req.body.reaction,
                author: req.body.authorId,
                createdAt: new Date()
            } as IReaction;

            // Add the reaction to the thought's reactions array
            thought.reactions.push(reaction);
            // Save the updated thought to the database
            await thought.save();

            // Find the updated thought by ID and populate the author and reactions' author fields
            const updatedThought = await Thought.findById(req.params.id).populate('author reactions.author');
            // Respond with the updated thought and a 201 status code
            res.status(201).json(updatedThought);
        } catch (error) {
            // Handle errors and respond with a 400 status code and error message
            res.status(400).json({ error: (error as any).message });
        }
    }
}

// Export the ThoughtController class as the default export
export default ThoughtController;