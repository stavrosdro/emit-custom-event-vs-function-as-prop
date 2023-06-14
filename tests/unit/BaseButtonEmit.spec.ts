import { mount } from "@vue/test-utils";
import BaseButtonEmit from "@/components/BaseButtonEmit.vue";

describe("BaseButtonEmit", () => {
  it("should emit event", () => {
    const wrapper = mount(BaseButtonEmit);

    wrapper.find("button").trigger("click");

    expect(wrapper.emitted()["button-click"]).toBeTruthy();
  });
});
