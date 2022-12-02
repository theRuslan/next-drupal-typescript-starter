import {
  DrupalMedia,
  DrupalNode,
  DrupalParagraph,
  DrupalTaxonomyTerm,
} from "next-drupal";

import { ChakraProps } from "@chakra-ui/system";

export type ExampleType = {
  props?: ChakraProps;
  image?: DrupalMedia;
  paragraphs?: DrupalParagraph[];
  tags?: DrupalTaxonomyTerm[];
  nodes?: DrupalNode[];
};
