import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.Mongo_URI ?? 'mongodb://localhost:27017/offers'),
    OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
