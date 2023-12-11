// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.${process.env.NODE_ENV}.env',
      isGlobal: true,
    }),
    UsuariosModule,
    ProductosModule,
  ],
})
export class AppModule {}
