import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import {
    Context,
    Schema,
    Resolvers,
    Providers
} from '@interfaces/apollo-server';

export const server = {
    run(
        typeDefs: Schema,
        resolvers: Resolvers,
        providers: Providers
    ): ApolloServer {
        const schema = makeExecutableSchema({
            typeDefs,
            resolvers
        });

        return new ApolloServer({
            schema,
            playground: true,

            context: async (ctx: Context) => {
                const { request, response } = ctx;

                return { request, response, providers };
            }
        });
    }
};
