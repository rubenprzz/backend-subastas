import { Injectable } from '@nestjs/common';
import { Bid } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BidService {
    constructor(private readonly prismaService: PrismaService) {
        
    }
    async findAll(): Promise<Bid[]>{
        return this.prismaService.bid.findMany()
    } 
    async findOneById(id:string): Promise<Bid | null>{
        return this.prismaService.bid.findFirst({
            where: {id}
        })
    }
}
