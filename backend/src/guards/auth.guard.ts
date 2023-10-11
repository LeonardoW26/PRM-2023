import {CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserService } from 'src/services/user.service';

export class AuthGurd implements CanActivate {

    constructor(
      private readonly jwtService: JwtService,
      private readonly userService: UserService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if(!token) {
            throw new UnauthorizedException('Token inexistente');
        }

        let username = '';
        try {
            const payload = await this.jwtService.verifyAsync(token)
            console.log('Buuuuuuuuuu', payload)
        } catch {
            throw new UnauthorizedException('Token Invalido')
            
        }

        const found = await this.userService.findByUsername(username);

        if(!found) {
            throw new UnauthorizedException('Usuario não cadastrado')
        }

        return true;
    }

    extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type === 'Bearer' ? token : undefined;
    }

}