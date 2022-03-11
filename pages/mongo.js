import React from 'react'
import { connectToDatabase } from '../utils/mongodb'

const Mongo = ({ properties }) => {
  //   console.log(properties)

  return (
    <div>
      <div>
        {properties.map((el) => {
          console.log(el.hours)

          return (
            <div>
              <p key={el._id}>{el.date}</p>
              {el.hours.map((hour) => {
                return <p>{hour.hour}</p>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Mongo

export const getServerSideProps = async () => {
  const { db } = await connectToDatabase()
  const data = await db.collection('dates').find({}).toArray()
  const properties = JSON.parse(JSON.stringify(data))
  return {
    props: { properties },
  }
}
