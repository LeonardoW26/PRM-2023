import { Injectable } from "@nestjs/common"

@Injectable()
export class TopicService {

    topics() {
        return {
            content: 'Teste',
            createdAt: '2022-08-22'
        }

    }

}