const express = require('express');
const cors = require('cors')
const router = require('./Router');

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://zhuro-converter-client.web.app',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api', router)
optionSuccessStatus: 200
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