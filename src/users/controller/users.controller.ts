import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UserDomain } from '../domain/user.domain';
import { TYPES } from '../interfaces/types';
import { ICreateUserApplication } from '../interfaces/applications/create.user.application.interface';
import { ValidationPipe } from '../../common/validation.pipe';
import { IGetUserApplication } from '../interfaces/applications/get.user.application.interface';
import { ApiTags, ApiOperation,ApiProperty} from '@nestjs/swagger';
// import { IsNotEmpty } from 'class-validator'

// class CreateUserDto {
//     @ApiProperty ({ description: '用户名', example: 'SamChen',})
//     @IsNotEmpty({ message: '请填写用户名' })
//     fullName: string
//     @ApiProperty ({ description: '密码', example: 'Sgmw@5050',})
//     @IsNotEmpty({ message: '请填写密码' })
//     password: string
//     @ApiProperty ({ description: '邮箱', example: 'samchen@gmail.com',})
//     @IsNotEmpty({ message: '请填写邮箱地址' })
//     email: string
//   }

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
