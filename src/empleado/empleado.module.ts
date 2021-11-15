import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutentificacionModule } from 'src/autentificacion/autentificacion.module';
import { AutentificacionService } from 'src/autentificacion/autentificacion.service';
import { JwtStrategy } from 'src/autentificacion/jwt.strategy';
import { EmpresaService } from 'src/empresa/empresa.service';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { Empleado } from './entities/empleado.entiy';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado]),],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
  exports: [EmpleadoService]
})
export class EmpleadoModule {}
