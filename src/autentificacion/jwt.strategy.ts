import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AutentificacionService } from "./autentificacion.service";
import { jwtPayload } from "./interfaces/jwt_payload.interface";

import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy)
{
    constructor (private readonly autentificacionService : AutentificacionService)
    {
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY
        });
    }

    async validate (payload : jwtPayload) : Promise<any>
    {
        
    }
}