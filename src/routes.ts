import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { getUsersForLoginController } from "./controllers/User/getUsersForLoginController";
import { CreatePostController } from "./controllers/User/Post/CreatePostController";
import { GetPostController } from "./controllers/User/Post/getPostController";
const router = Router();

router.post("/login", new CreateUserController().handle);
router.post("/thisAcountExist", new getUsersForLoginController().handle);
router.post("/createPost", new CreatePostController().handle);
router.get("/getFeed", new GetPostController().handle);
router.get("/getProjectsWithSucess");
router.get("/getProjectsAtual");

export { router };
