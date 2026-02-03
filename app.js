const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    messaage: 'Hello World! This is my Azure Container App.',
    environment: process.env.ENVIRONMENT || 'Development',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {  
    res.status(200).json({ status: 'Healthy' });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

