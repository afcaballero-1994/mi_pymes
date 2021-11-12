import { Empresa } from "src/empresa/entities/empresa.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Empleado{
    @PrimaryColumn()
    id : number;

    @Column()
    nombre_empleado : string;

    @Column()
    apellido_empleado : string;

    @Column()
    numero_cuenta_empleado : number;

    @Column()
    numero_telefono_empleado : number;

    @Column()
    correo_electronico_empleado : string;

    @Column()
    salario_empleado : number;

    @Column()
    departamento_empleado : string;

    @ManyToOne(() => Empresa, empresa => empresa.empleados, {cascade : ["insert"]})
    empresa_empleado : number;

    @Column({
        default: true
    })
    isHired: boolean;
}