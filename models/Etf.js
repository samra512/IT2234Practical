const mongoose=require('mongoose')
const etfSchema = new mongoose.Schema({
      employeeID: { type: mongoose.Schema.Types.String, ref: 'Employee', required: true ,unique: true }, // Unique ensures only one ETF per Employee
    monthlyContribution: { type: Number, min: 0 }, 
    totalContribution: { type: Number, min: 0 }, 
    lastUpdated: { type: Date, default: Date.now } 
});
const Etf=mongoose.model('Etf',etfSchema) 
/*
const newETF = new Etf({
    employeeID: 'EMP1001', // Employee ID reference
    monthlyContribution: 5000, 
    totalContribution: 60000, 
    lastUpdated: new Date() 
});

newETF.save()
*/
module.exports=Etf