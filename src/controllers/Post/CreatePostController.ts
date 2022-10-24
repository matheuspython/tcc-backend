import { Request, Response } from "express";
import { CreatePostService } from "../../services/Post/CreatePostService";
import { PostProps } from "../../types/PostProps";

class CreatePostController {
  async handle(req: Request, res: Response) {
    const {
      descricao,
      host,
      imgHost,
      tecnologias,
      FimProjeto,
      InicioProjeto,
      titulo,
    } = req.body;

    const data = {
      descricao,
      host,
      imgHost,
      tecnologias,
      FimProjeto,
      InicioProjeto,
      titulo,
    } as PostProps;
    const service = new CreatePostService();

    const result = await service.execute(data);

    return res.json(result);
  }
}

export { CreatePostController };
