/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/base_structures/binary-search/binary-search.js":
/*!*************************************************************!*\
  !*** ./dist/base_structures/binary-search/binary-search.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction binarySearch(needle, arr) {\n    let start = 0, end = arr.length - 1;\n    while (true) {\n        let center = Math.floor((start + end) / 2);\n        if (arr[center] === needle) {\n            return center;\n        }\n        if (start > end) {\n            return -1;\n        }\n        if (needle > arr[center]) {\n            start = center + 1;\n        }\n        else {\n            end = center - 1;\n        }\n    }\n}\nexports[\"default\"] = binarySearch;\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/binary-search/binary-search.js?");

/***/ }),

/***/ "./dist/base_structures/binary-search/index.js":
/*!*****************************************************!*\
  !*** ./dist/base_structures/binary-search/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.binarySearch = void 0;\nvar binary_search_1 = __webpack_require__(/*! ./binary-search */ \"./dist/base_structures/binary-search/binary-search.js\");\nObject.defineProperty(exports, \"binarySearch\", ({ enumerable: true, get: function () { return __importDefault(binary_search_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/binary-search/index.js?");

/***/ }),

/***/ "./dist/base_structures/binary-tree/binary-node.js":
/*!*********************************************************!*\
  !*** ./dist/base_structures/binary-tree/binary-node.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass BinaryNode {\n    constructor(value) {\n        this.left = null;\n        this.right = null;\n        this.value = value;\n    }\n    *values() {\n        yield this.value;\n        if (this.left !== null) {\n            yield* this.left.values();\n        }\n        if (this.right !== null) {\n            yield* this.right.values();\n        }\n    }\n    *symmetrical() {\n        if (this.left !== null) {\n            yield* this.left.symmetrical();\n        }\n        yield this.value;\n        if (this.right !== null) {\n            yield* this.right.symmetrical();\n        }\n    }\n    *reversed() {\n        if (this.left !== null) {\n            yield* this.left.reversed();\n        }\n        if (this.right !== null) {\n            yield* this.right.reversed();\n        }\n        yield this.value;\n    }\n}\nexports[\"default\"] = BinaryNode;\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/binary-tree/binary-node.js?");

/***/ }),

/***/ "./dist/base_structures/binary-tree/binary-tree.js":
/*!*********************************************************!*\
  !*** ./dist/base_structures/binary-tree/binary-tree.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _BinaryTree_root;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst binary_node_1 = __importDefault(__webpack_require__(/*! ./binary-node */ \"./dist/base_structures/binary-tree/binary-node.js\"));\nconst queue_1 = __webpack_require__(/*! ../queue */ \"./dist/base_structures/queue/index.js\");\nclass BinaryTree {\n    constructor(innerArray = []) {\n        _BinaryTree_root.set(this, null);\n        innerArray.forEach(val => this.insert(val));\n    }\n    insert(value) {\n        if (__classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null) {\n            __classPrivateFieldSet(this, _BinaryTree_root, new binary_node_1.default(value), \"f\");\n        }\n        else {\n            let current = __classPrivateFieldGet(this, _BinaryTree_root, \"f\");\n            while (true) {\n                let parent = current;\n                if (current.value > value) {\n                    current = current.left;\n                    if (current === null) {\n                        parent.left = new binary_node_1.default(value);\n                        return;\n                    }\n                }\n                else {\n                    current = current.right;\n                    if (current === null) {\n                        parent.right = new binary_node_1.default(value);\n                        return;\n                    }\n                }\n            }\n        }\n    }\n    has(value) {\n        if (__classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null) {\n            return false;\n        }\n        let current = __classPrivateFieldGet(this, _BinaryTree_root, \"f\");\n        while (current.value !== value) {\n            current = current.value > value ? current.left : current.right;\n            if (current === null) {\n                return false;\n            }\n        }\n        return true;\n    }\n    min() {\n        if (__classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null) {\n            return null;\n        }\n        let current = __classPrivateFieldGet(this, _BinaryTree_root, \"f\");\n        while (current.left !== null) {\n            current = current.left;\n        }\n        return current.value;\n    }\n    max() {\n        if (__classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null) {\n            return null;\n        }\n        let current = __classPrivateFieldGet(this, _BinaryTree_root, \"f\");\n        while (current.right !== null) {\n            current = current.right;\n        }\n        return current.value;\n    }\n    delete(value) {\n        if (__classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null) {\n            return false;\n        }\n        let parent = null;\n        let current = __classPrivateFieldGet(this, _BinaryTree_root, \"f\");\n        while (current.value !== value) {\n            parent = current;\n            current = current.value > value ? current.left : current.right;\n            if (current === null) {\n                return false;\n            }\n        }\n        if (parent === null) {\n            __classPrivateFieldSet(this, _BinaryTree_root, null, \"f\");\n            return true;\n        }\n        return this.deleteNode(parent, current);\n    }\n    deleteNode(parent, node) {\n        if (node.left === null && node.right === null) {\n            if (parent.left === node) {\n                parent.left = null;\n            }\n            if (parent.right === node) {\n                parent.right = null;\n            }\n            return true;\n        }\n        if ((node.left === null || node.right === null) && (node.left !== null || node.right !== null)) {\n            if (parent.left === node) {\n                parent.left = node.left ?? node.right;\n            }\n            if (parent.right === node) {\n                parent.left = node.left ?? node.right;\n            }\n            return true;\n        }\n        if (node.left !== null && node.right !== null) {\n            let current = node.right;\n            let successor = current;\n            let parentSuccessor = node;\n            if (current.left === null) {\n                if (parent.left === node) {\n                    parent.left = successor;\n                }\n                if (parent.right === node) {\n                    parent.right = successor;\n                }\n                successor.left = node.left;\n                return true;\n            }\n            while (successor.left !== null) {\n                parentSuccessor = successor;\n                successor = successor.left;\n            }\n            parentSuccessor.left = successor.right === null ? null : successor.right;\n            node.value = successor.value;\n            return true;\n        }\n        return false;\n    }\n    intoIter(generator) {\n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next(...args) {\n                if (generator !== null) {\n                    const val = generator.next();\n                    if (!val.done) {\n                        return {\n                            done: false,\n                            value: val.value\n                        };\n                    }\n                    else {\n                        return {\n                            done: true,\n                            value: null\n                        };\n                    }\n                }\n                else {\n                    return {\n                        done: true,\n                        value: null\n                    };\n                }\n            }\n        };\n    }\n    values() {\n        const generator = __classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null ? null : __classPrivateFieldGet(this, _BinaryTree_root, \"f\").values();\n        return this.intoIter(generator);\n    }\n    symmetricalValues() {\n        const generator = __classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null ? null : __classPrivateFieldGet(this, _BinaryTree_root, \"f\").symmetrical();\n        return this.intoIter(generator);\n    }\n    reversedValues() {\n        const generator = __classPrivateFieldGet(this, _BinaryTree_root, \"f\") === null ? null : __classPrivateFieldGet(this, _BinaryTree_root, \"f\").reversed();\n        return this.intoIter(generator);\n    }\n    widthValues() {\n        return this.intoIter(this.widthGenerator());\n    }\n    *widthGenerator() {\n        if (__classPrivateFieldGet(this, _BinaryTree_root, \"f\") !== null) {\n            const queue = new queue_1.SimpleQueue();\n            queue.push(__classPrivateFieldGet(this, _BinaryTree_root, \"f\"));\n            while (true) {\n                let item = queue.shift();\n                yield item.value;\n                if (item.left !== null) {\n                    queue.push(item.left);\n                }\n                if (item.right !== null) {\n                    queue.push(item.right);\n                }\n                if (queue.isEmpty()) {\n                    break;\n                }\n            }\n        }\n    }\n}\nexports[\"default\"] = BinaryTree;\n_BinaryTree_root = new WeakMap();\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/binary-tree/binary-tree.js?");

