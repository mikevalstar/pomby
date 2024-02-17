import { Resolvers } from '@graph';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';

// Resolvers
import assetResolvers from './resolvers/assets/assets';

const typeDefs = loadSchemaSync(['./main.schema.graphql', './**/*.schema.graphql'], {
  loaders: [new GraphQLFileLoader()],
});

export const resolvers: Resolvers = {
  Query: {
    me: (_: any, __: any, context: UserContext) => {
      return {
        id: '1',
        name: 'John Doe',
        email: 'admin@admin.com',
      };
    },
    ...assetResolvers.Query,
  },
};

const schama = { schema: addResolversToSchema({ schema: typeDefs, resolvers }) };
export default schama;
