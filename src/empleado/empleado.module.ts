import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from 'src/autentificacion/jwt.strategy';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { Empleado } from './entities/empleado.entiy';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService, JwtStrategy],
  exports: [EmpleadoService]
})
export class EmpleadoModule {}
