
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Handle CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { email, firstName, lastName, company, message } = JSON.parse(event.body);

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Invalid email' })
      };
    }

    // Create transporter
    // we are using Gmail SMTP here; ensure you have enabled "Less secure app access" or use an App Password
    // account settings for this to work 
    // account used: rp2701.dev@gmail.com
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email content
   // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'rupesh@getezlinks.io', // Where you want to receive signups
      cc: 'support@getezlinks.io',
      subject: `New Message From Website: ${email}`,
      html: `
        <h2>Message from</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>  
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error('Waitlist error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};