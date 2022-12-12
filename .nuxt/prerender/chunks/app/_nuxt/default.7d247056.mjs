import { u as useRoute, a as __nuxt_component_0$1 } from '../server.mjs';
import { ref, watch, unref, withCtx, createTextVNode, useSSRContext } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/server-renderer/index.mjs';
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
      _push(`</div><!--]-->`);
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
//# sourceMappingURL=default.7d247056.mjs.map
