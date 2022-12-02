import { NextApiRequest, NextApiResponse } from "next";

import { drupal } from "@/lib/drupal";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse | any // temporary added any type
) {
  return await drupal.preview(request, response);
}
