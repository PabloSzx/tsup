"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/components/foo/deep/deep.ts
var Deep = {
  a: 1
};

// src/components/foo/other.ts
var Other = "Other";

// src/components/foo/index.ts

// src/components/index.ts
var a = Deep;

// src/index.ts
var Hello = "World";




exports.Hello = Hello; exports.Other = Other; exports.a = a;
