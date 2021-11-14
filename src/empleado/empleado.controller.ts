import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateEmpleadoDTO } from './dto/create_empleado.dto';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {

    constructor (private readonly empleadoService : EmpleadoService) {}

    @Post('/create')
    async crerEmpleado (@Res() res, @Body() crearEmpleado : CreateEmpleadoDTO)
    {
        const empleado = await this.empleadoService.crearEmpleado(crearEmpleado);

        return res.status(HttpStatus.OK).json(
            {
                message : "Empleado creado",
                empleado : empleado
            }
        );
    }
}
