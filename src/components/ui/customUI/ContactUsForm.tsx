"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import Image from "next/image"

import { contactUsForm } from "@/constants"

import Link from "next/link"
import { sendEmail } from "@/app/sendEmail"

import { formSchema } from "@/lib/formSchema";


export default function ContactUsForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            industry: "",
            description: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // ✅ This will be type-safe and validated.
        const result = await sendEmail(values);

        if (result?.success) {
            console.log('Email sent successfully');
            //reset form
            return
        }

        console.log(result?.error);
        console.log('Email not sent');
    }


    return (
        <div className="md:w-[412px] w-full bg-[#FAF6F6] bg-opacity-[5%] rounded-[24px] px-[24px] py-[40px] space-y-[24px] z-10">
            <div>
                <h4>{contactUsForm.title}</h4>
                <p className="md:text-[18px] text-[16px] text-gray">{contactUsForm.paragraph}</p>
            </div>

            <div className="w-full flex space-x-[8px]">
                {contactUsForm.sociaMediaBtns.map((btn, index) => (
                    <Link key={index} href={btn.href} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="default"
                            className={`${btn.width} px-[24px] py-[8px] bg-white hover:bg-white bg-opacity-5 hover:bg-opacity-5 rounded-[24px] border-[2px] hover:border-opacity-100 border-opacity-0 border-gray transition duration-200`}>
                            <div className="w-full flex justify-between">
                                <Image
                                    width={23}
                                    height={19}
                                    src={btn.iconSrc}
                                    alt={btn.alt}
                                />
                                <h6 className="text-white">{btn.btnText}</h6>
                            </div>
                        </Button>
                    </Link>
                ))}
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[16px]">
                    {contactUsForm.inputFields.map((inputField, index) => (
                        <FormField
                            key={index}
                            control={form.control}
                            name={inputField.name as "fullName" | "email" | "phoneNumber" | "industry"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder={inputField.placeholder}
                                            {...field}
                                            className="w-full h-[45px] bg-white bg-opacity-0 px-[24px] py-[18px] rounded-[24px] border-[2px] border-opacity-100 border-gray formInputText placeholder:text-gray"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-violet text-[16px] flex justify-center" />
                                </FormItem>
                            )}
                        />
                    ))}

                    <FormField
                        control={form.control}
                        name={contactUsForm.textArea.name as "description"}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder={contactUsForm.textArea.placeholder}
                                        className="resize-none w-full h-[90px] bg-white bg-opacity-0 px-[24px] py-[18px] rounded-[24px] border-[2px] border-opacity-100 border-gray formInputText placeholder:text-gray"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-violet text-[16px] flex justify-center" />
                            </FormItem>
                        )}
                    />
                    <p className="md:text-[16px] text-[14px] text-center text-gray z-30">
                        By clicking 'Submit,' you agree to our
                        <Link href="/privacyPolicy" target="_blank" rel="noopener noreferrer">
                            <span className="text-white text-opacity-70"> Privacy Policy</span>
                        </Link>
                    </p>

                    <div className="w-full flex justify-center pt-[16px]">
                        <Button
                            type="submit"
                            variant="default"
                            className="bg-violet w-[260px] h-[45px] md:px-[60px] px-[24px] rounded-[55px] z-30 hover:border-[2px] transition-all duration-500 border-violet button">
                            {contactUsForm.btnText}
                        </Button>
                    </div>

                </form>
            </Form>

        </div>
    )
}