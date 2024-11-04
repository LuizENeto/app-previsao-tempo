import { useState } from 'react'
import { apiCall } from '../../../api/get-weather-data'

export interface WeatherData {
  current: {
    temp_c: number
    condition: {
      text: string
    }
    humidity: number
  }
  location: {
    name: string
    region: string
  }
}

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>()

  const getWeatherData = async (cityName: string, stateName: string) => {
    const data = await apiCall(cityName, stateName)
    setWeatherData(data)
  }

  return { getWeatherData, weatherData }
}
