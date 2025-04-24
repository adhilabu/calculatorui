'use client';

import { useState } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
}

export default function PercentToFractionCalculator({ title, description }: CalculatorProps) {
  const [percentValue, setPercentValue] = useState<string>('');
  const [fractionNumerator, setFractionNumerator] = useState<string>('');
  const [fractionDenominator, setFractionDenominator] = useState<string>('');
  const [decimalValue, setDecimalValue] = useState<string>('');
  const [showExamples, setShowExamples] = useState(false);

  // Calculate from percent to fraction and decimal
  const calculateFromPercent = () => {
    try {
      const percent = parseFloat(percentValue);
      // Convert to decimal
      const decimal = percent / 100;
      setDecimalValue(decimal.toFixed(7));
      
      // Convert to fraction
      // Find the greatest common divisor (GCD)
      const gcd = (a: number, b: number): number => {
        return b ? gcd(b, a % b) : a;
      };
      
      // Convert to fraction with denominator 100
      let num = percent;
      let den = 100;
      
      // Simplify the fraction
      const divisor = gcd(num, den);
      num = num / divisor;
      den = den / divisor;
      
      setFractionNumerator(num.toString());
      setFractionDenominator(den.toString());
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  // Calculate from fraction to percent and decimal
  const calculateFromFraction = () => {
    try {
      const numerator = parseFloat(fractionNumerator);
      const denominator = parseFloat(fractionDenominator);
      
      if (denominator === 0) throw new Error("Cannot divide by zero");
      
      // Convert to decimal
      const decimal = numerator / denominator;
      setDecimalValue(decimal.toFixed(7));
      
      // Convert to percent
      const percent = decimal * 100;
      setPercentValue(percent.toFixed(7));
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  // Calculate from decimal to percent and fraction
  const calculateFromDecimal = () => {
    try {
      const decimal = parseFloat(decimalValue);
      
      // Convert to percent
      const percent = decimal * 100;
      setPercentValue(percent.toFixed(7));
      
      // Convert to fraction
      // Find the greatest common divisor (GCD)
      const gcd = (a: number, b: number): number => {
        return b ? gcd(b, a % b) : a;
      };
      
      // Convert decimal to fraction
      // First, find how many decimal places
      const decimalStr = decimal.toString();
      const decimalPlaces = decimalStr.includes('.') ? 
        decimalStr.split('.')[1].length : 0;
      
      // Convert to fraction
      let num = decimal * Math.pow(10, decimalPlaces);
      let den = Math.pow(10, decimalPlaces);
      
      // Simplify the fraction
      const divisor = gcd(num, den);
      num = num / divisor;
      den = den / divisor;
      
      setFractionNumerator(num.toString());
      setFractionDenominator(den.toString());
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  return (
    <div className="calculator-section">
      <h2 className="calculator-title">{title}</h2>
      <p className="calculator-description">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Percent</h3>
          <div className="flex items-center">
            <input
              type="text"
              className="input-field-blue w-full"
              value={percentValue}
              onChange={(e) => {
                if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                  setPercentValue(e.target.value);
                }
              }}
              placeholder="Enter percent"
            />
            <span className="ml-2">%</span>
          </div>
          <button 
            className="calculator-button mt-2 w-full"
            onClick={calculateFromPercent}
          >
            Convert from Percent
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Fraction</h3>
          <div className="flex items-center">
            <input
              type="text"
              className="input-field-blue w-full"
              value={fractionNumerator}
              onChange={(e) => {
                if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                  setFractionNumerator(e.target.value);
                }
              }}
              placeholder="Numerator"
            />
            <span className="mx-2">/</span>
            <input
              type="text"
              className="input-field-blue w-full"
              value={fractionDenominator}
              onChange={(e) => {
                if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                  setFractionDenominator(e.target.value);
                }
              }}
              placeholder="Denominator"
            />
          </div>
          <button 
            className="calculator-button mt-2 w-full"
            onClick={calculateFromFraction}
          >
            Convert from Fraction
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Decimal</h3>
          <div className="flex items-center">
            <input
              type="text"
              className="input-field-blue w-full"
              value={decimalValue}
              onChange={(e) => {
                if (e.target.value === '' || /^-?\d*\.?\d*$/.test(e.target.value)) {
                  setDecimalValue(e.target.value);
                }
              }}
              placeholder="Enter decimal"
            />
          </div>
          <button 
            className="calculator-button mt-2 w-full"
            onClick={calculateFromDecimal}
          >
            Convert from Decimal
          </button>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p>Enter a value in any field and click the corresponding button to convert.</p>
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
          <p><strong>Example 1:</strong> 25% = 1/4 = 0.25</p>
          <p><strong>Example 2:</strong> 33.33% ≈ 1/3 ≈ 0.3333</p>
          <p><strong>Example 3:</strong> 150% = 3/2 = 1.5</p>
        </div>
      </div>
    </div>
  );
}
