# Learnable Task VII
This is just a tiny regex validation module. I put it in a html file because I'm used to this system and it's so much easier to work with than readline is.
I hope that's not a problem. 

## CVV Regex
### /^\d{3}$/
This requests exactly 3 digits.

## Visa Regex
### /^4[0-9]{12,15}$/; 
This requests a 13-16 digit code, starting with 4.

## Verve Regex = 
### /^(506[0-1][0-9]{11,13} and 650[0-9]{12,14})$/
This requests a string of digits beginning with 504(0/1) and 12-14 more digits for the first regex. 
The second requires a list of numbers that begins with 650 and has a possible total length of 16-18 numbers.

## Amex Regex 
###  /^3[47][0-9]{13}$/;
This requires a 16-digit number, beginning with a 34 or a 37, followed by 13 other numbers.

## MasterCard Regex 
### /^5[1-5][0-9]{14}$/;
This regex expects a 5, followed by a number between 1 and 5, then 14 numbers with a range of 0-9.

## Sample numbers for each regex:

Visa: 4123456789012345
American Express: 371449635398431
Mastercard: 5112345678901234
Verve: 5060990580000217493
CVV: 435
