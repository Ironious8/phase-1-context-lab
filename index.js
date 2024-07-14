/* Your Code Here */

function createEmployeeRecord([arrayRecord]) {
    return {
        firstName:arrayRecord[0],
        familyName:arrayRecord[1],
        title:arrayRecord[2],
        payPerHour:arrayRecord[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function createEmployeeRecords([arrayRecords]) {
    return arrayRecords.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    let [date, hour]=dateStamp.split('');
    this.timeInEvents.push({type:"TimeIn", date, hour:parseInt(hour, 10)});
    return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, hour]=dateStamp.split('');
    this.timeOutEvents.push({type:"TimeOut", date, hour:parseInt(hour, 10)});
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn= this.timeInEvents.find(event => event.date===date);
    let timeOut= this.timeOutEvents.find(event => event.date===date);
    return(timeOut.hour-timeIn.hour)/100;
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this,date);
    return hours*this.payPerHour;
}
if (typeof allWagesFor==='undefined') {
function allWagesFor() {
    let payableDates=this.timeInEvents.map(event => event.date);
    let payable=payableDates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
    return payable;
  }
}
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName===firstName);
    
}

function calculatePayroll([employeeRecords]) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}






/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

