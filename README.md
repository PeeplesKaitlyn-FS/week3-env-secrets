# Week 3 – Non-Shared Secrets Using .env (Correct Approach)

This project demonstrates the **third** method of handling secrets: using a local `.env` file that is *not* committed to the repository. This is the proper and secure approach.

## Overview

The application uses the `dotenv` package to load secrets from environment variables:

```javascript
require("dotenv").config();
Required secrets:

API_KEY

DB_PASSWORD

These are stored locally in a .env file, which is intentionally excluded from Git with .gitignore.

Why .env Is Not in This Repo
The .env file is missing on purpose:

It contains sensitive data

It should never be committed

Every developer must create their own

This means when the instructor downloads the repo and runs the app, they will see an intentional error instructing them to create a .env file.

Required Secrets for Your .env (local only)
Create a file named:

bash
Copy code
.env
Place it in the project root with values like:

ini
Copy code
API_KEY=your-api-key-here
DB_PASSWORD=your-db-password-here
Why Is There a Dot Before .env?
The leading dot:

Makes the file hidden in macOS/Linux

Indicates configuration or sensitive data

Ensures developers know it should not be exposed

Works with .gitignore to prevent accidental commits

How to Run
With your own .env created:

bash
Copy code
node app.js
If the .env file is missing, you will get a message explaining that secrets are required, which is expected for this assignment.

Security Reflection
This method follows best practices:

Secrets are not stored in source control

No plaintext credentials in code

Easy rotation and replacement

Compatible with centralized secrets managers (Vault, AWS Secrets Manager, etc.)

This is the correct and recommended pattern for secret handling.