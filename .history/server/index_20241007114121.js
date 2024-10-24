const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const HmsModel = require('./models/HMS');
const ComplaintModel = require('./models/Complaint'); 
const bodyParser = require('body-parser');
const Allocation = require('./models/Allocation');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/HMS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    HmsModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Incorrect Password");
                }
            } else {
                res.json("No record found");
            }
        })
        .catch(err => {
            console.error("Login error:", err);
            res.status(500).json("Server error");
        });
});

// Registration endpoint
app.post('/register', (req, res) => {
    HmsModel.create(req.body)
        .then(student => res.json(student))
        .catch(err => res.json(err));
});

// Complaints endpoint
app.post('/complaint', (req, res) => {
    const { student, hostel, title, description, type } = req.body;
    
    // Create a new complaint instance
    const newComplaint = new ComplaintModel({
        // student,
        // hostel,
        title,
        description,
        type,
    });

    // Save the complaint to the database
    newComplaint.save()
        .then(complaint => res.status(201).json(complaint)) // Respond with the created complaint
        .catch(err => {
            console.error("Complaint registration error:", err);
            res.status(500).json({ error: "Failed to register complaint" });
        });
});

app.post('/allocation' , (req,res)=>{
    Allocation.create(req.body)
    .then(Allocation => res.json(Allocation))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
