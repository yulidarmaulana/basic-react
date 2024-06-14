import {WeatherData} from '../../store/weather';

const Card = ({
	name,
  main: {
    temp,
    humidity,
    pressure
  },
  weather: [
    {
      description,
    }
  ],
  wind: {
    speed
  }
}: WeatherData) => {

  return (
    <div className="flex md:flex-row flex-col items-center gap-5 rounded-xl bg-slate-300 px-5 py-5 text-start text-xl font-medium text-zinc-600 dark:bg-slate-600 dark:text-slate-300 w-full">
      <div className="card-body">
        <h2 className="card-title">City : {name}</h2>
        <p>Temperature : {temp}°C</p>
        <p>Humidity : {humidity}%</p>
        <p>Pressure : {pressure}hPa</p>
        <p>Speed : {speed}m/s</p>
        <p>Description : {description}</p>
      </div>
    </div>
  )

}

export default Card 