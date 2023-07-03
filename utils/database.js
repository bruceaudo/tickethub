import mongoose from 'mongoose'

//let isConnected = false
export const connectToDb = async () =>
{

  //if (isConnected) {
  //console.log('MongoDB database is already connected')
  //process.exit(0)
  //}

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Tickethub',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB successfully')
    //isConnected = true
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1) // Exit the process with a failure code
  }
}
