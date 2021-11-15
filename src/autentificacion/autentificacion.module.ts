import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmpleadoModule } from 'src/empleado/empleado.module';
import { EmpresaModule } from 'src/empresa/empresa.module';
import { EmpresaService } from 'src/empresa/empresa.service';
import { AutentificacionController } from './autentificacion.controller';
import { AutentificacionService } from './autentificacion.service';
import { JwtStrategy } from './jwt.strategy';

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
  providers: [AutentificacionService, JwtStrategy],
  exports : [PassportModule, JwtModule]
})
export class AutentificacionModule {}
