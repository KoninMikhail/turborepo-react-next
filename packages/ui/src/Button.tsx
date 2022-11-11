import styled from 'styled-components'

export const Button = styled.button`
  font-size: inherit;

  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 125ms ease-in-out, transform 150ms ease;
  appearance: none;
  border-radius: 4px;

  :hover,
  :focus {
    background: #0053ba;
  }

  :focus {
    outline: 1px solid #fff;
    outline-offset: -2px;
  }

  :active {
    outline-offset: -3px;
  }
`
