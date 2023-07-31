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

export const ConfirmUpdate = ({
  user
}: {
  user: any;
}) => (
  <div>
    <h1>Hello, {user.firstName}!</h1>
    <p>
      Nous avons bien en compte votre réponse!
    </p>
  </div>
);
