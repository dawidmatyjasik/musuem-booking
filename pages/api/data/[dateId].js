import { db } from '../../../data/db'

export default function handler(req, res) {
  const { dateId } = req.query
  if (req.method === 'GET') {
    // const comment = db.find((comment) => comment.id === parseInt(dateId));
    res.status(200).json(db[dateId])

    // res.status(200).json(comment);
  }
}
