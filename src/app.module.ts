import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreweriesController } from './breweries/breweries.controller';
import { BreweriesService } from './breweries/breweries.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, BreweriesController],
  providers: [AppService, BreweriesService],
})
export class AppModule {}
