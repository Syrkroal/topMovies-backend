const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
    );
    next();
});

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
