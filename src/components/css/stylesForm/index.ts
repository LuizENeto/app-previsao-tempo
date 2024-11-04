import styled from 'styled-components'

export const WeatherCardContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WeatherDataRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const IconWrapper = styled.span`
  color: ${(props) => props.theme.iconColor};
  margin-right: 10px;
  font-size: 1.2em;
`

export const DataText = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.textColor};
  margin: 0;
`
