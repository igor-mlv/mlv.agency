"use server"
import ContactFormEmail from '@/email/ContactFormEmail';
import { formSchema } from '@/lib/formSchema';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);
type ContactFormUserInputs = z.infer<typeof formSchema>;

export async function sendEmail(formData: ContactFormUserInputs) {
    const result = formSchema.safeParse(formData);

    if (result.success) {
        const { fullName, email, phoneNumber, industry, description } = result.data;
        try {
            const data = await resend.emails.send({
                from: 'MLV Web <newrequest@mlvweb.com>',
                to: ['info.mlvweb@gmail.com'],
                subject: 'New Request from MLV Web',
                react: ContactFormEmail({ fullName, email, phoneNumber, industry, description }),
            });
            return { success: true, data };
        } catch (error) {
            return { success: false, error };
        }

    }
}