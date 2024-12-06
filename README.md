This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
Set up .env variables to acces Firebase in root directory

First, install and run the development server:

```bash
npm install --force
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Features:

Thought Process and Architectural Decisions
Componentization:

The application is built with reusable components (Button, Input, Dialog, etc.) to maintain a consistent UI and reduce code duplication.
Features like payment methods and order confirmation are modularized (PaymentPage, CardPaymentForm, AffirmationModal) to ensure clarity and reusability.
State Management:

Local State: Managed with React's useState hook for simplicity, as the state requirements are localized (e.g., form inputs, modal visibility).
Global Context: Used AppContext to share data like userEmail across components, avoiding prop drilling.
Form Validation:

Input fields (e.g., card number, expiry date, CVV) are sanitized and formatted to improve user experience and prevent invalid data submissions.
Login:
Implemented authentication with email usinf Firebase to make the app secure

Responsive Design:

The UI is built with Tailwind CSS using ShadcnUI, ensuring responsiveness and adaptability across devices.
Tradeoffs and Assumptions:

All users have valid email addresses in the AppContext.
Payment processing and email sending simulate real-world behavior but are not integrated with actual payment gateways.
Could not add pages like user profile and terms and conditions pages which would be needed in ideal world
Assumed three product categories as per data from fake store api
Assumed 2 payment modes only with limited options.
