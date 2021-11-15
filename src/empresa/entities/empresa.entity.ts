import { Empleado } from "src/empleado/entities/empleado.entiy";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class Empresa{
    @PrimaryColumn({
        unique : true
    })
    NIT: number;
    
    @Column()
    nombre_empresa : string;

    @Column()
    numero_telefono_empresa : number;

    @Column({
        unique : true
    })
    correo_electronico_empresa : string;

    @Column()
    readonly direccion_empresa : string;

    @OneToMany(() => Empleado, empleado => empleado.empresa_empleado, {cascade : ["insert"]})
    empleados : Empleado[];

    @Column(
        {
            default : false
        }
    )
    isDeleted : boolean;

    @BeforeInsert() async hashPassword()
    {
        this.password = await bcrypt.hash(this.password, 10);
    }
    password : string;
}