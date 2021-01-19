import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreweriesController } from './breweries/breweries.controller';

@Module({
  imports: [],
  controllers: [AppController, BreweriesController],
  providers: [AppService],
})
export class AppModule {}
