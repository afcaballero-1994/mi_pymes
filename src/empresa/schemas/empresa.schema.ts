import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Empleado } from "src/empleado/schema/empleado.schema";


export type EmpresaDocument = Empresa & Document;

@Schema()
export class Empresa {
    @Prop(
        {
            required : true
        }
    )
    _id : number;

    @Prop(
        {
            required : true
        }
    )
    nombre_empresa : string;

    @Prop(
        {
            required : true
        }
    )
    numero_telefono_empresa : number;

    @Prop(
        {
            required : true
        }
    )
    correo_electronico_empresa : string;

    @Prop(
        {
            required : true
        }
    )
    direccion_empresa : string;

    @Prop(
        {
            required : false,
            type : mongoose.Schema.Types.ObjectId, ref : 'Empleado'
        }
    )
    empleados : Empleado;

    @Prop({
        required : false
    })
    pago_total_nomina : number;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);