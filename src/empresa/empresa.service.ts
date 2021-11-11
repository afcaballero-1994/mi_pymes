import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Empresa, EmpresaDocument } from './schemas/empresa.schema';
import { CreateEmpresaDTO } from './dto/create_empresa.dto';

@Injectable()
export class EmpresaService {
    constructor (@InjectModel(Empresa.name) private empresaModel : Model<EmpresaDocument>){}

    async crearEmpresa (createEmpresaDTO : CreateEmpresaDTO)
    {
        const createdEmpresa = new this.empresaModel(createEmpresaDTO);
        await createdEmpresa.save();
        return createdEmpresa;
    }

    async getEmpresas()
    {
        return this.empresaModel.find();
    }
}
