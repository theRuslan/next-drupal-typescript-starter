import type { NextApiRequest, NextApiResponse } from "next"

export default function exit(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.clearPreviewData()
  response.writeHead(307, { Location: request.query.dest })
  response.end()
}
