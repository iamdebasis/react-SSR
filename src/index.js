import express from "express";
// import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { Home } from "../src/client/components/Home";

const PORT = 8080;
const app = express();

//serve all the static files from public folder by giving the path to public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  //this top is the actual html of our application.
  //we will generate a tiny HTML document with a script tag.

  //when we setup the public directory by using app.use we do not have to appent ./  or public. anything. we can directly
  //give the file name, bundle.j in script tag. it will autometically get it from public directory.
  const html = `<html>
                  <head>
                    <body>
                      <div>${content}</div>
                      <script src = "bundle.js"></script>
                    </body>
                  </head>
                </html`;
  //NOe what will happen is first browser will receive this html snippet then load them in the browser, then it will see
  //a script tag so it will download the client bundle.js file.

  res.send(html);
});

// app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
