import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UrlDomain } from '../domain/url.domain';
import { UrlTypes } from '../interfaces/types';
import { ICreateUrlApplication } from '../interfaces/applictions/create.url.appliction.interface.service';
import { IGetUrlApplication } from '../interfaces/applictions/get.url.application.interface';
import { ValidationPipe } from '../../common/validation.pipe';
import { ApiTags, ApiOperation} from '@nestjs/swagger';

@ApiTags('网址模块')
@Controller('urls')
export class UrlsController {
    constructor(
        @Inject(UrlTypes.applications.ICreateUrlApplication) private createUrlApp: ICreateUrlApplication,
        @Inject(UrlTypes.applications.IGetUrlApplication) private getUrlApp: IGetUrlApplication,
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('/create')
    @ApiOperation({summary:'创建网址'})
     async create(@Res() res, @Body() urlDomain: UrlDomain) {
        const stock = await this.createUrlApp.create(urlDomain);
        return res.status(HttpStatus.OK).json(stock);
    }

    @Get(':id')
    @ApiOperation({summary:'显示指定id的网址详情,例如id：e463992c-5dcf-423f-a549-c9c3dff6ab36'})
    async findOne(@Param('id', new ParseUUIDPipe()) id:string) {
        const user = await this.getUrlApp.getById(id);
        return user;
    }


}
