import { Injectable, Inject } from '@nestjs/common';
import { UrlDomain } from '../domain/url.domain';
import { ICreateUrlApplication } from '../interfaces/applictions/create.url.appliction.interface.service';
import { UrlTypes } from '../interfaces/types';
import { ICreateUrlService } from '../interfaces/services/create.url.service.interface.service';

@Injectable()
export class CreateUrlApplication implements ICreateUrlApplication {
    constructor(@Inject(UrlTypes.services.ICreateUrlService) private urlService: ICreateUrlService) {}

    async create(url: UrlDomain): Promise<UrlDomain> {
        return this.urlService.create(url);
    }
}
