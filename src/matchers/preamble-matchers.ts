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
            evaluator: (expectedValue): boolean => expectedValue === true,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBeTruthy/not.toBeTruthy matchers
        registerMatcher({
            apiName: "toBeTruthy",
            api: (): void => { },
            evaluator: (expectedValue): boolean => !!expectedValue,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBe/not.toBe matchers
        registerMatcher({
            apiName: "toBe",
            api: (matcherValue: any): any => matcherValue,
            evaluator: (expectedValue, matcherValue): boolean =>
                expectedValue === matcherValue,
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });

        // toEqual/not.toEqual matchers
        registerMatcher({
            apiName: "toEqual",
            api: (matcherValue: any): any => matcherValue,
            evaluator: (expectedValue, matcherValue): boolean =>
                comparators.deepRecursiveCompare(expectedValue, matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });

        // toBeDefined/not.toBeDefined matchers
        registerMatcher({
            apiName: "toBeDefined",
            api: (): void => { },
            evaluator: (expectedValue): boolean => expectedValue !== undefined,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBeUndefined/not.toBeUndefined matchers
        registerMatcher({
            apiName: "toBeUndefined",
            api: (): void => { },
            evaluator: (expectedValue): boolean => expectedValue === undefined,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toBeNull/not.toBeNull matchers
        registerMatcher({
            apiName: "toBeNull",
            api: (): void => { },
            evaluator: (expectedValue): boolean => expectedValue === null,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });

        // toMatch/not.toMatch matchers
        registerMatcher({
            apiName: "toMatch",
            api: (matcherValue: RegExp): RegExp => matcherValue,
            evaluator: (expectedValue: string, matcherValue: RegExp): boolean =>
                matcherValue.exec(expectedValue) !== null,
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });

        // toHaveBeenCalled/not.toHaveBeenCalled matchers
        registerMatcher({
            apiName: "toHaveBeenCalled",
            api: (): void => { },
            evaluator: (expectedValue: Spy): boolean =>
                expectedValue.calls.count() > 0,
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });
        // toHaveBeenCalledWith/not.toHaveBeenCalledWith matchers
        registerMatcher({
            apiName: "toHaveBeenCalledWith",
            api: (...matcherValue): any[] => matcherValue,
            evaluator: (expectedValue: Spy, matcherValue): boolean =>
                expectedValue.calls.wasCalledWith.apply(null, matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: -1
        });
        // toHaveBeenCalledWithContext/not.toHaveBeenCalledWithContext matchers
        registerMatcher({
            apiName: "toHaveBeenCalledWithContext",
            api: (matcherValue): {} => matcherValue,
            evaluator: (expectedValue: Spy, matcherValue): boolean =>
                expectedValue.calls.wasCalledWithContext(matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });
        // toHaveReturnedValue/not.toHaveReturnedValue matchers
        registerMatcher({
            apiName: "toHaveReturnedValue",
            api: (matcherValue): any => matcherValue,
            evaluator: (expectedValue: Spy, matcherValue): boolean =>
                expectedValue.calls.returned(matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });
        // toHaveThrown/not.toHaveThrown matchers
        registerMatcher({
            apiName: "toHaveThrown",
            api: (): void => { },
            evaluator: (expectedValue: Spy): boolean =>
                expectedValue.calls.threw(),
            negator: true,
            minArgs: 0,
            maxArgs: 0
        });
        // toHaveThrownWithMessage/not.toHaveThrownWithMessage matchers
        registerMatcher({
            apiName: "toHaveThrownWithMessage",
            api: (matcherValue): string => matcherValue,
            evaluator: (expectedValue: Spy, matcherValue: string): boolean =>
                expectedValue.calls.threwWithMessage(matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });
        // toHaveThrownWithName/not.toHaveThrownWithName matchers
        registerMatcher({
            apiName: "toHaveThrownWithName",
            api: (matcherValue): string => matcherValue,
            evaluator: (expectedValue: Spy, matcherValue: string): boolean =>
                expectedValue.calls.threwWithName(matcherValue),
            negator: true,
            minArgs: 1,
            maxArgs: 1
        });
    };

    interface PreambleGlobal {
        preamble: {
            registerMatchers: RegisterMatchers[];
        };
    }

    let preambleGlobal: Window | NodeJS.Global | PreambleGlobal;

    if (typeof (window) !== "undefined") {
        preambleGlobal = window;
    } else if (typeof (global) !== "undefined") {
        preambleGlobal = global;
    } else {
        throw new Error("Unsuported Environment");
    }

    let pGlobal: PreambleGlobal = <PreambleGlobal>preambleGlobal;
    pGlobal.preamble = pGlobal.preamble || { registerMatchers: registerMatchers };

    // push register callback onto the array of RegisterMatchers
    registerMatchers.push(register);
} ());
