#!/bin/bash

# This script runs QACopilot tests against the production environment
# Usage: ./run-prod-tests.sh

# Production URL (GitHub Pages)
PROD_URL="https://abhimanyug.github.io/react-auth-app/"

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

# Check if the production URL is accessible
echo "Checking if production URL is accessible: $PROD_URL"
if ! curl -s -L "$PROD_URL" > /dev/null; then
  echo "ERROR: Could not access production URL: $PROD_URL"
  echo "Make sure the site has been deployed to GitHub Pages."
  exit 1
fi

echo "Running QACopilot tests against production URL: $PROD_URL"

# Run QACopilot tests
node bin/qac.js \
  --build prod-test-build \
  --app_url "$PROD_URL" \
  --tc_project_id "$TC_PROJECT_ID" \
  --api_key "$TC_API_KEY"

exit_code=$?

if [ $exit_code -eq 0 ]; then
  echo "✅ Tests passed successfully on production environment!"
else
  echo "❌ Tests failed on production environment with exit code: $exit_code"
  echo "Please investigate and fix the issues as soon as possible."
fi

exit $exit_code
