let APIURL = "";
switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "tc-ecommerce-client.herokuapp.com":
    APIURL = "https://tc-ecommerce-server.herokuapp.com";
    
    break;
}
export default APIURL;