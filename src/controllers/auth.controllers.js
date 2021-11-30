function buildLoginControllers(getUser, addUser, generateToken, checkPassword) {
  return {
    login: async (httpRequest) => {
      const { source = {}, ...user } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      headers = { "Content-Type": "application/json" };
      if (!user || !user.username || !user.password) {
        return {
          headers,
          statusCode: 400,
          body: { message: "Invalid request" },
        };
      }
      user.username = user.username.toString();
      user.password = user.password.toString();
      let usr = await getUser({ username: user.username });
      if (!usr) {
        return {
          headers,
          statusCode: 400,
          body: { message: "Username not found" },
        };
      }
      let valid = await checkPassword(user.password, usr.password);
      if (valid) {
        let token = await generateToken({username: user.username});
        return {
          headers,
          statusCode: 200,
          body: { message: "ok", username: user.username, token },
        };
      }
      return { headers, statusCode: 400, body: { message: "Wrong password" } };
    },
    signup: async (httpRequest) => {
      const { source = {}, ...user } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      headers = { "Content-Type": "application/json" };
      if (!user || !user.username || !user.password) {
        return {
          headers,
          statusCode: 400,
          body: { message: "Invalid request" },
        };
      }
      user.username = user.username.toString();
      user.password = user.password.toString();
      let usr = await getUser({ username: user.username });
      if (usr) {
        return {
          headers,
          statusCode: 400,
          body: { message: "Username already exists" },
        };
      }
      user.clearpassword = user.password;
      delete user.password;
      try {
        await addUser(user);
        let token = await generateToken({username: user.username});
        return {
          headers,
          statusCode: 200,
          body: { message: "ok", username: user.username, token },
        };
      } catch (e) {
        return { headers, statusCode: 400, body: { message: e.message } };
      }
    },
  };
}

module.exports = {
  buildLoginControllers,
};
