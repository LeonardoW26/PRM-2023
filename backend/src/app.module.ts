import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './controllers/profile.controller';
import { TopicController } from './controllers/topic.controller';
import { ProfileService } from './services/profile.service';
import { TopicService } from './services/topic.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Welzel26@',
      database: 'prm_2023'
    })
  ],
  controllers: [AppController, ProfileController, TopicController],
  providers: [AppService, ProfileService, TopicService],
})
export class AppModule {}
