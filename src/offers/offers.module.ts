import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Offers, OfferSchema } from './schema/offers.schema';

@Module({
  imports: [
   MongooseModule.forFeature([{ name: Offers.name, schema: OfferSchema }]),
  ],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
