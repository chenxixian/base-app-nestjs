import { IsString, IsUrl ,IsNotEmpty } from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
export class UrlDomain{
    @ApiProperty ({ description: '标题', example: 'baidu',})
    @IsNotEmpty({ message: '请填写标题' })
    @IsString()
    readonly title: string;
    @ApiProperty ({ description: '网址', example: 'https://www.baidu.com',})
    @IsNotEmpty({ message: '请填写网址' })
    @IsUrl()
    readonly url: string;
}