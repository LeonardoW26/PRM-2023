import { Injectable } from "@nestjs/common"

@Injectable()
export class ProfileService {
    profile() {
        return {
            fullname: 'Leonardo Welzel',
            username: 'Mandelão',
            description: 'Locuragem.org',
            createAt: '2022-08-13'
        } 
    }
}