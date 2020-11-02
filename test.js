import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { memo } from "react";

configure({ adapter: new Adapter() });

const Memo = memo(function MyComponent() {
  return <div />;
});

test("test", () => {
  expect(mount(<Memo />).debug()).toMatchInlineSnapshot(`
    "<Memo(MyComponent)>
      <div />
    </Memo(MyComponent)>"
  `);
});
