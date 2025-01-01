import { type SchemaTypeDefinition } from "sanity";
import posts from "../posts";
import comments from "../comments";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [posts, comments],
};
