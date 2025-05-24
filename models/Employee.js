const mongoose=require('mongoose')
const employeeSchema= new mongoose.Schema({
    _id:{type:Number,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    salary:{type:Number,require:true,min:0},
    departmentID:{type:mongoose.Schema.Types.String,ref:'Department',require:true},
    projects:[{type:mongoose.Schema.Types.String,ref:'Project'}]

})
const Employee=mongoose.model('Employee',employeeSchema) // to models name
/*
const EmployeeDetails=new Employee({
    _id:1,
    name:'Ram',
    email:'Ram123@gmail.com',
    salary:50000,
})

EmployeeDetails.save()
*/
module.exports=Employee