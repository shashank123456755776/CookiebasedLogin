// const express = require('express');
// const session = require('express-session');

// const app = express();

// // Middleware to parse incoming requests
// app.use(express.json());

// // Session middleware
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
// }));

// // User login endpoint
// app.post('/login', (req, res) => {
//   if (req.body.username === 'ShashankSuman' && req.body.password === '123456789') {
//     // Authentication succeeds, create a session and set the session ID as a cookie
//     req.session.userId = 'user-id'; //store the user ID in the session
//     res.cookie('sessionId', req.session.id, { maxAge: 3600000, httpOnly: true });
//     res.send('Login successful');
//   } else {
//     // Authentication fails
//     res.status(401).send('Authentication failed');
//   }
// });
// // Protected endpoint
// app.get('/protected', (req, res) => {
//   // Check if the user is authenticated by verifying the session
//   if (req.session.userId) {
//     // User is authenticated, provide access to protected resource
//     res.send('Protected resource');
//   } else {
//     // User is not authenticated, redirect or send an error response
//     res.status(401).send('Unauthorized');
//   }
// });

// // Server start
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const emails ="s@gmail.com";//store email in backend
const passwords ="komal";//store passwords in backend 

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.post('/login', (req, res) => {

  const { email, password } = req.body;

    if(req.body.email == emails && req.body.password== passwords){
      res.send("successfully login")
      console.log("succesfully login")
    

      const secretKey = 'krishnabalaram'; 
      const token = jwt.sign({ emails },{passwords}, secretKey, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true }).json({ token });
    }
    else{
      console.log("error")
    }

});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
