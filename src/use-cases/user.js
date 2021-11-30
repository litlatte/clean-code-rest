function buildAuthFunctions(UserDB, makeUser){
    return {
        getUser: async (filter)=>{
            let usr = await UserDB.findOne(filter);
            return usr;
        },
        getUsers: async (filter={})=>{
            let usrs = await UserDB.find(filter);
            return usrs;
        },
        addUser: async (usr)=>{
            usr = await makeUser(usr);
            let user = new UserDB(usr);
            try{
                await user.save();
            }catch{
                throw new Error("Impossible adding user");
            }
        }
    }
}
module.exports ={
    buildAuthFunctions,
}