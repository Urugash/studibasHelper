const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

//Custom routes
const taskRoutes = require('./routes/hackNPlan/task');
app.use(taskRoutes);



app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});
