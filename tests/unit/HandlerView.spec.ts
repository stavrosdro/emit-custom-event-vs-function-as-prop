import { mount } from "@vue/test-utils";
import HandlerView from "@/views/HandlerView.vue";

describe("HandlerView", () => {
  it("should pass function as prop", () => {
    const stubs = {
      BaseButtonHandler: { template: "<div></div>", props: ["clickHandler"] },
    };
    const wrapper = mount(HandlerView, {
      global: {
        stubs,
      },
    });

    const childPropValue = wrapper
      .findComponent(stubs.BaseButtonHandler)
      .props("clickHandler");

    expect(childPropValue).toEqual(wrapper.vm.onButtonClick);
  });
});
