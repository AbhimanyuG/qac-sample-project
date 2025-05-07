#!/bin/bash

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

# Ensure development server is running
if ! curl -s http://localhost:3000 > /dev/null; then
  echo "ERROR: Development server is not running at http://localhost:3000"
  echo "Start the development server with: npm start"
  exit 1
fi

echo "Running QACopilot tests against the local development server..."

# Run QACopilot tests
node bin/qac.js \
  --build local-test-build \
  --app_url http://localhost:3000 \
  --tc_project_id "$TC_PROJECT_ID" \
  --api_key "$TC_API_KEY"

exit_code=$?

if [ $exit_code -eq 0 ]; then
  echo "✅ Tests passed successfully!"
else
  echo "❌ Tests failed with exit code: $exit_code"
fi

exit $exit_code
