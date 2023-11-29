import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TopicModule } from "src/topics/topic.module";
import { Topic } from "src/topics/topic.entity";
import { UserModule } from "src/users/user.module";
import { LikeController } from "./like.controller";
import { LikeService } from "./like.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ Topic ]),
        TopicModule,
        UserModule,
        LikeModule
    ],
    providers: [ LikeService ],
    controllers: [ LikeController ]
})
export class LikeModule{}