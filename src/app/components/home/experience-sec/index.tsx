import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Dec 2024 - Present",
            title: "Software Engineer (Backend & Systems)",
            company: "xFlow Research",
            type: "Full-time",
            description: "Working on high-performance backend systems in C++ focused on multithreading, performance optimization, and low-latency processing. Improved system throughput by 20% and reduced latency by 15% by optimizing performance-critical modules and memory management on Linux systems."
        },
        {
            year: "Sep 2023 - Nov 2024",
            title: "Full Stack Developer (Mobile & Backend)",
            company: "TechFabbier",
            type: "Remote",
            description: "Built and maintained full-stack applications using Flutter, Node.js, and MySQL. Developed REST APIs, implemented new features based on client requirements, managed deployments, and delivered weekly production releases."
        },
        {
            year: "Jun 2022 - Jul 2022",
            title: "Project Manager & Backend Developer (Intern)",
            company: "Vialogic",
            type: "Internship",
            description: "Worked on backend development and project coordination for an LMS platform. Designed database schemas, customized backend features, performed testing using JMeter and Selenium, and coordinated deployments on Linux systems."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;