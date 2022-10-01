import { io } from "../../app";
import { prisma } from "../../prisma/index";
import { userProps } from "../../types/UserTypes";

class CreateUserService {
  async execute({
    login,
    password,
    name,
    image,
    description,
    github,
    melhoresTecnologias,
    nascimento,
    telefone,
  }: userProps) {
    const user = await prisma.user.create({
      data: {
        image,
        login,
        name,
        password,
        description,
        github,
        melhoresTecnologias,
        nascimento,
        telefone,
      },
    });
    const infoWs = {
      id: user.id,
      login: user.login,
      password: user.password,
      name: user.name,
      image: user.image,
      description: user.description,
      github: user.github,
      melhoresTecnologias: user.melhoresTecnologias,
      nascimento: user.nascimento,
      telefone: user.telefone,
    };
    io.emit("new_user", infoWs);
    return user;
  }
}

export { CreateUserService };
