const {Schema,model}=require('../connection')
const userSchema = new Schema({
    email:String,
    password:String,
    confirmpassword:String
});
module.exports = model('user',userSchema)