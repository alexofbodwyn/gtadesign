export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-zinc-700">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: October 31, 2025</p>

      <div className="prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold mb-4 text-zinc-700">Information We Collect</h2>
        <p className="font-semibold">When you submit our contact form, we collect:</p>
        <ul className="my-2 px-4">
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>Business name (if provided)</li>
          <li>Project details and preferences</li>
        </ul>

        <h2 className="text-2xl font-bold my-4 text-zinc-700">How We Use Your Information</h2>
        <p className="font-semibold">We use your information solely to:</p>
        <ul className="my-2 px-4">
          <li>Respond to your inquiry</li>
          <li>Communicate about potential design projects</li>
          <li>Provide quotes and services you've requested</li>
        </ul>

        <h2 className="text-2xl font-bold my-4 text-zinc-700">Data Storage and Security</h2>
        <p>Your information is transmitted securely and stored by our email service provider. We do not sell, rent, or share your personal information with third parties except as necessary to respond to your inquiry.</p>

        <h2 className="text-2xl font-bold my-4 text-zinc-700">Third-Party Services</h2>
        <p>We use Resend (powered by Amazon SES) to send and receive emails. Your data may be processed by these services in accordance with their privacy policies.</p>

        <h2 className="text-2xl font-bold my-4 text-zinc-700">Your Rights</h2>
        <p className="font-semibold">You have the right to:</p>
        <ul className="my-2 px-4">
          <li>Request access to your personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of future communications</li>
        </ul>

        <h2 className="text-2xl font-bold my-4 text-zinc-700">Contact Us</h2>
        <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at: hello@gtadesign.com</p>

        <h2 className="text-2xl font-bold my-4 text-zinc-700">Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
      </div>
    </div>
  )
}