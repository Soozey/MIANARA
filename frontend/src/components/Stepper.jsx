import { Check } from "lucide-react";

export default function Stepper({ currentStep, steps }) {
    const progress = Math.round(((currentStep - 1) / (steps.length - 1)) * 100);

    return (
        <div className="w-full mb-8">
            {/* Mobile View: Progress Bar & Text */}
            <div className="md:hidden">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-primary-600">
                        Étape {currentStep}/{steps.length}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                        {steps[currentStep - 1]}
                    </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                        className="bg-primary-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Desktop View: Horizontal Stepper */}
            <div className="hidden md:flex items-center justify-between relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-primary-600 -z-10 transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>

                {steps.map((step, index) => {
                    const stepNum = index + 1;
                    const isCompleted = stepNum < currentStep;
                    const isCurrent = stepNum === currentStep;

                    return (
                        <div key={index} className="flex flex-col items-center bg-white px-2">
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${isCompleted
                                    ? "bg-primary-600 border-primary-600 text-white"
                                    : isCurrent
                                        ? "bg-white border-primary-600 text-primary-600 scale-110 shadow-md"
                                        : "bg-white border-gray-300 text-gray-400"
                                    }`}
                            >
                                {isCompleted ? <Check size={20} /> : <span className="font-bold">{stepNum}</span>}
                            </div>
                            <span
                                className={`mt-2 text-xs font-bold uppercase tracking-wider ${isCurrent ? "text-primary-600" : "text-gray-400"
                                    }`}
                            >
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