/***/ }),

/***/ "./dist/base_structures/binary-tree/index.js":
/*!***************************************************!*\
  !*** ./dist/base_structures/binary-tree/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BinaryTree = void 0;\nvar binary_tree_1 = __webpack_require__(/*! ./binary-tree */ \"./dist/base_structures/binary-tree/binary-tree.js\");\nObject.defineProperty(exports, \"BinaryTree\", ({ enumerable: true, get: function () { return __importDefault(binary_tree_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/binary-tree/index.js?");

/***/ }),

/***/ "./dist/base_structures/index.js":
/*!***************************************!*\
  !*** ./dist/base_structures/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BinaryTree = exports.binarySearch = exports.LimitedStack = exports.DoubleQueue = exports.SimpleQueue = exports.LinkedList = void 0;\nvar linked_list_1 = __webpack_require__(/*! ./linked-list */ \"./dist/base_structures/linked-list/index.js\");\nObject.defineProperty(exports, \"LinkedList\", ({ enumerable: true, get: function () { return linked_list_1.LinkedList; } }));\nvar queue_1 = __webpack_require__(/*! ./queue */ \"./dist/base_structures/queue/index.js\");\nObject.defineProperty(exports, \"SimpleQueue\", ({ enumerable: true, get: function () { return queue_1.SimpleQueue; } }));\nObject.defineProperty(exports, \"DoubleQueue\", ({ enumerable: true, get: function () { return queue_1.DoubleQueue; } }));\nvar stack_1 = __webpack_require__(/*! ./stack */ \"./dist/base_structures/stack/index.js\");\nObject.defineProperty(exports, \"LimitedStack\", ({ enumerable: true, get: function () { return stack_1.LimitedStack; } }));\nvar binary_search_1 = __webpack_require__(/*! ./binary-search */ \"./dist/base_structures/binary-search/index.js\");\nObject.defineProperty(exports, \"binarySearch\", ({ enumerable: true, get: function () { return binary_search_1.binarySearch; } }));\nvar binary_tree_1 = __webpack_require__(/*! ./binary-tree */ \"./dist/base_structures/binary-tree/index.js\");\nObject.defineProperty(exports, \"BinaryTree\", ({ enumerable: true, get: function () { return binary_tree_1.BinaryTree; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/index.js?");

/***/ }),

