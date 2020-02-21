// const express = require('express');

import express from "express";
//import morgan from "morgan";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

/*const handleHome = (req, res) => res.send("hello from my ass!!");


const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);*/
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;