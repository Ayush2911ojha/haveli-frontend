import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/commonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <>
    

      <div className="bg-blue-50 mt-10 py-12">
        <div className="container mx-auto px-6">
          <CommonHeading
            heading="Contact Us"
            subtitle="Contact"
            title="For Any Query"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              {contact.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
                >
                  <h6 className="text-blue-600 text-lg font-semibold mb-2">
                    {item.title}
                  </h6>
                  <p className="flex items-center space-x-2">
                    <span className="text-blue-600">{item.icon}</span>
                    <span>{item.email}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-8">
              <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1091551279055!2d80.9432367154216!3d26.8467089831574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1bb8f5aef7%3A0x8a3c8e34422558e0!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1625212392921!5m2!1sen!2sus"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <label htmlFor="name" className="text-gray-600 text-right pr-2">
                    Your Name
                  </label>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <label htmlFor="email" className="text-gray-600 text-right pr-2">
                    Your Email
                  </label>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <label htmlFor="subject" className="text-gray-600 text-right pr-2">
                    Subject
                  </label>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <label htmlFor="message" className="text-gray-600 text-right pr-2">
                    Message
                  </label>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "150px" }}
                    ></textarea>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div></div>
                  <div>
                    <button
                      className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