/***/ "./dist/base_structures/linked-list/LinkedList.js":
/*!********************************************************!*\
  !*** ./dist/base_structures/linked-list/LinkedList.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _LinkedList_first, _LinkedList_last, _LinkedList_length;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LinkedListItem_1 = __importDefault(__webpack_require__(/*! ./LinkedListItem */ \"./dist/base_structures/linked-list/LinkedListItem.js\"));\nclass LinkedList {\n    constructor() {\n        _LinkedList_first.set(this, null);\n        _LinkedList_last.set(this, null);\n        _LinkedList_length.set(this, 0);\n    }\n    get first() {\n        return __classPrivateFieldGet(this, _LinkedList_first, \"f\");\n    }\n    get last() {\n        return __classPrivateFieldGet(this, _LinkedList_last, \"f\");\n    }\n    get length() {\n        return __classPrivateFieldGet(this, _LinkedList_length, \"f\");\n    }\n    add(value) {\n        var _a;\n        const newItem = new LinkedListItem_1.default(value);\n        if (__classPrivateFieldGet(this, _LinkedList_last, \"f\") instanceof LinkedListItem_1.default) {\n            newItem.setPrev(__classPrivateFieldGet(this, _LinkedList_last, \"f\"));\n            __classPrivateFieldGet(this, _LinkedList_last, \"f\").setNext(newItem);\n            __classPrivateFieldSet(this, _LinkedList_last, newItem, \"f\");\n        }\n        else {\n            __classPrivateFieldSet(this, _LinkedList_first, newItem, \"f\");\n            __classPrivateFieldSet(this, _LinkedList_last, newItem, \"f\");\n        }\n        __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, \"f\"), _a++, _a), \"f\");\n    }\n    insertBefore(value, itemOrValue) {\n        var _a;\n        const newItem = new LinkedListItem_1.default(value);\n        const itemList = itemOrValue instanceof LinkedListItem_1.default ? itemOrValue : this.find(itemOrValue);\n        if (itemList === null) {\n            throw new Error(`Value '${itemOrValue} not found id list'`);\n        }\n        newItem.setNext(itemList);\n        newItem.setPrev(itemList.prev);\n        if (newItem.prev instanceof LinkedListItem_1.default) {\n            newItem.prev.setNext(newItem);\n        }\n        if (itemList === __classPrivateFieldGet(this, _LinkedList_first, \"f\")) {\n            __classPrivateFieldSet(this, _LinkedList_first, newItem, \"f\");\n        }\n        itemList.setPrev(newItem);\n        __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, \"f\"), _a++, _a), \"f\");\n        return newItem;\n    }\n    insertAfter(value, itemOrValue) {\n        var _a;\n        const newItem = new LinkedListItem_1.default(value);\n        const itemList = itemOrValue instanceof LinkedListItem_1.default ? itemOrValue : this.find(itemOrValue);\n        if (itemList === null) {\n            throw new Error(`Value '${itemOrValue} not found id list'`);\n        }\n        newItem.setPrev(itemList);\n        newItem.setNext(itemList.next);\n        if (itemList === __classPrivateFieldGet(this, _LinkedList_last, \"f\")) {\n            __classPrivateFieldSet(this, _LinkedList_last, newItem, \"f\");\n        }\n        itemList.setNext(newItem);\n        __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, \"f\"), _a++, _a), \"f\");\n        return newItem;\n    }\n    find(value, strict = true) {\n        for (let itemList of this.items()) {\n            if (strict ? value === itemList.value : value == itemList.value) {\n                return itemList;\n            }\n        }\n        return null;\n    }\n    delete(valueOrItem, strict = true) {\n        var _a;\n        const findItem = valueOrItem instanceof LinkedListItem_1.default ? valueOrItem : this.find(valueOrItem, strict);\n        if (findItem instanceof LinkedListItem_1.default) {\n            if (findItem.prev instanceof LinkedListItem_1.default) {\n                findItem.prev.setNext(findItem.next);\n            }\n            else {\n                __classPrivateFieldSet(this, _LinkedList_first, findItem.next, \"f\");\n            }\n            if (findItem.next instanceof LinkedListItem_1.default) {\n                findItem.next.setPrev(findItem.prev);\n            }\n            else {\n                __classPrivateFieldSet(this, _LinkedList_last, findItem.prev, \"f\");\n            }\n            __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, \"f\"), _a--, _a), \"f\");\n            return true;\n        }\n        return false;\n    }\n    isEmpty() {\n        return __classPrivateFieldGet(this, _LinkedList_first, \"f\") === null;\n    }\n    items() {\n        let current = __classPrivateFieldGet(this, _LinkedList_first, \"f\");\n        function* generate() {\n            while (current) {\n                yield current;\n                current = current.next;\n            }\n        }\n        const iter = generate();\n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next() {\n                return iter.next();\n            }\n        };\n    }\n    reverseItems() {\n        let current = __classPrivateFieldGet(this, _LinkedList_last, \"f\");\n        function* generate() {\n            while (current) {\n                yield current;\n                current = current.prev;\n            }\n        }\n        const iter = generate();\n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next() {\n                return iter.next();\n            }\n        };\n    }\n    values() {\n        const self = this;\n        function* generate() {\n            for (let item of self.items()) {\n                yield item.value;\n            }\n        }\n        const iter = generate();\n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next() {\n                return iter.next();\n            }\n        };\n    }\n    reverseValues() {\n        const self = this;\n        function* generate() {\n            for (let item of self.reverseItems()) {\n                yield item.value;\n            }\n        }\n        const iter = generate();\n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next() {\n                return iter.next();\n            }\n        };\n    }\n}\nexports[\"default\"] = LinkedList;\n_LinkedList_first = new WeakMap(), _LinkedList_last = new WeakMap(), _LinkedList_length = new WeakMap();\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/linked-list/LinkedList.js?");

/***/ }),

/***/ "./dist/base_structures/linked-list/LinkedListItem.js":
/*!************************************************************!*\
  !*** ./dist/base_structures/linked-list/LinkedListItem.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _LinkedListItem_next, _LinkedListItem_prev;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass LinkedListItem {\n    constructor(value) {\n        _LinkedListItem_next.set(this, null);\n        _LinkedListItem_prev.set(this, null);\n        this.value = value;\n    }\n    get next() {\n        return __classPrivateFieldGet(this, _LinkedListItem_next, \"f\");\n    }\n    get prev() {\n        return __classPrivateFieldGet(this, _LinkedListItem_prev, \"f\");\n    }\n    setNext(item) {\n        __classPrivateFieldSet(this, _LinkedListItem_next, item, \"f\");\n    }\n    setPrev(item) {\n        __classPrivateFieldSet(this, _LinkedListItem_prev, item, \"f\");\n    }\n}\nexports[\"default\"] = LinkedListItem;\n_LinkedListItem_next = new WeakMap(), _LinkedListItem_prev = new WeakMap();\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/linked-list/LinkedListItem.js?");

/***/ }),

