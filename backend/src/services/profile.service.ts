import { Injectable } from "@nestjs/common"

@Injectable()
export class ProfileService {
    profile() {
        return {
            fullname: 'Daniel dos Santos Scabeni',
            username: 'scabecini',
            description: 'Lembrar de savar o projeto e remover a senha do banco antes de fazer commit',
            createAt: '2022-08-13'
        } 
    }
}