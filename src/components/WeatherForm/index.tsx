import { useDebounce } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import { StyledButton, StyledForm, StyledInput } from '../css/searchBar'

// S.O.L.I.D
// D - Dependency Inversion Principle
// S - Single Responsability Principle

type WeatherFormProps = {
  handleSubmit: (cityName: string, stateName: string) => void
}

export const WeatherForm = ({ handleSubmit }: WeatherFormProps) => {
  const [cityName, setCityName] = useState<string>('')
  const [stateName, setStateName] = useState<string>('')
  const searchState = useDebounce(stateName, 3000)

  React.useEffect(() => {
    if (searchState) {
      // handleSubmit(cityName, s earchState)
    }
  }, [searchState])

  return (
    <StyledForm>
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
      <StyledButton type="button" onClick={() => handleSubmit(cityName, searchState)}>Buscar</StyledButton>
    </StyledForm>
  )
}
