import { connectToDatabase } from '../../../utils/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  const data = await db.collection('dates').find({}).toArray()

  if (req.method === 'GET') {
    res.status(200).json({ test: 'name' })
  }
}
