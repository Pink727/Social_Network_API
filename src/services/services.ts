import { User } from '../models/models';
import { Thought } from '../models/models';

export const addFriend = async (userId: string, friendId: string) => {
    const user = await User.findById(userId);
    if (user && !user.friends.includes(friendId)) {
        user.friends.push(friendId);
        await user.save();
    }
};

export const removeFriend = async (userId: string, friendId: string) => {
    const user = await User.findById(userId);
    if (user) {
        user.friends = user.friends.filter(friend => friend !== friendId);
        await user.save();
    }
};

export const reactToThought = async (thoughtId: string, reaction: string) => {
    const thought = await Thought.findById(thoughtId);
    if (thought) {
        thought.reactions.push(reaction);
        await thought.save();
    }
};