/***/ "./dist/base_structures/linked-list/index.js":
/*!***************************************************!*\
  !*** ./dist/base_structures/linked-list/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LinkedListItem = exports.LinkedList = void 0;\nvar LinkedList_1 = __webpack_require__(/*! ./LinkedList */ \"./dist/base_structures/linked-list/LinkedList.js\");\nObject.defineProperty(exports, \"LinkedList\", ({ enumerable: true, get: function () { return __importDefault(LinkedList_1).default; } }));\nvar LinkedListItem_1 = __webpack_require__(/*! ./LinkedListItem */ \"./dist/base_structures/linked-list/LinkedListItem.js\");\nObject.defineProperty(exports, \"LinkedListItem\", ({ enumerable: true, get: function () { return __importDefault(LinkedListItem_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/linked-list/index.js?");

/***/ }),

/***/ "./dist/base_structures/queue/DoubleQueue.js":
/*!***************************************************!*\
  !*** ./dist/base_structures/queue/DoubleQueue.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst _1 = __webpack_require__(/*! ./ */ \"./dist/base_structures/queue/index.js\");\nclass DoubleQueue extends _1.SimpleQueue {\n    constructor() {\n        super();\n    }\n    get back() {\n        return this.queue.last?.value ?? null;\n    }\n    unshift(value) {\n        if (this.isEmpty()) {\n            this.queue.add(value);\n        }\n        else {\n            this.queue.insertBefore(value, this.queue.first);\n        }\n    }\n    pop() {\n        if (this.isEmpty()) {\n            throw new Error('Queue is empty');\n        }\n        const last = this.queue.last;\n        const val = last.value;\n        this.queue.delete(last);\n        return val;\n    }\n}\nexports[\"default\"] = DoubleQueue;\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/queue/DoubleQueue.js?");

/***/ }),

/***/ "./dist/base_structures/queue/SimpleQueue.js":
/*!***************************************************!*\
  !*** ./dist/base_structures/queue/SimpleQueue.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst linked_list_1 = __webpack_require__(/*! ../linked-list */ \"./dist/base_structures/linked-list/index.js\");\nclass SimpleQueue {\n    constructor() {\n        this.queue = new linked_list_1.LinkedList();\n    }\n    get head() {\n        return this.queue.first?.value ?? null;\n    }\n    push(value) {\n        this.queue.add(value);\n    }\n    shift() {\n        if (this.isEmpty()) {\n            throw new Error('Queue is empty');\n        }\n        const first = this.queue.first;\n        const val = first.value;\n        this.queue.delete(first);\n        return val;\n    }\n    isEmpty() {\n        return this.queue.isEmpty();\n    }\n    values() {\n        const self = this.queue;\n        function* generate() {\n            for (let item of self.values()) {\n                yield item;\n            }\n        }\n        const iter = generate();\n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next() {\n                return iter.next();\n            }\n        };\n    }\n}\nexports[\"default\"] = SimpleQueue;\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/queue/SimpleQueue.js?");

/***/ }),

/***/ "./dist/base_structures/queue/index.js":
/*!*********************************************!*\
  !*** ./dist/base_structures/queue/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DoubleQueue = exports.SimpleQueue = void 0;\nvar SimpleQueue_1 = __webpack_require__(/*! ./SimpleQueue */ \"./dist/base_structures/queue/SimpleQueue.js\");\nObject.defineProperty(exports, \"SimpleQueue\", ({ enumerable: true, get: function () { return __importDefault(SimpleQueue_1).default; } }));\nvar DoubleQueue_1 = __webpack_require__(/*! ./DoubleQueue */ \"./dist/base_structures/queue/DoubleQueue.js\");\nObject.defineProperty(exports, \"DoubleQueue\", ({ enumerable: true, get: function () { return __importDefault(DoubleQueue_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/queue/index.js?");

/***/ }),

/***/ "./dist/base_structures/stack/LimitedStack.js":
/*!****************************************************!*\
  !*** ./dist/base_structures/stack/LimitedStack.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _LimitedStack_stack, _LimitedStack_current;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass LimitedStack {\n    constructor(limit) {\n        _LimitedStack_stack.set(this, void 0);\n        _LimitedStack_current.set(this, -1);\n        this.limit = limit;\n        __classPrivateFieldSet(this, _LimitedStack_stack, new Array(limit), \"f\");\n    }\n    get head() {\n        return this.isEmpty() ? null : __classPrivateFieldGet(this, _LimitedStack_stack, \"f\")[__classPrivateFieldGet(this, _LimitedStack_current, \"f\")];\n    }\n    get count() {\n        return __classPrivateFieldGet(this, _LimitedStack_current, \"f\") + 1;\n    }\n    push(value) {\n        var _a;\n        if (__classPrivateFieldGet(this, _LimitedStack_current, \"f\") + 1 >= this.limit) {\n            throw new Error('Stack overflow');\n        }\n        __classPrivateFieldSet(this, _LimitedStack_current, (_a = __classPrivateFieldGet(this, _LimitedStack_current, \"f\"), _a++, _a), \"f\");\n        __classPrivateFieldGet(this, _LimitedStack_stack, \"f\")[__classPrivateFieldGet(this, _LimitedStack_current, \"f\")] = value;\n    }\n    take() {\n        var _a;\n        if (this.isEmpty()) {\n            throw new Error('Stack is empty');\n        }\n        const val = __classPrivateFieldGet(this, _LimitedStack_stack, \"f\")[__classPrivateFieldGet(this, _LimitedStack_current, \"f\")];\n        delete __classPrivateFieldGet(this, _LimitedStack_stack, \"f\")[__classPrivateFieldGet(this, _LimitedStack_current, \"f\")];\n        __classPrivateFieldSet(this, _LimitedStack_current, (_a = __classPrivateFieldGet(this, _LimitedStack_current, \"f\"), _a--, _a), \"f\");\n        return val;\n    }\n    isEmpty() {\n        return __classPrivateFieldGet(this, _LimitedStack_current, \"f\") < 0;\n    }\n    get values() {\n        const self = this;\n        return {\n            *[Symbol.iterator]() {\n                for (let i = 0; i <= __classPrivateFieldGet(self, _LimitedStack_current, \"f\"); i++) {\n                    yield __classPrivateFieldGet(self, _LimitedStack_stack, \"f\")[i];\n                }\n            }\n        };\n    }\n}\nexports[\"default\"] = LimitedStack;\n_LimitedStack_stack = new WeakMap(), _LimitedStack_current = new WeakMap();\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/stack/LimitedStack.js?");

/***/ }),

