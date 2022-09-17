import { requestResolver } from "./helpers/requestResolver";
import sanityClient from "./sanityClient/sanity";

export const WeaponsService = {
  fetchWeapons: async (
    weapomTypeId: string = "d518455a-e3a8-4594-b262-f62af8b249c7"
  ) => {
    return requestResolver<[]>(
      sanityClient.fetch(
        `
            *[_type == 'weapom' && weapomType._ref == $id] {
                ...,
            "imageUrl": image.asset->url,
            }
        `,
        {
          id: weapomTypeId,
        }
      )
    );
  },
};
