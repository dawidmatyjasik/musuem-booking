import { connectToDatabase } from '../../../utils/mongodb'

export default async function handler(req, res) {
  const { dateId } = req.query
  const { db } = await connectToDatabase()
  const data = await db.collection('dates').find({}).toArray()
  const filtered = data.find((el) => el.date === dateId)
  if (req.method === 'GET') {
    res.status(200).json({ test: 'name' })
  }
}
