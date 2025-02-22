import React from 'react';


const WorkplaceAudits = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
            <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg mt-6">
                <h1 className="text-green-400 text-2xl font-bold text-center mb-4">🏢 Workplace Audits</h1>
                <p className="text-gray-300 text-center mb-6">
                    Regardless of your workspace, we can carry out audits or inspections on your behalf. There are several clear benefits to letting us handle this task for you:
                </p>
                
                {/* Your Legal Duty */}
                <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">Your Legal Duty</h2>
                <p className="text-gray-300 text-center mb-6">
                    As an employer, under the Health and Safety at Work Act 1974, you have a legal duty to provide a safe working environment and safe systems of work. 
                    This is achieved through conducting risk assessments and implementing the findings into effective safety procedures.
                </p>
                
                {/* Advantages of Our Audit Services */}
                <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">Advantages of Our Audit Services</h2>
                <ul className="text-gray-300 space-y-2">
                    <li>✅ <strong>Expertise:</strong> Our team knows exactly what to look for, which helps reduce the time spent conducting the audit. We bring a fresh, unbiased perspective to every inspection.</li>
                    <li>✅ <strong>Efficiency:</strong> Our approach minimizes disruption to senior management, making the process both seamless and cost-effective.</li>
                    <li>✅ <strong>Clear Reporting:</strong> We provide management with a concise, easy-to-read report outlining key findings and highlighting necessary remedial actions to ensure compliance with relevant regulations.</li>
                </ul>
                
                {/* Frequency of Audits */}
                <h2 className="text-green-400 text-xl font-semibold mt-6 mb-3 text-center">Frequency of Audits</h2>
                <p className="text-gray-300 text-center mb-6">
                    Regular audits should be conducted annually or following significant changes, such as moving premises or introducing vulnerable individuals 
                    (e.g., expectant mothers, young people, elderly, or disabled persons).
                </p>
                
                {/* Our Experience */}
                <h2 className="text-green-400 text-xl font-semibold mb-3 text-center">Our Experience</h2>
                <p className="text-gray-300 text-center">
                    With experience spanning various sectors—from construction sites to office environments, and from manufacturing to storage—let us simplify 
                    the compliance process and help improve your workplace safety and efficiency.
                </p>
            </div>

        </div>
    );
};

export default WorkplaceAudits;
