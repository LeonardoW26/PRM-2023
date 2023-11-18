import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, UseInterceptors } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { UserService } from "src/users/user.service";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('profile')
export class ProfileController {
    
    constructor(
        private service: UserService
    ){}
    
    @Get(':username')
    getProfile(@Param('username') username: string): Promise<User> {

        const found = this.service.findByUsername(username);

        if(!found){
            throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND)
        }

        return found;
    }
}