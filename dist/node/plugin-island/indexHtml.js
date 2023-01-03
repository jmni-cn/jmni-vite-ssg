"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginIndexHtml = void 0;
const promises_1 = require("fs/promises");
const constants_1 = require("../constants");
function pluginIndexHtml() {
    return {
        name: 'island:index-html',
        transformIndexHtml(html) {
            return {
                html,
                tags: [
                    {
                        tag: 'script',
                        attrs: {
                            type: 'module',
                            src: `/@fs/${constants_1.CLIENT_ENTRY_PATH}`
                        },
                        injectTo: 'body'
                    }
                ]
            };
        },
        configureServer(server) {
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    let content = await (0, promises_1.readFile)(constants_1.DEFAULT_TEMPLATE_PATH, 'utf-8');
                    content = await server.transformIndexHtml(req.url, content, req.originalUrl);
                    res.setHeader('Content-Type', 'text/html');
                    res.end(content);
                });
            };
        }
    };
}
exports.pluginIndexHtml = pluginIndexHtml;
