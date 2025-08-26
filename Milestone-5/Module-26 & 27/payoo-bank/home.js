const validPin = 1234;
const bonusCoupon = "venom"; // 25% bonus for more than 2000tk payBill.

const transactionData = [];

// Function to get input values with number

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

// Function to get input values without number

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;

  return inputFieldValue;
}

// Function to get innerText

function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// Function to set innerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// Function to toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle buttons

function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// --- Add money Feature ----

document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // getting the value of the input field

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const addAmount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");

    // validating Amount to Add

    if (addAmount <= 0) {
      alert("Invalid Amount");
      return;
    }

    // getting the total amount

    const availableBalance = getInnerText("available-balance");

    // adding the total number

    const totalNewAvailableBalance = addAmount + availableBalance;

    //   validating account-number

    if (accountNumber.length < 11) {
      alert("please provide valid account number.");
      return;
    }

    // validating pin-number

    if (pin !== validPin) {
      alert("please enter the correct pin number");
      return;
    }

    // updating the available balance

    setInnerText(totalNewAvailableBalance);

    // Transaction feature

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    // Save to localStorage
    localStorage.setItem("transactions", JSON.stringify(transactionData));

    transactionData.push(data);

    // clear the input field after every add money click

    document.getElementById("bank").value = "";
    document.getElementById("account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin").value = "";
  });

// ---- withdraw feature -----

document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // getting the input value

    const agentNumber = getInputValue("withdraw-agent-number");
    const withdrawAmount = getInputValueNumber("withdraw-amount");
    const pin = getInputValueNumber("withdraw-pin");

    // getting the total amount

    const availableBalance = getInnerText("available-balance");

    // validating Amount to withdraw

    if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
      alert("Invalid Amount");
      return;
    }

    // withdrawing form the total amount

    const totalNewAvailableBalance = availableBalance - withdrawAmount;

    // validating agent-number and Pin

    if (agentNumber.length < 11) {
      alert("please provide valid agent number.");
      return;
    }

    if (pin !== validPin) {
      alert("Invalid pin number!!");
      return;
    }

    // updating the available balance

    setInnerText(totalNewAvailableBalance);

    // Transaction part

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);

    //   clearing the input field
    document.getElementById("withdraw-agent-number").value = "";
    document.getElementById("withdraw-amount").value = "";
    document.getElementById("withdraw-pin").value = "";
  });

// --------- Transfer Amount Feature ------

document
  .getElementById("btn-transfer")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // getting the value of the input field

    const agentNumber = getInputValue("transfer-user-number");
    const transferAmount = getInputValueNumber("transfer-amount");
    const pin = getInputValueNumber("transfer-pin");

    // getting the total amount

    const availableBalance = getInnerText("available-balance");

    // withdrawing form the total amount

    const totalNewAvailableBalance = availableBalance - transferAmount;

    //   validating account-number

    if (agentNumber.length < 11) {
      alert("please provide valid agent number.");
      return;
    }

    // validating pin-number

    if (pin !== validPin) {
      alert("Invalid pin number!!");
      return;
    }

    // updating the available balance

    setInnerText(totalNewAvailableBalance);

    // Transaction feature

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);

    // clear the input field after every add money click

    document.getElementById("transfer-user-number").value = "";
    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-pin").value = "";
  });

// ------- Get Bonus ---------

document
  .getElementById("btn-bonus")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get coupon input value
    const enteredCoupon = getInputValue("coupon");
    const availableBalance = getInnerText("available-balance");

    // check if input is empty
    if (enteredCoupon === "") {
      alert("Please enter a coupon code!");
      return;
    }

    // validate coupon
    if (enteredCoupon.toLowerCase() === bonusCoupon) {
      // Check if balance is more than 2000 for 5% bonus
      if (availableBalance > 2000) {
        const bonusAmount = Math.floor(availableBalance * 0.05); // 5% bonus
        const totalNewAvailableBalance = availableBalance + bonusAmount;

        // update balance
        setInnerText(totalNewAvailableBalance);

        // add transaction
        const data = {
          name: `Bonus Applied: +${bonusAmount} TK`,
          date: new Date().toLocaleTimeString(),
        };
        transactionData.push(data);
        localStorage.setItem("transactions", JSON.stringify(transactionData));

        alert(`🎉 Coupon Applied! You received ${bonusAmount} TK bonus.`);
      } else {
        alert("Balance must be more than 2000 TK to apply this bonus.");
      }
    } else {
      alert("❌ Invalid coupon code.");
    }

    // clear input after submission
    document.getElementById("coupon").value = "";
  });

// Transaction feature

// ---------- Pay Bill -------------

document
  .getElementById("btn-pay-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get input

    const payMethod = getInputValue("pay-method");
    const billerAccount = getInputValue("biller-account-number");
    const paymentAmount = getInputValueNumber("pay-amount");
    const pin = getInputValueNumber("pay-pin");

    // getting the total amount

    const availableBalance = getInnerText("available-balance");

    // adding the total number

    const totalNewAvailableBalance = availableBalance - paymentAmount;

    //   validating account-number

    if (billerAccount.length < 11) {
      alert("please provide valid account number.");
      return;
    }

    // validating pin-number

    if (pin !== validPin) {
      alert("please enter the correct pin number");
      return;
    }

    // updating the available balance

    setInnerText(totalNewAvailableBalance);

    // Transaction feature

    const data = {
      name: "Pay Bill",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);

    // clear the input field after every add money click

    document.getElementById("pay-method").value = "";
    document.getElementById("biller-account-number").value = "";
    document.getElementById("pay-amount").value = "";
    document.getElementById("pay-pin").value = "";
  });

// Transaction Feature

document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
                <div
            class="bg-white rounded-xl p-3 flex justify-between items-center mt-3"
          >
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img src="./assets/purse1.png" alt="" />
              </div>
              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>`;

      transactionContainer.appendChild(div);
    }
  });

// ---- toggling feature -----

// for add-money
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-button");
});

// for withdraw money
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");
  });

// for transfer money

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");
  });

// for Get Bonus

document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("bonus-button");
});

// pay bill

document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handleToggle("pay-bill-parent");
    handleButtonToggle("pay-bill-button");
  });

// Transactions
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    handleToggle("transaction-parent");
    handleButtonToggle("transaction-button");
  });

// Log-out to home page

document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});
