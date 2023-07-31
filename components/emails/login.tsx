import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate = ({
  firstName,
  url
}: {
  firstName: string;
  url: string;
}) => (
  <div>
    <h1>Hello, {firstName}!</h1>
    <p>
      You have requested to reset your password. Please click the link below to
      reset your password. {url}
    </p>

  </div>
);
