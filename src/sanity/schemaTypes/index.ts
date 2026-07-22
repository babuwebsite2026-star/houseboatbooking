import { type SchemaTypeDefinition } from 'sanity'
import houseboat from './houseboat'
import tourPackage from './package'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [houseboat, tourPackage],
}
