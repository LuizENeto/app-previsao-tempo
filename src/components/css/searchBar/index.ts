import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: ${(props) => props.theme.inputContainerBackgroundColor};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.inputBox};
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 100%;
`

export const StyledInput = styled.input`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 1em;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.backgroundColor};
  outline: none;

  &:focus {
    background-color: ${(props) => props.theme.focus};
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.4);
  }
`

export const StyledButton = styled.button`
  padding: 15px 35px;
  background-color: ${(props) => props.theme.inputButton};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  margin-left: 50px;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`
