const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

//Custom routes
const taskRoutes = require('./routes/hackNPlan/task');
app.use(taskRoutes);



app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});
