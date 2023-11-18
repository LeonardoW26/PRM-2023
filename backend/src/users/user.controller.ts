import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseInterceptors } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {

    constructor(private readonly service: UserService){}

    @Get()
    findAll(): Promise<User[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const found = this.service.findById(id);

        if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }

    @Get(':username')
    findByUsername(@Param('username') username: string): Promise<User> {
        const found = this.service.findByUsername(username);

        if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }


    @Post()
    create(@Body() user: User): Promise<User> {
        return this.service.create(user)
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void>  {
        const found = this.service.findById(id);

        if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return this.service.delete(id);

    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<User> {
        const found = this.service.findById(id);

        if(!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return this.service.update(id,user);
    }



}