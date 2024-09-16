import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import withAuth from "@/components/withauth";
function UserData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/hello");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="text-center flex justify-center">
        <table className=" w-full">
          <caption className="text-2xl text-center m-10">User Data</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody className="border-separate border-2 border-spacing-3 text-lg">
            {products.map((product) => (
              <tr className="text-center m-2">
                <>
                  <td>{product.name}</td>
                  <td>{product.email}</td>
                  <td>{product.mobile}</td>
                  <td>{product.message}</td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default withAuth(UserData);