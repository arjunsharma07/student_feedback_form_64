# Student Feedback Form - Test Cases

| Test Case ID | Test Scenario | Input | Expected Result |
|---|---|---|---|
| TC01 | Submit form with all valid details | Valid name, email, rating and feedback | Form should submit successfully |
| TC02 | Submit form with empty name | Name = empty | Error message should appear |
| TC03 | Submit form with empty email | Email = empty | Error message should appear |
| TC04 | Enter invalid email | abc@ | Email validation error should appear |
| TC05 | Submit without selecting rating | Rating = none | Rating error should appear |
| TC06 | Enter valid feedback | "Good teaching" | Feedback should be accepted |
| TC07 | Enter empty feedback | Feedback = empty | Error message should appear |
| TC08 | Submit completely empty form | All fields empty | Required-field errors should appear |
| TC09 | Reset form | Click Reset | All fields should become empty |
| TC10 | Submit valid form | All valid inputs | Success message should appear |