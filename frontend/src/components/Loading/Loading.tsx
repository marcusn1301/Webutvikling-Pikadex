import logo from "../../assets/pokeball.png";
import { DotFlashing, LoadingBall } from "./LoadingStyles";

const Loading = () => {
  return (
    <>
      <LoadingBall src={logo} />
      {/* <DotFlashing /> */}
    </>
  );
};

export default Loading;
