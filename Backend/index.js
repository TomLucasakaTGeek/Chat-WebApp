const express = require('express')
const cors = require('cors');
//const { connectDB } = require('./.config/db');
//const { userModel } = require('./models/data');
const app = express();
const { Socket, Server } = require('socket.io');
const { createServer } = require('http');
const server = createServer(app);
app.use(cors())
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

require("dotenv").config();
app.use(express.json())
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

app.get('/', (req, res)=>{
    res.send("Welcome to Express App");
})

io.on('connect', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle custom events
    socket.on('message', (message) => {
        console.log('Received message:', message);
        // Broadcast the message to all connected clients
        io.emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

app.listen(process.env.PORT, async(req, res)=>{
    // try {
    //     await connectDB
    //     console.log("Connected with DB")
    // } catch (error) {
    //     console.log(error)
    // }
    console.log(`Server is running on port ${process.env.PORT}`)
}) 

