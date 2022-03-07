import HelloWorld from "../components/HelloWorld.vue";
import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  let wrapper: any;
  let element: any;

  beforeEach(() => {
    expect(HelloWorld).toBeTruthy();
    wrapper = mount(HelloWorld, {
      props: {
        show: true,
      },
    });

    element = wrapper.find(".hello-world");
    expect(element.exists()).toBeTruthy();
  });

  it("test HelloWorld", async () => {});
});
