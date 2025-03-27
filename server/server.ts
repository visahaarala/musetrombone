import app from './app';

// import mongoose from 'mongoose';

const database = process.env.MONGODB!;

// mongoose
//   .connect(database)
//   .then(() => console.log('Database connected'))
//   .catch((err) => {
//     console.log('Error connecting database');
//     console.log(`${err.name}: ${err.message}`);
//     process.exit(1);
//   });

const port = 3000;
const server = app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
