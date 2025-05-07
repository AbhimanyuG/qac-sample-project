#!/bin/bash

# This script runs QACopilot tests against a staging environment
# Usage: ./run-staging-tests.sh [staging_url]

# Default staging URL (can be overridden by command line argument)
# This should be your staging environment URL, separate from production
STAGING_URL=${1:-"https://staging.your-domain.com/react-auth-app/"}

# Check if required environment variables are set
if [ -z "$TC_PROJECT_ID" ]; then
  echo "ERROR: TC_PROJECT_ID environment variable is not set."
  echo "You can set it using: export TC_PROJECT_ID=your_project_id"
  exit 1
fi

if [ -z "$TC_API_KEY" ]; then
  echo "ERROR: TC_API_KEY environment variable is not set."
  echo "You can set it using: export TC_API_KEY=your_api_key"
  exit 1
fi

# Check if the staging URL is accessible
echo "Checking if staging URL is accessible: $STAGING_URL"
if ! curl -s -L "$STAGING_URL" > /dev/null; then
  echo "ERROR: Could not access staging URL: $STAGING_URL"
  echo "Make sure the URL is correct and the site is deployed."
  exit 1
fi

echo "Running QACopilot tests against staging URL: $STAGING_URL"

# Run QACopilot tests
node bin/qac.js \
  --build staging-test-build \
  --app_url "$STAGING_URL" \
  --tc_project_id "$TC_PROJECT_ID" \
  --api_key "$TC_API_KEY"

exit_code=$?

if [ $exit_code -eq 0 ]; then
  echo "✅ Tests passed successfully on staging environment!"
  echo "The application can be safely promoted to production."
else
  echo "❌ Tests failed on staging environment with exit code: $exit_code"
  echo "Please fix the issues before promoting to production."
fi

exit $exit_code
