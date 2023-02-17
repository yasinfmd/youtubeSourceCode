import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="socialappsauth.auth0.com"
    clientId="zuyJlUb1RApzD86OwOGk6aExW5BLoW4K"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);