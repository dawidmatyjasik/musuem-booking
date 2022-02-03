import db from '../../data/db'

export default function handler(req, res) {
  res.status(200).json(db);
}
