const mongoose = require('mongoose')
const MONGO_URI =
  'mongodb+srv://bawwa:1998102910b@cluster0.v3uo4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log('error connecting database =>', err))

module.exports = mongoose
