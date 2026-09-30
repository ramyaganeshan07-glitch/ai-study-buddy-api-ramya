const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "AI Study Buddy API is running successfully!" });
});

const courses = [
    { id: 1, title: "Python Basics", description: "Learn Python programming from basics", level: "Beginner" },
    { id: 2, title: "Cyber Security", description: "Learn basic cyber security concepts", level: "Beginner" },
    { id: 3, title: "Web Development", description: "Learn HTML, CSS and JavaScript", level: "Beginner" }
];

app.get("/api/courses", (req, res) => {
    res.json({ success: true, courses: courses });
});

app.listen(5001, () => {
    console.log("AI Study Buddy API running on http://localhost:5001");
});
