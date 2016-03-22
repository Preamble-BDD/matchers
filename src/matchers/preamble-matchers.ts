/**
 * Preamble's Out Of The Box Matchers
 */

(function() {
    // array allows for multiple RegisterMatchers callbacks
    let registerMatchers: RegisterMatchers[] = [];

    // preamble will call this
    let register: RegisterMatchers = (registerMatcher, comparators) => {

        // toBeTrue/not.toBeTrue matchers
        registerMatcher({
            apiName: "toBeTrue",
            api: (): void => { },
            evalueator: (expectedValue): boolean => expectedValue === true,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBeTruthy/not.toBeTruthy matchers
        registerMatcher({
            apiName: "toBeTruthy",
            api: (): void => { },
            evalueator: (expectedValue): boolean => !!expectedValue,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBe/not.toBe matchers
        registerMatcher({
            apiName: "toBe",
            api: (matcherValue: any): any => matcherValue,
            evalueator: (expectedValue, matcherValue): boolean => expectedValue === matcherValue,
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });

        // toEqual/not.toEqual matchers
        registerMatcher({
            apiName: "toEqual",
            api: (matcherValue: any): any => matcherValue,
            evalueator: (expectedValue, matcherValue): boolean => comparators.deepRecursiveCompare(expectedValue, matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });

        // toBeDefined/not.toBeDefined matchers
        registerMatcher({
            apiName: "toBeDefined",
            api: (): void => { },
            evalueator: (expectedValue): boolean => expectedValue !== undefined,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBeUndefined/not.toBeUndefined matchers
        registerMatcher({
            apiName: "toBeUndefined",
            api: (): void => { },
            evalueator: (expectedValue): boolean => expectedValue === undefined,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBeNull/not.toBeNull matchers
        registerMatcher({
            apiName: "toBeNull",
            api: (): void => { },
            evalueator: (expectedValue): boolean => expectedValue === null,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toMatch/not.toMatch matchers
        registerMatcher({
            apiName: "toMatch",
            api: (matcherValue: RegExp): RegExp => matcherValue,
            evalueator: (expectedValue: string, matcherValue: RegExp): boolean => matcherValue.exec(expectedValue) !== null,
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });

        // toHaveBeenCalled/not.toHaveBeenCalled matchers
        registerMatcher({
            apiName: "toHaveBeenCalled",
            api: (): void => { },
            evalueator: (expectedValue: Snoopster): boolean => expectedValue.calls.count() > 0,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });
        // toHaveBeenCalledWith/not.toHaveBeenCalledWith matchers
        registerMatcher({
            apiName: "toHaveBeenCalledWith",
            api: (...matcherValue): any[] => matcherValue,
            evalueator: (expectedValue: Snoopster, ...matcherValue): boolean => expectedValue.calls.wasCalledWith(matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: -1
        });
    };

    window["preamble"] = window["preamble"] || {};
    window["preamble"]["registerMatchers"] = window["preamble"]["registerMatchers"] || registerMatchers;

    // push register callback onto the array of RegisterMatchers
    registerMatchers.push(register);
} ());
