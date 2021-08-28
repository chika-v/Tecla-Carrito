var date = new Date('2011', '01', '02');
alert('the original date is ' + date);
var newdate = new Date(date);

newdate.setDate(newdate.getDate() - 7); // minus the date

var nd = new Date(newdate);
alert('the new date is ' + nd);

console.log()