"use client"

import { Button } from "@/components/Button"
import { FormField } from "@/components/FormField"
import { useForm, ValidationError } from "@formspree/react"

export default function Contact() {
  const [state, handleSubmit] = useForm("mrbbjnwr")

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (process.env.NODE_ENV === "development") {
      e.preventDefault()
      // Simulate form submission in development
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      console.log("Development mode - Form data:", Object.fromEntries(formData))
      return
    }
    handleSubmit(e)
  }

  return (
    <div className='max-w-7xl mx-auto px-6'>
      <section className='py-32'>
        <div className='max-w-3xl'>
          <h1 className='text-5xl md:text-6xl font-light mb-6 tracking-tight [text-wrap:balance]'>
            Transform your vision into impact
          </h1>
          <p className='text-lg text-gray-400 mb-20 max-w-2xl [text-wrap:balance]'>
            Book your free creative strategy session and let&apos;s discuss how
            we can help you achieve your goals through compelling visual
            storytelling.
          </p>

          {state.succeeded ? (
            <div className='rounded-lg bg-green-50 dark:bg-green-950 p-8 border border-green-200 dark:border-green-900'>
              <h2 className='text-2xl font-light text-green-900 dark:text-green-100 mb-4'>
                Thanks for reaching out!
              </h2>
              <p className='text-green-700 dark:text-green-300'>
                We&apos;ll be in touch soon to discuss your project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className='space-y-12'>
              <div className='space-y-12'>
                <FormField
                  label='Name'
                  name='name'
                  required
                  placeholder='Your name'
                  aria-required='true'
                  disabled={state.submitting}
                />
                <ValidationError
                  prefix='Name'
                  field='name'
                  errors={state.errors}
                  className='text-red-600 dark:text-red-400 mt-2'
                />

                <FormField
                  label='Email'
                  name='email'
                  type='email'
                  required
                  placeholder='your@email.com'
                  aria-required='true'
                  disabled={state.submitting}
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                  className='text-red-600 dark:text-red-400 mt-2'
                />

                <FormField
                  label='Company'
                  name='company'
                  placeholder='Your company name'
                  required
                  aria-required='true'
                  disabled={state.submitting}
                />
                <ValidationError
                  prefix='Company'
                  field='company'
                  errors={state.errors}
                  className='text-red-600 dark:text-red-400 mt-2'
                />

                <FormField
                  label='Tell us about your project'
                  name='message'
                  type='textarea'
                  required
                  placeholder='Tell us about your goals and vision'
                  aria-required='true'
                  disabled={state.submitting}
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                  className='text-red-600 dark:text-red-400 mt-2'
                />
              </div>

              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className='text-red-600 dark:text-red-400' role='alert'>
                  Please fix the errors above and try again.
                </div>
              )}

              <Button
                as='submit'
                disabled={state.submitting}
                aria-label='Submit form to book your strategy session'
              >
                {state.submitting ? "Sending..." : "Book a strategy session"}
              </Button>

              {process.env.NODE_ENV === "development" && (
                <div className='mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg'>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Development Mode: Form submissions will be logged to the
                    console.
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      </section>

      <section className='py-32 border-t border-gray-200 dark:border-white/10'>
        <div className='max-w-3xl'>
          <h2 className='text-3xl font-light mb-12'>Other ways to connect</h2>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <h3 className='text-xl font-light'>Nathan Reddrop</h3>
              <div className='space-y-1'>
                <p className='text-lg'>
                  <a
                    href='tel:+61488053711'
                    className='text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group'
                  >
                    <span className='inline-block transition-transform duration-300 group-hover:translate-x-2'>
                      +61 488 053 711
                    </span>
                    <span className='ml-2 opacity-0 transition-opacity group-hover:opacity-100'>
                      →
                    </span>
                  </a>
                </p>
                <p className='text-lg'>
                  <a
                    href='mailto:nathan@dropmotion.au'
                    className='text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group'
                  >
                    <span className='inline-block transition-transform duration-300 group-hover:translate-x-2'>
                      nathan@dropmotion.au
                    </span>
                    <span className='ml-2 opacity-0 transition-opacity group-hover:opacity-100'>
                      →
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <p className='text-lg text-gray-400'>
              Brisbane & Gold Coast, Australia
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
