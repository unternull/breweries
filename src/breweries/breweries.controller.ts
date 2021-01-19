import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { BreweriesService } from './breweries.service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('breweries')
export class BreweriesController {
    constructor(private breweries: BreweriesService) {}

    @Get()
    getAll(): Observable<AxiosResponse<any>> {
        return this.breweries.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): string {
        return `Gets one brewery: ${id}`;
    }
}
