import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/entities/topic.entity";
import { Repository } from "typeorm";

@Injectable()
export class TopicService {

    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>
    ) {}

    findALL(): Promise<Topic[]> {
        return this.repository.find();
    }

}