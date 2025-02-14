import { Controller, Get } from '@nestjs/common';

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
}
