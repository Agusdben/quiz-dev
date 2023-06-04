import { type NextApiResponse } from 'next'

const WHITE_LIST = ['http://localhost:3000']

const cors = (handler: any) => (req: any, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', WHITE_LIST)
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  return handler(req, res)
}

export default cors
