import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UserDomain } from '../domain/user.domain';
import { TYPES } from '../interfaces/types';
import { ICreateUserApplication } from '../interfaces/applications/create.user.application.interface';
import { ValidationPipe } from '../../common/validation.pipe';
import { IGetUserApplication } from '../interfaces/applications/get.user.application.interface';
import { ApiTags, ApiOperation} from '@nestjs/swagger';

@Controller('users')
@ApiTags('用户模块')
export class UsersController {
    constructor(
        @Inject(TYPES.applications.ICreateUserApplication) private createUserApp: ICreateUserApplication,
        @Inject(TYPES.applications.IGetUserApplication) private getUserApp: IGetUserApplication,
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('/create')
    @ApiOperation({summary:'创建用户'})
     async create(@Res() res, @Body() userDomain: UserDomain) {
        const stock = await this.createUserApp.create(userDomain);
        return res.status(HttpStatus.OK).json(stock);
    }

    @Get(':id')
    @ApiOperation({summary:'显示指定id的用户详情,例如id：bdf1c033-d363-439e-b33c-51ed41bb6624'})
    async findOne(@Param('id', new ParseUUIDPipe()) id:string) {
        const user = await this.getUserApp.getById(id);
        return user;
    }
}
