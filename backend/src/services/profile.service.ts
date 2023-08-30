import { Injectable } from "@nestjs/common"
import { profile } from "console"

@Injectable()
export class ProfileService {

    profile() {
        return {
            fullname: 'Leonardo Welzel',
            username: 'SpankaShota',
            description: 'DjAzeitona praticante de azeitonismo, Nome do Pai: Azeitonasso cordeiro pinto',
            createdAt: '2022-08-22'
        }

    }

}