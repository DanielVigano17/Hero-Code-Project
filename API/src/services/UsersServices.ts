import { hash } from "bcrypt";
import { ICreate } from "../Interfaces/UsersInterface";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersServices {
  private usersRepository: UsersRepository;
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  
  async create({name, email, password}:ICreate) {
      const findUser = await this.usersRepository.findByEmail(email);
      if(findUser){
        throw new Error("User already exists");
      }

      const hashPassword = await hash(password, 10)
      const create = await this.usersRepository.create(
        {
          name,
          email,
          password: hashPassword
        });
        return create;
    }
}

export {UsersServices}