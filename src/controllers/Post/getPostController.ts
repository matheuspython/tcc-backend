import { Request, Response } from "express";
import { GetPostService } from "../../services/Post/getPostService";  

export class GetPostController {
    async handle(req:Request, res:Response){
        const service = new GetPostService()
        const result = await service.execute()

        return res.json({ result })
    }
}