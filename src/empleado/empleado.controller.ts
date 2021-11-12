import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
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
    @Get('/:id')
    async getEmpleadobyID (@Res() res, @Param("id") id : number)
    {
        const empleado = await this.empleadoService.getEmpleadobyID(id);
        if (empleado != undefined)
        {
            return res.status(HttpStatus.FOUND).json(
                {empleado : empleado}
            );
        } else{
            return res.status(HttpStatus.NOT_FOUND).json(
                {message : "Empleado no encontrado"}
            )
        }
    }

    @Post('/create/:NIT')
    async createEmpleado (@Res() res, @Body() crearEmpleadoDTO : CreateEmpleadoDTO, @Param("NIT") NIT : number)
    {
        const empleado = await this.empleadoService.crearEmpleado(crearEmpleadoDTO, NIT);

        return res.status(HttpStatus.CREATED).json(
            {
                message: 'created',
                empleado: empleado
            }
        );
    }

    @Put('/actualizar/:id')
    async actualizarEmpleado (@Res() res, @Body() actualizarEmpleadoDTO : CreateEmpleadoDTO, @Param("id") id : number)
    {
        await this.empleadoService.actualizarEmpleado(id, actualizarEmpleadoDTO);
        const empleadoActualizado = await this.empleadoService.getEmpleadobyID(id);
        return res.status(HttpStatus.OK).json(
            {
                message : "Actualizado",
                empleadoActualizado : empleadoActualizado
            }
        );

    }
    @Put('/despedir/:id')
    async despedirEmpleado (@Res() res, @Param("id") id : number)
    {
        await this.empleadoService.despedirEmpleado(id);
        const empleadoActualizado = await this.empleadoService.getEmpleadobyID(id);
        return res.status(HttpStatus.OK).json(
            {
                message : "Empleado despedido",
                empleadoActualizado : empleadoActualizado
            }
        );

    }
}
