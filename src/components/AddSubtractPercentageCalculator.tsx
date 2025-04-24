'use client';

import { useState } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
}

export default function AddSubtractPercentageCalculator({ title, description }: CalculatorProps) {
  const [startValue, setStartValue] = useState<string>('');
  const [percentValue, setPercentValue] = useState<string>('');
  const [endValue, setEndValue] = useState<string>('');
  const [showExamples, setShowExamples] = useState(false);

  const calculate = () => {
    try {
      const start = parseFloat(startValue);
      const percent = parseFloat(percentValue);
      
      // Calculate end value (start value + or - percentage)
      const percentAmount = start * (percent / 100);
      const result = start + percentAmount;
      
      setEndValue(result.toFixed(7));
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  return (
    <div className="calculator-section">
      <h2 className="calculator-title">{title}</h2>
      <p className="calculator-description">{description}</p>
      
      <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Start Value</label>
          <input
            type="text"
            className="input-field-blue w-full md:w-32"
            value={startValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setStartValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">% of Start Value</label>
          <div className="flex items-center">
            <input
              type="text"
              className="input-field-blue w-full md:w-32"
              value={percentValue}
              onChange={(e) => {
                if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                  setPercentValue(e.target.value);
                }
              }}
              placeholder="Enter value"
            />
            <span className="ml-2">%</span>
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">End Value</label>
          <input
            type="text"
            className="output-field w-full md:w-32"
            value={endValue}
            readOnly
          />
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
      
      <div className="text-sm text-muted-foreground">
        <p>Enter values into the blue boxes. Answer will appear in the black box.</p>
        <p>Use positive percentage for increase, negative percentage for decrease.</p>
        <p>Answers are rounded to 7 decimal places.</p>
      </div>
      
      <div className="mt-4">
        <button 
          className="examples-toggle"
          onClick={() => setShowExamples(!showExamples)}
        >
          {showExamples ? 'Hide examples' : 'See examples'}
        </button>
        
        <div className={`examples-container ${showExamples ? 'block' : 'hidden'}`}>
          <p><strong>Example 1 (Tip):</strong> If a meal costs $50 and you want to add a 15% tip, the total would be $57.50</p>
          <p><strong>Example 2 (Discount):</strong> If an item costs $80 and is on sale for 25% off, the sale price would be $60</p>
          <p><strong>Example 3 (Tax):</strong> If an item costs $100 and there is 8% sales tax, the total with tax would be $108</p>
        </div>
      </div>
    </div>
  );
}
