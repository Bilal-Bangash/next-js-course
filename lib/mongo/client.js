import { MongoClient } from 'mongodb'

const URI = process.env.MONGO_URI
const options = {}
if (!URI) {
  throw new Error('No mongo URI')
}
export const mongoClient = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = mongoClient.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = mongoClient.connect()
}

export default clientPromise
