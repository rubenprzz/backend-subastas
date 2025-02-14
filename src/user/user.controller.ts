import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }
    @Get()
    async findAll(): Promise<User[]>{
        return this.userService.findAll()
    }
    @Get('dni/:dni')
    async findOneUserByDni(@Param('dni') dni:string): Promise<User | null> {
        return this.userService.findOneByDni(dni)
    }
    @Get('id/:id')
    async findOneUserById(@Param('id') id:string): Promise<User | null>{
        return this.userService.findOneById(id)
    }
}
