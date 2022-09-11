import { requestResolver } from "./helpers/requestResolver";
import sanityClient from "./sanityClient/sanity";

export const CitiesService = {
  getCities: async () => {
    return requestResolver(
      sanityClient.fetch(
        `
            *[_type == 'city'] {
                ...,
                "imageUrl": image.asset->url,
            }
        `
      )
    );
  },
  getCityDetails: async (name: string) => {
    return requestResolver(
      sanityClient.fetch(
        `
            *[_type == 'city' && name == $name] {
                ...,
                "imageUrl": image.asset->url,
                npcs[]-> { 
                  ...,
                  "imageUrl": image.asset->url,
                }
            }[0]
        `,
        { name: name }
      )
    );
  },
};
