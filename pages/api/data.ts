import db from '../../data/db.js'

export default function handler(req, res) {
  res.status(200).json(db)
}
