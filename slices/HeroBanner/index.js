import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const HeroBanner = ({ slice }) => (
  <section className="mx-auto mt-16 mb-16 max-w-7xl px-4 sm:mt-24 sm:mb-24">
    <div className="text-center">
      {console.log(slice)}
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {children}
            </h2>
          ),
        }}
      />
      <PrismicRichText
        field={slice.primary.body}
        components={{
          paragraph: ({ children }) => (
            <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl ">
              {children}
            </p>
          ),
        }}
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {slice?.items?.map((item) => (
          <span key={item.name} className="text-xl font-semibold text-black">
            {item.features}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-10">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            {slice.primary.buttonText}
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBanner
