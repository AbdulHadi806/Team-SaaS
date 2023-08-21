const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const connection = require("./database/connection");
const Routes = require("./routes/indexRoutes");

connection();
app.use(cors());
app.use(express.json());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api",Routes)

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});
