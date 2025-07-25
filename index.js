const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "creating server using docker image" });
});

app.listen(9000, () => console.log("Server running on port 9000"));
