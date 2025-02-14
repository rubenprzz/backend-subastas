import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionController } from './auction/auction.controller';
import { UserController } from './user/user.controller';
import { BidController } from './bid/bid.controller';
import { AuctionService } from './auction/auction.service';
import { UserService } from './user/user.service';
import { BidService } from './bid/bid.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, AuctionController, UserController, BidController],
  providers: [AppService, AuctionService, UserService, BidService, PrismaService],
})
export class AppModule {}
