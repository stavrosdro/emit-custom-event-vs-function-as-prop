import { mount } from "@vue/test-utils";
import EmitView from "@/views/EmitView.vue";

describe("EmitView", () => {
  it("should execute function on event", () => {
    const stubs = {
      BaseButtonEmit: {template: '<div></div>'},
    };
    const wrapper = mount(EmitView, {
      global: {
        stubs,
      },
    });
    const spy = jest.spyOn(wrapper.vm, "onButtonClick");

    wrapper.findComponent(stubs.BaseButtonEmit).vm.$emit("button-click");

    expect(spy).toHaveBeenCalled();
  });
});
