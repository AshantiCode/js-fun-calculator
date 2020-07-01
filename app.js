document.getElementById("calculator").onchange = function () {
  let totalBill = Number(document.getElementById("billInput").value);
  let tipPercent = Number(document.getElementById("tipInput").value);
  let splitByPerson = Number(document.getElementById("splitInput").value);

  let tipValue = (totalBill / 100) * tipPercent;
  let billPerPerson = Math.floor((totalBill + tipValue) / splitByPerson);

  document.getElementById("tipOutput").innerHTML = tipPercent + "%";
  document.getElementById("splitOutput").innerHTML = splitByPerson;
  document.getElementById("newBill").innerHTML = billPerPerson;
};
