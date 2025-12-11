import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (!token) {
        router.push("/admin");
        return;
      }

      try {
        const decoded = jwtDecode(token);

        // Check expiration
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          router.push("/admin");
        } else {
          setLoading(false);
        }
      } catch (error) {
        localStorage.removeItem("token");
        router.push("/admin");
      }
    }, []);

    if (loading) {
      return (
        <>
          <Navbar />
          <div className="text-center text-2xl">Loading...</div>
          <Footer />
        </>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
