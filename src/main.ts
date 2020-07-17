import * as express from 'express';
import { env } from '@utils/env';
import { server } from '@config/apollo-server';

import { schema } from '@modules/schemas';
import { resolvers } from '@modules/resolvers';
import { providers } from '@modules/providers';
import { logger } from '@utils/logger';
import { database } from '@config/database';

async function bootstrap() {
    const url = env.get('app_url');
    const port = env.get('app_port');

    const app = express();

    const apolloServer = server.run(schema, resolvers, providers);
    database.run();

    apolloServer.applyMiddleware({ app, path: '/api' });

    app.listen(port, () => logger.info(`server running at ${url}`));
}

bootstrap();
