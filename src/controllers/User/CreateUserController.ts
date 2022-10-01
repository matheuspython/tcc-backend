import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import { userProps } from "../../types/UserTypes";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      login,
      password,
      name,
      image,
      description,
      github,
      melhoresTecnologias,
      nascimento,
      telefone,
      endereco,
      email
    }: userProps = req.body;

    const service = new CreateUserService();

    const result = await service.execute({
      login,
      password,
      name,
      image,
      description,
      github,
      melhoresTecnologias,
      nascimento,
      telefone,
      endereco,
      email
    });

    return res.json(result);
  }
}

export { CreateUserController };
