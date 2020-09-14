const express = require('express');
const router = express.Router();
const Employ = require('../model/Employ')
const Counter = require('../model/CounterEmploy')

router.get('/employs/',async(req,res)=>{
  console.log('list employs');
  try {
    let employs = await Employ.find();

    let count =await Employ.countDocuments()

    res.status(200).send({message:calculate(count,employs)})
  } catch (err) {
    console.log(err);
  res.status(500).send({message:err})
  }
})

router.post('/employs/add/',async(req,res)=>{
  let{Name,ContractType,RoleId,RoleName,RoleDesc,HourSalary,MontlySalary}=req.body

  console.log(ContractType);
  if (ContractType ==1) {
    ContractType="HourlySalaryEmployee"
  }else {
    ContractType="MonthlySalaryEmployee"
  }


  try {
    let employ = new Employ({

      name:Name,
      contractTypeName:ContractType,
      roleId:RoleId,
      roleName:RoleName,
      roleDescription:RoleDesc,
      hourSalary:HourSalary,
      monthlySalary:MontlySalary
    })
    employ._id = await getSequenceNext("EmployId")


    let employSaved = await employ.save()
    res.status(200).send({message:'saved'})
  } catch (err) {
    console.log(err);
    res.status(500).send({message:'error'})

  }
})

router.post('/employs/find',async (req,res)=>{
    let {Id} = req.body
    try {
      let employFound = await Employ.findOne({_id:Id})

      res.status(200).send({message:calculateEmploy(employFound)})
    } catch (err) {
      res.status(500).send({message:err})
    }
})

function calculate(x,y) {
  var emp = []
  for (var variable of y) {

    if (variable.contractTypeName == "HourlySalaryEmployee") {
      variable["_doc"]["yearSalary"]=variable.hourSalary*12*120

    }else if (variable.contractTypeName =="MonthlySalaryEmployee") {

      variable["_doc"]["yearSalary"]=variable.monthlySalary*12
    }

    emp.push(variable)

  }

  return emp
}

function calculateEmploy(y) {

  if (y.contractTypeName == "HourlySalaryEmployee") {
    y["_doc"]["yearSalary"]=y.hourSalary*12*120

  }else if (y.contractTypeName =="MonthlySalaryEmployee") {
    y["_doc"]["yearSalary"]=y.monthlySalary*12

  }
  return y
}

async function getSequenceNext(seqName) {

  try {

    let countDoc = await Counter.countDocuments();

    if (countDoc == 0) {

      let counter = new Counter({});
      await counter.save()
    }


    let count = await Counter.findOneAndUpdate(
      {"_id":seqName},
      {$inc:{"seq":1}}
      ,{returnNewDocument:false}
    )

    return count.seq
  } catch (err) {
    console.log(err);
  }


}

module.exports = router;
