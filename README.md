#### Table of Contents
- [Task - User Account Management](#user-account-management)
  - [Context](#context)
  - [Requirements](#requirements)
  - [Delivery expectations](#delivery-expectations)
  - [Things to note](#things-to-note)
- [Installation](#installation)
- [Solution - Test Suite](#test-suite)

# User Account Management

## Context
__Company Z__ provides essential online services for tens of thousands of users through their platform __ZPlatform.__

__Company Z__ is going through stages of growth and adding 1000's of users daily - while still serving millions of transactions per month. One of the key features of the platform that need improvement are:

- Ease the on-boarding process of new users.
- Highly <ins>__available__</ins> and <ins>__performant__</ins> application to handle 1000's of requests simultaneously.
- Store and manage user data at orders of magnitude of <ins>__scale.__</ins>
- Implement best in class <ins>__security__</ins> features.

## Requirements

Build <ins>user account management</ins> features of a web application to meet the above requirements.

### 1. <ins>The features should include:</ins>
 1. Ability to create an account - signup
 2. Login and Logout
 3. Reset password

### 2. <ins>Security features:</ins>
 1. Password strength enforcement and validation - based on best practices
 2. Support for multi-factor authentication
 3. Support for login link
 4. Support for the reset link

### 3. <ins>User profile:</ins>
 1. Profile photo - use an actual image, not an avatar
 2. Names - First and last names
 3. Gender
 4. Age
 5. Date of birth
 6. Marital status - SINGLE, MARRIED, DIVORCE or WIDOWED
 7. Nationality

### 4. <ins>Account verification:</ins>

Implement a concept of a _verified account_ - The idea is to allow a user to provide more information about themselves - in this case, they will provide a National Identification Number or a passport number. They will also upload an image of the official document.

 - Allow user to input NID or passport number
 - Allow user to upload image of their document
 - The payload will be posted to an endpoint - this can be simulated
 - The account should be in 3 different states - UNVERIFIED, PENDING VERIFICATION, VERIFIED
 - Assume that verification is done by way of a person inspecting the submitted document - therefore not real-time
 - Provide an endpoint to be called back - once the outcome of verification is complete
 - <ins>Optionally</ins> - send a notification to the user when the account is verified
 - Mark the account as verified - using badges (Twitter as an example)

## Delivery expectations
1. A presentation deck of the design:

    > ??????? Google Presentation Deck link

2. A working prototype of the solution:

    > ??????? Github link for the source code

    > ??????? A ReadMe with instruction on how to run/test the solution (Root of code base)

    > ??????? (optional) Link of the demo solution

3. Developer will walk the team through his solution.

## Things to note
1. Clearly design and define your system architecture
2. Be ready to communicate and defend your design decisions
3. <ins>Security</ins> and <ins>scale</ins> as design principles
4. Clearly show how your tests have been implemented (main focus can be put on UI or backend or both)

# Installation
To install this project, run ```git clone https://github.com/jbkwizera/zplatform.git``` to clone it. Then move into the project root directory ```cd zplatform```, and install ```npm``` packages and dependencies with ```npm install```. Lastly, run ```ng serve``` to start a local development server for the project. It should go live in the browser at localhost:4200.

# Test Suite
