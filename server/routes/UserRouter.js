import UserController from "../controllers/UserController";
const Router = express.Router();
import {
  getToken,
  createToken,
  verifyToken,
} from "../middleware/JwtHandler.js";

Router.get("/:user_id", UserController.GetProfile);
Router.post("/register", UserController.CreateUser);
Router.post("/login", UserController.SignInUser, createToken);
Router.get(
  "/refresh/session",
  getToken,
  verifyToken,
  UserController.RefreshSession
);

 export default Router;
