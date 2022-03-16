import { connectToDatabase } from '../../../../utils/mongodb'

export default async function handler(req, res) {
  const { dateId, hourId } = req.query
  const { db } = await connectToDatabase()
  const data = await db.collection('dates').find({}).toArray()

  const filteredDate = data.find((el) => el.date === dateId)

  const filteredHour = filteredDate.hours.find((el) => el.hour === hourId)
  if (req.method === 'GET') {
    res.status(200).json(filteredHour)
  } else if (req.method === 'PUT') {
    const number = req.body.number
    const user = req.body.user
    filteredHour.current += number
    filteredHour.users.push(user)
    console.log(dateId)

    db.collection('dates').updateOne(
      { date: dateId },
      {
        $set: { date: '20-03-2022' },
      }
    )

    // filteredHour.insertOne({})
    res.status(200).json(filteredHour)
  }
}
