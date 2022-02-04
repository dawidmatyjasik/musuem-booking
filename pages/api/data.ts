import db from '../../data/db.js'
import type { NextApiRequest, NextApiResponse } from 'next'

/* type Data = {
  name: string
} */

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(db)
}
