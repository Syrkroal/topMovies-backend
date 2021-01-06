const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const moviesRoute = require("./routes/movies");

app.use("/movies", moviesRoute);

app.get("/", (_, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