/***/ "./dist/base_structures/stack/index.js":
/*!*********************************************!*\
  !*** ./dist/base_structures/stack/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LimitedStack = void 0;\nvar LimitedStack_1 = __webpack_require__(/*! ./LimitedStack */ \"./dist/base_structures/stack/LimitedStack.js\");\nObject.defineProperty(exports, \"LimitedStack\", ({ enumerable: true, get: function () { return __importDefault(LimitedStack_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/base_structures/stack/index.js?");

/***/ }),

/***/ "./dist/cache/index.js":
/*!*****************************!*\
  !*** ./dist/cache/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NeverCache = exports.LFUCache = exports.LRUCache = void 0;\nvar lru_1 = __webpack_require__(/*! ./lru */ \"./dist/cache/lru/index.js\");\nObject.defineProperty(exports, \"LRUCache\", ({ enumerable: true, get: function () { return lru_1.LRU; } }));\nvar lfu_1 = __webpack_require__(/*! ./lfu */ \"./dist/cache/lfu/index.js\");\nObject.defineProperty(exports, \"LFUCache\", ({ enumerable: true, get: function () { return lfu_1.LFU; } }));\nvar never_1 = __webpack_require__(/*! ./never */ \"./dist/cache/never/index.js\");\nObject.defineProperty(exports, \"NeverCache\", ({ enumerable: true, get: function () { return never_1.Never; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/cache/index.js?");

/***/ }),

/***/ "./dist/cache/lfu/index.js":
/*!*********************************!*\
  !*** ./dist/cache/lfu/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LFU = void 0;\nvar lfu_1 = __webpack_require__(/*! ./lfu */ \"./dist/cache/lfu/lfu.js\");\nObject.defineProperty(exports, \"LFU\", ({ enumerable: true, get: function () { return __importDefault(lfu_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/cache/lfu/index.js?");

/***/ }),

/***/ "./dist/cache/lfu/lfu.js":
/*!*******************************!*\
  !*** ./dist/cache/lfu/lfu.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _LFU_instances, _LFU_store, _LFU_history, _LFU_sortUp;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst _base_structures_1 = __webpack_require__(/*! @base_structures */ \"./dist/base_structures/index.js\");\nclass LFU {\n    constructor(size = 100) {\n        _LFU_instances.add(this);\n        _LFU_store.set(this, new Map());\n        _LFU_history.set(this, new _base_structures_1.LinkedList());\n        this.size = size;\n    }\n    get(key) {\n        const value = __classPrivateFieldGet(this, _LFU_store, \"f\").get(key);\n        if (value !== undefined) {\n            __classPrivateFieldGet(this, _LFU_instances, \"m\", _LFU_sortUp).call(this, key);\n        }\n        return value;\n    }\n    set(key, value) {\n        if (!__classPrivateFieldGet(this, _LFU_store, \"f\").has(key)) {\n            if (__classPrivateFieldGet(this, _LFU_store, \"f\").size === this.size && __classPrivateFieldGet(this, _LFU_history, \"f\").last !== null) {\n                __classPrivateFieldGet(this, _LFU_store, \"f\").delete(__classPrivateFieldGet(this, _LFU_history, \"f\").last.value[1]);\n                __classPrivateFieldGet(this, _LFU_history, \"f\").delete(__classPrivateFieldGet(this, _LFU_history, \"f\").last);\n            }\n            __classPrivateFieldGet(this, _LFU_history, \"f\").add([1, key]);\n        }\n        __classPrivateFieldGet(this, _LFU_store, \"f\").set(key, value);\n    }\n    delete(key) {\n        const deleted = __classPrivateFieldGet(this, _LFU_store, \"f\").delete(key);\n        if (deleted) {\n            for (const item of __classPrivateFieldGet(this, _LFU_history, \"f\").items()) {\n                if (item.value[1] === key) {\n                    __classPrivateFieldGet(this, _LFU_history, \"f\").delete(item);\n                    break;\n                }\n            }\n        }\n        return deleted;\n    }\n    clear() {\n        __classPrivateFieldGet(this, _LFU_store, \"f\").clear();\n        __classPrivateFieldSet(this, _LFU_history, new _base_structures_1.LinkedList(), \"f\");\n    }\n}\nexports[\"default\"] = LFU;\n_LFU_store = new WeakMap(), _LFU_history = new WeakMap(), _LFU_instances = new WeakSet(), _LFU_sortUp = function _LFU_sortUp(value) {\n    for (const item of __classPrivateFieldGet(this, _LFU_history, \"f\").items()) {\n        if (item.value[1] === value) {\n            item.value[0]++;\n            if (item.prev !== null && item.prev.value[0] < item.value[0]) {\n                const tmp = [...item.prev.value];\n                item.prev.value = [...item.value];\n                item.value = tmp;\n            }\n            break;\n        }\n    }\n};\n\n\n//# sourceURL=webpack://test_engine/./dist/cache/lfu/lfu.js?");

