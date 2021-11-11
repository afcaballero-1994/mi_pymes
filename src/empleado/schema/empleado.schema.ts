import * as moongose from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Empresa } from "src/empresa/schemas/empresa.schema";

export type EmpleadoDocument = Empleado & Document;

@Schema()

export class Empleado {
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
    nombre_empleado : string;

    @Prop(
        {
            required : true
        }
    )
    apellido_empleado : string;

    @Prop(
        {
            required : true
        }
    )
    numero_cuenta_empleado : number;

    @Prop(
        {
            required : true
        }
    )
    numero_telefono_empleado : number;

    @Prop(
        {
            required : true
        }
    )
    correo_electronico_empleado : string;

    @Prop(
        {
            required : true
        }
    )
    salario_empleado : number;

    @Prop(
        {
            required : true
        }
    )
    departamento_empleado : string;

    @Prop(
        {
            required : true,
            type : moongose.Schema.Types.ObjectId, ref : 'Empresa'
        }
    )
    empresa_empleado : number;
}

export const EmpleadoSchema = SchemaFactory.createForClass(Empleado);