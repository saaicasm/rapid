require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const partsRouter = require('./routes/parts');



app.use((req, res, next) => {   
    console.log("Middleware");
    console.log(req.path, req.method);
    next();
});

app.use(express.json());
app.use('/api/parts', partsRouter);

mongoose.connect(process.env.URL).then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
}).catch((err) => {
    console.log("Error connecting to the database", err);
});



