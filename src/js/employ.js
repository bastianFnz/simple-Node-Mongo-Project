
const employAddForm = document.getElementById('addEmploy-form');
const employName = document.getElementById('employ-name');
const employlContractType = document.getElementById('employ-contractType');
const employRoleId = document.getElementById('employ-roleId');
const employRoleName = document.getElementById('employ-roleName');
const employRoleDesc = document.getElementById('employ-roleDesc');
const employHourSalary = document.getElementById('employ-hourSalary');
const employMonthlySalary = document.getElementById('employ-monthlySalary');


async function newEmploy(e) {
  e.preventDefault();


  const sendBody = {
    Name:employName.value,
    ContractType:employlContractType.value,
    RoleId:employRoleId.value,
    RoleName:employRoleName.value,
    RoleDesc:employRoleDesc.value,
    HourSalary:employHourSalary.value,
    MonthlySalary:employMonthlySalary.value

  }

  try {
    const res = await fetch('/employs/add/',{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify(sendBody)
    }).then(res=>res.json()).then(res=>{
      console.log(res);
      alert(res.message);
      windows.location.href = '/'

    })
  } catch (err) {
    alert(err)
    return
  }
}

employAddForm.addEventListener('submit',newEmploy);
