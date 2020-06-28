# 03 JavaScript: Password Generator

Created an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also features a user interface and is responsive, ensuring that it adapts to multiple screen sizes.


## Functionality

WHEN user clicks the button to generate a password,
    THEN he/she is presented with a series of prompts for password criteria.
WHEN prompted for password criteria,
    THEN user selects which criteria to include in the password:
        WHEN prompted for the length of the password
            THEN he chooses a length of at least 8 characters and no more than 128 characters;
        WHEN prompted for character types to include in the password
            THEN he chooses lowercase, uppercase, numeric, and/or special characters.
WHEN user answers each prompt,
    THEN his/her input should be validated and at least one character type should be selected.

WHEN all prompts are answered, THEN a password is generated that matches the selected criteria.
WHEN the password is generated, THEN the password is written to the page and displayed
```

The following image demonstrates the application functionality:

[password generator demo](./Assets/03-javascript-homework-demo.png)


## Main Pseudocode

    Build HTML form with text area to display the generated password and "Generate password" button.

    Use .addEventListener to generate password on "click" event.

    Prompt user, validate entries and generate password based on user's choices.

    Write the generated password into the form (text area) to display for the user.

## Pseudocode for GeneratePassword function

    WHEN user clicks the "Generate Password" button to generate a password,
    then 
        JavaScript prompt for password length;
        validate the input to make sure that user actually typed a number and it is between 8 and 128.

        JavaScript prompt for uppercase letters using CONFIRM (returns boolean variable);
        JavaScript prompt for lowercase letters using CONFIRM (returns boolean variable);
        JavaScript prompt for numbers using CONFIRM (returns boolean variable);
        JavaScript prompt for special characters using CONFIRM (returns boolean variable);

        Validate prompts for characters to make sure at least one choice was made;
        if user did not make a single choice, then re-do all the prompts until user chose at least  one type of characters for password.

        Once the choices are made, build a string select_pass based on user's choices of characters.
        
        Use Math.Random to generate a random number that would be used to select one character from the string select_pass.Repeat adding the characters to the password until the requested length of the password is reached.

        Return the generated password value to the writePassword function.

    End of generatePassword function.
    
