import * as React from 'react'

type EmailTemplateProps = {
  firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hi, {firstName}! </h1>
    <p>Thank you for contacting us.</p>
    <p>We will reply to you soon.</p>
    <p>Best regards... 😇</p>
    <h3>Support Team (Gogixer.com)</h3>
    <p>
      follow me on{' '}
      <a href="https://twitter.com/superssingh">X(twitter)/superssingh</a>.
    </p>
    <p>This is auto generated message. Please do not reply.</p>
  </div>
)
