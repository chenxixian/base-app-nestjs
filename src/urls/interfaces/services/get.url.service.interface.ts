import { UrlDomain } from '../../domain/url.domain';

export interface IGetUrlService {
    getById(id: string): Promise<UrlDomain>;
}
