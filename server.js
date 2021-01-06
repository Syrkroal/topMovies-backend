const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const moviesRoute = require("./routes/movies");

app.use("/movies", moviesRoute);

app.get("/", (_, res) => {
    res.send("Hello");
});

app.listen(4000, () => {
    console.log("server on localhost");
});
