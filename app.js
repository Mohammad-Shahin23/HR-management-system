`use strict`;



function Account(employeeID, fullName, department, level, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = salary;
    
}

const A1 = new Account('1000 ','Ghazi Samer', 'Administration','Senior');
const A2 = new Account('1001', 'Lana Ali', 'Finance', 'Senior');
const A3 = new Account('1002', 'Tamara Ayoub', 'Marketing','Senior');
const A4 = new Account('1003','Safi Walid	','Administration',	'Mid-Senior'); 
const A5 = new Account('1004', 'Omar Zaid','Development', 'Senior');
const A6 = new Account('1005','Rana Saleh', 'Development', 'Junior');
const A7 = new Account('1006', 'Hadi Ahmad',	'Finance', 'Mid-Senior');




Account.prototype.randomSalary= function () {
    console.log(this.level);

    if(this.level=="Senior"){
        let min=1500;
        let max=2000;
       return netSalary(Math.floor(Math.random() * (max - min) + min));
    }else if (this.level=="Mid-Senior"){
        let min=1000;
        let max=1500;
       return netSalary(Math.floor(Math.random() * (max - min) + min));

    }else if (this.level=="Junior"){
        let min=500;
        let max=1000;
        console.log("random",Math.random() * (max - min) + min);
       return netSalary(Math.floor(Math.random() * (max - min) + min));

}
}
function netSalary(salary){
let S= salary-((salary*7.5)/100);

return S;


    


}

Account.prototype.render = function () {
    document.write(`${this.fullName}:  ${this.randomSalary()} <br><br>`);
    




}
A1.render()
A2.render()
A3.render()
A4.render()
A5.render()
A6.render()
A7.render()




console.log(A1.this.fullName.randomSalary());
console.log(A2.randomSalary());
console.log(A3.randomSalary());
console.log(A4.randomSalary());
console.log(A5.randomSalary());
console.log(A6.randomSalary());
console.log(A7.randomSalary());



// function generateTable() {
//     // creates a <table> element and a <tbody> element
//     const tbl = document.createElement("table");
//     const tblBody = document.createElement("tbody");
  
//     // creating all cells
//     for (let i = 0; i < 8; i++) {
//       // creates a table row
//       const row = document.createElement("tr");
  
//       for (let j = 0; j < 2; j++) {
       
//         const cell = document.createElement("td");
//         const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       // add the row to the end of the table body
//       tblBody.appendChild(row);
//     }
  
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     document.body.appendChild(tbl);
//     // sets the border attribute of tbl to '2'
//     tbl.setAttribute("border", "2");
//   }