import { Injectable } from '@nestjs/common';
import { Auction } from '@prisma/client';

@Injectable()
export class AuctionService {
    private readonly auctions: Auction[] = []

    findAll(): Auction[]{
        return this.auctions
    }

}
