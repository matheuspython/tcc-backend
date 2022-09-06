import { prisma } from "../../prisma/index";

export class GetPostService {
    async execute(){
        const PostList = await prisma.postList.findMany()
        return PostList
    }
}