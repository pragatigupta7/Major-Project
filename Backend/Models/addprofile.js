const {Schema,model}=require('../connection')
const addprofileSchema = new Schema({
    name:String,
    email:String,
    companyname:String,
    contactnumber:String,
    description:String
});
module.exports = model('addprofile',addprofileSchema)