import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-gray-950 antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </Head>
      <body className="flex h-full flex-col">
        <div class="absolute inset-0 -z-10 overflow-hidden bg-gray-950">
          <svg
            class="absolute -bottom-48 left-[-80%] h-[120rem] w-[180%]"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id=":R1d6:-desktop" cx="100%">
                <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stop-color="rgba(0, 71, 255, 0.09)"
                ></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
              <radialGradient id=":R1d6:-mobile" cy="100%">
                <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stop-color="rgba(0, 71, 255, 0.09)"
                ></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1d6:-desktop)"
              class="hidden lg:block"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1d6:-mobile)"
              class="lg:hidden"
            ></rect>
          </svg>
          <div class="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"></div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
