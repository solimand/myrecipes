import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

// This builder helps us resize images on the fly via Sanity's API
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
