import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center ">
            {index !== 0 && (
             <img src="./ArrowForward.svg" alt="" />
            )}
            <span className="text-gray-500">{item}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
