const sgMail = require("@sendgrid/mail");

// const sendgridAPIKey =
//   "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";

// sgMail.setApiKey(sendgridAPIKey);

// sgMail.send({
//   to: "ahmedhanyofficial@gmail.com",
//   from: "elgenius10000@gmail.com",
//   subject: "This is my first creation",
//   text: "I hope this one actually get to you",
// });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "elgenius10000@gmail.com",
    subject: "thanks for joining in",
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "elgenius10000@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
