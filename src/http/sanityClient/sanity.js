import sanityClient from "@sanity/client";
/* import imageUrlBuilder from "@sanity/image_url";
 */
const client = sanityClient({
  projectId: "x4ukxy1j",
  dataset: "production",
  useCdn: true, // for cache purposes
  apiVersion: "2022-09-07",
});

/* const builder = imageUrlBuilder(client);
 */
/* export const urlFor = (source) => builder.image(source); */

export default client;
