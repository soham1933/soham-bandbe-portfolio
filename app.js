const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const Users = require('./src/Models/User');
require('./src/Server/db/connection');  // Importing the connection setup

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Add CORS configuration
app.use(cors({
  origin: 'https://soham-bandbe-portfolio.onrender.com/',  // Replace with your frontend domain
  methods: ['GET', 'POST']
}));

// Define the port
const port = process.env.PORT || 8000;

// Configure Nodemailer transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST route to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const user = new Users(req.body);
    const result = await user.save();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself for testing
      subject: 'New Contact Form Submission',
      text: `
        You have a new contact form submission:
        Name: ${req.body.firstName} ${req.body.lastName}
        Email: ${req.body.email}
        Mobile: ${req.body.mobile}
        Message: ${req.body.message}
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send({ message: 'Error sending email', error });
      }
      console.log('Email sent: ' + info.response);
      res.status(201).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// GET route to fetch all users from MongoDB
app.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Error fetching users", error: error });
  }
});

// Serve static files (if serving React frontend)
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve React frontend (if applicable)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
