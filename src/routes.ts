import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { getUsersForLoginController } from "./controllers/User/getUsersForLoginController";
const router = Router();

router.post("/login", new CreateUserController().handle);
router.post("/thisAcountExist", new getUsersForLoginController().handle);
router.post("/createPost");
router.get("/getFeed");
router.get("/getProjectsWithSucess");
router.get("/getProjectsAtual");

export { router };
