import { requestResolver } from "./helpers/requestResolver";
import sanityClient from "./sanityClient/sanity";

// e1604918-dc35-4684-a6b5-ab455f8f7195"
export const CreaturesService = {
  fetchCreatures: async (
    creatureTypeId: string = "e1604918-dc35-4684-a6b5-ab455f8f7195"
  ) => {
    return requestResolver<[]>(
      sanityClient.fetch(
        `
        *[_type == 'creature' && creatureType._ref == $id] {
            ...,
        "imageUrl": image.asset->url,
        }
        `,
        {
          id: creatureTypeId,
        }
      )
    );
  },
};
