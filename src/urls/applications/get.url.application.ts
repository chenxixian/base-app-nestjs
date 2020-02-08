import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UrlDomain } from '../domain/url.domain';
import { UrlTypes } from '../interfaces/types';
import { IGetUrlApplication } from '../interfaces/applictions/get.url.application.interface';
import { IGetUrlService } from '../interfaces/services/get.url.service.interface';

@Injectable()
export class GetUrlApplication implements IGetUrlApplication {
    constructor(@Inject(UrlTypes.services.IGetUrlService) private getUrlService: IGetUrlService) {}

    async getById(id: string): Promise<UrlDomain> {
        const url = await this.getUrlService.getById(id);
        if (!url) {
            throw new NotFoundException(`Url with id ${id} was not found`);
        }
        return url;
    }
}
