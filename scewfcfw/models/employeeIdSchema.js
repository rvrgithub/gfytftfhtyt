const mongoose = require("mongoose")
const EmployeeIdScheme=mongoose.Schema({
    userName:{
        type:"String",
        
    },
isDeleted:{
    type:Boolean,
    default:false
}
})
let EmployeeId=mongoose.model("EmployeeId",EmployeeIdScheme)
module.exports=EmployeeId