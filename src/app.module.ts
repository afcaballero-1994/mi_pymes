import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmpleadoModule } from './empleado/empleado.module';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [EmpleadoModule, EmpresaModule,
  MongooseModule.forRoot(
    'mongodb+srv://root:root@cluster0.skca3.mongodb.net/mi_pymes',
    {useNewUrlParser : true}
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
