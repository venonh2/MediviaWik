import { FeaturedMenu } from "../../types/FeaturedMenu";
import { requestResolver } from "../helpers/requestResolver";
import sanityClient from "../sanityClient/sanity";

export const MenuService = {
  fetchFeaturedItems: () => {
    return requestResolver<FeaturedMenu[]>(
      sanityClient.fetch(
        `
        *[_type == 'featured'] {
          ...,
          "imageUrl": image.asset->url,
          items[]-> {
            ...,
              "imageUrl": image.asset->url,
              type -> {
                _id,
                name
            }
          }
        }
        `
      )
    );
  },
};
