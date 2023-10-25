import { Topic } from './../entities/topic.entity';
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGurd } from 'src/guards/auth.guard';
import { TopicService } from "src/services/topic.service";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('Topics')
export class TopicController {

    constructor(private readonly service: TopicService){}

    @UseGuards(AuthGurd)
    @Get()
    findAll(): Promise<Topic[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        const found = this.service.findById(id);

        if(!found){
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }


    @Post()
    create(@Body() Topic: Topic): Promise<Topic> {
        return this.service.create(Topic)
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void>  {
        const found = this.service.findById(id);

        if(!found){
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND)
        }

        return this.service.delete(id);

    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() Topic: Topic): Promise<Topic> {
        const found = this.service.findById(id);

        if(!found){
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND)
        }

        return this.service.update(id,Topic);
    }



}