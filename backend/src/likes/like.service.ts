import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/topics/topic.entity";
import { Repository } from "typeorm";

@Injectable()
export class LikeService {
    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>,
    ) {}
    findByTopic(like:Topic): Promise<Topic[]> {
        return this.repository.find({
            where: {
                like: {
                    id: like.id
                }
            }
        });
    }
    
}