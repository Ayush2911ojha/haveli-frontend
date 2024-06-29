import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../components/data/Data";
import Newsletter from "../components/home/Newsletter";

export default function Footer() {
  return (
    <>
     
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300">
        <div className="container mx-auto py-16 px-6">
          <div className="flex flex-wrap gap-10 justify-between">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
              <div className="bg-blue-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Link to="/">
                  <h1 className="text-white text-3xl font-extrabold uppercase mb-4 tracking-wide">
                    Haweli24
                  </h1>
                </Link>
                <p className="text-gray-200 mb-4">
                  Experience luxury and comfort with us. Your perfect getaway awaits at Haweli24.
                  Aao Kabhi Haweli Per!!
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h6 className="text-xl font-bold text-blue-400 uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2 flex items-center text-lg" key={index}>
                  <span className="mr-3 text-blue-500">{val.icon}</span> {val.name}
                </p>
              ))}
              <div className="flex space-x-4 mt-4">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a
                    key={index}
                    className="p-3 bg-gray-700 rounded-full text-white hover:bg-blue-500 transition-transform transform hover:scale-110"
                    href=""
                  >
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/3 mb-8">
              <div className="grid grid-cols-2 gap-6">
                {footerItem.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h6 className="text-xl font-bold text-blue-400 uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <a
                        className="block text-gray-400 hover:text-white transition-colors duration-300 mb-2"
                        href=""
                        key={itemIndex}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-t-lg text-center py-4">
          <p className="text-gray-500">© 2024 Haweli24. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
