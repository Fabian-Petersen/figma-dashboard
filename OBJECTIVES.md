## Project Objectives

- Create a Landing Page for the application.
- Create a login page with input fields "username" and "password".
  Create a register page with input fields "name", "email", "password", "confirm "password".
- Create a confirmation page to verify a user’s registration after signup. This functionality is not active at the moment for demo and security reasons.
- Create a dashboard page.
- Display the users "name" on the dashboard.
- Add logic to the signout button on the sidebar to sign users out and redirect to the home page.
- Create graphs using recharts.
- Handle the form validation using zod.
- Create API Gateway to handle the private requests to the backend.
- Create lambda function with python runtime to handle incoming events to private services
- Host site on AWS S3 with Cloudfront Distribution “https://dashboard.fabian-portfolio.net”
- Manage SSL certificates with ACM (Amazon Certificate Manager)

# Exceptions

- Export button not functional, no data to export.
- Languages will only show Eng (US), no functionality will be added to the dropdown button.
- Search will not be functional, no backend to source data to update graphs.
- Sidebar links not functional, only routing to that page will be functional with a return button.
- Recharts does not provide similar graphs for the Top Products & Sales Geographic Data
- Placeholder charts will be used instead from Recharts.

## Stack for the project

- Nextjs
- Typescript
- React Hook Form
- Python
- Zod
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Github and Github Actions for deployment to AWS
- React Icons
- React Toastify
- AWS Services : Cognito, Amplify, Cloudfront, ACM, Lambda, API Gateway, S3 bucket, Route 53.

Architecture

<img src="/images/" alt="architecture" width='600'>
