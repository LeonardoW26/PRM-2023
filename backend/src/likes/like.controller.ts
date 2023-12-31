import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { TopicService } from "src/topics/topic.service";
import { AuthGuard } from "src/auth/auth.guard";
import { Topic } from "src/topics/topic.entity";
import { LikeService } from "./like.service";




@UseInterceptors(ClassSerializerInterceptor)
@Controller('likes')
export class LikeController {
    constructor(
        private readonly likeService: LikeService,
        private readonly topicService: TopicService
    ) {}

    @UseGuards(AuthGuard)
    @Get()
    async filterByTopic(@Query() query): Promise<Topic[]> {

        if (!query?.topic) {
            throw new HttpException('Tópico não informado', HttpStatus.BAD_REQUEST)
        }

        //Busco o tópico
        const found = await this.topicService.findById(query.topic);

        if (!found) {
            throw new HttpException('Tópico não encontrado', HttpStatus.BAD_REQUEST)
        }

        return this.likeService.findByTopic(found);  
    }
}