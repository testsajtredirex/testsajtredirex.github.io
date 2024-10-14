const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const app = express();

// Set the directory where uploaded images will be saved
const uploadDirectory = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with unique name
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Set file size limit to 2MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only .jpeg, .jpg, and .png files are allowed!'));
  }
});

// Upload and resize the image
app.post('/upload', upload.single('businessImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const resizedImagePath = path.join(uploadDirectory, `resized_${req.file.filename}`);

    // Resize the image using sharp (optional step)
    await sharp(req.file.path)
      .resize({ width: 500, height: 500 }) // Example: resize to 500x500
      .toFile(resizedImagePath);

    res.status(200).send({
      message: 'File uploaded and resized successfully!',
      file: `/uploads/${req.file.filename}`,
      resizedFile: `/uploads/resized_${req.file.filename}`
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading file.');
  }
});

// Make the uploads folder publicly accessible
app.use('/uploads', express.static(uploadDirectory));

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
