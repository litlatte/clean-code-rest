module.exports= {
    validateUsername: (username)=>{
        regEx = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
        const valid = !!regEx.exec(username);
        return valid;
    },
    validatePassword: (password)=>{
        regEx = /^[A-Za-z]\w{7,15}$/;
        const valid = !!regEx.exec(password);
        return valid;
    }
}
