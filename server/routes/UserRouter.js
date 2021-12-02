import {GetProfile, CreateUser, SignInUser, RefreshSession } from "../controllers/UserController.js";
import express from "express";
const Router = express.Router();
import {
  getToken,
  createToken,
  verifyToken,
} from "../middleware/JwtHandler.js";

Router.get("/:user_id", GetProfile);
Router.post("/register", CreateUser);
Router.post("/login", SignInUser, createToken);
Router.get(
  "/refresh/session",
  getToken,
  verifyToken,
  RefreshSession
);

 export default Router;
