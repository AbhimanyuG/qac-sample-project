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

## Deployment & Testing Workflow

This application uses a CI/CD pipeline for deployment and testing, with support for different environments.

### CI/CD Pipeline Overview

The deployment and testing process follows this pattern:

1. Code is developed locally and tested with `npm run test:local`
2. When ready, code can be deployed to a staging environment (if available) and verified with `npm run test:staging`
3. After staging verification, code is pushed to GitHub, triggering the production deployment workflow
4. GitHub Actions automatically deploys to GitHub Pages (production)
5. After production deployment, automated tests run to verify the live site works correctly

### GitHub Pages Production Deployment

The production app is deployed to: https://abhimanyug.github.io/react-auth-app

The deployment and testing are handled by a GitHub Actions workflow that automatically builds, deploys, and tests the app whenever changes are pushed to the main branch.

### How the Production Workflow Works

1. When you push to the `main` branch, the GitHub Actions workflow is triggered
2. The workflow checks for required secrets (TC_PROJECT_ID and TC_API_KEY)
3. The workflow builds the React app with the correct base path (/react-auth-app)
4. The build output is deployed to the `gh-pages` branch
5. GitHub Pages serves the content from the `gh-pages` branch
6. After successful deployment, QACopilot tests are run against the production URL

### Manual Deployment

If you need to trigger a deployment manually:

1. Go to your GitHub repository
2. Navigate to the Actions tab
3. Select the "Deploy to GitHub Pages" workflow
4. Click "Run workflow" and select the branch to deploy from

### Technical Details

- Using HashRouter for client-side routing compatibility with GitHub Pages
- The `homepage` field in package.json is set to `https://abhimanyug.github.io/react-auth-app`
- Environment variable `PUBLIC_URL` is set to `/react-auth-app` during build
- A `.nojekyll` file is added to prevent GitHub Pages from processing the build output with Jekyll

### GitHub Repository Settings

After pushing these changes to your repository, you need to configure GitHub settings:

1. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Click on "Settings" tab
   - Scroll down to the "Pages" section in the left sidebar
   - Under "Build and deployment":
     - For **Source**, select "Deploy from a branch"
     - For **Branch**, select "gh-pages" and "/ (root)"
     - Click "Save"

2. **Configure Workflow Permissions**:
   - Go to "Settings" > "Actions" > "General"
   - Scroll down to "Workflow permissions"
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Click "Save"

3. **Add Required Variables and Secrets**:
   - Go to "Settings" > "Secrets and variables" > "Actions"
   - Add the following **Repository Variable** (under the "Variables" tab):
     - `TC_PROJECT_ID`: Your QACopilot project ID
   - Add the following **Repository Secret** (under the "Secrets" tab):
     - `TC_API_KEY`: Your QACopilot API key
   - The variable must be set as a Repository Variable, while the secret must be set as a Repository Secret for the GitHub Actions workflow to access them
   - IMPORTANT: Make sure to add these in the correct sections. The current workflow's `check-variables` job checks both variables and secrets.

4. **Verify Deployment**:
   - After the workflow runs successfully, your site will be available at https://abhimanyug.github.io/react-auth-app
   - You can check the Actions tab to view test results
   - You may need to wait a few minutes for the changes to propagate

## Testing

The application includes multiple levels of testing:

1. **Gherkin Feature Specifications**:
   - Located in `/tests/features` directory
   - Define behavior using Given-When-Then syntax
   - Can be implemented with frameworks like Cucumber.js or Jest

2. **QACopilot Automated Testing**:
   - Run automatically after deployment to GitHub Pages
   - Tests the live application using the deployed URL
   - Uses the feature files in the `/tests/features` directory
   - Results are reported in the GitHub Actions workflow

### Running Tests Locally

To run QACopilot tests against your locally deployed app:

1. Set up your environment variables:
   - Copy `.env.example` to `.env` and fill in your QACopilot credentials
   - Or export them directly: 
     ```
     export TC_PROJECT_ID=your_project_id
     export TC_API_KEY=your_api_key
     ```

2. Install the QACopilot package:
   ```
   npm run install:qac
   ```

3. Start the local development server:
   ```
   npm start
   ```

4. In a separate terminal, run the tests:
   ```
   npm run test:local
   ```

### Running Tests Against Environments

#### Production Testing

To test the deployed version on GitHub Pages production:

1. Set up your environment variables as described above.

2. Run the production tests:
   ```
   npm run test:prod
   ```

#### Staging Testing

To test a staging environment:

1. Set up your environment variables as described above.

2. Run the staging tests with a custom URL:
   ```
   npm run test:staging -- https://your-staging-url.com
   ```

   Note: The default staging URL in the script should be updated to your actual staging URL when you set one up.

## Notes for Real-World Implementation

This is a demo application with some simulated functionality:

- **Authentication**: Replace the mock auth with a real authentication service 
- **Data**: Connect to a real API for user data
- **Security**: Implement proper security measures for a production app
- **CI/CD Pipeline**: The current setup can be extended to include:
  - Linting and code quality checks
  - Unit and integration tests before deployment
  - Deployment to multiple environments (dev, staging, production)
  - Rollback strategies for failed deployments
