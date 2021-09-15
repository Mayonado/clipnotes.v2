import { Navbar } from "components/Navbar/Navbar";
import PageLoader from "components/PageLoader/PageLoader";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageLoader color="#3f51b5" />

      <div className="flex flex-row justify-center py-6">
        <div className="w-11/12 sm:w-9/12 bg-white p-4 sm:p-12 shadow-lg">
          {children}
        </div>
      </div>
      <div className="text-center p-8 text-sm m-auto mb-0 bottom-0">
        © CLIPNOTES 2021
      </div>
    </>
  );
};
export default Layout;
