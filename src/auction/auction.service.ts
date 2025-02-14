import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Auction } from '@prisma/client';

@Injectable()
export class AuctionService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Auction[]> {
    return this.prisma.auction.findMany(); 
  }
  async findOneById(id: string): Promise<Auction | null> {
    return this.prisma.auction.findFirst({
        where: {id}
    })
  }
}
