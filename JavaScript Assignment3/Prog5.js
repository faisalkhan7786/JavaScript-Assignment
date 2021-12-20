const person = {
    firstName : "Mohammed",
    lastName : "Faisher",
    greeting : function(){
        alert('Hi! I\m ' + this.firstName + this.middleName + this.lastName + '.');
    }
};

document.write(person.firstName + " ");
person.middleName = "Shah";
document.write(person.middleName + "  ");
document.write(person.lastName);
console.log(person.greeting());