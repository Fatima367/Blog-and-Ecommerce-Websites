import { type SchemaTypeDefinition } from 'sanity'
import products from '../products'
import bestSelling from '../best-selling'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, bestSelling],
}