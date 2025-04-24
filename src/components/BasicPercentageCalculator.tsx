'use client';

import { useState } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
}

export default function BasicPercentageCalculator({ title, description }: CalculatorProps) {
  const [valueA, setValueA] = useState<string>('');
  const [valueB, setValueB] = useState<string>('');
  const [valueC, setValueC] = useState<string>('');
  const [activeField, setActiveField] = useState<'A' | 'B' | 'C'>('C');
  const [showExamples, setShowExamples] = useState(false);

  const calculate = () => {
    try {
      if (activeField === 'A') {
        // Calculate A (percentage)
        // A = (C / B) * 100
        const b = parseFloat(valueB);
        const c = parseFloat(valueC);
        if (b === 0) throw new Error("Cannot divide by zero");
        const result = (c / b) * 100;
        setValueA(result.toFixed(7));
      } else if (activeField === 'B') {
        // Calculate B (of value)
        // B = C / (A / 100)
        const a = parseFloat(valueA);
        const c = parseFloat(valueC);
        if (a === 0) throw new Error("Cannot divide by zero");
        const result = c / (a / 100);
        setValueB(result.toFixed(7));
      } else {
        // Calculate C (is value)
        // C = (A / 100) * B
        const a = parseFloat(valueA);
        const b = parseFloat(valueB);
        const result = (a / 100) * b;
        setValueC(result.toFixed(7));
      }
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  const handleFieldSelect = (field: 'A' | 'B' | 'C') => {
    setActiveField(field);
    // Clear the selected field
    if (field === 'A') setValueA('');
    if (field === 'B') setValueB('');
    if (field === 'C') setValueC('');
  };

  const handleInputChange = (field: 'A' | 'B' | 'C', value: string) => {
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      if (field === 'A') setValueA(value);
      if (field === 'B') setValueB(value);
      if (field === 'C') setValueC(value);
    }
  };

  return (
    <div className="calculator-section">
      <h2 className="calculator-title">{title}</h2>
      <p className="calculator-description">{description}</p>
      
      <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
        <div className="w-full md:w-auto flex items-center">
          <input
            type="text"
            className={`input-field${activeField !== 'A' ? '-blue' : ''} w-24`}
            value={valueA}
            onChange={(e) => handleInputChange('A', e.target.value)}
            onClick={() => handleFieldSelect('A')}
            placeholder="Enter value"
          />
          <span className="mx-2">% of</span>
        </div>
        
        <div className="w-full md:w-auto flex items-center">
          <input
            type="text"
            className={`input-field${activeField !== 'B' ? '-blue' : ''} w-24`}
            value={valueB}
            onChange={(e) => handleInputChange('B', e.target.value)}
            onClick={() => handleFieldSelect('B')}
            placeholder="Enter value"
          />
          <span className="mx-2">is</span>
        </div>
        
        <div className="w-full md:w-auto flex items-center">
          <input
            type="text"
            className={`input-field${activeField !== 'C' ? '-blue' : ''} w-24`}
            value={valueC}
            onChange={(e) => handleInputChange('C', e.target.value)}
            onClick={() => handleFieldSelect('C')}
            placeholder="Enter value"
          />
        </div>
        
        <button 
          className="calculator-button mt-2 md:mt-0"
          onClick={calculate}
        >
          Calculate
        </button>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>Enter values into the blue boxes. Select a different box to be the answer box if needed.</p>
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
          <p><strong>Example 1:</strong> What is 20% of 80? (Answer: 16)</p>
          <p><strong>Example 2:</strong> 15 is what percent of 60? (Answer: 25%)</p>
          <p><strong>Example 3:</strong> 5 is 10% of what number? (Answer: 50)</p>
        </div>
      </div>
      
      <div className="formula-container">
        <p><strong>Percentage Formula:</strong></p>
        <p>A% of B is C</p>
        <p>A/100 × B = C</p>
        <p>Where:</p>
        <p>A = (C / B) × 100</p>
        <p>B = C / (A / 100)</p>
        <p>C = (A / 100) × B</p>
      </div>
    </div>
  );
}
