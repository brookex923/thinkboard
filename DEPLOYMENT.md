# Deployment Guide

## Environment Configuration

To deploy your application, you need to set the `VITE_API_BASE_URL` environment variable.

### For Development
The application will default to `http://localhost:5001` if no environment variable is set.

### For Production
Set the environment variable to your production API URL:

```bash
# Example for Vercel
VITE_API_BASE_URL=https://your-api-domain.com

# Example for Netlify
VITE_API_BASE_URL=https://your-api-domain.com

# Example for other platforms
VITE_API_BASE_URL=https://your-api-domain.com
```

### Platform-Specific Instructions

#### Vercel
1. Go to your project settings
2. Add environment variable: `VITE_API_BASE_URL` = `https://your-api-domain.com`
3. Redeploy

#### Netlify
1. Go to Site settings > Environment variables
2. Add: `VITE_API_BASE_URL` = `https://your-api-domain.com`
3. Redeploy

#### Other Platforms
Set the environment variable according to your platform's documentation.

## Backend Deployment
Make sure your backend is deployed and accessible at the URL you specify in `VITE_API_BASE_URL`.

## Testing
After deployment, verify that:
1. API calls work correctly
2. Images load properly
3. All CRUD operations function as expected
