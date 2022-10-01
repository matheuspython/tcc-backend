import { Request, Response } from "express";
import { CreatePostService } from "../../services/Post/CreatePostService"; 
import { PostProps } from "../../types/PostProps"

class CreatePostController {
    async handle(req: Request, res: Response){
        const { tecnologias, host, descricao, imgHost } = req.body

        const data = { tecnologias, host, descricao, imgHost } as PostProps;
        const service = new CreatePostService()

        const result = await service.execute(data)

        return res.json(result)
    }
}

export {CreatePostController}