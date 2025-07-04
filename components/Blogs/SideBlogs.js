import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  sideBlogs1,
  sideBlogs10,
  sideBlogs11,
  sideBlogs12,
  sideBlogs2,
  sideBlogs3,
  sideBlogs4,
  sideBlogs5,
  sideBlogs6,
  sideBlogs7,
  sideBlogs8,
  sideBlogs9,
} from "./Blog";
import blog1img from "../../public/blog1.jpg";
import blog2img from "../../public/blog2.jpg";
import blog3img from "../../public/blog3.jpg";
import blog4img from "../../public/blog4.jpg";
import blog5img from "../../public/blog5.jpg";
import blog6img from "../../public/blog6.jpeg";
import blog7img from "../../public/blog7.webp";
import blog8img from "../../public/blog8.jpg";
import blog9img from "../../public/blog9.jpg";
import blog10img from "../../public/blog10.png";
import blog11img from "../../public//blog11.jpg";

const SideBlogs = () => {
  return (
    <div>
      {sideBlogs1.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog1img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs2.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog2img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs3.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog3img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs4.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog4img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs5.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog5img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs6.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog6img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs7.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog7img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs8.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog8img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs9.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog9img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs10.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog10img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs11.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog11img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <Link href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {sideBlogs12.map((blog) => (
        <div key={blog.id}>
          <div className="md:mb-10 md:flex md:gap-4 md:items-center">
            <div>
              <Image
                className="md:w-40"
                src={blog1img}
                alt="img"
                loading="eager"
                priority={true}
                unoptimized={true}
              />
            </div>
            <div>
              <p className="text-left text-gray-500">{blog.BlogDate}</p>
              <a href={blog.BlogLink}>
                <h4 className="text-left hover:text-green-500 underline text-lg font-semibold text-blue-500">
                  {blog.BlogHead}
                </h4>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBlogs;
