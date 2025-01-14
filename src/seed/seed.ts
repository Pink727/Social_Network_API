import mongoose from 'mongoose';
import { User, Thought } from './models';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/socialNetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedDatabase = async () => {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create sample users
    const users = await User.insertMany([
        { username: 'john_doe', email: 'john@example.com', friends: [] },
        { username: 'jane_doe', email: 'jane@example.com', friends: [] },
    ]);

    // Create sample thoughts
    const thoughts = await Thought.insertMany([
        { content: 'This is a thought by John', author: users[0]._id, reactions: [] },
        { content: 'This is a thought by Jane', author: users[1]._id, reactions: [] },
    ]);

    // Add friends
    users[0].friends.push(users[1]._id);
    users[1].friends.push(users[0]._id);
    await users[0].save();
    await users[1].save();

    console.log('Database seeded successfully');
    mongoose.connection.close();
};

seedDatabase().catch((error) => {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
});