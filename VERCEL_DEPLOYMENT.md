# Vercel Deployment Guide

## Prerequisites
- Vercel account ([create one](https://vercel.com))
- GitHub repository with this project
- Node.js 20.x or higher

## Deployment Steps

### 1. Push to GitHub (if not already done)
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Vercel will auto-detect Next.js framework settings
6. Click "Deploy"

### 3. Configuration
The project uses `vercel.json` for deployment configuration and `next.config.ts` for Next.js setup.

**Key settings:**
- **Framework**: Next.js
- **Node Version**: 20.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto-detected)

### 4. Environment Variables
This portfolio site has **no required** environment variables. The following are optional:

- `NEXT_PUBLIC_SITE_URL` - Public URL of your deployed site (useful for canonical URLs and SEO)

To add environment variables:
1. Go to your Vercel project settings
2. Navigate to **Settings** > **Environment Variables**
3. Add the variable and value
4. Redeploy for changes to take effect

### 5. Custom Domain
To add a custom domain:
1. Go to your Vercel project
2. Click **Settings** > **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check that `npm run build` works locally
- Verify all dependencies are in `package.json`
- Review Vercel build logs for specific errors

### 404 Errors
- Ensure the site-config.ts has correct paths
- Check that internationalization routes are properly configured
- Verify static assets are in the `public/` directory

### Images Not Loading
- Confirm image files exist in `public/gallery/`
- Check Next.js Image component configuration
- Verify `next.config.ts` settings

## Monitoring
After deployment:
- Monitor performance in Vercel Analytics
- Set up error tracking with Sentry (optional)
- Check Core Web Vitals in Search Console

## Redeployment
To deploy updates:
- Push changes to your GitHub repository
- Vercel automatically redeploys on push to main branch
- Or manually redeploy from Vercel dashboard

## Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [Vercel CLI Documentation](https://vercel.com/cli)
