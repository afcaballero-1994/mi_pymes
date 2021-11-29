import { Body, Controller, Post } from '@nestjs/common';
import { LoginEmpresaDTO } from 'src/empresa/dto/login_empresa.dto';
import { AutentificacionService } from './autentificacion.service';
import { LoginStatus } from './interfaces/login_status.interface';

@Controller('autentificacion')
export class AutentificacionController {

    constructor(
        private readonly autentificacionService : AutentificacionService
    ){}
    @Post('login')
    public async login(@Body() loginEmpresaDto : LoginEmpresaDTO) : Promise<LoginStatus>
    {
        const result : LoginStatus = await this.autentificacionService.login(loginEmpresaDto);

        return result;
    }
    
}
