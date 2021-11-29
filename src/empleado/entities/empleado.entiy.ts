import { Empresa } from "src/empresa/entities/empresa.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Empleado{
    @PrimaryColumn()
    id : number;

    @Column()
    nombre_empleado : string;

    @Column()
    apellido_empleado : string;

    @Column("bigint")
    numero_cuenta_empleado : number;

    @Column("bigint")
    numero_telefono_empleado : number;

    @Column()
    correo_electronico_empleado : string;

    @Column("bigint")
    salario_empleado : number;

    @Column()
    departamento_empleado : string;

    @Column()
    cargo : string;

    @Column({
        nullable : false
    })
    NIT_empresa : number;

    @ManyToOne(() => Empresa, empresa => empresa.empleados, {cascade : ["insert"]})
    @JoinColumn({ name: "NIT_empresa" })
    empresa_empleado : number;

    @Column({
        default: true
    })
    isHired: boolean;
}