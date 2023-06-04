import { NextFunction, Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";

class UsersController {
    private usersService: UsersServices;
    constructor(){
     this.usersService = new UsersServices();  
    }
    index(){

    }
    show(){

    }
    async store(request:Request, response:Response, next:NextFunction){
    const {name, email, password} = request.body;
    try{
    const result = await this.usersService.create({name, email, password});
    
    return response.status(201).json(result);
    }catch(error){
        next(error);
    }
    }
    
 
    auth(){

    }
    update(request:Request, response:Response, next:NextFunction){

    }
}

export {UsersController}