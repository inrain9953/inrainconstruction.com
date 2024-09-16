import { Footer } from "@/components/Footer/Footer";
import { Hero1 } from "@/components/Hero/Hero1";
import { Navbar } from "@/components/Navbar/Navbar";
import React from "react";
import logo from "../../public/logo.png";
import tree from "../../public/tree.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const router = useRouter();

  const HandleLoginSubmit = async (e) => {

    e.preventDefault();
    setError("");

    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    

    if (res.ok) {
      // Store JWT in localStorage or cookies
      const data = await res.json();
      localStorage.setItem("token", data.token);
      router.push('/admin/userdata');
    } else {
      alert("Invalid Credentials");
      setError("Error");
    }
  };

  return (
    <>
      <Navbar />
      <Hero1 />
      <div
        data-aos="zoom-in-up"
        className="md:grid m-10 md:grid-cols-2 md:items-center md:gap-10 md:w-[75%] md:m-auto"
      >
        <div className="hidden md:block">
          <Image
            className="w-full"
            src={tree}
            alt="img"
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>

        <div data-aos="zoom-in-up" className="mt-10 mb-10 contact-form">
          <div className="flex justify-center">
            <div className="form-card1">
              <div className="form-card2 relative">
                <form className="form bg-gray-400" onSubmit={HandleLoginSubmit}>
                  <div className="flex justify-center mt-5">
                    <Image
                      className="w-[100px]"
                      src={logo}
                      alt="img"
                      loading="eager"
                      priority={true}
                      unoptimized={true}
                    />
                  </div>
                  <p className="form-heading mt-3 mb-3 text-black">
                    Login To The Admin Panel
                  </p>

                  <div className="form-field">
                    <input
                      placeholder="Username"
                      className="input-field"
                      type="username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <input
                      placeholder="Password"
                      className="input-field"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>

                  <button className="sendMessage-btn" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