/***/ }),

/***/ "./dist/cache/lru/index.js":
/*!*********************************!*\
  !*** ./dist/cache/lru/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LRU = void 0;\nvar lru_1 = __webpack_require__(/*! ./lru */ \"./dist/cache/lru/lru.js\");\nObject.defineProperty(exports, \"LRU\", ({ enumerable: true, get: function () { return __importDefault(lru_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/cache/lru/index.js?");

/***/ }),

/***/ "./dist/cache/lru/lru.js":
/*!*******************************!*\
  !*** ./dist/cache/lru/lru.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _LRU_instances, _LRU_store, _LRU_history, _LRU_moveToEnd;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst _base_structures_1 = __webpack_require__(/*! @base_structures */ \"./dist/base_structures/index.js\");\nclass LRU {\n    constructor(size = 100) {\n        _LRU_instances.add(this);\n        _LRU_store.set(this, new Map());\n        _LRU_history.set(this, new _base_structures_1.LinkedList());\n        this.size = size;\n    }\n    get(key) {\n        const value = __classPrivateFieldGet(this, _LRU_store, \"f\").get(key);\n        if (value !== undefined) {\n            __classPrivateFieldGet(this, _LRU_instances, \"m\", _LRU_moveToEnd).call(this, key);\n        }\n        return value;\n    }\n    set(key, value) {\n        if (!__classPrivateFieldGet(this, _LRU_store, \"f\").has(key)) {\n            __classPrivateFieldGet(this, _LRU_history, \"f\").add(key);\n        }\n        __classPrivateFieldGet(this, _LRU_store, \"f\").set(key, value);\n        if (__classPrivateFieldGet(this, _LRU_store, \"f\").size > this.size && __classPrivateFieldGet(this, _LRU_history, \"f\").first !== null) {\n            __classPrivateFieldGet(this, _LRU_store, \"f\").delete(__classPrivateFieldGet(this, _LRU_history, \"f\").first.value);\n            __classPrivateFieldGet(this, _LRU_history, \"f\").delete(__classPrivateFieldGet(this, _LRU_history, \"f\").first);\n        }\n    }\n    delete(key) {\n        const deleted = __classPrivateFieldGet(this, _LRU_store, \"f\").delete(key);\n        if (deleted) {\n            __classPrivateFieldGet(this, _LRU_history, \"f\").delete(key);\n        }\n        return deleted;\n    }\n    clear() {\n        __classPrivateFieldGet(this, _LRU_store, \"f\").clear();\n        __classPrivateFieldSet(this, _LRU_history, new _base_structures_1.LinkedList(), \"f\");\n    }\n}\nexports[\"default\"] = LRU;\n_LRU_store = new WeakMap(), _LRU_history = new WeakMap(), _LRU_instances = new WeakSet(), _LRU_moveToEnd = function _LRU_moveToEnd(value) {\n    if (value === __classPrivateFieldGet(this, _LRU_history, \"f\").last?.value) {\n        return;\n    }\n    const el = __classPrivateFieldGet(this, _LRU_history, \"f\").find(value);\n    if (el !== null) {\n        __classPrivateFieldGet(this, _LRU_history, \"f\").delete(el);\n        __classPrivateFieldGet(this, _LRU_history, \"f\").add(value);\n    }\n};\n\n\n//# sourceURL=webpack://test_engine/./dist/cache/lru/lru.js?");

/***/ }),

/***/ "./dist/cache/never/index.js":
/*!***********************************!*\
  !*** ./dist/cache/never/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Never = void 0;\nvar never_1 = __webpack_require__(/*! ./never */ \"./dist/cache/never/never.js\");\nObject.defineProperty(exports, \"Never\", ({ enumerable: true, get: function () { return __importDefault(never_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/cache/never/index.js?");

/***/ }),

/***/ "./dist/cache/never/never.js":
/*!***********************************!*\
  !*** ./dist/cache/never/never.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Never {\n    get(key) {\n        return undefined;\n    }\n    set(key, value) {\n    }\n    delete(key) {\n        return true;\n    }\n    clear() {\n    }\n}\nexports[\"default\"] = Never;\n\n\n//# sourceURL=webpack://test_engine/./dist/cache/never/never.js?");

/***/ }),

/***/ "./dist/http/index.js":
/*!****************************!*\
  !*** ./dist/http/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HttpRequest = exports.HttpXHREngine = exports.HttpFetchEngine = void 0;\nvar request_engins_1 = __webpack_require__(/*! ./request-engins */ \"./dist/http/request-engins/index.js\");\nObject.defineProperty(exports, \"HttpFetchEngine\", ({ enumerable: true, get: function () { return request_engins_1.Fetch; } }));\nObject.defineProperty(exports, \"HttpXHREngine\", ({ enumerable: true, get: function () { return request_engins_1.XHR; } }));\nvar request_1 = __webpack_require__(/*! ./request */ \"./dist/http/request/index.js\");\nObject.defineProperty(exports, \"HttpRequest\", ({ enumerable: true, get: function () { return request_1.Request; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/http/index.js?");

/***/ }),

/***/ "./dist/http/request-engins/fetch.js":
/*!*******************************************!*\
  !*** ./dist/http/request-engins/fetch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Fetch {\n    execute(request) {\n        const params = request.parameters();\n        return fetch(request.url, {\n            method: params.method,\n            body: params.body,\n            headers: params.headers\n        });\n    }\n}\nexports[\"default\"] = Fetch;\n\n\n//# sourceURL=webpack://test_engine/./dist/http/request-engins/fetch.js?");

/***/ }),

