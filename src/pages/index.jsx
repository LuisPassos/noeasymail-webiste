import Head from 'next/head'
import { useState } from 'react'

import { Logo } from '@/components/Logo'

export default function Home() {
  const curlCommand = [
    'curl -X POST "https://api.noeasymail.com" \\',
    '     -H "Content-Type: application/json" \\',
    '     -d \'{"emails": ["email1@noeasymail.com", "email2@noeasymail.com"]}\''
  ].join('\n');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setSubmitted(true);

    try {
      const response = await fetch('https://api.noeasymail.com?email=' + email, {
        method: 'GET',
      })

      const data = await response.json()
      setLoading(false)
      setMessage(data)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>NoEasyMail - Effortless Disposable Email Detection</title>
        <meta
          name="description"
          content="Instantly detect disposable emails with our free API, safeguarding your online platforms against fraud, spam, and security risks."
        />
      </Head>
      <header className="flex items-center justify-center py-10">
        <Logo className="h-10 w-auto" />
      </header>
      <main className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full bg-white/5 px-3 py-1 text-sm leading-6 text-white ring-1 ring-sky-300">
              New Features and Updates Weekly
            </div>
          </div>
          <h1 className="mt-4 font-display text-4xl/tight font-light text-white">
            NoEasyMail: Effortless Disposable{' '}
            <span className="text-sky-300">Email Detection</span>
          </h1>
          <p className="mt-4 text-sm/6 text-gray-300">
            Instantly detect disposable emails with our free API, safeguarding
            your online platforms against fraud, spam, and security risks.
            Experience fast and accurate verification across{' '}
            <span className="font-bold">5000+</span> temporary email providers.
          </p>
        </div>
        <form
          className="relative isolate mt-8 flex items-center"
          onSubmit={handleSubmit}
        >
          <label className="sr-only">Email address</label>
          <input
            required
            type="email"
            name="mail"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
          />{' '}
          <button
            className="group relative isolate flex-none rounded-md py-1.5 pl-2.5 pr-[calc(9/16*1rem)] text-[0.8125rem]/6 font-semibold text-white"
            type="submit"
          >
            Search <span aria-hidden="true">→</span>
          </button>
          <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/[0.15]" />
          <div className="bg-white/2.5 ring-white/15 absolute inset-0 -z-10 rounded-lg ring-1 transition peer-focus:ring-sky-300" />
        </form>
        {/* Add the loading icon here */}
        {loading && (
          <div className="spinner mr-3 h-4 w-4">
            <style jsx>{`
              .spinner {
                border: 2px solid transparent;
                border-top-color: #fff;
                border-radius: 50%;
                animation: spin 1s linear infinite;
              }

              @keyframes spin {
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </div>
        )}
        <p className="px-4 py-2 text-xs text-white">
          {loading ? (
            <span className="inline-flex items-center">
              <span className="spinner mr-3 h-4 w-4"></span>Loading...
            </span>
          ) : (
            submitted && (
            <>
              Is valid email:{' '}
              <span
                className={message.isEmail ? 'text-green-500' : 'text-red-500'}
              >
                {message.isEmail ? 'Yes' : 'No'}
              </span>
              , Is disposable:{' '}
              <span
                className={
                  message.isDisposable ? 'text-red-500' : 'text-green-500'
                }
              >
                {message.isDisposable ? 'Yes' : 'No'}
              </span>
            </>
            )
          )}
        </p>

        <div className="mt-14">
          <h2 className="font-display text-2xl/tight font-light text-white">
            API Documentation
          </h2>
          <p className="mt-4 pl-4 text-xs text-gray-300">
            Verify if an email address is valid and temporary using this
            endpoint. Ideal for validating one email address at a time.
          </p>
          <div className="not-prose my-6 overflow-hidden rounded-lg bg-slate-800/60 shadow-md ring-sky-300/[0.15] dark:ring-1">
            <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-slate-800 bg-transparent px-4">
              <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
                GET - Single Disposable Email Verification Endpoint
              </h3>
            </div>
            <div className="group bg-white/[0.025]">
              <div className="relative">
                <pre className="overflow-x-auto p-4 text-xs text-white">
                curl &quot;https://api.noeasymail.com?email=email1@noeasymail.com&quot;
                </pre>
              </div>
            </div>
          </div>
          <p className="mt-4 pl-4 text-xs text-gray-300">
            Verify up to 150 email addresses at once for validity and temporary
            status using this endpoint. Perfect for checking large lists of
            email addresses.
          </p>
          <div className="not-prose my-6 overflow-hidden rounded-lg bg-slate-800/60 shadow-md ring-sky-300/[0.15] dark:ring-1">
            <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-slate-800 bg-transparent px-4">
              <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
                POST - Bulk Disposable Email Verification Endpoint
              </h3>
            </div>
            <div className="group bg-white/[0.025]">
              <div className="relative">
                <pre className="overflow-x-auto p-4 text-xs text-white">
                  { curlCommand }
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl/tight font-light text-white">
            About NoEasyMail
          </h2>
          <div className="mt-4 space-y-2 text-[13px] leading-6 text-white">
            <p>
              NoEasyMail is a FREE tool that detects disposable emails with an
              easy-to-use API. 🚀
            </p>
            <p>
              Plus, for your peace of mind, NoEasyMail doesn&apos;t store any data,
              and i&apos;s lightning fast because it runs in memory! ⚡️🔒 <br />{' '}
              And hey, I&apos;ve got you covered if you need to check a batch of
              emails! NoEasyMail has an endpoint where you can throw in 100
              emails at a time to verify if you currently have disposable emails
              in your database. 📬🔎
            </p>
            <p>
              NoEasyMail was created as a response to the challenges faced by
              many websites that were getting swamped with registrations from
              disposable emails. These disposable emails can cause various
              issues, such as:
            </p>
            <ul className="list-disc pl-4">
              <li>Unnecessary costs for businesses 💸</li>
              <li>Interference with email marketing efforts 📧</li>
              <li>Accumulation of uninterested users in databases 🤷‍♂️</li>
              <li>Potential decrease in email deliverability rates 📉</li>
            </ul>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between py-8 text-sm/tight font-light text-white">
          <p>NoEasyMail @ 2023</p>
          <p>
            Made in &#127477;&#127481; by{' '}
            <a href="https://www.linkedin.com/in/luis-passos/">Luís Passos</a>
          </p>
        </div>
      </main>
    </>
  )
}
