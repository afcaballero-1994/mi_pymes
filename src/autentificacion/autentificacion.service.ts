import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateEmpresaDTO } from 'src/empresa/dto/create_empresa.dto';
import { LoginEmpresaDTO } from 'src/empresa/dto/login_empresa.dto';
import { EmpresaService } from 'src/empresa/empresa.service';
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
        const empresa = await this.empresaService
    }
}
