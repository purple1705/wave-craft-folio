# Email Setup Guide for Contact Form

This guide will help you set up email functionality for the contact form to send emails to your Gmail address.

## Option 1: EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or your preferred email provider
4. Follow the authentication steps
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: Portfolio Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update Configuration
1. Open `src/config/email.ts`
2. Replace the placeholder values:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here', 
  PUBLIC_KEY: 'your_public_key_here',
  TO_EMAIL: 'harija9080@gmail.com',
};
```

### Step 6: Enable EmailJS
1. Open `src/components/Contact.tsx`
2. Uncomment the EmailJS code in the `handleSubmit` function
3. Comment out the fallback email function

## Option 2: Fallback Email (Development)

For development and testing, the form currently uses a fallback function that:
- Logs the email data to the console
- Opens the default email client with pre-filled data
- Simulates a loading state

## Features

✅ **Modern Contact Form** - Beautiful animated form with validation  
✅ **Loading States** - Visual feedback during email sending  
✅ **Error Handling** - Graceful error messages  
✅ **Responsive Design** - Works on all devices  
✅ **Accessibility** - Proper form labels and ARIA attributes  
✅ **Glass Morphism** - Modern visual effects  
✅ **3D Animations** - Smooth hover and interaction effects  

## Testing

1. Fill out the contact form
2. Submit the form
3. Check the browser console for logged data
4. Your default email client should open with pre-filled data

## Production Deployment

For production, make sure to:
1. Set up EmailJS properly
2. Test the email functionality
3. Consider rate limiting to prevent spam
4. Add CAPTCHA if needed
5. Monitor email delivery rates

## Troubleshooting

- **Emails not sending**: Check EmailJS configuration and service status
- **Template errors**: Verify template variables match the code
- **Authentication issues**: Re-authenticate your email service
- **Rate limiting**: EmailJS free tier has limits, consider upgrading

## Security Notes

- Never expose API keys in client-side code for production
- Consider using a backend service for email handling
- Implement rate limiting to prevent abuse
- Validate and sanitize all form inputs 