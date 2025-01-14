// Importing necessary modules from mongoose
import mongoose, { Document, Schema } from 'mongoose';

// Interface representing a User document in MongoDB
export interface IUser extends Document {
    username: string;
    email: string;
    friends: string[];
}

// Schema definition for User collection
const UserSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
});

// Creating a Mongoose model for User
export const User = mongoose.model<IUser>('User', UserSchema);

// Interface representing a Thought document in MongoDB
export interface IThought extends Document {
    content: string;
    author: string;
    reactions: string[];
}

// Schema definition for Thought collection
const ThoughtSchema: Schema<IThought> = new Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    reactions: [{
        type: String,
    }],
});

// Creating a Mongoose model for Thought
export const Thought = mongoose.model<IThought>('Thought', ThoughtSchema);