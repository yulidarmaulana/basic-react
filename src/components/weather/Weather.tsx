import React, { useState } from 'react';
import { getWeather } from '../../services/WeatherService';
import { WeatherData } from '../../store/weather';
import Card from '../weather/card';

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const fetchWeather = async () => {
    try {
      const response = await getWeather(city);
      setWeather(response);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  return (
		<>
			<div className='m-auto flex w-full max-w-lg items-center gap-2 p-5'>
				<input
					type='text'
					value={city}
					onChange={e => setCity(e.target.value)}
					placeholder='Enter city name'
					className='w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none placeholder:text-zinc-500 focus:border-astral-800 dark:text-slate-100 dark:focus:border-white'
				/>

				<button
					onClick={fetchWeather}
					className='rounded-xl bg-astral-400 px-5 py-3 text-sm font-medium  text-slate-100 active:scale-95'
				>
					Get
				</button>

			</div>

			<div className="text-center w-full max-w-lg justify-items-center mx-auto">
				{error && <p className='text-slate-800 text-lg font-medium dark:text-slate-100'>{error}</p>}
			</div>

			{weather && (
				<div className='m-auto flex w-full max-w-lg items-center gap-2 px-5'>
					<Card {...weather} />
				</div>
			)}
		</>
	)
};

export default Weather;
