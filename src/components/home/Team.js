import React from "react";
import { socialIcons, team } from "../data/Data";
import { Link } from "react-router-dom";
import CommonHeading from "../common/commonHeading";

export default function Teams() {
  return (
    <>
      <div className="container mx-auto py-12">
        <CommonHeading heading="Our Team" subtitle="Explore Our" title="Staffs" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((item, index) => (
            <div className="rounded shadow overflow-hidden" key={index}>
              <div className="relative">
                <img className="w-full h-auto" src={item.image} alt="img" />
                <div className="absolute inset-x-1/2 bottom-0 transform translate-y-1/2 flex justify-center space-x-2">
                  {socialIcons.slice(0, 3).map((val, index) => (
                    <Link
                      className="btn-square bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition"
                      to={'/'}
                      key={index}
                    >
                      {val.icon}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="font-bold mb-1">{item.name}</h5>
                <small>{item.designation}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
