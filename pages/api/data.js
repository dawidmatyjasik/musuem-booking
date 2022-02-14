import db from '../../data/db.js'

/* type Data = {
  name: string
} */

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(db)
  } else if (req.method === 'POST') {
    const date = req.body.date
    const newDate = {
      id: Date.now(),
      text: date,
    }
    db.push(newDate)
    res.status(201).json(newDate)
  }
}
