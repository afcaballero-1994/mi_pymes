import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { Empleado, EmpleadoSchema } from './schema/empleado.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Empleado.name, schema : EmpleadoSchema}])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService]
})
export class EmpleadoModule {}
