const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Step 1: agar pehle se total row hai to remove karo
  const existingRow = document.getElementById("total-row");
  if (existingRow) {
    existingRow.remove();
  }

  // Step 2: sab prices select karo
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  // Step 3: sum calculate karo
  prices.forEach((price) => {
    total += Number(price.innerText);
  });

  // Step 4: new row create karo
  const newRow = document.createElement("tr");
  newRow.id = "total-row";

  const newCell = document.createElement("td");
  newCell.colSpan = 2; // columns ke hisaab se adjust kar lena
  newCell.innerText = total;

  newRow.appendChild(newCell);

  // Step 5: table me add karo
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);