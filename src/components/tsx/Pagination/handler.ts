import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { page = 1, perPage = 10 } = req.query
    const response = await axios.get(
      `/api/products?page=${page}&perPage=${perPage}`
    )
    const data = response.data

    res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Error fetching data' })
  }
}

export default handler
