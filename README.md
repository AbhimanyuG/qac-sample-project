# React Authentication App

A React application with authentication, protected routes, and dashboard functionality.

## Features

- User authentication (login/logout)
- Public and protected routes
- Dashboard with analytics and activities
- User profile management
- Settings page with various configuration options
- Responsive design

## Project Structure

```
react-auth-app/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── auth/         # Authentication components
│   │   ├── common/       # Common UI components
│   │   └── dashboard/    # Dashboard-specific components
│   ├── context/          # React context providers
│   ├── pages/            # Page components
│   └── App.js            # Main App component with routing
└── tests/
    └── features/         # Gherkin format test cases
```

## Pages

- **Home**: Public landing page
- **Login**: Authentication page
- **Dashboard**: Main authenticated user dashboard
- **Profile**: User profile management
- **Settings**: User preferences and settings

## Authentication

The app uses a mock authentication system stored in localStorage. In a real application, this would connect to a backend authentication service.

- **Login**: Provide any email and password to log in
- **Logout**: Clears user data from localStorage

## Getting Started

### Prerequisites

- Node.js 18+ (preferably)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone <repository-url>
cd react-auth-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

The application will be available at http://localhost:3000

## Testing

The application includes Gherkin format test specifications in the `/tests/features` directory. These can be implemented with testing frameworks like Cucumber.js or Jest with appropriate plugins.

## Deployment

This application is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Deployment

The app will be deployed to: https://abhimanyug.github.io/app

The deployment is handled by a GitHub Actions workflow that automatically builds and deploys the app whenever changes are pushed to the main branch.

### How It Works

1. When you push to the `main` branch, the GitHub Actions workflow is triggered
2. The workflow builds the React app with the correct base path (/app)
3. The build output is deployed to the `gh-pages` branch
4. GitHub Pages serves the content from the `gh-pages` branch

### Manual Deployment

If you need to trigger a deployment manually:

1. Go to your GitHub repository
2. Navigate to the Actions tab
3. Select the "Deploy to GitHub Pages" workflow
4. Click "Run workflow" and select the branch to deploy from

### Technical Details

- Using HashRouter for client-side routing compatibility with GitHub Pages
- The `homepage` field in package.json is set to `https://abhimanyug.github.io/app`
- Environment variable `PUBLIC_URL` is set to `/app` during build

## Notes for Real-World Implementation

This is a demo application with some simulated functionality:

- **Authentication**: Replace the mock auth with a real authentication service 
- **Data**: Connect to a real API for user data
- **Security**: Implement proper security measures for a production app
- **Tests**: Implement the provided Gherkin test specifications with a testing framework
