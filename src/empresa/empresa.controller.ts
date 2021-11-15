import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateEmpresaDTO } from './dto/create_empresa.dto';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {
    constructor (private readonly empresaService : EmpresaService){}

    @Get()
    async getEmpresas (@Res() res)
    {
        const empresas = await this.empresaService.getEmpresas();

        if (empresas != undefined)
        {
            return res.status(HttpStatus.OK).json(
                {empresas : empresas}
            );
        } else{
            return res.status(HttpStatus.NOT_FOUND);
        }

    }

    @Get('/:id')
    async getEmpresa (@Param("id") id : number)
    {
        const empresa = await this.empresaService.getEmpresa({
            NIT : id
        })

        return empresa;
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

    @Put('/actualizar/:id')
    async actualizarEmpresa (@Res() res, @Body() createEmpresaDTO : CreateEmpresaDTO, @Param("id") id : number)
    {
        const empresa = await this.empresaService.actualizarEmpresa(id, createEmpresaDTO);

        return res.status(HttpStatus.OK).json(
            {
                message: "Empresa actualizada",
                empresa : empresa
            }
        )
    }
}
