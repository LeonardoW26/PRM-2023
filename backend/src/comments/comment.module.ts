import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { Comment } from "./comment.entity";
import { TopicModule } from "src/topics/topic.module";
import { User } from "src/users/user.entity";
import { Topic } from "src/topics/topic.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Comment]), TopicModule, Topic, User],
    providers: [CommentService],
    controllers: [CommentController]

})
export class CommentModule{}