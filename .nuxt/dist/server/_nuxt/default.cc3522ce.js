import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext, ref, onUnmounted, mergeProps, watch, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { SceneLoader } from "@babylonjs/core";
import { OBJFileLoader } from "babylonjs-loaders";
import "destr";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const babylon_vue_vue_type_style_index_0_scoped_a3f79219_lang = "";
const _sfc_main$1 = {
  __name: "babylon",
  __ssrInlineRender: true,
  setup(__props) {
    SceneLoader.RegisterPlugin(new OBJFileLoader());
    const bjsCanvas = ref(null);
    const onWindowResize = () => {
      bjsCanvas.value.width = window.innerWidth;
      bjsCanvas.value.height = window.innerHeight;
    };
    const cleanup = () => {
      window.removeEventListener("resize", onWindowResize);
    };
    onUnmounted(() => {
      cleanup();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        id: "babylon",
        ref_key: "bjsCanvas",
        ref: bjsCanvas
      }, _attrs))} data-v-a3f79219></canvas>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/babylon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a3f79219"]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const path = ref(route.path);
    watch(route, (r) => {
      path.value = r.path;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Babylon = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        style: unref(path) === "/" ? null : { display: "none" },
        class: "link link--about",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`about`);
          } else {
            return [
              createTextVNode("about")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        style: unref(path) === "/" ? null : { display: "none" },
        class: "link link--insta",
        to: "/insta"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`insta`);
          } else {
            return [
              createTextVNode("insta")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        style: unref(path) !== "/" ? null : { display: "none" },
        class: "link link--home",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`x`);
          } else {
            return [
              createTextVNode("x")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Babylon, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default.cc3522ce.js.map
