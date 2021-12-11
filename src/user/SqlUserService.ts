import { Attribute, SearchResult, Service, StringMap } from 'query-core';
import { User, UserFilter, userModel, UserService } from './User';

export class SqlUserService extends Service<User, string, UserFilter> implements UserService {
  constructor(
    find: (s: UserFilter, limit?: number, offset?: number | string, fields?: string[]) => Promise<SearchResult<User>>,
    param: (i: number) => string,
    query: <T>(sql: string, args?: any[], m?: StringMap, bools?: Attribute[]) => Promise<T[]>,
    exec: (sql: string, args?: any[]) => Promise<number>
  ) {
    super(find, 'users', query, exec, userModel.attributes, param);
  }
}
