//this helper function will basically take our react component render it and return as an HTML string

import { renderToString } from "react-dom/server";
import React from "react";

//now we do not need home anynmore because we have routing set up
// import { Home } from "../client/components/Home";

//here we will use static router and inside that we will put all our custom routes, as BrowserRouter dosent work on server.
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default (req) => {
  //const content = renderToString(<Home />);
  //Static Router
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );

  const html = `<html>
    <head>Heading</head>
      <body>
        <div id = "root">${content}</div> 
        <script src = "bundle.js"></script>
      </body>
  </html>`;
  return html;
};
