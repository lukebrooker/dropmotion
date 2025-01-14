import { CTAButton } from "@/components/CTAButton"

export default function About() {
  const services = [
    {
      title: "Television commercial production",
      description:
        "Creating local, high-impact TVCs that speak directly to your Brisbane and Gold Coast audience",
    },
    {
      title: "Motion graphics and design",
      description:
        "Bringing your brand to life through dynamic visual elements",
    },
    {
      title: "Corporate video production",
      description:
        "Telling your company's story in a way that resonates and converts",
    },
    {
      title: "Social media content creation",
      description:
        "Turning viewers into customers with scroll-stopping visual content",
    },
  ]

  const goals = [
    "Boost quarterly sales targets",
    "Launch a new product or service",
    "Strengthen your brand presence",
    "Connect with your ideal customers",
  ]

  return (
    <div className='max-w-7xl mx-auto px-6'>
      <section className='py-20'>
        <h1 className='text-4xl md:text-5xl font-light mb-12 [text-wrap:balance]'>
          About us
        </h1>

        <div className='max-w-3xl'>
          <h2 className='text-2xl font-light mb-6'>Our mission</h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-12 [text-wrap:balance]'>
            Your story deserves to be seen and heard. At Drop Motion, we
            transform your business vision into compelling visual stories that
            not only capture attention but drive real results. We partner with
            forward-thinking businesses across Brisbane and the Gold Coast who,
            like you, are committed to making a positive impact while reaching
            their growth targets.
          </p>

          <h2 className='text-2xl font-light mb-6'>
            Services that drive growth
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
            {services.map((service, index) => (
              <div key={index} className='border-t pt-6'>
                <h3 className='text-xl mb-2'>{service.title}</h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className='text-2xl font-light mb-6'>Why partner with us?</h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-6 [text-wrap:balance]'>
            We measure our success by your success. Whether you're aiming to:
          </p>
          <ul
            className='list-disc list-inside text-gray-600 dark:text-gray-400 mb-12 space-y-2'
            aria-label='Our goals for your business'
          >
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>

          <p className='text-lg text-gray-600 dark:text-gray-400 mb-12 [text-wrap:balance]'>
            Our team transforms complex industry messages into clear, compelling
            visual stories that drive action. We're not just creating videos –
            we're crafting visual strategies that help you reach and exceed your
            business goals.
          </p>
        </div>
      </section>

      <section
        className='py-32 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.05]'
        aria-labelledby='cta-heading'
      >
        <div className='max-w-3xl mx-auto text-center'>
          <h2
            id='cta-heading'
            className='text-3xl font-light mb-6 [text-wrap:balance]'
          >
            Your success story starts here
          </h2>
          <p className='text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto [text-wrap:balance]'>
            Every successful campaign begins with a conversation about your
            goals. Let's talk about how we can turn your vision into measurable
            results.
          </p>
          <CTAButton href='/contact' aria-label='Book a strategy session'>
            Book a strategy session
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
