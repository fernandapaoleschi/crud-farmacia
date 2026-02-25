import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/prod.service';
import { AppController } from './app.controller';
@Module({
  imports: [
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
	useClass: ProdService,
    imports: [ConfigModule],
}),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
