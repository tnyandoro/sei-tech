import React from "react";

const FaceFitTesting = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-green-400 text-2xl font-bold text-center mb-4">
            😷 Face Fit Testing
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Ensuring that tight-fitting disposable and reusable respirators form an effective seal with the wearer’s face is a 
            legal requirement. Face Fit Testing verifies that respiratory protective equipment (RPE) provides adequate protection 
            against hazardous substances.
          </p>

          {/* About Face Fit Testing */}
          <p className="text-gray-300 mb-4">
            At SEI.TECH International, we offer **qualitative Face Fit Testing** conducted by trained assessors across the UK. 
            This testing ensures disposable and reusable half-mask respirators seal properly, preventing the inhalation of 
            harmful particulates.
          </p>
          <p className="text-gray-300 mb-4">
            Recognized by the **Health & Safety Executive (HSE)**, Face Fit Testing is essential for effective respiratory 
            protection, safeguarding employees against workplace hazards.
          </p>

          {/* How Does It Work? */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🛠️ How Does It Work?</h2>
          <p className="text-gray-300 mb-4">
            Fit testing ensures that a tight-fitting mask forms a secure and effective seal around the wearer’s face. If the 
            seal is compromised, harmful particles may bypass the mask and enter the respiratory system, causing serious 
            health risks.
          </p>

          {/* What Does It Involve? */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">🔬 What Does It Involve?</h2>
          <p className="text-gray-300 mb-4">
            The **Face Fit Test** includes a saccharin taste test where a **sweet or bitter solution** is introduced into a hood 
            worn over the individual’s head. The wearer performs **a series of exercises** to ensure the mask’s seal remains intact 
            during normal activities.
          </p>
          <p className="text-gray-300 mb-4">
            **Regular RPE inspections** are still necessary. Wearers should check for wear and tear before each use and replace or 
            repair affected components as needed.
          </p>

          {/* Face Fit Laws */}
          <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3">⚖️ Face Fit Laws</h2>
          <p className="text-gray-300 mb-4">
            The **Approved Codes of Practice (ACOPs)** under **COSHH, CLaW, CAR, and IRR regulations** require fit testing when 
            selecting respiratory protective equipment.
          </p>
          <p className="text-gray-300 mb-4">
            To ensure compliance, we offer **on-site Face Fit Testing**, providing convenience and professionalism to meet 
            your organization's needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaceFitTesting;
