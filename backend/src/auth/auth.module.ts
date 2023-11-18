import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/users/user.module";
import { User } from "src/users/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([User]), UserModule],
    providers: [AuthService],
    controllers: [AuthController]

})
export class AuthModule {}