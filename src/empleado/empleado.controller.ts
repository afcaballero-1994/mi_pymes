import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateEmpleadoDTO } from './dto/create_empleado.dto';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {
    constructor (private readonly empleadoService : EmpleadoService){}

    @Get()
    async getEmpleados (@Res() res)
    {
        const empleados = await this.empleadoService.getEmpleados();
        return res.status(HttpStatus.OK).json(
            {empleados : empleados}
        );
    }

    @Post('/create')
    async createEmpresa (@Res() res, @Body() crearEmpleadoDTO : CreateEmpleadoDTO)
    {
        const empleado = await this.empleadoService.crearEmpleado(crearEmpleadoDTO);

        return res.status(HttpStatus.CREATED).json(
            {
                message: 'created',
                empleado: empleado
            }
        );
    }
}
