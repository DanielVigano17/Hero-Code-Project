import { ICreate } from "../Interfaces/UsersInterface";
import { prisma } from "../database/prisma";


 
 class UsersRepository{
    async create({name,email,password}:ICreate){
      const result = await prisma.user.create({
            data: {
                name,
                email,
                password,
                
            }
        })
        return result;
    }   
    async findByEmail(email:string){
        const result = await prisma.user.findUnique({
            where:{
            email
            }
        })
        return result;
    }

  }

  export {UsersRepository}