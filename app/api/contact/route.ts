import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber, businessName, interestedIn, projectDetails, timeline } =
      await request.json()

    const data = await resend.emails.send({
      from: 'Contact Form <noreply@gtadesign.com>',
      to: 'airey.giles@gmail.com',
      cc: 'alexefthymiou@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone number:</strong> ${phoneNumber}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Interested In:</strong> ${interestedIn}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `,
    })
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'An error occurred',
      },
      { status: 500 },
    )
  }
}
