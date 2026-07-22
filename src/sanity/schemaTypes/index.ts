import { type SchemaTypeDefinition } from 'sanity'
import houseboat from './documents/houseboat'
import tourPackage from './documents/package'
import siteSettings from './singletons/siteSettings'
import homePage from './singletons/homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [houseboat, tourPackage, siteSettings, homePage],
}
