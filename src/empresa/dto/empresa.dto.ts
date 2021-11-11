import { Empleado } from "src/empleado/schema/empleado.schema";

export class EmpresaDTO{
    readonly _id : number;
    readonly nombre_empresa : string;
    readonly numero_telefono_empresa : number;
    readonly correo_electronico_empresa : string;
    readonly direccion_empresa : string;
    readonly empleados : Empleado;
}