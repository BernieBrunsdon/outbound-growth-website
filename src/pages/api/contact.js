import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, service, message, type, bookConsultation } = req.body;

  // Validate required fields
  if (!name || !email || !company || !service || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create contact object
  const contact = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    name,
    email,
    company,
    service,
    message,
    type: type || 'general',
    bookConsultation: bookConsultation || false,
  };

  try {
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing contacts
    const contactsFile = path.join(dataDir, 'contacts.json');
    let contacts = [];
    
    if (fs.existsSync(contactsFile)) {
      const fileContent = fs.readFileSync(contactsFile, 'utf8');
      contacts = JSON.parse(fileContent);
    }

    // Add new contact
    contacts.push(contact);

    // Save contacts
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

    // Send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendEmail(contact);
    }

    // Send to webhook if configured
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      id: contact.id 
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error saving contact form' });
  }
}

async function sendEmail(contact) {
  try {
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'bernie@outbound-growth.com',
      subject: `New Contact Form Submission - ${contact.type}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Type:</strong> ${contact.type}</p>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Company:</strong> ${contact.company}</p>
        <p><strong>Service Interest:</strong> ${contact.service}</p>
        <p><strong>Book Consultation:</strong> ${contact.bookConsultation ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted on: ${new Date(contact.timestamp).toLocaleString()}</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
