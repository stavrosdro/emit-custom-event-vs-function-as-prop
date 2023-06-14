import { mount } from "@vue/test-utils";
import BaseButtonHandler from "@/components/BaseButtonHandler.vue";

describe("BaseButtonHandler", () => {
  it("should emit event", () => {
    const clickHandler = jest.fn();
    const wrapper = mount(BaseButtonHandler, { props: { clickHandler } });

    wrapper.find("button").trigger("click");

    expect(clickHandler).toHaveBeenCalled();
  });
});
