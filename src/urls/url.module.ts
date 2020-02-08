import { Module } from '@nestjs/common';
import { UrlsController } from './controller/urls.controller';
import { CreateUrlService } from './services/create.url.service';
import { Urls } from './domain/url.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUrlApplication } from './applications/create.url.application';
import { UrlTypes } from './interfaces/types';
import { GetUrlApplication } from './applications/get.url.application';
import { GetUrlService } from './services/get.url.service';

const createUrlApp = { provide: UrlTypes.applications.ICreateUrlApplication, useClass: CreateUrlApplication };
const getUrlApp = { provide: UrlTypes.applications.IGetUrlApplication, useClass: GetUrlApplication };

const createUrlService = { provide: UrlTypes.services.ICreateUrlService, useClass: CreateUrlService };
const getUrlService = { provide: UrlTypes.services.IGetUrlService, useClass: GetUrlService };

@Module({
    imports: [TypeOrmModule.forFeature([Urls])],
    controllers: [UrlsController],
    providers: [createUrlApp,createUrlService,getUrlApp,getUrlService],
})
export class UrlModule {}
