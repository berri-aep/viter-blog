import React from 'react'
import { Link } from 'react-router-dom';

const News = ({title}) => {
  return (
    <section className="py-16 border-b border-light">
      <div className="container">
        <div className="flex justify-between items-center py-10 border-y border-light mb-10">
          <h2 className="uppercase font-[syne] font-normal text-7xl mb-0">
            {title}
          </h2>
          <Link to="/" className="btn-animate uppercase" data-text="see all">
            See All
          </Link>
        </div>
      <div className="grid grid-cols-3 divide-x divide-black">
        <div className="card-news pr-5">
          <img
            src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f155fb2692636d3656aa_blog-01-preview-p-800.webp"
            alt=""
            className="w-full rounded-lg h-[300px] object-cover "
          />
          <small className="uppercase text-lg font-[syne] block my-3">
            branding
          </small>
          <Link to="/" className='text-2xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Link>
        </div>
        <div className="card-news px-5">
          <img
            src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f155fb2692636d3656aa_blog-01-preview-p-800.webp"
            alt=""
            className="w-full rounded-lg h-[300px] object-cover "
          />
          <small className="uppercase text-lg font-[syne] block my-3">
            branding
          </small>
          <Link to="/" className='text-2xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Link>
        </div>
        <div className="card-news pl-5">
          <img
            src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f155fb2692636d3656aa_blog-01-preview-p-800.webp"
            alt=""
            className="w-full rounded-lg h-[300px] object-cover "
          />
          <small className="uppercase text-lg font-[syne] block my-3">
            branding
          </small>
          <Link to="/" className='text-2xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export default News