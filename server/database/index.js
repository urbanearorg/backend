const mongoose = require('mongoose')

const dbURI = `mongodb://127.0.0.1:27017/urbanear`

const options = {
  autoIndex: true,
  connectTimeoutMS: 60000,
  socketTimeoutMS: 45000,
}

function setRunValidators() {
  this.setOptions({ runValidators: true })
}

mongoose.set('strictQuery', true)

mongoose
  .plugin((schema) => {
    schema.pre('findOneAndUpdate', setRunValidators);
    schema.pre('updateMany', setRunValidators);
    schema.pre('updateOne', setRunValidators);
    schema.pre('update', setRunValidators);
    schema.pre('create', setRunValidators);
  })
  .connect(dbURI, options)
  .then(() => {
    console.log('Mongoose connection done');
  })
  .catch((e) => {
    console.log('Mongoose connection error');
    console.log(e);
  });

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + dbURI)
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(
      'Mongoose default connection disconnected through app termination',
    )
    process.exit(0)
  })
})

const connection = mongoose.connection

module.exports = { connection }