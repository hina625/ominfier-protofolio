# Vercel Deployment Guide for Omnifier

## 🚀 Frontend Deployment (Already Done)
Your frontend is already deployed at: [https://ominfier-protofolio.vercel.app](https://ominfier-protofolio.vercel.app)

## 🔧 Backend Deployment Required

### Step 1: Choose Backend Hosting Platform

#### Option A: Heroku (Recommended)
1. **Create Heroku Account**: [heroku.com](https://heroku.com)
2. **Install Heroku CLI**: Download from [devcenter.heroku.com](https://devcenter.heroku.com/articles/heroku-cli)
3. **Deploy Backend**:
   ```bash
   cd backend
   heroku create your-backend-app-name
   git add .
   git commit -m "Deploy backend"
   git push heroku main
   ```

#### Option B: Railway
1. **Create Railway Account**: [railway.app](https://railway.app)
2. **Connect GitHub**: Link your repository
3. **Deploy Backend**: Select backend folder

#### Option C: Render
1. **Create Render Account**: [render.com](https://render.com)
2. **New Web Service**: Connect your repository
3. **Configure**: Set build command and start command

### Step 2: Environment Variables Setup

#### Backend Environment Variables
Set these in your hosting platform:

```env
# Database (Use MongoDB Atlas for production)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/omnifier

# Server
PORT=5000

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

#### Frontend Environment Variables
Set these in Vercel dashboard:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.herokuapp.com/api
```

### Step 3: Update Frontend Configuration

After getting your backend URL, update these files:

#### 1. Admin Page (`my-app/src/app/admin/page.tsx`)
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 
  (typeof window !== 'undefined' && window.location.hostname === 'ominfier-protofolio.vercel.app' 
    ? 'https://YOUR-ACTUAL-BACKEND-URL.herokuapp.com/api'  // Replace this
    : 'http://localhost:5000/api');
```

#### 2. Contact Page (`my-app/src/app/contact/page.tsx`)
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 
  (typeof window !== 'undefined' && window.location.hostname === 'ominfier-protofolio.vercel.app' 
    ? 'https://YOUR-ACTUAL-BACKEND-URL.herokuapp.com/api'  // Replace this
    : 'http://localhost:5000/api');
```

### Step 4: Database Setup

#### MongoDB Atlas (Recommended for Production)
1. **Create Account**: [mongodb.com/atlas](https://mongodb.com/atlas)
2. **Create Cluster**: Free tier available
3. **Get Connection String**: 
   ```
   mongodb+srv://username:password@cluster.mongodb.net/omnifier
   ```
4. **Update Backend**: Use this string in MONGODB_URI

### Step 5: Email Configuration

#### Gmail Setup
1. **Enable 2FA**: On your Gmail account
2. **Generate App Password**: 
   - Google Account → Security → 2-Step Verification → App passwords
   - Generate for "Mail"
3. **Set Environment Variables**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Step 6: Test Complete System

1. **Test Contact Form**: [https://ominfier-protofolio.vercel.app/contact](https://ominfier-protofolio.vercel.app/contact)
2. **Test Admin Panel**: [https://ominfier-protofolio.vercel.app/admin](https://ominfier-protofolio.vercel.app/admin)
3. **Test Reply System**: Send reply and check email

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors**: Backend CORS is already configured for your domain
2. **API Not Found**: Check if backend URL is correct
3. **Database Connection**: Verify MongoDB Atlas connection string
4. **Email Not Sending**: Check Gmail App Password

### Debug Steps

1. **Check Backend Logs**: Look at hosting platform logs
2. **Test API Endpoints**: 
   ```bash
   curl https://your-backend-url.herokuapp.com/api/health
   ```
3. **Check Environment Variables**: Verify all are set correctly

## ✅ Success Checklist

- [ ] Backend deployed and accessible
- [ ] Database connected (MongoDB Atlas)
- [ ] Email configuration working
- [ ] Frontend environment variables set
- [ ] Contact form working
- [ ] Admin panel accessible
- [ ] Reply system functional
- [ ] Emails being sent successfully

## 📞 Support

If you need help with deployment:
1. Check hosting platform documentation
2. Verify all environment variables
3. Test each component separately
4. Check console logs for errors

Your frontend is already live at [https://ominfier-protofolio.vercel.app](https://ominfier-protofolio.vercel.app) - now you just need to deploy the backend!
