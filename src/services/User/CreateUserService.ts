import { io } from "../../app";
import { prisma } from "../../prisma/index";
import { userProps } from "../../types/UserTypes";

class CreateUserService {
  async execute({ login, password, name, image }: userProps) {
    const user = await prisma.user.create({
      data: { image, login, name, password  },
    });
    const infoWs = {
      id: user.id,
      login: user.login,
      password: user.password,
      name: user.name,
      image: user.image,
    };
    io.emit("new_user", infoWs);
    return user;
  }
}

export { CreateUserService };
