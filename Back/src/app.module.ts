// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/services/products.service';
import { ProductsController } from './products/controllers/products.controller';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.${process.env.NODE_ENV}.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    UsersModule,
    ProductsModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class AppModule {}
