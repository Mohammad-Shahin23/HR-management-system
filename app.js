`use strict`;



function Account(employeeID, fullName, department, level, salary,imgPath ) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = salary;
    this.imgPath = imgPath;
    
}


Account.prototype.generatID = function () {
    let min=1000;
    let max=10000;
    this.price =  Math.floor(Math.random() * (max - min) + min) ;
}

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







// const A1 = new Account('1000 ','Ghazi Samer', 'Administration','Senior');
// const A2 = new Account('1001', 'Lana Ali', 'Finance', 'Senior');
// const A3 = new Account('1002', 'Tamara Ayoub', 'Marketing','Senior');
// const A4 = new Account('1003','Safi Walid	','Administration',	'Mid-Senior'); 
// const A5 = new Account('1004', 'Omar Zaid','Development', 'Senior');
// const A6 = new Account('1005','Rana Saleh', 'Development', 'Junior');
// const A7 = new Account('1006', 'Hadi Ahmad',	'Finance', 'Mid-Senior');


Account.prototype.render = function() {

    // const test = document.getElementsByClassName('prag');
    // console.log(test);

    const container = document.getElementById('Employes');
    console.log(container);

    // 1. create the element
    // 2. append it to it's parent
    // 3. add text content to it || attribuates

    const divEl = document.createElement('div');
    container.appendChild(divEl);



    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imgPath);
    imgEl.width = "250";
    imgEl.height = "200";


   
    const nameEl = document.createElement('h3');
    divEl.appendChild(nameEl);
    nameEl.textContent =`Employe Name ${this.fullName}`;


    const idEl = document.createElement('h5');
    divEl.appendChild(idEl);
    nameEl.textContent =`Employe ID ${this.employeeID}`

   
    const salaryEl = document.createElement('h5');
    divEl.appendChild( salaryEl);
    salaryEl.textContent = `Salary: ${this.salary}$`
    


    const  departmentEl = document.createElement('h5');
    divEl.appendChild( department);
    departmentEl.textContent = `department: ${this.department}$`


    const  levelEl = document.createElement('h5');
    divEl.appendChild( levelEl);
    levelEl.textContent = `level: ${this.level}$`



    
   
  

   

    //display a line between the drinks
    const hrEl = document.createElement('hr');
    divEl.appendChild(hrEl);

}



let EmployeForm = document.getElementById("EmployeForm");
EmployeForm.addEventListener('submit', addNewEmploye);

function addNewEmploye(event) {
    event.preventDefault();
    console.log(event);
    let fullName = event.target.Full-Name.value;
    let department = event.target.Department.value;
    let Level = event.target.Level.value;
    let imgPath = event.target.imgUrl.value;
    // let employeeID = event.target.employeeID.value;
    // let salary =  event.target.salary.value
   

    let newEmploye = new Account(employeeID, fullName, department, level, salary, imgPath);
    
    newEmploye.render();   


}
