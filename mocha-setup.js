import { JSDOM } from "jsdom";

const jsdom = new JSDOM('<body></body>');

/* eslint-disable no-undef */
global.window = jsdom.window;
global.document = jsdom.window.document;
global.FormData = jsdom.window.FormData;
global.Node = jsdom.window.Node;
