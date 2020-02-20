const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome() {
    console.log("Hi from home!!");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);