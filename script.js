

const form = document.getElementById("form")

form.addEventListener('submit',function(e){
    e.preventDefault();
});


function handeSubmit(){


const isValid =true
    

const firstName = document.getElementById("fname")

if(firstName.value === ""){
    alert("Please  Enter  the FirstName")
    isValid = false;
}
const lastName = document.getElementById("lname")
if(lastName.value === ""){
    alert("Please  Enter  the LastName")
    isValid = false;
}

const rollNo = document.getElementById("rollno")
if(rollNo.value === ""){
    alert("Please  Enter  the RollNo")
    isValid = false;
}

const age = document.getElementById("age")
if(age.value === ""){
    alert("Please Enter your Age")
    isValid = false;
}
const course = document.getElementById("course")
if(course.value === ""){
    alert("Please Enter your Course")
    isValid = false;
}
const uName = document.getElementById("Uname")
if(uName.value === ""){
    alert("Please Enter your UniversityName")
    isValid = false;
}
const address = document.getElementById("address")
if(address.value === ""){
    alert("Please Enter your Address")
    isValid = false;
}

if(isValid){
    alert("Form Submitted Successfully..!")
    form.reset()
}
}

// const array =[]

// const firstName = document.getElementById("fname").value
// const lastName = document.getElementById("lname").value
// const rollNo = document.getElementById("rollno").value
// const age = document.getElementById("age").value
// const course = document.getElementById("course").value
// const Uname = document.getElementById("Uname").value
// const address= document.getElementById("address").value






// function handleSubmit(){
    
//    const display = document.getElementById("display-feild")

//    display.push(firstName)
    
//     // array.push(firstName)

//     // document.getElementById("display-feild").push(firstName);


// }