import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) { }

  @Post()
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.createOffer(createOfferDto);
  }

  @Get()
  findAll() {
    return this.offersService.getAllOffers();
  }

  @Get('search')
  async searchOffers(@Query('q') query: string) {
    return this.offersService.searching(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersService.getOfferById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offersService.updateOffer(id, updateOfferDto);
  }
}
