import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { getUsersForLoginController } from "./controllers/User/getUsersForLoginController"; 
import { CreatePostController } from "./controllers/Post/CreatePostController"; 
import { GetPostController } from "./controllers/Post/getPostController"; 
import { GetUsersForSearchController } from "./controllers/User/getUserForSearchController";
const router = Router();

router.post("/login", new CreateUserController().handle);
router.post("/thisAcountExist", new getUsersForLoginController().handle);
router.post("/createPost", new CreatePostController().handle);
router.post("/getUserForSearch", new GetUsersForSearchController().handle)
router.get("/getFeed", new GetPostController().handle);
router.get("/getProjectsWithSucess");
router.get("/getProjectsAtual");
console.log('oie')
export { router };
