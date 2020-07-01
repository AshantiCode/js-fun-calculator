document.getElementById("calculator").onchange = function () {
  // get input values, convert strings to numbers
  let bill = Number(document.getElementById("billInput").value);
  let tipPercent = Number(document.getElementById("tipInput").value);
  let splitByPerson = Number(document.getElementById("splitInput").value);

  // calculations of tip and bill, bill per person
  let tipValue = (bill / 100) * tipPercent;
  let billPerPerson = (Math.round(((bill + tipValue) / splitByPerson) * 100) / 100).toFixed(2);
  let tipEach = (Math.round((tipValue / splitByPerson) * 100) / 100).toFixed(2);
  let totalBill = bill + tipValue;
  console.log("Total Bill: ", totalBill);
  // output input values and math calc to screen
  document.getElementById("tipOutput").innerHTML = tipPercent + "%";
  document.getElementById("splitOutput").innerHTML = splitByPerson;
  document.getElementById("newBill").innerHTML = billPerPerson + "€";
  document.getElementById("tipEach").innerHTML = tipEach + "€";
  document.getElementById("totalBill").innerHTML = totalBill + "€";
};
