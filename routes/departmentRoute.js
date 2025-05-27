const express=require('express')
const router=express.Router()
const Department=require('../models/Department')
const Employee=require('../models/Employee'); 
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Department.find() 
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

//1.
router.get('/:id/empl',async(req,res)=>{
    try{
        const id=req.params.id
  //  const results = await Department.findById(id).select("name").populate("employeeID");
    const results = await Department.findById(id).populate("employeeID");

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
router.post('/Department', async (req, res) => {
  try {
    const result = await Department.insertMany(req.body);
    res.status(201).json({ message: 'Department inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//2.
// Get a department by ID along with its employees
router.get('/:did/employees', async (req, res) => {
    const did = req.params.did;
    try {
        const department = await Department.findById(did)
        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }

        // Fetch employees linked to this department
        const employees = await Employee.find({ departmentID: did });

        res.status(200).json({department,employees});
    } catch (error) {
        console.error("Error fetching department with employees:", error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

//3. select a field which want to display
router.get('/:id/emp',async(req,res)=>{
    try{
        const id=req.params.id
  const results = await Department.findById(id).select("name").populate("employeeID");
    
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
router.post('/Department', async (req, res) => {
  try {
    const result = await Department.insertMany(req.body);
    res.status(201).json({ message: 'Department inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports=router