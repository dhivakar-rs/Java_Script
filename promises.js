function divider() {
    return 2;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        a = divider()
        if (a !== 0) {
          response("The answer is",10%a);
        } else {
          noresponse("Divide by zero error:");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });