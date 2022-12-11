import { u as useRoute, a as __nuxt_component_0$1, _ as _export_sfc } from '../server.mjs';
import { ref, watch, unref, withCtx, createTextVNode, useSSRContext, onUnmounted, mergeProps } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/server-renderer/index.mjs';
import { SceneLoader } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/@babylonjs/core/index.js';
import { OBJFileLoader } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/babylonjs-loaders/babylonjs.loaders.js';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/hookable/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/unctx/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/ufo/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/h3/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/destr/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/scule/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/ohash/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/radix3/dist/index.mjs';

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
      const _component_NuxtLink = __nuxt_component_0$1;
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

export { _sfc_main as default };
//# sourceMappingURL=default.cc3522ce.mjs.map
