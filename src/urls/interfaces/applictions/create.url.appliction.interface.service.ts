import { UrlDomain } from '../../domain/url.domain';

export interface ICreateUrlApplication {
    create(userDomain: UrlDomain): Promise<UrlDomain>;
}
