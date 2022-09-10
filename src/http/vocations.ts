import { Vocation } from "../types/Vocations";
import { requestResolver } from "./helpers/requestResolver";
import sanityClient from "./sanityClient/sanity";

export const VocationService = {
  getVocationDetails: async (itemTypeId: string) => {
    return requestResolver(
      sanityClient.fetch(
        `
        *[_type == 'vocation' ] {
            ...,
            "backgroundImageUrl": backgroundImage.asset->url,
                    spells[]-> { 
                    ...,
                    "imageUrl": image.asset->url,
                    },
            "type": *[ _type == "itemType" && _id == $id ]
        }[0]
        `,
        { id: itemTypeId }
      )
    );
  },
};
