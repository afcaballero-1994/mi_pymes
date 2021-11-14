import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmpleadoDTO } from './dto/create_empleado.dto';
import { Empleado, EmpleadoDocument } from './schema/empleado.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class EmpleadoService {
    constructor (@InjectModel(Empleado.name) private empleadoModel : Model<EmpleadoDocument>){}

    async crearEmpleado (createEmpleadoDTO : CreateEmpleadoDTO) : Promise<Empleado>
    {
        const createdEmpleado = new this.empleadoModel(createEmpleadoDTO);
        return createdEmpleado.save();
    }
}
