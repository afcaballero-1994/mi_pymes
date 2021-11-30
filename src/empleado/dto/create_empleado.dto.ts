import { Empresa } from "src/empresa/entities/empresa.entity";

export class CreateEmpleadoDTO{
    id : number;
    nombre_empleado : string;
    apellido_empleado : string;
    numero_cuenta_empleado : number;
    numero_telefono_empleado : number;
    correo_electronico_empleado : string;
    salario_empleado : number;
    cargo : string;
    departamento_empleado : string;
    empresa_empleado : number;
}