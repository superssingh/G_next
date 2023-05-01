import { NextApiRequest, NextApiResponse } from 'next'
import getData from './helpers/getData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getData('https://example.com/api/data')
  if (data) {
    res.status(200).json({ data })
  } else {
    res.status(500).json({ message: 'Error fetching data from the server' })
  }
}
