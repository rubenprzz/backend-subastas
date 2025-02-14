import { Controller, Get, Param } from '@nestjs/common';

import { AuctionService } from './auction.service';
import { Auction } from '@prisma/client';

@Controller('auction')
export class AuctionController {

    constructor(private readonly auctionService: AuctionService){

    }

    @Get()
    async findAll(): Promise<Auction[]> {
      return this.auctionService.findAll();
    }
    @Get(':id')
    async findOneById(@Param('id') id:string):Promise<Auction | null>{
    return this.auctionService.findOneById(id)
    }

}
