/*
Yes, I realize I went overboard with the CSS but I couldn't stop myself when I started. The test is on functioning regex codes anyway, couldn't hurt.
*/

const form = document.getElementById('card-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cardNumber = document.getElementById('card-number').value;
  const cvvNumber = document.getElementById('cvv-number').value;

  const cvvRegex = /^\d{3}$/;
  const visaRegex = /^4[0-9]{12,15}$/;
  const verveRegex = /^(506[0-1]{1}[0-9]{11,13}|650[0-9]{12,14})$/;
  const expressAmericaRegex = /^3[47][0-9]{13}$/;
  const mastercardRegex = /^5[1-5][0-9]{14}$/;

  let message = '';

  if (visaRegex.test(cardNumber)) {
    message = "Credit Card Type: Visa. Just upgrade to MasterCard, it's time to level up.";
    console.log(message);
  } else if (expressAmericaRegex.test(cardNumber)) {
    message = "Credit Card Type: American Express. Wetin OG like you dey find here??";
    console.log(message);
  } else if (mastercardRegex.test(cardNumber)) {
    message = "Credit Card Type: Mastercard. I greet you, Boss.";
    console.log(message);
  } else if (verveRegex.test(cardNumber)) {
    message = "Credit Card Type: Verve. Try to upgrade to Visa or Mastercard, you're not a student.";
    console.log(message);
  } else {
    message = "Invalid Card";
    console.log(message);
  }

  message += '<br>'; // Adding line break to reduce the clutter

  if (cvvRegex.test(cvvNumber)) {
    message += "CVV received";
  } else {
    message += "Invalid cvv number. You no go like try again??";
    console.log(message);
  }

  resultDiv.innerHTML = message;
});
