'use client';

import { useState } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
}

export default function PercentErrorCalculator({ title, description }: CalculatorProps) {
  const [theoreticalValue, setTheoreticalValue] = useState<string>('');
  const [experimentalValue, setExperimentalValue] = useState<string>('');
  const [percentError, setPercentError] = useState<string>('');
  const [showExamples, setShowExamples] = useState(false);

  const calculate = () => {
    try {
      const theoretical = parseFloat(theoreticalValue);
      const experimental = parseFloat(experimentalValue);
      
      if (theoretical === 0) throw new Error("Theoretical value cannot be zero");
      
      // Calculate percent error
      const error = Math.abs(experimental - theoretical);
      const percentErrorValue = (error / Math.abs(theoretical)) * 100;
      
      setPercentError(percentErrorValue.toFixed(7));
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  return (
    <div className="calculator-section">
      <h2 className="calculator-title">{title}</h2>
      <p className="calculator-description">{description}</p>
      
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Theoretical Value</label>
          <input
            type="text"
            className="input-field-blue w-full md:w-32"
            value={theoreticalValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setTheoreticalValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Experimental Value</label>
          <input
            type="text"
            className="input-field-blue w-full md:w-32"
            value={experimentalValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setExperimentalValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Percent Error</label>
          <div className="flex items-center">
            <input
              type="text"
              className="output-field w-full md:w-32"
              value={percentError}
              readOnly
            />
            <span className="ml-2">%</span>
          </div>
        </div>
        
        <div className="w-full md:w-auto self-end">
          <button 
            className="calculator-button w-full md:w-auto"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
      </div>
      
      <div className="formula-container mt-4">
        <p><strong>Percent Error Formula:</strong></p>
        <p>Percent Error = (|Experimental Value - Theoretical Value| / |Theoretical Value|) × 100%</p>
        <p>(where |x| = absolute value of x)</p>
      </div>
      
      <div className="mt-4">
        <button 
          className="examples-toggle"
          onClick={() => setShowExamples(!showExamples)}
        >
          {showExamples ? 'Hide examples' : 'See examples'}
        </button>
        
        <div className={`examples-container ${showExamples ? 'block' : 'hidden'}`}>
          <p><strong>Example 1:</strong> If the theoretical value is 10.0 and the experimental value is 9.5, the percent error is 5%</p>
          <p><strong>Example 2:</strong> If the theoretical value is 100 and the experimental value is 110, the percent error is 10%</p>
          <p><strong>Example 3:</strong> If the theoretical value is 5.0 and the experimental value is 5.5, the percent error is 10%</p>
        </div>
      </div>
    </div>
  );
}
