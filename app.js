

var hasnain = {
    name: "Hasnain",
    contact: 1234566655,
    roll: 819,
    id: 5860,
    result: "A+",
    percentage: 86,


};

var mujtaba = {
    name: "Mujtaba",
    result: "A1+",
    percentage: 91,
    contact: 1234566655,
    roll: 789,
    id: 5860,

};

var asim = {
    name: "Asim",
    result: "B",
    percentage: 67,
    contact: 1234566655,
    roll: 134,
    id: 5860,

};

var wahab = {
    name: "Wahab",
    result: "A+",
    percentage: 83,
    contact: 1234566655,
    roll: 5848,
    id: 5860,

};
var mustafa = {
    name: "Mustafa",
    result: "A",
    percentage: 78,
    contact: 1234566655,
    roll: 123,
    id: 5860,

};

function search() {
    var name = "Name :"
    var percentage = "Percentage :"
    var result = "Result :"
    var input = document.getElementById("inp").value;
    for (var i = 0; i = input.value; i++);
    if (input == "mustafa") {
        alert(`${name} ,  ${mustafa.name} \n ${result}, ${mustafa.result} \n ${percentage},${mustafa.percentage}`)

    }
    else if (input == "hasnain") {
        alert(`${name} ,  ${hasnain.name} \n ${result}, ${hasnain.result} \n ${percentage},${hasnain.percentage}`)
    }

    else if (input == "wahab") {
        alert(`${name} ,  ${wahab.name} \n ${result}, ${wahab.result} \n ${percentage},${wahab.percentage}`)
    }

    else if (input == "mujtaba") {
        alert(`${name} ,  ${mujtaba.name} \n ${result}, ${mujtaba.result} \n ${percentage},${mujtaba.percentage}`)
    }

    else if (input == "asim") {
        alert(`${name} ,  ${asim.name} \n ${result}, ${asim.result} \n ${percentage},${asim.percentage}`)
    }
    else {
        alert("All letter is small.\nPlease Check the name.\nPlease some thing enter")
    }
    var input = document.getElementById("inp").value = "";
}
// Complet the Search Engine

// var table = document.createElement("TABLE")
// var tr = document.createElement("TR")
// var td =  document.createElement("TD")
// table.setAttribute("border","1px solid")
//   table.appendChild(tr)
//  tr.appendChild(td)

function mus() {
    var name = "Name "
    var roll = "Roll "
    var id = "Id "
    var cont = "Contact "

    document.write(`<table cellspacing =20px >
 
 <tr>
 <td> ${name} </td> <td> ${id} </td>
 <td> ${roll} </td> <td> ${cont} </td>

 </tr>
 
 <tr>
 <td> ${mustafa.name} </td> <td> ${mustafa.id} </td>
 <td> ${mustafa.roll} </td> <td> ${mustafa.contact} </td>

 </tr>
 
 <tr>
 <td> ${mujtaba.name} </td> <td> ${mujtaba.id} </td>
 <td> ${mujtaba.roll} </td> <td> ${mujtaba.contact} </td>

 </tr>

 <tr>
 <td> ${hasnain.name} </td> <td> ${hasnain.id} </td>
 <td> ${hasnain.roll} </td> <td> ${hasnain.contact} </td>

 </tr>
 <tr>
 <td> ${asim.name} </td> <td> ${asim.id} </td>
 <td> ${asim.roll} </td> <td> ${asim.contact} </td>

 </tr>

 <tr>
 <td> ${wahab.name} </td> <td> ${wahab.id} </td>
 <td> ${wahab.roll} </td> <td> ${wahab.contact} </td>

 </tr>
 </table>`)



}