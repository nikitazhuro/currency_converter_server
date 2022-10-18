const express = require('express');
const cors = require('cors')
const router = require('./Router');

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT} PORT`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()