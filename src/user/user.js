function buildMakeUser(hash, HASH_SIZE, validateUsername, validatePassword) {
  return async ({ username, clearpassword = null, password = null }) => {
    if (`"${username}"` != JSON.stringify(username)) {
      // This checks if the username is a String
      throw new Error("Invalid username");
    }
    if (!validateUsername(username)) {
      throw new Error("Invalid username");
    }
    if (!password) {
      if (clearpassword) {
        if (clearpassword != clearpassword.toString()) {
          throw new Error("Invalid password");
        }
        if (!validatePassword(clearpassword)) {
          throw new Error("Invalid password");
        }
        password = await hash(clearpassword);
      } else {
        throw new Error("Invalid password");
      }
    } else {
      if (
        `"${password}"` != JSON.stringify(password) || // This checks if the password is a String
        password.length != HASH_SIZE
      ) {
        
        throw new Error("Invalid password");
      }
    }

    return Object.freeze({
      username,
      password,
    });
  };
}
module.exports = {
  buildMakeUser,
};
