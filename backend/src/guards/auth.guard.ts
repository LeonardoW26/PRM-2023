import {CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

export class AuthGurd implements CanActivate {

    constructor(
      private readonly jwtService: JwtService  
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if(!token) {
            throw new UnauthorizedException('Token inexistente');
        }

        try {
            const payload = await this.jwtService.verifyAsync(token)
        } catch {
            throw new UnauthorizedException('Token Invalido')
        }

        return true;
    }

    extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type === 'Bearer' ? token : undefined;
    }

}