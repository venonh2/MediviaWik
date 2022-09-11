import sanityClient from "@sanity/client";
/* import imageUrlBuilder from "@sanity/image_url";
 */
const client = sanityClient({
  projectId: "projectIdMustBeChanged",
  dataset: "production",
  useCdn: true, // for cache purposes
  apiVersion: "2022-08-22",
});

/* const builder = imageUrlBuilder(client);
 */
/* export const urlFor = (source) => builder.image(source); */

export default client;
