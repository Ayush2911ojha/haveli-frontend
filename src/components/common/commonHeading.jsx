import React from 'react';

export default function CommonHeading({ heading, title, subtitle }) {
  return (
    <>
      <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <h6 className="text-primary uppercase mb-2">{heading}</h6>
        <h1 className="mb-5">
          {subtitle}{' '}
          <span className="text-primary uppercase">{title}</span>
        </h1>
      </div>
    </>
  );
}
