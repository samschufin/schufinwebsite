import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only when needed to avoid build errors
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, selectedOptions } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Format the selected options for the email
    const optionsText = selectedOptions.length > 0 
      ? selectedOptions.map((option: string, index: number) => `${index + 1}. ${option}`).join('\n\n')
      : 'No options selected';

    // Create the email content
    const emailSubject = `New Contact from ${name} via Schufin.com`;
    const emailContent = `
New contact form submission received:

**Contact Information:**
- Name: ${name}
- Email: ${email}

**Selected Options:**
${optionsText}

**Message:**
${message}

---
Sent from your SchufIn website contact form
    `.trim();

    // Send email using Resend
    const resend = getResend();
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Using Resend's default domain
      to: ['sam@schufin.com'], // Your email address
      subject: emailSubject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #29ABE2; border-bottom: 2px solid #29ABE2; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #29ABE2;">${email}</a></p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Selected Options</h3>
            ${selectedOptions.length > 0 
              ? `<ol style="line-height: 1.6;">${selectedOptions.map((option: string) => `<li style="margin-bottom: 10px;">${option}</li>`).join('')}</ol>`
              : '<p style="font-style: italic; color: #666;">No options selected</p>'
            }
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Sent from your SchufIn website contact form
          </p>
        </div>
      `
    });

    console.log('Email sent successfully:', emailResponse);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 