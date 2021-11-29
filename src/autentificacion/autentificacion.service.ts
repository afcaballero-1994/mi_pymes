import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateEmpresaDTO } from 'src/empresa/dto/create_empresa.dto';
import { LoginEmpresaDTO } from 'src/empresa/dto/login_empresa.dto';
import { EmpresaService } from 'src/empresa/empresa.service';
import { jwtPayload } from './interfaces/jwt_payload.interface';
import { LoginStatus } from './interfaces/login_status.interface';
import { RegistrationStatus } from './interfaces/registration_status.interface';

@Injectable()
export class AutentificacionService {
    constructor(
        private readonly empresaService : EmpresaService,
        private readonly jwtService : JwtService
    ){}

    async registrar (crearEmpresaDTO : CreateEmpresaDTO)
    {
        let status : RegistrationStatus = {
            success : true,
            message : 'Empresa registrada'
        };

        try{
            await this.empresaService.crearEmpresa(crearEmpresaDTO);
        } catch (err){
            status = {
                success : false,
                message : err
            };
        }
        
        return status;
    }

    async login (loginEmpresaDTO : LoginEmpresaDTO)
    {
        const empresa = await this.empresaService.getEmpresaByCredentials(loginEmpresaDTO);

        const expiresIn = process.env.EXPIRES_IN;
        const accessToken = this.jwtService.sign(empresa);

        let token : LoginStatus = {
            correo_electronico_empresa : empresa.correo_electronico_empresa,
            NIT_empresa : empresa.NIT,
            expiresIn,
            accessToken
        };

        return token;
    }

    async validarEmpresa (payload : jwtPayload)
    {
        const empresa = await this.empresaService.findByPayload(payload);

        if (!empresa)
        {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }

        return empresa;
    }
}
