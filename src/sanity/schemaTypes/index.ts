import { type SchemaTypeDefinition } from 'sanity'
import houseboat from './houseboat'
import tourPackage from './package'
import siteSettings from './siteSettings'
import homePage from './homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [houseboat, tourPackage, siteSettings, homePage],
}
