import { gql } from 'apollo-server-express';
import { UserGraphQLSchema } from '@modules/user';

export const schema = gql`
    scalar DateTime
    scalar Upload
    scalar ObjectID

    # ---------------------------------------------------------
    # Directives
    # ---------------------------------------------------------
    directive @error_interceptor on OBJECT
    directive @auth_guard on FIELD_DEFINITION

    type Query @error_interceptor {
        _empty: String
    }
    type Mutation @error_interceptor {
        _empty: String
    }
    type Subscription @error_interceptor {
        _empty: String
    }

    ${UserGraphQLSchema}
`;