/***/ "./dist/http/request-engins/index.js":
/*!*******************************************!*\
  !*** ./dist/http/request-engins/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.XHR = exports.Fetch = void 0;\nvar fetch_1 = __webpack_require__(/*! ./fetch */ \"./dist/http/request-engins/fetch.js\");\nObject.defineProperty(exports, \"Fetch\", ({ enumerable: true, get: function () { return __importDefault(fetch_1).default; } }));\nvar xhr_1 = __webpack_require__(/*! ./xhr */ \"./dist/http/request-engins/xhr.js\");\nObject.defineProperty(exports, \"XHR\", ({ enumerable: true, get: function () { return __importDefault(xhr_1).default; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/http/request-engins/index.js?");

/***/ }),

/***/ "./dist/http/request-engins/xhr.js":
/*!*****************************************!*\
  !*** ./dist/http/request-engins/xhr.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass XHR {\n    execute(request) {\n        const params = request.parameters();\n        const headers = (xhr) => {\n            return xhr\n                .getAllResponseHeaders()\n                .split('\\r\\n')\n                .reduce((result, current) => {\n                const [name, value] = current.split(': ');\n                if (name != '') {\n                    result.set(name, value);\n                }\n                return result;\n            }, new Headers());\n        };\n        return new Promise((resolve, reject) => {\n            let xhr = new XMLHttpRequest();\n            xhr.open(params.method, request.url, true);\n            params.headers.forEach((value, key) => {\n                xhr.setRequestHeader(key, value);\n            });\n            xhr.onload = () => {\n                resolve(new Response(xhr.response, {\n                    status: xhr.status,\n                    statusText: xhr.statusText,\n                    headers: headers(xhr)\n                }));\n            };\n            xhr.onerror = () => reject(new Error('Error send XHR request.'));\n            xhr.send(params.body);\n        });\n    }\n}\nexports[\"default\"] = XHR;\n\n\n//# sourceURL=webpack://test_engine/./dist/http/request-engins/xhr.js?");

/***/ }),

/***/ "./dist/http/request/helpers.js":
/*!**************************************!*\
  !*** ./dist/http/request/helpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.objectToFormData = void 0;\nconst objectToFormData = (data) => {\n    return Object.keys(data).reduce((formData, key) => {\n        const value = data[key];\n        if (Array.isArray(value)) {\n            value.forEach((item) => {\n                formData.append(`${key}[]`, item);\n            });\n        }\n        else if (value === null) {\n            formData.append(key, '');\n        }\n        else if (typeof value === 'object' && !(value instanceof File)) {\n            formData.append(key, JSON.stringify(value));\n        }\n        else if (typeof value === 'boolean') {\n            formData.append(key, Number(value).toString());\n        }\n        else {\n            formData.append(key, value);\n        }\n        return formData;\n    }, new FormData());\n};\nexports.objectToFormData = objectToFormData;\n\n\n//# sourceURL=webpack://test_engine/./dist/http/request/helpers.js?");

/***/ }),

/***/ "./dist/http/request/index.js":
/*!************************************!*\
  !*** ./dist/http/request/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RequestMethod = exports.Request = void 0;\nvar request_1 = __webpack_require__(/*! ./request */ \"./dist/http/request/request.js\");\nObject.defineProperty(exports, \"Request\", ({ enumerable: true, get: function () { return __importDefault(request_1).default; } }));\nvar interface_1 = __webpack_require__(/*! ./interface */ \"./dist/http/request/interface.js\");\nObject.defineProperty(exports, \"RequestMethod\", ({ enumerable: true, get: function () { return interface_1.RequestMethod; } }));\n\n\n//# sourceURL=webpack://test_engine/./dist/http/request/index.js?");

/***/ }),

/***/ "./dist/http/request/interface.js":
/*!****************************************!*\
  !*** ./dist/http/request/interface.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RequestMethod = void 0;\nvar RequestMethod;\n(function (RequestMethod) {\n    RequestMethod[\"GET\"] = \"get\";\n    RequestMethod[\"POST\"] = \"post\";\n    RequestMethod[\"PATCH\"] = \"patch\";\n    RequestMethod[\"PUT\"] = \"put\";\n    RequestMethod[\"DELETE\"] = \"delete\";\n})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));\n\n\n//# sourceURL=webpack://test_engine/./dist/http/request/interface.js?");

/***/ }),

