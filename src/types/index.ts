import type { ChakraProps } from "@chakra-ui/react"
import type {
  DrupalMedia,
  DrupalNode,
  DrupalParagraph,
  DrupalTaxonomyTerm
} from "next-drupal"

export type ExampleType = {
  props?: ChakraProps
  image?: DrupalMedia
  paragraphs?: DrupalParagraph[]
  tags?: DrupalTaxonomyTerm[]
  nodes?: DrupalNode[]
}

export type DrupalContentTranslation = {
  label: string
  langcode: string
  path: string
}
