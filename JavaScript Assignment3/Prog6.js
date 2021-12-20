var str = '({"firstName":"Mohammed","lastName":"Faisher"})';
var obj = eval(str);
document.write("String Is Converted Into Object Using Eval() : ")
document.write(obj.firstName + " "); 
document.write(obj.lastName);