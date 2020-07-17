import { gql } from 'apollo-server-express';

export const UserGraphQLSchema = gql`
    extend type Query {
        hello: String!
    }
`;
