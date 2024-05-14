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
import Image from "next/image"

import { contactUsForm } from "@/constants"

import Link from "next/link"

const formSchema = z.object({
    fullName:
        z.string()
            .min(2, { message: 'Name must be at least 2 characters long' })
            .max(50, { message: 'Name must be at most 50 characters long' }),
    email:
        z.string()
            .email('Invalid email address'),
    phoneNumber:
        z.string()
            .min(10, { message: 'Phone number must be at least 10 numbers long' })
            .max(15, { message: 'Phone number must be at most 15 numbers long' })
            .regex(/^\d+$/, { message: 'Phone number must contain only numbers' }),
    industry:
        z.string()
            .max(50, { message: 'Industry must be at most 50 characters long' }),
    description:
        z.string()
            .max(200, { message: 'Description must be at most 200 characters long' }),
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
        <div className="w-[412px] bg-[#FAF6F6] bg-opacity-[5%] rounded-[24px] px-[24px] py-[40px] space-y-[24px]">
            <div>
                <h4>{contactUsForm.title}</h4>
                <p className="text-[18px] text-gray">{contactUsForm.paragraph}</p>
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>
    )
}