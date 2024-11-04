import { WeatherData } from '../components/weatherCard/hooks/use-weather'

const apiKey = '7d80a465a16b45d6843204203241609'

export async function apiCall(cityName: string, searchState: string): Promise<WeatherData | undefined> {
  try {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&lang=pt&q=${cityName},${searchState}`,
    )
    return await response.json() as WeatherData
  } catch (error) {
    console.error('Erro ao buscar os dados:', error)
  }
}
