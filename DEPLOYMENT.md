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

## Platform-Specific Instructions

### Render (Recommended for Full-Stack Apps)

#### Backend Deployment on Render:
1. **Create a new Web Service** on Render
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
4. **Add Environment Variables:**
   - `NODE_ENV` = `production`
   - `MONGO_URL` = Your MongoDB connection string
   - `UPSTASH_REDIS_REST_URL` = Your Upstash Redis URL
   - `UPSTASH_REDIS_REST_TOKEN` = Your Upstash Redis token
5. **Deploy**

#### Frontend Deployment on Render:
1. **Create a new Static Site** on Render
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`
4. **Add Environment Variables:**
   - `VITE_API_BASE_URL` = Your backend URL (e.g., `https://your-backend.onrender.com`)
5. **Deploy**

### Vercel
1. Go to your project settings
2. Add environment variable: `VITE_API_BASE_URL` = `https://your-api-domain.com`
3. Redeploy

### Netlify
1. Go to Site settings > Environment variables
2. Add: `VITE_API_BASE_URL` = `https://your-api-domain.com`
3. Redeploy

## Backend Deployment
Make sure your backend is deployed and accessible at the URL you specify in `VITE_API_BASE_URL`.

## Testing
After deployment, verify that:
1. API calls work correctly
2. Images load properly
3. All CRUD operations function as expected

## Common Issues Fixed:
- ✅ Port configuration for Render's dynamic ports
- ✅ Build scripts optimized for deployment
- ✅ Environment variable configuration
- ✅ CORS settings for production
