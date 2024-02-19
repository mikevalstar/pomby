import { Resolvers } from '@graph';
import prisma from '@lib/prisma';

const resolvers: Resolvers = {
  Query: {
    assets: async (_: any, __: any, context: UserContext) => {
      const assets = await prisma.asset.findMany({
        where: {
          deletedAt: null,
        },
      });

      return assets.map((asset) => ({
        id: asset.id,
        title: asset.title || asset.originalFilename,
        originalFilename: asset.originalFilename,
        mimetype: asset.mimeType,
        url: `/file/${asset.id}/${asset.originalFilename}`,
      }));
    },
  },
};

export default resolvers;
