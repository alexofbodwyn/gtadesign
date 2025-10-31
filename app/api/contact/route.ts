import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const data = await resend.emails.send({
      from: 'Contact Form <noreply@gtadesign.com>',
      to: 'alexefthymiou@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
