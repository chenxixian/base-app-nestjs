import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Urls } from '../domain/url.entity';
import { UrlDomain } from '../domain/url.domain';
import { IGetUrlService } from '../interfaces/services/get.url.service.interface';

@Injectable()
export class GetUrlService implements IGetUrlService {
    constructor(@InjectRepository(Urls) private usersRepository: Repository<Urls>) {}

    async getById(id: string): Promise<UrlDomain> {
        return this.usersRepository.findOne({ urlId: id });
    }
}
