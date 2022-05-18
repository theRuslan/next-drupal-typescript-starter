import type { ChakraProps } from "@chakra-ui/system";
import type {
  DrupalNode,
  DrupalMedia,
  DrupalParagraph,
  DrupalTaxonomyTerm,
} from "next-drupal";

export type ExampleType = {
  props?: ChakraProps;
  image?: DrupalMedia;
  paragraphs?: DrupalParagraph[];
  tags?: DrupalTaxonomyTerm[];
  nodes?: DrupalNode[];
};
