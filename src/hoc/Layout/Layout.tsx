import { Navbar } from "components/Navbar/Navbar";
// import router, { useRouter } from "next/router";
// import { isServer } from "utils/isServer";
// import Cookies from "js-cookie";
// import { redirect } from "next/dist/server/api-utils";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="flex flex-row justify-center py-6">
        <div className="w-9/12 bg-white p-12 shadow-lg">{children}</div>
      </div>
      <div className="text-center p-8 text-sm m-auto mb-0 bottom-0">
        © CLIPNOTES 2021
      </div>
    </>
  );
};
export default Layout;
