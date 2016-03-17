/**
 * Preamble's Out Of The Box Matchers
 */

import {IMatcher} from "./IMatcher";
import {deepRecursiveCompare} from "./comparators/deeprecursiveequal";

let matchers: IMatcher[] = [];

window["preamble"] = window["preamble"] || {};
window["preamble"]["matchers"] = window["preamble"]["matchers"] || matchers;

// toBeTrue/not.toBeTrue matchers
matchers.push({
    apiName: "toBeTrue",
    api: (matcherValue: any): void => { },
    evalueator: (expectedValue): boolean => expectedValue === true,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});

// toBeTruthy/not.toBeTruthy matchers
matchers.push({
    apiName: "toBeTruthy",
    api: (matcherValue: any): void => { },
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

// toBeUndefined/not.toBeUndefined matchers
matchers.push({
    apiName: "toBeUndefined",
    api: (matcherValue: any): void => { },
    evalueator: (expectedValue): boolean => expectedValue === undefined,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});

// toBeNull/not.toBeNull matchers
matchers.push({
    apiName: "toBeNull",
    api: (matcherValue: any): void => { },
    evalueator: (expectedValue): boolean => expectedValue === null,
    negator: true,
    minArgs: 0,
    maxArgs: 0
});
