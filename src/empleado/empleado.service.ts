import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Empresa } from 'src/empresa/schemas/empresa.schema';
import { CreateEmpleadoDTO } from './dto/create_empleado.dto';
import { Empleado, EmpleadoDocument } from './schema/empleado.schema';

@Injectable()
export class EmpleadoService {
    constructor (@InjectModel(Empleado.name) private empleadoModel : Model<EmpleadoDocument>){
        empleadoModel.findOne({nombre_empresa : 'Coolechera'}).populate({path : 'empresa_empleado'});
    }

    async crearEmpleado (createEmpleadoDTO : CreateEmpleadoDTO) : Promise<Empleado>
    {
        const createdEmpleado = new this.empleadoModel(createEmpleadoDTO);
        return createdEmpleado.save();
    }

    async getEmpleados (){
        const empleado = await this.empleadoModel.find();
        return empleado;
    }
}
