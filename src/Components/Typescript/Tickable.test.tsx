import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tickable from "./Tickable";
import { Globals } from "react-spring";

Globals.assign({
  skipAnimation: true,
});

// NOTE:
// react-spring broke tests when swapped from h1 to animated.div for value,
// difficult to find working solution

const testComp = (
  <Tickable
    showDiff={false}
    tickRate={5000}
    highest={0}
    lowest={0}
    value={"500"}
  />
);

describe("Tickable", () => {
  it("renders correctly enzyme", () => {
    const wrapper = shallow(testComp);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the animated div", () => {
    const wrapper = shallow(testComp);
    expect(wrapper.find(".mainText").length).toBe(1);
  });

  it("renders a high and low value and updates them", () => {
    const wrapper = shallow(testComp);
    const lowTextOriginal = wrapper.find(".highLowValue").first();
    const highTextOriginal = wrapper.find(".highLowValue").last();
    expect(lowTextOriginal.text()).toBe("0");
    expect(highTextOriginal.text()).toBe("0");
    wrapper.setProps({ highest: 1000, lowest: 35 });
    const lowTextNew = wrapper.find(".highLowValue").first();
    const highTextNew = wrapper.find(".highLowValue").last();
    expect(lowTextNew.text()).toBe("35");
    expect(highTextNew.text()).toBe("1000");
  });

  it("should not render up or down icon when there's no previous value to compare", () => {
    const wrapper = shallow(testComp);
    expect(wrapper.find("svg").length).toBe(0);
  });

  // TEST BROKEN FROM REACT-SPRING
  it("Should update the displayed value with val change and add class styling", () => {
    const wrapper = shallow(testComp);
    expect(wrapper.find("h1").text()).toBe("500");
    wrapper.setProps({ value: "520" });
    expect(wrapper.find("h1").text()).toBe("520");
    expect(wrapper.find("h1").hasClass("up"));

    // INCREASE VAL ONCE MORE
    wrapper.setProps({ value: "600" });
    expect(wrapper.find("h1").text()).toBe("600");
    expect(wrapper.find("h1").hasClass("up"));

    // DECREASE VAL TO NUMBER GREATER THAN ORIGINAL STATE
    wrapper.setProps({ value: "550" });
    expect(wrapper.find("h1").text()).toBe("550");
    expect(wrapper.find("h1").hasClass("down"));
  });
});
