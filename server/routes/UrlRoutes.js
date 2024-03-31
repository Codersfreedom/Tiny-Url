import express from "express"
import { createUrl, getUrl } from "../controllers/UrlControllers.js";

const Router = express.Router();

Router.post("/createUrl",createUrl)
Router.get("/:slug",getUrl);

export default Router;