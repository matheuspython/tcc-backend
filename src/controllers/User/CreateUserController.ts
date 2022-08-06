import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import { userProps } from "../../types/UserTypes";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { login, password, name, image } = req.body;

    const data = { login, password, name, image } as userProps;

    const service = new CreateUserService();

    const result = await service.execute(data);

    return res.json(result);
  }
}

export { CreateUserController };
