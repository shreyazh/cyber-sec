import React, { useState } from "react";
import { PhilosophicalPeriod } from "../types/philosophy";
import { Clock, ChevronRight } from "lucide-react";

interface TimelineProps {
  periods: PhilosophicalPeriod[];
  selectedPeriod: string | null;
  onPeriodSelect: (periodId: string) => void;
}

export function Timeline({ periods, selectedPeriod, onPeriodSelect }: TimelineProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
    onPeriodSelect(id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Clock size={24} className="sm:w-8 sm:h-8 text-blue-600" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
            Journey Through Philosophical History
          </h2>
        </div>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
          Explore the evolution of human thought across millennia. Click on any
          period to reveal its schools and thinkers.
        </p>
      </div>

      {/* Navigation Bar */}
      {/* <div className="flex gap-2 sm:gap-3 justify-center flex-wrap mb-6 sm:mb-8 px-2">
        {periods.map((p) => (
          <button
            key={p.id}
            onClick={() => toggleExpand(p.id)}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              selectedPeriod === p.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white border border-gray-300 hover:bg-blue-50"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div> */}

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
        {/* Main vertical line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 rounded-full shadow-lg"></div>

        {/* Periods */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {periods.map((period) => {
            const isActive = expanded === period.id;
            return (
              <div key={period.id} className="relative flex items-start group">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-white shadow-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                        : "bg-gradient-to-r from-gray-400 to-gray-500 group-hover:from-blue-400 group-hover:to-purple-400 group-hover:scale-110"
                    }`}
                  ></div>
                  <div className="absolute top-3 sm:top-4 left-6 sm:left-8 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>

                {/* Card */}
                <div className="flex-1 ml-4 sm:ml-6 lg:ml-8">
                  <button
                    onClick={() => toggleExpand(period.id)}
                    className={`w-full text-left p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                      isActive
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl"
                        : "bg-white shadow-lg border border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
                    }`}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <h3
                          className={`text-lg sm:text-xl font-bold ${
                            isActive ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {period.name}
                        </h3>
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {period.years}
                        </span>
                      </div>
                      <ChevronRight
                        size={18}
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-90 text-white" : "text-gray-500"
                        }`}
                      />
                    </div>

                    <p
                      className={`mt-2 text-sm sm:text-base leading-relaxed ${
                        isActive ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {period.description}
                    </p>

                    {/* Always show preview */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
                      {period.schools.slice(0, 3).map((s, i) => (
                        <span
                          key={i}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {s.name}
                        </span>
                      ))}
                      {period.schools.length > 3 && (
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          +{period.schools.length - 3} more
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Expandable schools list */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive ? "max-h-96 mt-2 sm:mt-4" : "max-h-0"
                    }`}
                  >
                    <div className="pl-2 sm:pl-4 border-l-2 border-blue-200">
                      <ul className="space-y-1 sm:space-y-2">
                        {period.schools.map((s, i) => (
                          <li
                            key={i}
                            className="px-2 sm:px-3 py-1 sm:py-2 rounded-md bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800 text-xs sm:text-sm hover:bg-blue-50"
                          >
                            {s.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline end */}
        <div className="relative flex items-center mt-6 sm:mt-8 lg:mt-10">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 border-2 sm:border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
          </div>
          <div className="ml-4 sm:ml-6 lg:ml-8 px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
            <span className="text-xs sm:text-sm font-medium text-indigo-800">
              Present Day
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
