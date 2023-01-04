import { createRequire } from "module"; const require = createRequire(import.meta.url);
import {
  __dirname
} from "./chunk-Q3QJ7CQS.mjs";

// src/node/constants/index.ts
import path from "path";
var PACKAGE_ROOT = path.join(__dirname, "..");
var CLIENT_ENTRY_PATH = path.join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "client-entry.tsx"
);
var SERVER_ENTRY_PATH = path.join(
  PACKAGE_ROOT,
  "src",
  "runtime",
  "ssr-entry.tsx"
);
var DEFAULT_TEMPLATE_PATH = path.join(PACKAGE_ROOT, "template.html");

export {
  PACKAGE_ROOT,
  CLIENT_ENTRY_PATH,
  SERVER_ENTRY_PATH,
  DEFAULT_TEMPLATE_PATH
};
