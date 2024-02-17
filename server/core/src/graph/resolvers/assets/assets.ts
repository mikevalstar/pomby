import { Resolvers } from '@graph';

const resolvers: Resolvers = {
  Query: {
    assets: async (_: any, __: any, context: UserContext) => {
      return [
        {
          id: '1',
          title: 'Asset 1',
        },
      ];
    },
  },
};

export default resolvers;
