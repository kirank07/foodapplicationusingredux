import React, { useState } from 'react';

const Section = ({ title, desc, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <section className="border-b">
      <div
        className="flex justify-between items-center cursor-pointer py-4"
        onClick={toggleAccordion}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
        <span
          className={`${
            isOpen ? 'transform rotate-180' : ''
          } transition-transform duration-300`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="px-4 pb-4">
          <p>{desc}</p>
        </div>
      )}
    </section>
  );
};

const Instamart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <Section
        title="About InstaMart"
        desc="This is the about for InstaMart"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Section
        title="Team InstaMart"
        desc="This is the team for InstaMart"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Section
        title="Contact InstaMart"
        desc="This is the contact information for InstaMart"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default Instamart;
