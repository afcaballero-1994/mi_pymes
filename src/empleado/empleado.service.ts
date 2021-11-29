import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateEmpleadoDTO } from './dto/create_empleado.dto';
import { Empleado } from './entities/empleado.entiy';

@Injectable()
export class EmpleadoService {
    constructor (
        @InjectRepository(Empleado)
        private empleadoRepository : Repository<Empleado>
    ){}

    async crearEmpleado (createEmpleadoDTO : CreateEmpleadoDTO)
    {
        const createdEmpleado = await this.empleadoRepository.save(createEmpleadoDTO);
        return createdEmpleado;
    }

    async getEmpleados (NIT_empresa : number){
        const empleados = await this.empleadoRepository.find({
            where : {
                isHired : true,
                NIT_empresa: NIT_empresa
            }
        });
        return empleados;
    }

    async getEmpleadobyID (id : number)
    {
        const empleado = await this.empleadoRepository.findOne({
            where : {
                id
            }
        });
        return empleado;
    }

    async actualizarEmpleado (id : number, createEmpleadoDTO : CreateEmpleadoDTO)
    {
        const empleadoActualizado = await this.empleadoRepository.update(id, createEmpleadoDTO);
        return empleadoActualizado;
    }

    async despedirEmpleado (id : number)
    {
        await this.empleadoRepository.update(id, {isHired : false});
        const empleadoDespedido = await this.empleadoRepository.findOne(id);
        return empleadoDespedido;
    }
}
