import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmpresaModule } from 'src/empresa/empresa.module';
import { AutentificacionController } from './autentificacion.controller';
import { AutentificacionService } from './autentificacion.service';

@Module({
  imports :[
    EmpresaModule,
    PassportModule.register({
      defaultStrategy : 'jwt',
      property : 'empresa',
      session : false
    }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions : { expiresIn : process.env.EXPIRES_IN }
    })
  ],
  controllers: [AutentificacionController],
  providers: [AutentificacionService]
})
export class AutentificacionModule {}
