import { Controller, Get, Param } from '@nestjs/common';
import { BidService } from './bid.service';
import { Bid } from '@prisma/client';

@Controller('bid')
export class BidController {

    constructor(private readonly bidService: BidService){

    }
    @Get()
    async findAllBid(): Promise<Bid[]>{
        return this.bidService.findAll()
    }
    @Get(':id')
    async findOneBidById(@Param('id') id:string): Promise<Bid | null>{
        return this.bidService.findOneById(id)
    }
}
