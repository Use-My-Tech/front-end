import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 5px 0 10px;
  box-shadow: hsla(0, 0%, 0%, 0.3) 0px 0px 11px 0px;
  font-size: 20px;
  font-weight: 600;
  background: #333333;
`;

export const Form = styled.form`
  max-width: 380px;
  min-width: 300px;
  width: 100%;
  padding: 25px 30px 30px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 20px 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 320px;
  height: 25px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  color: rgba(31, 32, 65, 0.75);
  line-height: 24px;
`;

export const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 5px 20px;
  margin: 0 10px;
  margin-top: 3px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;
export const TypeButton = styled.button`
  background: white;
  border: 0;
  cursor: pointer;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 32%;
  background: white;
  border-radius: 100px;
  margin: 5px;
`;

export const Image = styled.img`
  width: 10%;
  height: 23%;
  cursor: pointer;
`;

export const DeleteImg = styled.img`
  cursor: pointer;
`;

export const CartCounter = styled.a`
  background: orange;
  padding: 0px 9px 2px;
  border-radius: 100%;
  &:hover {
    color: #d8d8d8;
  }
`;

export const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
`