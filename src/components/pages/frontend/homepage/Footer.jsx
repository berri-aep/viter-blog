import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 ">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr] mb-16">
          <div className="footer-info flex flex-col min-h-[300px] justify-between">
            <div>
              <h3 className="uppercase mb-10">Fylla</h3>
              <ul>
                <li>Fylla Digital Agency</li>
                <li>Main Street 16</li>
                <li>Lisbon</li>
              </ul>
            </div>
            <ul className="flex gap-5">
              <li className="size-[30px] center-all rounded-full border border-light text-xs hover:bg-black hover:text-white transition-all duration-300">
                <a href="">TW</a>
              </li>
              <li className="size-[30px] center-all rounded-full border border-light text-xs hover:bg-black hover:text-white transition-all duration-300">
                <a href="">IN</a>
              </li>
              <li className="size-[30px] center-all rounded-full border border-light text-xs hover:bg-black hover:text-white transition-all duration-300">
                <a href="">BE</a>
              </li>
            </ul>
          </div>
          <div className="footer-links grid grid-cols-3 gap-5 pl-5 border-l border-light">
            <div>
              <h4 className="font-[syne] mb-10 text-2xl font-normal">Pages</h4>
              <ul className="mb-5 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link to="/" className="btn-animate" data-text="more templates">
                more templates
              </Link>
            </div>
            <div>
              <h4 className="font-[syne] mb-10 text-2xl font-normal">CMS</h4>
              <ul className="mb-5 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Work single
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    blogpost
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    shop
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    single
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-[syne] mb-10 text-2xl font-normal">
                Utility Pages
              </h4>
              <ul className="mb-5 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center uppercase border-t border-light pt-10">
          <p>© Made by Pawel Gola - Powered by Webflow</p>
          <ul className="flex gap-5">
            <li>Privacy</li>
            <li>imprint</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
