import * as React from 'react';

interface EmailTemplateProps {
    fullName: string;
    email: string;
    phoneNumber: string;
    industry: string;
    description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
    email,
    phoneNumber,
    industry,
    description,
}) => (
    <div>
        <h1>Welcome, {fullName}!</h1>
    </div>
);
