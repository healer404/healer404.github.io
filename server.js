const express = require("express");
const router = express.Router();
const cors = require("cors");
const mailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(3001, () => console.log("Server Running"));
// spkflqgtrpcuegfd

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//   });
// }

const contactEmail = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: "ereportelectives@gmail.com",
    pass: "spkflqgtrpcuegfd",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/mailing", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const mail = {
    from: name,
    to: "dukaroniel0701@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  if(name === "" || message === "" || !re.test(email)){
    res.json({ status: "Please provide the necessary details."});
  } else {
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  }
});