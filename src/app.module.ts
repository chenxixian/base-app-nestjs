import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UrlModule } from './urls/url.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMConfig } from "./ormconfig";

@Module({
    imports: [UsersModule,UrlModule, TypeOrmModule.forRoot(ORMConfig)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

