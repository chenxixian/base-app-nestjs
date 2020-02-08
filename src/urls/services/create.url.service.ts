import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Urls } from '../domain/url.entity';
import { UrlDomain } from '../domain/url.domain';
import { ICreateUrlService } from '../interfaces/services/create.url.service.interface.service';

@Injectable()
export class CreateUrlService implements ICreateUrlService {
    constructor(@InjectRepository(Urls) private urlRepository: Repository<Urls>) {}

    async create(url: UrlDomain): Promise<UrlDomain> {
        return this.urlRepository.save(url);
    }
}
