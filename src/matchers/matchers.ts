/**
 * Preamble's Out Of The Box Matchers
 */

import {deepRecursiveCompare} from "./comparators/deeprecursiveequal";

let matchers: IMatcher[] = [];

window["preamble"] = window["preamble"] || {};
window["preamble"]["matchers"] = window["preamble"]["matchers"] || matchers;

// toBeTrue/not.toBeTrue matchers
matchers.push({
    apiName: "toBeTrue",
    api: (): void => { },
    evalueator: (expectedValue): boolean => expectedValue === true,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});

// toBeTruthy/not.toBeTruthy matchers
matchers.push({
    apiName: "toBeTruthy",
    api: (): void => { },
    evalueator: (expectedValue): boolean => !!expectedValue,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});

// toBe/not.toBe matchers
matchers.push({
    apiName: "toBe",
    api: (matcherValue: any): any => matcherValue,
    evalueator: (expectedValue, matcherValue): boolean => expectedValue === matcherValue,
    negator: true,
    minArgs: 1,
    maxArgs: 1
});

// toEqual/not.toEqual matchers
matchers.push({
    apiName: "toEqual",
    api: (matcherValue: any): any => matcherValue,
    evalueator: (expectedValue, matcherValue): boolean => deepRecursiveCompare(expectedValue, matcherValue),
    negator: true,
    minArgs: 1,
    maxArgs: 1
});

// toBeDefined/not.toBeDefined matchers
matchers.push({
    apiName: "toBeDefined",
    api: (): void => { },
    evalueator: (expectedValue): boolean => expectedValue !== undefined,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});

// toBeUndefined/not.toBeUndefined matchers
matchers.push({
    apiName: "toBeUndefined",
    api: (): void => { },
    evalueator: (expectedValue): boolean => expectedValue === undefined,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});

// toBeNull/not.toBeNull matchers
matchers.push({
    apiName: "toBeNull",
    api: (): void => { },
    evalueator: (expectedValue): boolean => expectedValue === null,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});

// toMatch/not.toMatch matchers
matchers.push({
    apiName: "toMatch",
    api: (matcherValue: RegExp): RegExp => matcherValue ,
    evalueator: (expectedValue: string, matcherValue: RegExp): boolean => matcherValue.exec(expectedValue) !== null,
    negator: true,
    minArgs: 1,
    maxArgs: 1
});
