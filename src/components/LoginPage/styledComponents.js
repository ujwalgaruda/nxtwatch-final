import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: #f8fafc;
  box-shadow: 2px 2px 20px #e2e8f0;
  border-radius: 10px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 600px;
`

export const LogoImage = styled.img`
  width: 200px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  align-items: flex-start;
  margin-top: 60px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #94a3b8;
  margin-bottom: 10px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  color: #616e7c;
  font-size: 20px;
  padding: 20px;
  border: 2px solid #cbd5e1;
  border-radius: 5px;
  width: 100%;
  outline: none;
  background-color: transparent;
  margin-bottom: 20px;
`

export const CheckBoxInput = styled.input`
  width: 25px;
  height: 25px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
`
export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-style: none;
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  font-weight: 500;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: Red;
`
