import { db } from '../../../../data/db'

export default function handler(req, res) {
  const { dateId, hours } = req.query
  if (req.method === 'GET') {
    // const comment = db.find((comment) => comment.id === parseInt(dateId));
    res.status(200).json(db[dateId].hours[hours])
  } else if (req.method === 'PUT') {
    const selected = db[dateId].hours[hours]
    const number = req.body.number
    const user = req.body.user
    selected.current += number
    selected.users.push(user)
    res.status(200).json(selected)
  }
}
