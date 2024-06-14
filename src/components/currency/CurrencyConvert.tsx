// src/components/CurrencyConverter.tsx

import React, { useState, useEffect } from 'react';
import { getExchangeRates } from '../../services/CurrencyService';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('IDR');
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExchangeRates(fromCurrency);
      setCurrencies(Object.keys(data.conversion_rates));
      setExchangeRate(data.conversion_rates[toCurrency]);
    };
    fetchData();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return (
    <div className=''>
      <div className='text-center'>
        <select value={fromCurrency} onChange={handleFromCurrencyChange} className='rounded-xl bg-astral-400 px-2 py-3 text-sm font-medium  text-slate-100 active:scale-95'>
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <input type="number" value={amount} onChange={handleAmountChange} className='p-2 rounded-lg mx-6 outline-none bg-zinc-100 dark:bg-zinc-50' />
        
        <select value={toCurrency} onChange={handleToCurrencyChange} className='rounded-xl bg-astral-400 px-2 py-3 text-sm font-medium  text-slate-100 active:scale-95'>
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <p className='text-xl font-bold text-neutral-800 dark:text-neutral-100 my-4 text-center'>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
