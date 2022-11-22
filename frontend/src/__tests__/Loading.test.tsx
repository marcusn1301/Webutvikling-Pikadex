import renderer from "react-test-renderer";
import Loading from "../components/Loading/Loading";

test("Snapshot test for Navbar", () => {
  const container = renderer.create(<Loading />);
  expect(container).toMatchSnapshot();
});
