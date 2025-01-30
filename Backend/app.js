const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRoute');
const customerFeedbackRouter = require('./routes/customerFeedbackRoute')
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error: ', err));

  app.use("/api/admin", adminRouter);
  app.use("/api/feedback", customerFeedbackRouter )

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
