var a = 10;
document.write("The value of a is" + " " + a);

document.write('<br>');

var b = ++a;
document.write("The value of ++a is" + " " + b);
document.write('<br>');
document.write("Now the value of a is" + " " + b);


document.write('<br>');
var c = --a;
document.write("The value of --a is" + " " + c);
document.write('<br>');
document.write("Now the value of a is" + " " + c);


document.write('<br>');
var d = a--;
document.write("The value of a-- is" + " " + 11);
document.write('<br>');
document.write("Now the value of a is" + " " + d);


document.write('<br>');
document.write('<br>'); 

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(result);

// var result = --a - --b + ++b + b--;
//explanation     1 -   0 +   1 + 1  = 3
//               



var name = prompt("Whats your name? ");
var fatherName = prompt("whats your father name?");
alert("Hello" + " " + name + " " + fatherName + " " + "welcome to my page");


document.write('<br>');
document.write('<br>');

var ask = prompt("Table number please");
var number = ask || 5;
var table = "";

if (ask >= 1) {
    for (let i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "<br>";
    }
    document.write("<h2>Table of " + number + ":<br>" + table + "</h2>");
}
else {
    alert("Enter a valid number");
}

document.write('<br>');
document.write('<br>');

// var sub1 = prompt("Subject 1");
// var obt1 = prompt("Obtained marks of" + " " + sub1);
// var sub2 = prompt("Subject 2");
// var obt2 = prompt("Obtained marks of" + " " + sub2);
// var sub3 = prompt("Subject 3");
// var obt3 = prompt("Obtained marks of" + " " + sub3);

// document.write('<h2> Subject Total Marks    Obtained Marks Percentage </h2>');
// document.write('<br>');
// document.write( sub1 + "100" + " " + obt1 + " " + obt1 + "%");
// document.write('<br>');
// document.write(sub2 + " " + " " + " " +  "100" + " " + obt2 + " " + obt2 + "%");
// document.write('<br>');
// document.write(sub3 + " " + " " + " " + "100" + " " + obt3 + " " + obt3 + "%");

// document.write('<br>');
// document.write( + " " + obt1 + obt2 + obt3 + "%");

 // Collect subjects and obtained marks
 var sub1 = prompt("Subject 1");
 var obt1 = Number(prompt("Obtained marks of " + sub1));
 
 var sub2 = prompt("Subject 2");
 var obt2 = Number(prompt("Obtained marks of " + sub2));
 
 var sub3 = prompt("Subject 3");
 var obt3 = Number(prompt("Obtained marks of " + sub3));
 
 // Total marks for each subject
 var totalMarks = 100;
 
 // Calculate total obtained marks and overall percentage
 var totalObtained = obt1 + obt2 + obt3;
 var overallPercentage = (totalObtained / (totalMarks * 3)) * 100;

 // Display the results in a table
 document.write('<table>');
 document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>');
 document.write('<tr><td>' + sub1 + '</td><td>' + totalMarks + '</td><td>' + obt1 + '</td><td>' + ((obt1 / totalMarks) * 100).toFixed(2) + '%</td></tr>');
 document.write('<tr><td>' + sub2 + '</td><td>' + totalMarks + '</td><td>' + obt2 + '</td><td>' + ((obt2 / totalMarks) * 100).toFixed(2) + '%</td></tr>');
 document.write('<tr><td>' + sub3 + '</td><td>' + totalMarks + '</td><td>' + obt3 + '</td><td>' + ((obt3 / totalMarks) * 100).toFixed(2) + '%</td></tr>');
 document.write('<tr><td><strong>Total</strong></td><td><strong>' + (totalMarks * 3) + '</strong></td><td><strong>' + totalObtained + '</strong></td><td><strong>' + overallPercentage.toFixed(2) + '%</strong></td></tr>');
 document.write('</table>');
 document.write('Congratulations Student');










