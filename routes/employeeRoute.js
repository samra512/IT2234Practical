const express=require('express')
const router=express.Router()
const Employee=require('../models/Employee')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Employee.find().populate('departments') // Fetch details of ALL departments linked to the employee

        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

module.exports=router