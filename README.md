# Mobile Marketplace

## Deployment to Vercel

### Prerequisites

- A Vercel account
- Git repository for your project
- Node.js and npm installed locally

### Steps to Deploy

1. **Push your code to a Git repository**
   - GitHub, GitLab, or Bitbucket

2. **Connect your repository to Vercel**
   - Log in to your Vercel account
   - Click "New Project"
   - Import your Git repository
   - Select the repository you want to deploy

3. **Configure project settings**
   - Framework Preset: Select "Other"
   - Root Directory: Leave as default (the root of your project)
   - Build Command: This is automatically set to `npm run vercel-build`
   - Output Directory: Leave as default

4. **Set up environment variables**
   - In the Vercel project settings, go to "Environment Variables"
   - Add all the required environment variables from the `.env.example` file
   - Make sure to add `DATABASE_URL` and any other necessary variables

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application

### Post-Deployment

- Check the deployment logs for any issues
- Visit your deployed application at the URL provided by Vercel
- Set up custom domains if needed in the Vercel project settings

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

- `/server`: Backend Node.js/Express server code
- `/client`: Frontend React application
- `/shared`: Shared code between frontend and backend 