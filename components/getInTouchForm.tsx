'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import {
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().optional(),
  businessName: z.string().optional(),
  interestedIn: z.enum([
    'brand-logo-design',
    'print-design',
    'web-design',
    'ux-user-experience',
    'multiple-services',
    'not-sure-yet',
  ]),
  projectDetails: z.string().min(10, {
    message: 'Please tell us about your project (at least 10 characters).',
  }),
  timeline: z.enum(['urgent-asap', 'within-next-month', 'next-2-3-months', 'just-planning-ahead']),
})

export default function GetInTouchForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      businessName: '',
      interestedIn: 'ux-user-experience',
      projectDetails: '',
      timeline: 'within-next-month',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (_error) {
      setStatus('error')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-auto">
        <div className="flex gap-4">
          <div className="w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="first name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="last name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (optional)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name (optional)</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interestedIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are you interested in?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="brand-logo-design">Brand/Logo Design</SelectItem>
                  <SelectItem value="print-design">Print Design</SelectItem>
                  <SelectItem value="web-design">Web Design</SelectItem>
                  <SelectItem value="ux-user-experience">UX / User Experience</SelectItem>
                  <SelectItem value="multiple-services">Multiple Services</SelectItem>
                  <SelectItem value="not-sure-yet">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Choose the service you're most interested in.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell me about your project</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your project, goals, and any specific requirements..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please provide as much detail as possible about your project.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What's your timeline?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a timeline" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="urgent-asap">Urgent - Need to start ASAP</SelectItem>
                  <SelectItem value="within-next-month">Within the next month</SelectItem>
                  <SelectItem value="next-2-3-months">Next 2-3 months</SelectItem>
                  <SelectItem value="just-planning-ahead">Just planning ahead</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>When do you need this project completed?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {status === 'success' && (
          <div className="text-sm text-green-600 bg-green-50 p-3 rounded inline-flex items-center gap-x-4">
            <CheckCircleIcon className='size-6' /> <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}


        {status === 'error' && (
          <div className="text-sm text-red-600 bg-red-50 p-3 rounded inline-flex items-center gap-x-4">
            <ExclamationCircleIcon className='size-6' /><span>Failed to send message. Please try again.</span>
          </div>
        )}

        <div>
          <Button className="cursor-pointer p-6" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
        </div>

        <p className="text-zinc-500">By submitting this form, you agree to me contacting you about your enquiry.</p>
      </form>
    </Form>
  )
}
