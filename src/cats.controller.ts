import { Controller, Get, Post, Param, Body, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

@Controller('cats')
export class CatsController {
  
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Post()
  createNothing(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }
  
  @Get()
  findAll(@Res({ passthrough: true}) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }

}