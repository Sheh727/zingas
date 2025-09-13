import React from "react";

const Custom = () => {
  const steps = [
    {
      id: 1,
      title: "In-Home Consultation",
      items: [
        "Samples Brought to Your Home",
        "Measure Your Windows",
        "No Pressure Quote",
      ],
      image:
        "/images/custom-window-1.jpg", 
    },
    {
      id: 2,
      title: "Professional Install",
      items: [
        "Install done by Our Team",
        "Guaranteed Fit",
        "Prompt, Professional, Clean",
      ],
      image:
        "/images/custom-window-2.jpg", 
         
    },
    {
      id: 3,
      title: "Service & Warranty",
      items: [
        "Lifetime Warranty on all window coverings",
        "Ask about our You’ll Love it Guarantee",
        "You work with us on warranties, no 800 numbers",
      ],
      image:
        "/images/custom-window-3.jpg", 
        
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6 lg:px-20 mt-7 ">
      <h1 className="text-4xl font-semibold text-center text-black mb-10">
        Zinga’s <span className="font-normal">Custom Window Coverings</span>
      </h1>

      <div className="space-y-5">
        {steps.map((step) => (
          <div
            key={step.id}
            className="grid grid-cols-1 lg:grid-cols-2 items-center  "
          >
            
            <div className="rounded-2xl overflow-hidden shadow-md w-100 h-40 ">
              <img src={step.image} alt={step.title} className="  " />
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {step.id}
                </div>
                <h2 className="ml-4 text-xl font-bold text-gray-800">
                  {step.title}
                </h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {step.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

 
    </div>
  );
};

export default Custom;
