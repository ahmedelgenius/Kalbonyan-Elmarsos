const https = require("https");
const url =
  "http://api.weatherstack.com/current?access_key=02061f2e9a4fdc90b1a9e6f5c19173bf&query=40,-75&units=f";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
