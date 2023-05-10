import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import User from './models/registration.user.js';

const app = express();
const PORT = 3000;
const MONGODB_URL = 'mongodb+srv://arng:slapukas1@cluster0.pdlmuwj.mongodb.net/registration_db?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());


mongoose.set('strictQuery', false);
mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((e) => console.log('Error connecting to MongoDB: ' + e));

// Routes
app.get('/users', (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((e) => console.log(e));
});

app.post('/users', (req, res) => {
    const newUserPayload = req.body;

    const user = new User(newUserPayload);

    user
        .save()
        .then((data) => {
            res.status(201).json({ message: 'User created' });
        })
        .catch((e) => console.log(e));
});

app.put('/users/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedUser);
});


app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
});



app.listen(PORT, () => console.log('Server is running on port:' + PORT));
