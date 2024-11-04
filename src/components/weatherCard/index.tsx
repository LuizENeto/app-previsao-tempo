import { StyledContainer } from '../css/searchBar'

import { WeatherCardContainer } from '../css/stylesForm'

import { FaCity, FaCloudSun, FaMapMarkedAlt, FaTemperatureLow, FaTint } from 'react-icons/fa'
import { WeatherField } from '../WeatherField'
import { WeatherForm } from '../WeatherForm'
import { useWeather } from './hooks/use-weather'

const WeatherCard = () => {
  const { weatherData, getWeatherData } = useWeather()

  return (
    <>
      <StyledContainer>
        <WeatherForm handleSubmit={getWeatherData} />
      </StyledContainer>

      {weatherData && (
        <WeatherCardContainer>
          <WeatherField Icon={FaCity} text={weatherData.location.name} />
          <WeatherField Icon={FaMapMarkedAlt} text={weatherData.location.region} />
          <WeatherField Icon={FaTemperatureLow} text={`${weatherData.current.temp_c} °C`} />
          <WeatherField Icon={FaCloudSun} text={weatherData.current.condition.text} />
          <WeatherField Icon={FaTint} text={`${weatherData.current.humidity}%`} />
        </WeatherCardContainer>
      )}
    </>
  )
}

export default WeatherCard
