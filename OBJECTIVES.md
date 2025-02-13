## Project Objectives

- Build dashboard and Landing Page from Figma Design templates, source hhtps://figma.com/community
- Create login page with input fields "username" and "password"
- Create register page with input fields "name", "username", "password", "confirm "password" and "avatar image"
- Setup aws cognito to handle authentication (I had to use Clerk as a last minute alternative, the Nextjs and AWS documentation does not provide setup with Nextjs 15). Some homework for me _smiley face_
- Display the users "name" on the dashboard
- Create graphs using recharts
- Handle the form validation using zod
- Create DynamoDB database to store mock sales data for the graphs (data from claude.ai)
- Create API Gateway to handle the https requests to the backend
- Create lambda function with python runtime to handle incoming events

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
- Axios
- React Query
- React Hook Form
- Python
- Zod
- Tailwind CSS
- Shadcn UI
- React Icons
- Next Auth
- AWS Cognito
- Clerk Authentication

Architecture

<img src="/images/" alt="architecture" width='600'>
