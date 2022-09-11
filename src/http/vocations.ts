import { requestResolver } from "./helpers/requestResolver";
import sanityClient from "./sanityClient/sanity";

export const VocationService = {
  getVocationDetails: async (itemTypeId: string, vocationName: string) => {
    return requestResolver(
      sanityClient.fetch(
        `
        *[_type == 'vocation' && name == $name ] {
            ...,
            "backgroundImageUrl": backgroundImage.asset->url,
                    spells[]-> { 
                    ...,
                    "imageUrl": image.asset->url,
                    },
            "type": *[ _type == "itemType" && _id == $id ]
        }[0]
        `,
        { id: itemTypeId, name: vocationName }
      )
    );
  },
};
