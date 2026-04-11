const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname, '../files/Aahan_Bansal_Resume.pdf');
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found.' });
  res.download(filePath, 'Aahan_Bansal_Resume.pdf');
});

router.get('/docx', (req, res) => {
  const filePath = path.join(__dirname, '../files/Aahan_Bansal_Resume.docx');
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found.' });
  res.download(filePath, 'Aahan_Bansal_Resume.docx');
});

module.exports = router;
