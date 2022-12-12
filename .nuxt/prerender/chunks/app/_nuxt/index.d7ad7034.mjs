import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    class: "link link--home",
    to: "/"
  }, _attrs), {
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homeLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeLink = __nuxt_component_0;
  _push(ssrRenderComponent(_component_HomeLink, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insta/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.d7ad7034.mjs.map
