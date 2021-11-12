import { Empleado } from "src/empleado/entities/empleado.entiy";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Empresa{
    @PrimaryColumn()
    NIT: number;
    
    @Column()
    nombre_empresa : string;

    @Column()
    numero_telefono_empresa : number;

    @Column()
    correo_electronico_empresa : string;

    @Column()
    readonly direccion_empresa : string;

    @OneToMany(() => Empleado, empleado => empleado.empresa_empleado, {cascade : ["insert"]})
    empleados : Empleado[];
}