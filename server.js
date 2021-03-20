require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const dbConnect = require("./config/ConnectDB");
const app = express();

// app.use(fileUpload({
//     useTempFiles: true
// }))
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//connect DB
dbConnect();
//create route
app.use("/test", require("./Routes/Test"));
app.use("/api", require("./Routes/experienceRouter"));
app.use("/api", require("./Routes/Upload"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on ${PORT}`)
);
