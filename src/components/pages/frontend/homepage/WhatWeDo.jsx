import { Donut, MoonStar, Pyramid, Sparkles, Torus, Video } from 'lucide-react';
import React from 'react'

const WhatWeDo = () => {
  return (
    <section className="py-16 border-b border-light">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr] gap-10">
          <h5 className="uppercase font-[roboto] font-light ">What We Do</h5>

          <div className="border-l border-light pl-16">
            <div className="cards-top grid grid-cols-2 divide-x-2 divide-light">
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start">
                <Torus strokeWidth={0.4} size={80} />
                <div className="max-w-[450px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal mb-5">
                    branding
                  </h4>
                  <p className="w-[80%]">
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start pl-[5rem]">
                <Pyramid strokeWidth={0.4} size={80} />
                <div className="max-w-[450px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal mb-5">
                    Design
                  </h4>
                  <p className="w-[80%]">
                    Innovative and aesthetic designs that bring your ideas to
                    life.
                  </p>
                </div>
              </div>
            </div>

            <div className="cards-bottom grid grid-cols-2 divide-x-2 divide-light mt-16 pt-16 border-t border-light">
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start">
                <Video strokeWidth={0.4} size={80} />
                <div className="max-w-[450px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal mb-5">
                    Video
                  </h4>
                  <p className="w-[80%]">
                    Captivating visual storytelling that engages and resonates
                    with your audience.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start pl-[5rem]">
                <Sparkles strokeWidth={0.4} size={80} />
                <div className="max-w-[450px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal mb-5">
                    Content
                  </h4>
                  <p className="w-[80%]">
                    Engaging and persuasive content that captures attention and
                    sparks meaningful connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo