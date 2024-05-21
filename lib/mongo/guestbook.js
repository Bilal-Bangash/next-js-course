import { cache } from 'react'
import clientPromise from './client'

let client, db, guestbook

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = client.db(process.env.MONGO_DB)
    guestbook = db.collection('guestbook')
  } catch (e) {
    throw new Error('Failed to connect to MongoDB')
  }
}

;(async () => {
  await init()
})()

export const getGuestBookEntries = cache(async () => {
  try {
    if (!guestbook) await init()
    console.log('fetching guestbook entries')

    const entries = await guestbook
      .find({})
      .map(entry => ({ ...entry, _id: entry._id.toString() }))
      .toArray()

    return { entries }
  } catch (error) {
    return { error: 'Failed to fetch guestbook entries' }
  }
})

export const createGuestBookEntry = async ({ name, message }) => {
  try {
    if (!guestbook) await init()
    console.log('creating guestbook entry')
    const result = await guestbook.insertOne({
      name,
      message,
      updatedAt: new Date()
    })
    return { _id: result.insertedId.toString() }
  } catch (error) {
    return { error: 'Failed to create guestbook entry' }
  }
}
