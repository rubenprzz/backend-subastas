import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
 async findOneByDni(dni: string): Promise<User | null> {
  return this.prisma.user.findFirst({
    where: { dni },
  });

}
 async findOneById(id: string): Promise<User |  null>{
    return this.prisma.user.findFirst({
        where : {id}
    })
 }

}
