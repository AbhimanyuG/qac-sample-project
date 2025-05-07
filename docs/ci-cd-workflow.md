# CI/CD Workflow Diagram

```mermaid
flowchart TB
    subgraph "Development"
        A[Local Development] --> B{Local Testing}
        B -->|Pass| C[Push to GitHub]
        B -->|Fail| A
    end
    
    subgraph "GitHub Actions CI/CD"
        C --> D[Check Secrets]
        D --> E[Install Dependencies]
        E --> F[Install QACopilot]
        F --> G[Build Application]
        G --> H[Deploy to GitHub Pages]
        H --> I[Run QACopilot Tests]
        I -->|Pass| J[Success]
        I -->|Fail| K[Failure]
    end
    
    subgraph "Optional Staging"
        L[Deploy to Staging] -.-> M[Run Staging Tests]
        M -->|Pass| C
        M -->|Fail| A
    end
    
    style A fill:#90EE90,stroke:#333,stroke-width:2px
    style H fill:#FFC0CB,stroke:#333,stroke-width:2px
    style I fill:#FFD700,stroke:#333,stroke-width:2px
    style J fill:#90EE90,stroke:#333,stroke-width:2px
    style K fill:#FF6347,stroke:#333,stroke-width:2px
```

## Workflow Explained

1. **Development**:
   - Developers write code locally
   - Run local tests (`npm run test:local`) to verify functionality
   - If tests pass, push to GitHub; if not, fix issues

2. **GitHub Actions CI/CD**:
   - Triggered on push to main branch
   - Checks required secrets (TC_PROJECT_ID and TC_API_KEY)
   - Installs dependencies and QACopilot
   - Builds the application
   - Deploys to GitHub Pages (production)
   - Runs QACopilot tests against the live production site
   - Reports success or failure

3. **Optional Staging** (if implemented):
   - Before pushing to main, code can be deployed to a staging environment
   - Run staging tests (`npm run test:staging`)
   - If tests pass, proceed to push to GitHub; if not, return to development

This workflow ensures code is thoroughly tested before and after deployment, maintaining high quality and reducing production issues.
