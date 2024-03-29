import { io } from "../../app";
import { prisma } from "../../prisma";
import { PostProps } from "../../types/PostProps";

  
class CreatePostService {
    async execute({ descricao, host, imgHost, tecnologias, titulo,InicioProjeto,FimProjeto }: PostProps){
        const post = await prisma.postList.create({
            data: { descricao, host, imgHost, tecnologias, titulo,InicioProjeto,FimProjeto },
        })
        const infoWs = {
            id: post.id,
            login: post.descricao,
            password: post.host,
            name: post.imgHost,
            image: post.tecnologias,
            FimProjeto: post.FimProjeto,
            InicioProjeto: post.InicioProjeto,
            titulo: post.titulo,
          };
          io.emit("new_post", infoWs);
          return post;
    }
}

export { CreatePostService }