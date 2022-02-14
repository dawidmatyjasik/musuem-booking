import db from '../../../data/db.js'

/* type Data = {
  name: string
} */

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(db)
  }
}
