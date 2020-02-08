import { UrlDomain } from '../../domain/url.domain';

export interface IGetUrlApplication {
    getById(id: string): Promise<UrlDomain>;
}
