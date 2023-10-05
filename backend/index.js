require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const multer = require("multer");
const path = require("path");
const dogblog = require("./Models/Dogblog");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Multer Configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Routes

// Get All Dog Adoption Entries
app.get("/api/dogadoptions", async (req, res) => {
  try {
    const data = await dogblog.find({});
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching dog adoptions." });
  }
});

// Get Single Dog Adoption Entry by ID
app.get("/api/dogadoptions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await dogblog.findById(id);

    if (!data) {
      return res
        .status(404)
        .json({ error: "Dog adoption entry not found" });
    }

    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching dog adoption entry." });
  }
});

// Create A Dog Adoption Entry
app.post("/api/dogadoptions", upload.single("picture"), async (req, res) => {
  try {
    const {
      dogType,
      cost,
      description,
      adoptionReason,
      age,
      ownerName,
      contactEmail,
    } = req.body;

    const newDogAdoption = new dogblog({
      dogType,
      picture: req.file.filename,
      cost,
      description,
      adoptionReason,
      age,
      ownerName,
      contactEmail,
    });

    await newDogAdoption.save();

    res.status(201).json(newDogAdoption);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating a dog adoption entry." });
  }
});

// Update A Dog Adoption Entry by ID
app.put("/api/dogadoptions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const existingDogAdoption = await dogblog.findById(id);

    if (!existingDogAdoption) {
      return res.status(404).json({ error: "Dog adoption entry not found" });
    }

    existingDogAdoption.set(updateData);
    await existingDogAdoption.save();

    res.json(existingDogAdoption);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating a dog adoption entry." });
  }
});

// Delete A Dog Adoption Entry by ID
app.delete("/api/dogadoptions/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDogAdoption = await dogblog.findByIdAndDelete(id);

    if (!deletedDogAdoption) {
      return res.status(404).json({ error: "Dog adoption entry not found" });
    }

    res.json(`Deleted dog adoption entry: ${deletedDogAdoption._id}`);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting a dog adoption entry." });
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
