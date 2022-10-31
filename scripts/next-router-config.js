'use strict'
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __hasOwnProp = Object.prototype.hasOwnProperty
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true })
}
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// src/next-config.ts
var next_config_exports = {}
__export(next_config_exports, {
  withRoutes: () => withRoutes,
})
module.exports = __toCommonJS(next_config_exports)
var import_path3 = require('path')

// src/utils.ts
var import_fs = require('fs')
var import_path = require('path')
function getPagesDirectory() {
  const dirs = ['pages', (0, import_path.join)('src', 'pages')]
  for (const dir of dirs) {
    if ((0, import_fs.existsSync)(dir)) {
      return dir
    }
  }
}
function findFiles(entry) {
  return (0, import_fs.readdirSync)(entry).flatMap((file) => {
    const filepath = (0, import_path.join)(entry, file)
    if ((0, import_fs.statSync)(filepath).isDirectory() && !filepath.includes('node_modules')) {
      return findFiles(filepath)
    }
    return filepath
  })
}

// src/next-config.ts
var import_chokidar = require('chokidar')

// src/core.ts
var import_fs2 = require('fs')
var import_path2 = require('path')
var NEXTJS_NON_ROUTABLE = ['/_app', '/_document', '/_error', '/middleware']
var DYNAMIC_SEGMENT_RE = /\[(.*?)\]/g
function convertWindowsPathToUnix(file) {
  return file.replace(/\\/g, '/')
}
function nextRoutes(files, pagesDirectory) {
  const pathnames = files
    .map((file) => file.replace(pagesDirectory, ''))
    .map((file) => file.replace(/(\.\w+)+$/, ''))
    .filter((file, idx, array) => array.indexOf(file) === idx)
    .map(convertWindowsPathToUnix)
    .map((file) => file.replace(/index$/, ''))
    .map((file) => (file.endsWith('/') && file.length > 2 ? file.slice(0, -1) : file))
    .filter((file) => !NEXTJS_NON_ROUTABLE.includes(file))
  return pathnames.map((pathname) => {
    const segments = pathname.match(DYNAMIC_SEGMENT_RE) ?? []
    const query = segments.reduce((acc, cur) => {
      const param = cur.replace(/\[/g, '').replace(/\]/g, '').replace('...', '')
      let queryType = 'dynamic'
      if (cur.startsWith('[[')) {
        queryType = 'optional-catch-all'
      } else if (cur.startsWith('[...')) {
        queryType = 'catch-all'
      }
      acc[param] = queryType
      return acc
    }, {})
    return {
      pathname,
      query,
    }
  })
}
function generate(routes) {
  return JSON.stringify(
    routes.map((route) => route.pathname),
    null,
    2
  )
}
function writeNextjsRoutes(pagesDirectory) {
  const files = findFiles((0, import_path2.join)('.', pagesDirectory))
  const routes = nextRoutes(files, pagesDirectory)
  const generated = generate(routes)
  ;(0, import_fs2.writeFileSync)('app/router/routes.json', generated)
}

// src/next-config.ts
function debounce(fn, ms) {
  let id
  return function (...args) {
    clearTimeout(id)
    id = setTimeout(() => fn(...args), ms)
  }
}
var nextRoutesPlugin = {
  apply() {
    const pagesDirectory = getPagesDirectory()
    if (pagesDirectory) {
      const dir = (0, import_path3.join)(process.cwd(), pagesDirectory)
      const watcher = (0, import_chokidar.watch)(dir, {
        persistent: true,
      })
      const generate2 = debounce(() => writeNextjsRoutes(pagesDirectory), 50)
      watcher.on('add', generate2).on('unlink', generate2)
    }
  },
}
function withRoutes(nextConfig) {
  return {
    ...nextConfig,
    webpack: (config, context) => {
      if (context.dev && !context.isServer) {
        if (!config.plugins) {
          config.plugins = []
        }
        config.plugins.push(nextRoutesPlugin)
      }
      if (nextConfig.webpack) {
        return nextConfig.webpack(config, context)
      }
      return config
    },
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    withRoutes,
  })
