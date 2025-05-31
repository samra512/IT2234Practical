const express=require('express')
const router=express.Router()
const Project=require('../models/Project')
const Employee=require('../models/Employee')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Project.find() 
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
router.get('/:id/empcount', async (req, res) => {
  try {
    const id = req.params.id;

    // Find project by ID
    const project = await Project.findOne({ _id: id });
    if (!project) {
      return res.status(404).json({ message: `Project with ID ${id} not found` });
    }

    // Count employees working on that project
    const employees = await Employee.find({ projects: id });

    const count = employees.length;

    res.status(200).json({
      projectDetails: project,
      employeeCount: count
    });
  } catch (error) {
    console.error("Error in /:id/empcount route:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});



//insert many data to postman
router.post('/Project', async (req, res) => {
  try {
    const result = await Project.insertMany(req.body);

    if(result){
        res.status(202).json({message:'Project inserted'});
    }
}catch(error){
      res.status(500).json({error:error.message});
    }
   /*
    res.status(201).json({ message: 'Project inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }*/
});


router.get('/:id/empcount',async (req,res) =>{
    try{
        const id=req.params.id;

        const employee =await Employee.find({projects:id}).populate("projects");
    const emplycount=employee.length;
  
     res.status(200).json({
      message: `Total employees found for project ${id}`,
      projectDetails: employees,
      count: count
    });
  } catch (error) {
    console.error("Error in /:id/empcount route:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
})
module.exports=router