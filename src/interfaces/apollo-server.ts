import { Response, Request } from 'express';
import { providers } from '@modules/providers';
import { schema } from '@modules/schemas';
import { resolvers } from '@modules/resolvers';

export type Schema = typeof schema;
export type Resolvers = typeof resolvers;
export type Providers = typeof providers;

export interface Context {
    request: Request;
    response: Response;
    providers: Providers;
    token: string;
}
