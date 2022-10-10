import styled from "styled-components";

export const CustomButtonContainer = styled.div`
  margin-top: 30px;

  .btnfos {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
    max-width: 270px;
    margin: 0 auto 2em;
    position: relative;
    text-transform: uppercase;
    vertical-align: middle;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  @media (min-width: 400px) {
    .btnfos {
      display: inline-block;
      margin-right: 2.5em;
    }
    .btnfos:nth-of-type(even) {
      margin-right: 0;
    }
  }
  @media (min-width: 600px) {
    .btnfos:nth-of-type(even) {
      margin-right: 2.5em;
    }
    .btnfos:nth-of-type(5) {
      margin-right: 0;
    }
  }

  .btnfos-1 {
    background: #d90d32;
    font-weight: 100;
  }
  .btnfos-1 svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    border-radius: 5px;
  }
  .btnfos-1 rect {
    fill: none;
    stroke: #fff;
    stroke-width: 0;
    stroke-dasharray: 422, 0;
    border-radius: 5px;
  }

  .btnfos-1:hover {
    background: #1b65a8;
    letter-spacing: 1px;
    font-weight: 900;
  }
  .btnfos-1:hover rect {
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    border-radius: 5px;
  }

  .btnfos-2 {
    letter-spacing: 0;
  }

  .btnfos-2:hover,
  .btnfos-2:active {
    letter-spacing: 5px;
  }

  .btnfos-2:after,
  .btnfos-2:before {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid rgba(255, 255, 255, 0);
    bottom: 0px;
    content: " ";
    display: block;
    margin: 0 auto;
    position: relative;
    -webkit-transition: all 280ms ease-in-out;
    transition: all 280ms ease-in-out;
    width: 0;
    border-radius: 5px;
  }

  .btnfos-2:hover:after,
  .btnfos-2:hover:before {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-color: #fff;
    -webkit-transition: width 350ms ease-in-out;
    transition: width 350ms ease-in-out;
    width: 70%;
    border-radius: 5px;
  }

  .btnfos-2:hover:before {
    bottom: auto;
    top: 0;
    width: 70%;
    border-radius: 5px;
  }
`;
