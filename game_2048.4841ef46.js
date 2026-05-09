// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"15Ryi":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 8080;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1d23b73e4841ef46";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3Aj1C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// Uncomment the next lines to use your game instance in the browser
var _gameClassJs = require("../modules/Game.class.js");
var _gameClassJsDefault = parcelHelpers.interopDefault(_gameClassJs);
'use strict';
const game = new (0, _gameClassJsDefault.default)();
class GameView {
    #timerWin;
    #languages = {
        en: [
            "How to play: Use the arrow keys (up, down, left, right) or swipes on a mobile device to move the tiles.",
            "Merging: When two tiles with the same number touch, they merge into one!",
            'Goal: Join the tiles to get to the 2048 tile!',
            "Game Over: If the board is full and there are no moves left, the game is over."
        ],
        de: [
            "Spielanleitung: Verwenden Sie die Pfeiltasten (hoch, runter, links, rechts) oder Wischgesten auf einem mobilen Ger\xe4t, um die Spielsteine zu bewegen.",
            "Verschmelzen: Wenn zwei Kacheln mit der gleichen Zahl einander ber\xfchren, verschmelzen sie zu einer!",
            'Ziel: Kombiniere die Kacheln, um die 2048-Kachel zu erreichen!',
            "Spiel vorbei: Wenn das Spielfeld voll ist und keine Z\xfcge mehr m\xf6glich sind, ist das Spiel beendet."
        ],
        ru: [
            "\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438 (\u0432\u0432\u0435\u0440\u0445, \u0432\u043D\u0438\u0437, \u0432\u043B\u0435\u0432\u043E, \u0432\u043F\u0440\u0430\u0432\u043E) \u0438\u043B\u0438 \u0441\u0432\u0430\u0439\u043F\u044B \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0442\u044C \u043F\u043B\u0438\u0442\u043A\u0438.",
            "\u0421\u043B\u0438\u044F\u043D\u0438\u0435: \u041A\u043E\u0433\u0434\u0430 \u0434\u0432\u0435 \u043F\u043B\u0438\u0442\u043A\u0438 \u0441 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u043C\u0438 \u0447\u0438\u0441\u043B\u0430\u043C\u0438 \u0441\u043E\u043F\u0440\u0438\u043A\u0430\u0441\u0430\u044E\u0442\u0441\u044F, \u043E\u043D\u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u044E\u0442\u0441\u044F \u0432 \u043E\u0434\u043D\u0443, \u0430 \u0438\u0445 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044B \u0441\u0443\u043C\u043C\u0438\u0440\u0443\u044E\u0442\u0441\u044F.",
            "\u0426\u0435\u043B\u044C: \u0421\u043E\u0435\u0434\u0438\u043D\u044F\u0439 \u043F\u043B\u0438\u0442\u043A\u0438 \u0438 \u043A\u043E\u043F\u0438 \u043E\u0447\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u0447\u0438\u0441\u043B\u0430 2048.",
            "\u041A\u043E\u043D\u0435\u0446 \u0438\u0433\u0440\u044B: \u0415\u0441\u043B\u0438 \u043F\u043E\u043B\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0445\u043E\u0434\u043E\u0432 \u0434\u043B\u044F \u0441\u043B\u0438\u044F\u043D\u0438\u044F \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u2014 \u0438\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430."
        ],
        esp: [
            "C\xf3mo jugar: Usa las teclas de flecha (arriba, abajo, izquierda, derecha) para mover las fichas.",
            "Fusi\xf3n: \xa1Cuando dos fichas con el mismo n\xfamero se tocan, se fusionan en una sola!",
            "Objetivo: \xa1Combina las fichas para llegar a la ficha 2048!",
            "Fin del juego: Si el tablero est\xe1 lleno y no quedan movimientos, el juego termina."
        ]
    };
    #touchPosStartX = 0;
    #touchPosStartY = 0;
    constructor(logic){
        this.game = logic;
        this.bodyContainer = document.querySelector('tbody');
        this.startBtn = document.querySelector('.button');
        this.rulesBtn = document.querySelector('.rules-btn');
        this.rulesMessage = document.querySelector('.message-rules');
        this.rulesItems = document.querySelectorAll('.rules-item');
        this.languageContainer = document.querySelector('.language-buttons');
        this.currentScore = document.querySelector('.game-score');
        this.bestScore = document.querySelector('.game-best-score');
        this.tableItems = [
            ...document.querySelectorAll('.field-cell')
        ];
        this.messageItems = document.querySelector('.message-container');
        this.titleGame = document.querySelector('h1');
        // Variables for the blocks Message
        this.messageStart = this.messageItems.querySelector('.message-start');
        this.messageWin = this.messageItems.querySelector('.message-win');
        this.messageLose = this.messageItems.querySelector('.message-lose');
        this.initListener();
        // We start an inactivity timer
        // to draw the user's attention to the Start button.
        this.timerIdle = setTimeout(()=>this.applyAnimationClass(this.startBtn), 5000);
    }
    // #region Listeners
    initListener() {
        this.startBtn.addEventListener('click', ()=>{
            this.handleBtnStart();
            clearTimeout(this.timerIdle);
            this.updateView();
        });
        this.rulesBtn.addEventListener('click', ()=>{
            this.switchLanguage('en');
            this.rulesMessage.classList.toggle('hidden');
        });
        this.bodyContainer.addEventListener('touchstart', (e)=>{
            this.#touchPosStartX = e.touches[0].clientX;
            this.#touchPosStartY = e.touches[0].clientY;
        });
        this.bodyContainer.addEventListener('touchmove', (e)=>{
            e.preventDefault();
        }, {
            passive: false
        });
        this.bodyContainer.addEventListener('touchend', (e)=>{
            const touchPosEndX = e.changedTouches[0].clientX;
            const touchPosEndY = e.changedTouches[0].clientY;
            const threshold = 50; // pixels
            const diffX = touchPosEndX - this.#touchPosStartX;
            const diffY = touchPosEndY - this.#touchPosStartY;
            // We check whether the movement was long enough along any of the axes
            if (Math.abs(diffX) < threshold && Math.abs(diffY) < threshold) return;
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0) this.game.moveRight();
                else this.game.moveLeft();
            } else if (diffY > 0) this.game.moveDown();
            else this.game.moveUp();
            this.updateView();
        });
        document.addEventListener('keydown', (e)=>{
            if (e.key === 'ArrowLeft') {
                this.game.moveLeft();
                this.updateView();
            }
            if (e.key === 'ArrowRight') {
                this.game.moveRight();
                this.updateView();
            }
            if (e.key === 'ArrowUp') {
                this.game.moveUp();
                this.updateView();
            }
            if (e.key === 'ArrowDown') {
                this.game.moveDown();
                this.updateView();
            }
        });
        this.languageContainer.addEventListener('click', (e)=>{
            const value = e.target.closest('.btn-language');
            if (!value) return;
            const lowerCaseValue = value.textContent.toLowerCase();
            const targetValue = e.target;
            this.switchLanguage(lowerCaseValue, targetValue);
        });
    // #endregion Listeners
    }
    // Update view
    updateView() {
        const state = this.game.getState();
        this.renderBoard(state.board, state.targetCellIndex);
        this.renderStatusGame(state.statusGame);
        this.renderScore(state.score, state.bestScore);
    }
    // #region methods-tools
    // timer win
    runWinTimer() {
        this.#timerWin = setTimeout(()=>this.applyAnimationClass(this.startBtn), 5000);
    }
    // Work with message blocks
    renderMessage(statusValue) {
        if (statusValue === (0, _gameClassJsDefault.default).statuses.idle) return;
        this.messageStart.classList.add('hidden');
        this.messageLose.classList.add('hidden');
        this.messageWin.classList.add('hidden');
        this.messageItems.classList.add('hidden');
        this.titleGame.classList.remove('hidden');
        if (statusValue !== (0, _gameClassJsDefault.default).statuses.playing) {
            const suffix = statusValue === (0, _gameClassJsDefault.default).statuses.win ? 'win' : 'lose';
            const messageEl = this.messageItems.querySelector(`.message-${suffix}`);
            if (suffix === 'lose') this.runWinTimer();
            if (suffix === 'win') this.titleGame.classList.add('hidden');
            messageEl.classList.remove('hidden');
            this.messageItems.classList.remove('hidden');
        }
    }
    // Handle button Start
    handleBtnStart() {
        const statusValue = this.game.getState().statusGame;
        if (statusValue !== (0, _gameClassJsDefault.default).statuses.idle) {
            this.game.restart();
            this.tableItems.forEach((el)=>this.applyAnimationClass(el));
            this.applyAnimationClass(this.startBtn);
            clearTimeout(this.#timerWin);
        } else {
            this.game.start();
            this.applyAnimationClass(this.startBtn);
            clearTimeout(this.timerIdle);
        }
    }
    // Rendering Board
    renderBoard(boardData, cellIndex) {
        const flatBoard = boardData.flat();
        this.tableItems.forEach((cell, i)=>{
            const classListValue = [
                ...cell.classList
            ];
            const value = flatBoard[i];
            const classModif = `field-cell--${value}`;
            let j = 0;
            // Remove old class modifiers (field-cell--value)
            // before rendering the new state
            while(j < classListValue.length){
                const currString = classListValue[j];
                if (currString.startsWith('field-cell--')) cell.classList.remove(currString);
                j++;
            }
            if (value === 2048) {
                this.applyAnimationClass(cell);
                this.runWinTimer();
            }
            cell.textContent = value === 0 ? '' : value;
            cell.classList.add(classModif);
            cellIndex.forEach((val)=>{
                if (i === val) this.triggerCellPulse(cell);
            });
        });
    }
    // Rendering Status - Game
    renderStatusGame(infoStatus) {
        // changing button
        if (infoStatus !== (0, _gameClassJsDefault.default).statuses.idle) {
            this.startBtn.classList.remove('start');
            this.startBtn.classList.add('restart');
            this.startBtn.textContent = 'Restart';
        }
        this.renderMessage(infoStatus);
    }
    // Rendering Score
    renderScore(dataScore, dataBestScore) {
        this.currentScore.textContent = dataScore;
        this.bestScore.textContent = dataBestScore;
    }
    // #endregion methods-tools
    // #region animation
    triggerCellPulse(currCell) {
        currCell.classList.add('scale-element');
        setTimeout(()=>{
            currCell.classList.remove('scale-element');
        }, 300);
    }
    applyAnimationClass(element) {
        const currStatus = this.game.getState().statusGame;
        if (currStatus === (0, _gameClassJsDefault.default).statuses.playing) {
            element.classList.remove('vibrate-element');
            return;
        }
        element.classList.add('vibrate-element');
    }
    switchLanguage(newLanguage, currEl) {
        switch(newLanguage){
            case 'de':
                this.changeActiveLanguageClass(currEl);
                return this.renderRulesMessage(this.#languages.de);
            case 'ru':
                this.changeActiveLanguageClass(currEl);
                return this.renderRulesMessage(this.#languages.ru);
            case 'esp':
                this.changeActiveLanguageClass(currEl);
                return this.renderRulesMessage(this.#languages.esp);
            default:
                if (currEl) this.changeActiveLanguageClass(currEl);
                return this.renderRulesMessage(this.#languages.en);
        }
    }
    renderRulesMessage(arrText) {
        let str = 0;
        this.rulesItems.forEach((li)=>{
            while(str < arrText.length){
                li.textContent = arrText[str];
                str++;
                break;
            }
        });
    }
    changeActiveLanguageClass(currButton) {
        const activeClass = this.languageContainer.querySelector('.btn-language--is-active');
        if (activeClass) activeClass.classList.remove('btn-language--is-active');
        currButton.classList.add('btn-language--is-active');
    }
}
const view = new GameView(game);
view.updateView();

},{"../modules/Game.class.js":"dhlFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dhlFI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
'use strict';
/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */ class Game {
    /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */ static statuses = {
        idle: 'idle',
        playing: 'playing',
        win: 'win',
        lose: 'lose'
    };
    #size;
    #mergedCellIndex = [];
    // #localValue = localStorage.getItem('best-score');
    #bestScore;
    #score = 0;
    #initialBoard;
    #status;
    constructor(initialState = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ]){
        // eslint-disable-next-line no-console
        console.log(initialState);
        this.#initialBoard = structuredClone(initialState);
        this.board = structuredClone(this.#initialBoard); // tiefe clonen
        this.#size = this.board.length;
        this.#status = Game.statuses.idle;
        const localValue = localStorage.getItem('best-score');
        this.#bestScore = this.localValue === null ? this.#score : Number(localValue);
    }
    // #region moves
    moveLeft() {
        // reset
        this.#mergedCellIndex = [];
        // guard from pushing button
        if (this.#status === Game.statuses.lose || this.#status === Game.statuses.win) return;
        let canMove = false;
        this.board = this.board.map((row, rowIndex)=>{
            const { newValidRow, isChange, targetIndex } = this.#shiftDirection(row);
            canMove ||= isChange;
            targetIndex.forEach((el)=>{
                const globalCellIndex = rowIndex * 4 + el;
                this.#mergedCellIndex.push(globalCellIndex);
            });
            return newValidRow;
        });
        // wenn keine änderung werden, keine neuer Zehlen
        if (!canMove) return;
        this.#generateRandomPositions();
        this.#checkGameStatus();
    }
    moveRight() {
        // reset
        this.#mergedCellIndex = [];
        // guard from pushing button
        if (this.#status === Game.statuses.lose || this.#status === Game.statuses.win) return;
        let canMove = false;
        // A double reverse is required for correct display.
        this.board = this.board.map((row, rowIndex)=>{
            const { newValidRow, isChange, targetIndex } = this.#shiftDirection([
                ...row
            ].reverse());
            canMove ||= isChange;
            const reverseTargetIndex = targetIndex.map((el)=>3 - el);
            reverseTargetIndex.forEach((el)=>{
                const globalCellIndex = rowIndex * 4 + el;
                this.#mergedCellIndex.push(globalCellIndex);
            });
            return newValidRow.reverse();
        });
        if (!canMove) return;
        this.#generateRandomPositions();
        this.#checkGameStatus();
    }
    moveUp() {
        // reset
        this.#mergedCellIndex = [];
        // guard from pushing button
        if (this.#status === Game.statuses.lose || this.#status === Game.statuses.win) return;
        let canMove = false;
        // I form a column, taking one cell from each row.
        for(let x = 0; x < this.#size; x++){
            const tempRow = [];
            for(let y = 0; y < this.#size; y++)tempRow.push(this.board[y][x]);
            const { newValidRow, isChange, targetIndex } = this.#shiftDirection(tempRow);
            canMove ||= isChange;
            for(let y = 0; y < this.#size; y++)this.board[y][x] = newValidRow[y];
            targetIndex.forEach((el)=>{
                const globalCellIndex = el * 4 + x;
                this.#mergedCellIndex.push(globalCellIndex);
            });
        }
        if (!canMove) return;
        this.#generateRandomPositions();
        this.#checkGameStatus();
    }
    moveDown() {
        // reset
        this.#mergedCellIndex = [];
        // guard from pushing button
        if (this.#status === Game.statuses.lose || this.#status === Game.statuses.win) return;
        let canMove = false;
        // I form a column, taking one cell from each row.
        for(let x = 0; x < this.#size; x++){
            const tempRow = [];
            for(let y = 0; y < this.#size; y++)tempRow.push(this.board[y][x]);
            // A double reverse is required for correct display.
            const { newValidRow, isChange, targetIndex } = this.#shiftDirection([
                ...tempRow
            ].reverse());
            newValidRow.reverse();
            canMove ||= isChange;
            for(let y = 0; y < this.#size; y++)this.board[y][x] = newValidRow[y];
            const reverseTargetIndex = targetIndex.map((el)=>3 - el);
            reverseTargetIndex.forEach((el)=>{
                const globalCellIndex = el * 4 + x;
                this.#mergedCellIndex.push(globalCellIndex);
            });
        }
        if (!canMove) return;
        this.#generateRandomPositions();
        this.#checkGameStatus();
    }
    // #endregion moves
    /**
   * @returns {number}
   */ getScore() {
        return this.#score;
    }
    getBestScore() {
        return this.#bestScore;
    }
    /**
   * @returns {number[][]}
   */ getState() {
        return {
            score: this.getScore(),
            bestScore: this.getBestScore(),
            statusGame: this.getStatus(),
            board: this.board,
            targetCellIndex: this.#mergedCellIndex
        };
    }
    /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */ getStatus() {
        return this.#status;
    }
    /**
   * Starts the game.
   */ start() {
        this.#score = 0;
        this.#generateRandomPositions();
        this.#generateRandomPositions();
        this.#status = Game.statuses.playing;
    }
    /**
   * Resets the game.
   */ restart() {
        this.#score = 0;
        this.board = structuredClone(this.#initialBoard);
        this.#generateRandomPositions();
        this.#generateRandomPositions();
        this.#status = Game.statuses.playing;
    }
    // Add your own methods here
    // #region function-tools
    // update the Bestscore and localStorage
    #updateBestScore() {
        if (this.#bestScore < this.#score) {
            this.#bestScore = this.#score;
            localStorage.setItem('best-score', this.#bestScore);
        }
    }
    // --> shift of values in the row and addition of values
    #shiftDirection(row) {
        // Clear the array of zeros to work only with active numbers
        const nonZeroValues = row.filter((el)=>el > 0);
        const updatedArray = [];
        const targetIndex = [];
        for(let i = 0; i < nonZeroValues.length; i++){
            const currNum = nonZeroValues[i];
            // is last number
            if (i === nonZeroValues.length - 1) {
                updatedArray.push(currNum);
                break;
            }
            const nextNum = nonZeroValues[i + 1];
            if (currNum === nextNum) {
                const sum = currNum + nextNum;
                updatedArray.push(sum);
                targetIndex.push(updatedArray.length - 1);
                this.#score += sum;
                this.#updateBestScore();
                i++;
            } else updatedArray.push(currNum);
        }
        const newValidRow = [];
        for(let i = 0; i < this.#size; i++){
            const curr = updatedArray[i];
            newValidRow.push(typeof curr === 'number' ? curr : 0);
        }
        const beforeRow = row.join(',');
        const afterRow = newValidRow.join(',');
        const isChange = beforeRow !== afterRow;
        return {
            newValidRow,
            isChange,
            targetIndex
        };
    }
    // --> random position of Numbers on the board
    #generateRandomPositions() {
        const cellPosition = {
            x: [],
            y: []
        };
        this.board.forEach((row, rowIndex)=>{
            row.forEach((col, colIndex)=>{
                if (col === 0) {
                    cellPosition.y.push(colIndex);
                    cellPosition.x.push(rowIndex);
                }
            });
        });
        // var coordinate for position of Number on the board
        const randomIndex = Math.floor(Math.random() * cellPosition.x.length);
        const coorX = cellPosition.x[randomIndex];
        const coorY = cellPosition.y[randomIndex];
        this.board[coorX][coorY] = this.#getRandomNumbers();
    }
    // --> randoms numbers 2 or (4 - 10% chance)
    #getRandomNumbers() {
        if (this.#status === Game.statuses.idle) return 2;
        else return Math.random() > 0.1 ? 2 : 4;
    }
    // --> scaning board and change the status-game
    #checkGameStatus() {
        let hasEmptyCells = false;
        let hasPossibleMerges = false;
        for(let y = 0; y < this.#size; y++)for(let x = 0; x < this.#size; x++){
            const bottomNeighbor = y > this.#size - 2 ? undefined : this.board[y + 1][x];
            const currentValue = this.board[y][x];
            const rightNeighbor = x > this.#size - 2 ? undefined : this.board[y][x + 1];
            if (currentValue === 2048) {
                this.#status = Game.statuses.win;
                return;
            }
            if (currentValue === 0) hasEmptyCells = true;
            if (currentValue === rightNeighbor || currentValue === bottomNeighbor) hasPossibleMerges = true;
        }
        if (!hasEmptyCells && !hasPossibleMerges) this.#status = Game.statuses.lose;
    }
}
// module.exports = Game;
exports.default = Game;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["15Ryi","3Aj1C"], "3Aj1C", "parcelRequire7b01", {})

//# sourceMappingURL=game_2048.4841ef46.js.map
