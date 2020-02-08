import { UrlDomain } from '../../domain/url.domain';

export interface ICreateUrlService {
    create(urlDomain: UrlDomain): Promise<UrlDomain>;
}
