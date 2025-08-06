// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below

export const EMAIL_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  TO_EMAIL: 'harija9080@gmail.com', // Your Gmail address
};

// Email template parameters structure
export interface EmailParams {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
}

// Fallback email function (for development/testing)
export const sendFallbackEmail = async (params: EmailParams): Promise<void> => {
  // This is a fallback function that logs the email data
  // In production, you should use EmailJS or another email service
  console.log('Email would be sent with the following data:', params);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For development, you can also open the default email client
  const mailtoLink = `mailto:${params.to_email}?subject=Portfolio Contact from ${params.from_name}&body=Name: ${params.from_name}%0D%0AEmail: ${params.from_email}%0D%0A%0D%0AMessage:%0D%0A${params.message}`;
  window.open(mailtoLink);
}; 