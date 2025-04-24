'use client';

import { useState } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
}

export default function PercentDifferenceCalculator({ title, description }: CalculatorProps) {
  const [oneValue, setOneValue] = useState<string>('');
  const [anotherValue, setAnotherValue] = useState<string>('');
  const [percentDifference, setPercentDifference] = useState<string>('');
  const [showExamples, setShowExamples] = useState(false);

  const calculate = () => {
    try {
      const value1 = parseFloat(oneValue);
      const value2 = parseFloat(anotherValue);
      
      // Calculate average of the two values
      const average = (value1 + value2) / 2;
      
      if (average === 0) throw new Error("Cannot calculate when average is zero");
      
      // Calculate percent difference
      const difference = Math.abs(value1 - value2);
      const percentDiffValue = (difference / Math.abs(average)) * 100;
      
      setPercentDifference(percentDiffValue.toFixed(7));
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
          <label className="block text-sm font-medium mb-1">One Value</label>
          <input
            type="text"
            className="input-field-blue w-full md:w-32"
            value={oneValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setOneValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Another Value</label>
          <input
            type="text"
            className="input-field-blue w-full md:w-32"
            value={anotherValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setAnotherValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Percent Difference</label>
          <div className="flex items-center">
            <input
              type="text"
              className="output-field w-full md:w-32"
              value={percentDifference}
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
      
      <div className="text-sm text-muted-foreground mt-2">
        <p>Note: There is no standard equation for percent difference for all circumstances. The equation used here divides the difference between the two values by the average of the two values.</p>
      </div>
      
      <div className="formula-container mt-4">
        <p><strong>Percent Difference Formula:</strong></p>
        <p>Percent Difference = (|One Value - Another Value| / |((One Value + Another Value)/2)|) × 100%</p>
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
          <p><strong>Example 1:</strong> If one value is 10 and another value is 20, the percent difference is 66.67%</p>
          <p><strong>Example 2:</strong> If one value is 50 and another value is 60, the percent difference is 18.18%</p>
          <p><strong>Example 3:</strong> If one value is 100 and another value is 200, the percent difference is 66.67%</p>
        </div>
      </div>
    </div>
  );
}
