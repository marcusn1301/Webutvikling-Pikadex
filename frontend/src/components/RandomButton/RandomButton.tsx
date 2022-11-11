import logo from "../../assets/pokeball.png";
import { Pokeball, RandomButtonStyle } from "./RandomButtonStyled";

const RandomButton = () => {
  return (
    <>
      <RandomButtonStyle>
        <Pokeball src={logo} />
      </RandomButtonStyle>
    </>
  );
};

export default RandomButton;
