'use client';

import { useState } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
}

export default function PercentChangeCalculator({ title, description }: CalculatorProps) {
  const [startValue, setStartValue] = useState<string>('');
  const [endValue, setEndValue] = useState<string>('');
  const [percentChange, setPercentChange] = useState<string>('');
  const [showExamples, setShowExamples] = useState(false);

  const calculate = () => {
    try {
      const start = parseFloat(startValue);
      const end = parseFloat(endValue);
      
      if (start === 0) throw new Error("Start value cannot be zero");
      
      // Calculate percent change
      const change = end - start;
      const percentChangeValue = (change / Math.abs(start)) * 100;
      
      setPercentChange(percentChangeValue.toFixed(7));
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
          <label className="block text-sm font-medium mb-1">End Value</label>
          <input
            type="text"
            className="input-field-blue w-full md:w-32"
            value={endValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setEndValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium mb-1">Percent Change</label>
          <div className="flex items-center">
            <input
              type="text"
              className="output-field w-full md:w-32"
              value={percentChange}
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
      
      <div className="text-sm text-muted-foreground">
        <p>A positive answer for percent change represents a percent increase.</p>
        <p>A negative answer for percent change represents a percent decrease.</p>
      </div>
      
      <div className="formula-container mt-4">
        <p><strong>Percent Change Formula:</strong></p>
        <p>Percent Change = ((End Value - Start Value) / |Start Value|) × 100%</p>
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
          <p><strong>Example 1 (Increase):</strong> If a stock price changes from $50 to $75, the percent change is 50%</p>
          <p><strong>Example 2 (Decrease):</strong> If a population changes from 1000 to 800, the percent change is -20%</p>
          <p><strong>Example 3 (Negative to Positive):</strong> If temperature changes from -10°C to 10°C, the percent change is 200%</p>
        </div>
      </div>
    </div>
  );
}
