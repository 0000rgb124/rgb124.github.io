import { u as useStateStore } from './state.d4daaf93.mjs';
import { s as storeToRefs } from '../server.mjs';
import { useSSRContext } from 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/babylonjs/babylon.js';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/hookable/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/unctx/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/ufo/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/h3/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/guillaumequet/code/perso/www.rgb124.com/node_modules/vue/server-renderer/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useStateStore();
    storeToRefs(state);
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.84c7dc83.mjs.map
