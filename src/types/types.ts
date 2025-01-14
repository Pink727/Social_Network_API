export interface User {
    id: string;
    username: string;
    email: string;
    friends: string[];
}

export interface Thought {
    id: string;
    content: string;
    author: string;
    reactions: Reaction[];
}

export interface Reaction {
    id: string;
    content: string;
    author: string;
}

export interface IReaction {
    content: string;
    author: string;
}