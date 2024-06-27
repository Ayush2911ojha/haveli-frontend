import React from "react";

export default function Book() {
  return (
    <>
      <div className="container-fluid bg-gray-100 pb-12">
        <div className="container mx-auto">
          <div className="bg-white shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-4">
              <div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <input
                    type="text"
                    className="form-control block w-full py-3 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Check in"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control block w-full py-3 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Check out"
                  />
                </div>
                <div>
                  <select className="form-select block w-full py-3 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option selected>Adults</option>
                    <option value="1">Adult 1</option>
                    <option value="2">Adult 2</option>
                    <option value="3">Adult 3</option>
                  </select>
                </div>
                <div>
                  <select className="form-select block w-full py-3 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option selected>Child</option>
                    <option value="1">Child 1</option>
                    <option value="2">Child 2</option>
                    <option value="3">Child 3</option>
                  </select>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <button className="btn btn-primary w-full py-3 px-4 bg-primary text-white rounded hover:bg-primary-dark transition">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
