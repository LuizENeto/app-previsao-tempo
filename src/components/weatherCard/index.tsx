import { useEffect, useState } from 'react'

import {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledInput,
} from '../css/searchBar'

import {
  DataText,
  IconWrapper,
  WeatherCardContainer,
  WeatherDataRow,
} from '../css/stylesForm'

import {
  FaCity,
  FaCloudSun,
  FaMapMarkedAlt,
  FaTemperatureLow,
  FaTint,
} from 'react-icons/fa'

interface WeatherData {
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

const WeatherCard = () => {
  const apiKey = '7d80a465a16b45d6843204203241609'
  const [cityName, setCityName] = useState<string>('')
  const [stateName, setStateName] = useState<string>('')
  const [submittedCityName, setSubmittedCityName] = useState<string>('')
  const [submittedStateName, setSubmittedStateName] = useState<string>('')
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  useEffect(() => {
    async function apiCall() {
      if (submittedCityName && submittedStateName) {
        try {
          const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&lang=pt&q=${submittedCityName},${submittedStateName}`,
          )
          const data = await response.json() as WeatherData
          console.log('Dados do tempo:', data)
          setWeatherData(data)
        } catch (error) {
          console.error('Erro ao buscar os dados:', error)
        }
      }
    }

    apiCall()
  }, [submittedCityName, submittedStateName])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedCityName(cityName)
    setSubmittedStateName(stateName)
  }

  return (
    <>
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Cidade"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Estado"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
          />
          <StyledButton type="submit">Buscar</StyledButton>
        </StyledForm>
      </StyledContainer>

      {weatherData && (
        <WeatherCardContainer>
          <WeatherDataRow>
            <IconWrapper><FaCity /></IconWrapper>
            <DataText>{weatherData.location.name}</DataText>
          </WeatherDataRow>
          <WeatherDataRow>
            <IconWrapper><FaMapMarkedAlt /></IconWrapper>
            <DataText>{weatherData.location.region}</DataText>
          </WeatherDataRow>
          <WeatherDataRow>
            <IconWrapper><FaTemperatureLow /></IconWrapper>
            <DataText>{weatherData.current.temp_c} °C</DataText>
          </WeatherDataRow>
          <WeatherDataRow>
            <IconWrapper><FaCloudSun /></IconWrapper>
            <DataText>{weatherData.current.condition.text}</DataText>
          </WeatherDataRow>
          <WeatherDataRow>
            <IconWrapper><FaTint /></IconWrapper>
            <DataText>{weatherData.current.humidity}%</DataText>
          </WeatherDataRow>
        </WeatherCardContainer>
      )}
    </>
  )
}

export default WeatherCard
