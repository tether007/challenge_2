#  Note: App was built before final configuration.
# Challenge: Built Once

## Difficulty
Medium

## Category
Web

---

## Scenario

The monitoring dashboard for an internal system has been deployed.

Locally, everything appears functional.

In production, however, the system status always shows:

    Service unavailable

Your task is to determine what went wrong.

Somewhere in the deployment process, something was built… only once.

---

## Repository Contents

This repository contains only the frontend application.

The backend services are deployed separately.

You are encouraged to:

- Inspect the code
- Compare local and production behavior
- Investigate how configuration is handled

---

## Running Locally

1. Install dependencies:

`npm install`

2. Create a `.env` file using the example:

`cp .env.example .env`


3. Start development server:

`npm run dev`


## Production Build

To build the app:

`npm run build `
`npm run preview`


---

## Hint

Frontend environment variables are not dynamic.

They are injected during build time.

Once built, they do not change.

---

## Objective

Find the flag.

