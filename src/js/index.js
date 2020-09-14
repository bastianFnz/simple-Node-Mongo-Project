const employId = document.getElementById('employ-id')

function getEmploy(){


  let clear = document.getElementById('dash')

  while (clear.firstChild){
    clear.removeChild(clear.firstChild)
  }
  if (employId.value.length == 0) {
    getAllEmployes()
  }else {
    findEmploy(employId.value)
  }
}

async function getAllEmployes() {

  try {
    const res = await fetch('/employs/',{
      method:'GET',
      headers:{
        'content-Type':'application/json'
      }
    }).then(res=>res.json()).then(res=>{
      table(res)
    })
  } catch (err) {
    alert(err)
  }
}

function table(item) {
  let dash = document.getElementById('dash')
  let trC = document.createElement("tr")
    for (var employ of item.message) {

      let trC = document.createElement("tr")


        let td1 = document.createElement("td")
        let tx1 = document.createTextNode(employ._id)
        td1.appendChild(tx1)
        trC.appendChild(td1)
        let td2 = document.createElement("td")
        let tx2 = document.createTextNode(employ.name)
        td2.appendChild(tx2)
        trC.appendChild(td2)
        let td3 = document.createElement("td")
        let tx3 = document.createTextNode(employ.contractTypeName)
        td3.appendChild(tx3)
        trC.appendChild(td3)
        let td4 = document.createElement("td")
        let tx4 = document.createTextNode(employ.roleId)
        td4.appendChild(tx4)
        trC.appendChild(td4)
        let td5 = document.createElement("td")
        let tx5 = document.createTextNode(employ.roleName)
        td5.appendChild(tx5)
        trC.appendChild(td5)
        let td6 = document.createElement("td")
        let tx6 = document.createTextNode(employ.roleDescription)
        td6.appendChild(tx6)
        trC.appendChild(td6)
        let td7 = document.createElement("td")
        let tx7 = document.createTextNode(employ.hourSalary)
        td7.appendChild(tx7)
        trC.appendChild(td7)
        let td8 = document.createElement("td")
        let tx8 = document.createTextNode(employ.monthlySalary)
        td8.appendChild(tx8)
        trC.appendChild(td8)
        let td9 = document.createElement("td")
        let tx9 = document.createTextNode(employ.yearSalary)
        td9.appendChild(tx9)
        trC.appendChild(td9)

        dash.appendChild(trC)
      }
}

async function findEmploy(item) {
  

  const sendBody = {
    Id:item
  }

  try {
    const res = await fetch('/employs/find',{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify(sendBody)
      }).then(res=>res.json()).then(res =>{

        let dash = document.getElementById('dash')
        let trC = document.createElement("tr")

              let td1 = document.createElement("td")
              let tx1 = document.createTextNode(res.message._id)
              td1.appendChild(tx1)
              trC.appendChild(td1)
              let td2 = document.createElement("td")
              let tx2 = document.createTextNode(res.message.name)
              td2.appendChild(tx2)
              trC.appendChild(td2)
              let td3 = document.createElement("td")
              let tx3 = document.createTextNode(res.message.contractTypeName)
              td3.appendChild(tx3)
              trC.appendChild(td3)
              let td4 = document.createElement("td")
              let tx4 = document.createTextNode(res.message.roleId)
              td4.appendChild(tx4)
              trC.appendChild(td4)
              let td5 = document.createElement("td")
              let tx5 = document.createTextNode(res.message.roleName)
              td5.appendChild(tx5)
              trC.appendChild(td5)
              let td6 = document.createElement("td")
              let tx6 = document.createTextNode(res.message.roleDescription)
              td6.appendChild(tx6)
              trC.appendChild(td6)
              let td7 = document.createElement("td")
              let tx7 = document.createTextNode(res.message.hourSalary)
              td7.appendChild(tx7)
              trC.appendChild(td7)
              let td8 = document.createElement("td")
              let tx8 = document.createTextNode(res.message.monthlySalary)
              td8.appendChild(tx8)
              trC.appendChild(td8)
              let td9 = document.createElement("td")
              let tx9 = document.createTextNode(res.message.yearSalary)
              td9.appendChild(tx9)
              trC.appendChild(td9)

        dash.appendChild(trC)
      })
  } catch (err) {

  alert(err)

  }
}
