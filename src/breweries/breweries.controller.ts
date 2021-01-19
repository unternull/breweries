import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';

@Controller('breweries')
export class BreweriesController {
    @Get()
    getAll(): string {
        return 'Gets all breweries';
    }

    @Get(':id')
    getOne(@Param('id') id: string): string {
        return `Gets one brewery: ${id} ${process.env.API_KEY}`;
    }
}
