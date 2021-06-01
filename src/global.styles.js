import { css } from 'lit-element';

export default css`
  /* global */

  a {
    text-decoration: none;
    color: var(--text-gray);
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  ul {
    list-style-type: none;
  }

  h1 {
    font-family: var(--Lexend);
    font-size: 2.5rem;
  }

  h2 {
    font-family: var(--Lexend);
  }

  h3 {
    font-family: var(--Abel);
    font-size: 1.3rem;
  }

  button.btn {
    border: none;
    border-radius: 2rem;
    padding: 1rem 3rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .container {
    margin: 0 5vw;
  }

  .text-gray {
    color: var(--text-gray);
  }

  p {
    color: var(--text-light);
  }
`;
