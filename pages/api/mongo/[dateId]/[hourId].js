import { connectToDatabase } from '../../../../utils/mongodb'

export default async function handler(req, res) {
  const { dateId, hourId } = req.query
  const { db } = await connectToDatabase()
  const data = await db.collection('dates').find({}).toArray()
  console.log(dateId, hourId)

  const filteredDate = data.find((el) => el.date === dateId)

  const filteredHour = filteredDate.hours.find((el) => el.hour === hourId)

  res.json(filteredHour)
}
