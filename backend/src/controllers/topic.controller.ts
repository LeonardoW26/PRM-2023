import { Controller, Get } from "@nestjs/common";
import { TopicService } from "src/services/topics.service";

@Controller('profile')
export class TopicController {

    constructor(private service: TopicService){}

    @Get()
    getTopics() {
        return this.service.topics();
    }
}