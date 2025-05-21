const express = require("express");
const path = require("path");
const submitRoute = require("./routes/Submit");

const app = express();

// Serve uploads folder statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware to parse form data (optional for file uploads with multer)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the submit route
app.use("/api", submitRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
