import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmpresaDTO } from './dto/create_empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';
import { CreateEmpleadoDTO } from 'src/empleado/dto/create_empleado.dto';
import { LoginEmpresaDTO } from './dto/login_empresa.dto';
import * as bcrypt from 'bcrypt';
import { EmpresaDTO } from './dto/empresa.dto';

@Injectable()
export class EmpresaService {
    constructor (
        @InjectRepository(Empresa)
        private empresaRepository: Repository<Empresa>){}

    async crearEmpresa (createEmpresaDTO : CreateEmpresaDTO)
    {
        const empresa = await this.empresaRepository.save(createEmpresaDTO);
        return empresa;
    }

    async getEmpresas()
    {
        const empresas = await this.empresaRepository.find({
            where : {
                isDeleted : false
            },
            relations : ["empleados"]
        });
        return empresas;
    }

    async getEmpresa (options?: object)
    {
        const empresaEntity = await this.empresaRepository.findOne(options);
        return this.empresaEntityToDTO(empresaEntity);
    }

    async deleteEmpresa (id : number)
    {
        await this.empresaRepository.update(id, {isDeleted : true});
        const empresaEliminada = await this.empresaRepository.findOne(id);
        return empresaEliminada;
    }

    async actualizarEmpresa (id : number, createEmpresaDTO : CreateEmpresaDTO)
    {
        const empresaActualizada = await this.empresaRepository.update(id, createEmpresaDTO);
        return empresaActualizada;
    }

    async getEmpresaByCredentials ({correo_electronico_empresa, password} : LoginEmpresaDTO)
    {
        const empresa = await this.empresaRepository.findOne({
            where : {correo_electronico_empresa}
        });

        if (!empresa)
        {
            throw new HttpException('Credenciales invalidas', HttpStatus.UNAUTHORIZED);
        }

        const samePassword = await bcrypt.compare(password, empresa.password);

        if (!samePassword)
        {
            throw new HttpException('Credenciales invalidas', HttpStatus.UNAUTHORIZED);
        }

        return this.empresaEntityToDTO(empresa);
    }

    async findByPayload ({correo_electronico_empresa} : any)
    {
        const empresa = await this.getEmpresa({
            where: {correo_electronico_empresa}
        });

        return empresa;
    }

    empresaEntityToDTO (empresaEntity : Empresa) : EmpresaDTO
    {
        const {NIT, nombre_empresa, numero_telefono_empresa,correo_electronico_empresa, direccion_empresa ,isDeleted} = empresaEntity;
        let empresa : EmpresaDTO = {NIT, nombre_empresa, numero_telefono_empresa,correo_electronico_empresa, direccion_empresa ,isDeleted};

        return empresa;
    }
}