/***/ "./dist/http/request/request.js":
/*!**************************************!*\
  !*** ./dist/http/request/request.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Request_instances, _Request_engine, _Request_cache, _Request_method, _Request_body, _Request_headers, _Request_prepareBody;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst request_engins_1 = __webpack_require__(/*! ../request-engins */ \"./dist/http/request-engins/index.js\");\nconst _cache_1 = __webpack_require__(/*! @cache */ \"./dist/cache/index.js\");\nconst interface_1 = __webpack_require__(/*! ./interface */ \"./dist/http/request/interface.js\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./dist/http/request/helpers.js\");\nclass Request {\n    constructor(url, opts = {}) {\n        _Request_instances.add(this);\n        _Request_engine.set(this, void 0);\n        _Request_cache.set(this, void 0);\n        _Request_method.set(this, void 0);\n        _Request_body.set(this, void 0);\n        _Request_headers.set(this, void 0);\n        this.url = url;\n        __classPrivateFieldSet(this, _Request_engine, opts.engine !== undefined ? opts.engine : new request_engins_1.Fetch(), \"f\");\n        __classPrivateFieldSet(this, _Request_cache, opts.cache !== undefined ? opts.cache : new _cache_1.NeverCache(), \"f\");\n        __classPrivateFieldSet(this, _Request_method, opts.method !== undefined ? opts.method : interface_1.RequestMethod.GET, \"f\");\n        __classPrivateFieldSet(this, _Request_body, opts.body !== undefined ? opts.body : {}, \"f\");\n        __classPrivateFieldSet(this, _Request_headers, opts.headers !== undefined ? opts.headers : new Headers(), \"f\");\n    }\n    parameters() {\n        return {\n            method: __classPrivateFieldGet(this, _Request_method, \"f\"),\n            body: __classPrivateFieldGet(this, _Request_instances, \"m\", _Request_prepareBody).call(this),\n            headers: __classPrivateFieldGet(this, _Request_headers, \"f\")\n        };\n    }\n    using(engine) {\n        __classPrivateFieldSet(this, _Request_engine, engine, \"f\");\n        return this;\n    }\n    cache(engine) {\n        __classPrivateFieldSet(this, _Request_cache, engine, \"f\");\n        return this;\n    }\n    method(method) {\n        __classPrivateFieldSet(this, _Request_method, method, \"f\");\n        return this;\n    }\n    body(body) {\n        __classPrivateFieldSet(this, _Request_body, body, \"f\");\n        return this;\n    }\n    header(key, value) {\n        __classPrivateFieldGet(this, _Request_headers, \"f\").set(key, value);\n        return this;\n    }\n    headers(headers) {\n        __classPrivateFieldSet(this, _Request_headers, headers, \"f\");\n        return this;\n    }\n    json() {\n        __classPrivateFieldGet(this, _Request_headers, \"f\").set('Content-Type', 'application/json');\n        return this;\n    }\n    formData() {\n        __classPrivateFieldGet(this, _Request_headers, \"f\").set('Content-Type', 'multipart/form-data');\n        return this;\n    }\n    create() {\n        if (__classPrivateFieldGet(this, _Request_method, \"f\").toLowerCase() === 'get') {\n            const cacheValue = __classPrivateFieldGet(this, _Request_cache, \"f\").get(this.url);\n            if (cacheValue !== undefined) {\n                return Promise.resolve(cacheValue);\n            }\n        }\n        return __classPrivateFieldGet(this, _Request_engine, \"f\").execute(this).then((response) => {\n            if (__classPrivateFieldGet(this, _Request_method, \"f\").toLowerCase() === 'get') {\n                __classPrivateFieldGet(this, _Request_cache, \"f\").set(this.url, response);\n            }\n            return response;\n        });\n    }\n}\nexports[\"default\"] = Request;\n_Request_engine = new WeakMap(), _Request_cache = new WeakMap(), _Request_method = new WeakMap(), _Request_body = new WeakMap(), _Request_headers = new WeakMap(), _Request_instances = new WeakSet(), _Request_prepareBody = function _Request_prepareBody() {\n    if (__classPrivateFieldGet(this, _Request_headers, \"f\")['Content-Type'] === 'application/json') {\n        return JSON.stringify(__classPrivateFieldGet(this, _Request_body, \"f\"));\n    }\n    else if (__classPrivateFieldGet(this, _Request_headers, \"f\")['Content-Type'] === 'multipart/form-data') {\n        return (0, helpers_1.objectToFormData)(__classPrivateFieldGet(this, _Request_body, \"f\"));\n    }\n    else if (__classPrivateFieldGet(this, _Request_body, \"f\") instanceof File) {\n        return __classPrivateFieldGet(this, _Request_body, \"f\");\n    }\n    return null;\n};\n\n\n//# sourceURL=webpack://test_engine/./dist/http/request/request.js?");

/***/ }),

/***/ "./example/example-http-request.js":
/*!*****************************************!*\
  !*** ./example/example-http-request.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/http */ \"./dist/http/index.js\");\n/* harmony import */ var _dist_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/cache */ \"./dist/cache/index.js\");\n\n\n\nconst cache = new _dist_cache__WEBPACK_IMPORTED_MODULE_1__.LFUCache()\n\nconst request = new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest('https://hneckfjeyp.api.quickmocker.com/user/test')\n    .using(new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpFetchEngine())\n    .cache(cache)\n    .create()\n    .then((data) => console.log('data: ', data))\n    .catch(err => console.log('err: ', err))\n\nconst request2 = new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest('https://hneckfjeyp.api.quickmocker.com/user')\n    .using(new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpFetchEngine())\n    .cache(cache)\n    .method('POST')\n    .formData()\n    .body({ data: \"test\" })\n    .create()\n    .then((data) => console.log('data: ', data))\n    .catch(err => console.log('err: ', err))\n\n\nsetTimeout(() => {\n    const request3 = new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest('https://hneckfjeyp.api.quickmocker.com/user/test')\n        .using(new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpXHREngine())\n        .cache(cache)\n        .create()\n        .then((data) => data.json())\n        .then((data) => console.log('data: ', data))\n        .catch(err => console.log('err: ', err))\n}, 1000);\n\nconst request4 = new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest('https://hneckfjeyp.api.quickmocker.com/user')\n    .using(new _dist_http__WEBPACK_IMPORTED_MODULE_0__.HttpXHREngine())\n    .cache(cache)\n    .method('POST')\n    .formData()\n    .body({ data: \"test\" })\n    .create()\n    .then((data) => data.json())\n    .then((data) => console.log('data: ', data))\n    .catch(err => console.log('err: ', err))\n\n\n//# sourceURL=webpack://test_engine/./example/example-http-request.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./example/example-http-request.js");
/******/ 	
/******/ })()
;