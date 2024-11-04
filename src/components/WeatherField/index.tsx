import { IconType } from 'react-icons'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { DataText, WeatherDataRow } from '../css/stylesForm'

type WeatherFieldProps = {
  text: string
  Icon: IconType
}

export const WeatherField = ({ text, Icon }: WeatherFieldProps) => {
  return (
    <WeatherDataRow>
      <Icon>
        <FaMapMarkedAlt />
      </Icon>
      <DataText>{text}</DataText>
    </WeatherDataRow>
  )
}
