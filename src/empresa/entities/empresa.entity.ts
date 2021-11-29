import { Empleado } from "src/empleado/entities/empleado.entiy";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class Empresa{
    @PrimaryColumn()
    NIT: number;
    
    @Column()
    nombre_empresa : string;

    @Column()
    numero_telefono_empresa : number;

    @Column({
        unique : true
    })
    correo_electronico_empresa : string;

    @Column({
        nullable : false
    })
    password : string;

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

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword()
    {
        this.password = await bcrypt.hash(this.password , 10);
    }
}

