import React from 'react'
import {
    Html,
    Head,
    Body,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'


interface ContactFormEmailProps {
    fullName: string;
    email: string;
    phoneNumber: string;
    industry: string;
    description: string;
}

export default function ContactFormEmail({
    fullName,
    email,
    phoneNumber,
    industry,
    description,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head>
                <title>New Request from MLV Web</title>
            </Head>
            <Body>
                <Container>
                    <Preview>
                        New Message Request From MLV Web
                    </Preview>
                    <Section>
                        <Text>
                            <p>Full Name: {fullName}</p>
                            <p>Email: {email}</p>
                            <p>Phone Number: {phoneNumber}</p>
                            <p>Industry: {industry}</p>
                            <p>Description: {description}</p>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}
