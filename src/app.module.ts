import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmpleadoModule } from './empleado/empleado.module';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [EmpleadoModule, EmpresaModule,
  TypeOrmModule.forRoot({
    type:     'mysql',
    host:     'localhost',
    port:      3306,
    username: 'root',
    password: 'ANDR111728',
    database: 'mi_pymes',
    autoLoadEntities : true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
