import renderer from "react-test-renderer";
import RandomButton from "../components/RandomButton/RandomButton";

test("Snapshot test for Navbar", () => {
  const container = renderer.create(<RandomButton />);
  expect(container).toMatchSnapshot();
});
