function makeAuthRoutes(router, login, signup){
    router.post("/login", login);
    router.post("/signup", signup);
    return router;
}
module.exports = {
    makeAuthRoutes
}