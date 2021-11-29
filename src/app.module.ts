import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmpleadoModule } from './empleado/empleado.module';
import { EmpresaModule } from './empresa/empresa.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';

@Module({
  imports: [EmpleadoModule,
  TypeOrmModule.forRoot({
    type:     'mysql',
    host:     'bus28ik8yeb7zqucbz9v-mysql.services.clever-cloud.com',
    port:      3306,
    username: 'uuecypb5cdujh0to',
    password: 'tYYu8RrMj1uGimJ8Kckw',
    database: 'bus28ik8yeb7zqucbz9v',
    autoLoadEntities : true,
    synchronize: true
  }),
  AutentificacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
