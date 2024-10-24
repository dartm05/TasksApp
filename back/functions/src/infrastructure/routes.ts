import express from "express";
import * as functions from "firebase-functions/v1";
import taskApp from "./routes/task.routes";
import userApp from "./routes/user.routes";

const appRoutes = express();
var cors = require("cors");
appRoutes.use(cors());
appRoutes.use("/", taskApp);
appRoutes.use("/users", userApp);

export const api = functions.https.onRequest(appRoutes);
