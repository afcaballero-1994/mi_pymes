import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateEmpresaDTO } from './dto/create_empresa.dto';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {
    constructor (private readonly empresaService : EmpresaService){}

    @Get()
    async getEmpresas (@Res() res)
    {
        const empresas = await this.empresaService.getEmpresas();

        return res.status(HttpStatus.OK).json(
            {empresas : empresas}
        );
    }

    @Post('/create')
    async createEmpresa (@Res() res, @Body() createEmpresaDTO : CreateEmpresaDTO)
    {
        const empresa = await this.empresaService.crearEmpresa(createEmpresaDTO);

        return res.status(HttpStatus.CREATED).json(
            {
                message: 'created',
                empresa: empresa
            }
        );
    }
}
