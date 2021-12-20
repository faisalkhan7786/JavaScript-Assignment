const Even = function (num) {
    return (num % 2 == 0);

}
document.write(Even(3) + "</br>");
document.write(Even(4) + "</br>");

var arr = [1, 2, 3, 4, 5, 7];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {

        document.writeln(arr[i] + "<br />");
    }
}