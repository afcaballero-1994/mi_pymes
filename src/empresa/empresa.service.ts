import { Injectable } from '@nestjs/common';
import { CreateEmpresaDTO } from './dto/create_empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';

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

    async deleteEmpresa (id : number)
    {
        await this.empresaRepository.update(id, {isDeleted : true});
        const empresaEliminada = await this.empresaRepository.findOne(id);
        return empresaEliminada;
    }
}
