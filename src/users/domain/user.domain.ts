import { IsString, IsEmail ,IsNotEmpty } from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
export class UserDomain {
    @ApiProperty ({ description: '用户名', example: 'SamChen',})
    @IsNotEmpty({ message: '请填写用户名' })
    @IsString()
    readonly fullName: string;
    @ApiProperty ({ description: '密码', example: 'Sgmw@5050',})
    @IsNotEmpty({ message: '请填写密码' })
    @IsString()
    readonly password: string;
    @ApiProperty ({ description: '邮箱', example: 'samchen@gmail.com',})
    @IsNotEmpty({ message: '请填写邮箱地址' })
    @IsEmail()
    readonly email: string;
}
