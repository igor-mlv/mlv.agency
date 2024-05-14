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

const formSchema = z.object({
    fullName:
        z.string()
            .min(2, { message: 'Name must be at least 2 characters long' })
            .max(30, { message: 'Name must be at most 30 characters long' }),
    email:
        z.string()
            .email('Invalid email address'),
    phoneNumber:
        z.string()
            .min(10, { message: 'Phone number must be at least 10 numbers long' })
            .max(14, { message: 'Phone number must be at most 14 numbers long' })
            .regex(/^\+?\d+$/, { message: 'Phone number must contain only numbers' }),
    industry:
        z.string()
            .max(50, { message: 'Industry must be at most 50 characters long' }),
    description:
        z.string()
            .max(500, { message: 'Description must be at most 500 characters long' }),
    isPrivacyPolicy: z.boolean().default(false),
})

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

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <div className="md:w-[412px] w-full bg-[#FAF6F6] bg-opacity-[5%] rounded-[24px] px-[24px] py-[40px] space-y-[24px]">
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
                    <p className="md:text-[16px] text-[14px] text-center text-gray">By clicking 'Submit,' you agree to our Privacy Policy.</p>

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