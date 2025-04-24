'use client';

import { useState } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
}

export default function CommonPhrasesCalculator({ title, description }: CalculatorProps) {
  const [percentValue, setPercentValue] = useState<string>('');
  const [ofValue, setOfValue] = useState<string>('');
  const [isValue, setIsValue] = useState<string>('');
  
  const [whatPercentValue, setWhatPercentValue] = useState<string>('');
  const [whatPercentOfValue, setWhatPercentOfValue] = useState<string>('');
  const [whatPercentIsValue, setWhatPercentIsValue] = useState<string>('');
  
  const [whatValueIs, setWhatValueIs] = useState<string>('');
  const [whatValuePercent, setWhatValuePercent] = useState<string>('');
  const [whatValueOfWhat, setWhatValueOfWhat] = useState<string>('');
  
  const [showExamples, setShowExamples] = useState(false);

  // Calculate "X percent of Y is Z"
  const calculatePercentOf = () => {
    try {
      const percent = parseFloat(percentValue);
      const ofVal = parseFloat(ofValue);
      const result = (percent / 100) * ofVal;
      setIsValue(result.toFixed(7));
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  // Calculate "X is what percent of Y"
  const calculateWhatPercent = () => {
    try {
      const isVal = parseFloat(whatPercentValue);
      const ofVal = parseFloat(whatPercentOfValue);
      if (ofVal === 0) throw new Error("Cannot divide by zero");
      const result = (isVal / ofVal) * 100;
      setWhatPercentIsValue(result.toFixed(7));
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  // Calculate "X is Y percent of what"
  const calculatePercentOfWhat = () => {
    try {
      const isVal = parseFloat(whatValueIs);
      const percentVal = parseFloat(whatValuePercent);
      if (percentVal === 0) throw new Error("Cannot divide by zero");
      const result = isVal / (percentVal / 100);
      setWhatValueOfWhat(result.toFixed(7));
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  return (
    <div className="calculator-section">
      <h2 className="calculator-title">{title}</h2>
      <p className="calculator-description">{description}</p>
      
      {/* X percent of Y is Z */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
          <input
            type="text"
            className="input-field-blue w-24"
            value={percentValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setPercentValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
          <span>percent of</span>
          <input
            type="text"
            className="input-field-blue w-24"
            value={ofValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setOfValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
          <span>is</span>
          <input
            type="text"
            className="output-field w-24"
            value={isValue}
            readOnly
          />
          <button 
            className="calculator-button mt-2 md:mt-0"
            onClick={calculatePercentOf}
          >
            Calculate
          </button>
        </div>
      </div>
      
      {/* X is what percent of Y */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
          <input
            type="text"
            className="input-field-blue w-24"
            value={whatPercentValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setWhatPercentValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
          <span>is what percent of</span>
          <input
            type="text"
            className="input-field-blue w-24"
            value={whatPercentOfValue}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setWhatPercentOfValue(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
          <span>?</span>
          <input
            type="text"
            className="output-field w-24"
            value={whatPercentIsValue}
            readOnly
          />
          <span>%</span>
          <button 
            className="calculator-button mt-2 md:mt-0"
            onClick={calculateWhatPercent}
          >
            Calculate
          </button>
        </div>
      </div>
      
      {/* X is Y percent of what */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
          <input
            type="text"
            className="input-field-blue w-24"
            value={whatValueIs}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setWhatValueIs(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
          <span>is</span>
          <input
            type="text"
            className="input-field-blue w-24"
            value={whatValuePercent}
            onChange={(e) => {
              if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                setWhatValuePercent(e.target.value);
              }
            }}
            placeholder="Enter value"
          />
          <span>percent of what?</span>
          <input
            type="text"
            className="output-field w-24"
            value={whatValueOfWhat}
            readOnly
          />
          <button 
            className="calculator-button mt-2 md:mt-0"
            onClick={calculatePercentOfWhat}
          >
            Calculate
          </button>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>Enter values into the blue boxes. Answers will appear in the black boxes.</p>
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
          <p><strong>Example 1:</strong> 10 percent of 90 is 9</p>
          <p><strong>Example 2:</strong> 9 is what percent of 90? Answer: 10%</p>
          <p><strong>Example 3:</strong> 9 is 10 percent of what? Answer: 90</p>
        </div>
      </div>
    </div>
  );
}
