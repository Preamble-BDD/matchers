declare interface StaticSnoopster {
    (...args): any;
}

declare interface It {
    toBeCalled: () => Snoopster;
    toBeCalledWith: () => Snoopster;
    toBeCalledWithContext: (context: {}) => Snoopster;
    toReturn: (value: any) => Snoopster;
    toThrow: () => Snoopster;
    toThrowWithName: (name: string) => Snoopster;
    toThrowWithMessage: (message: string) => Snoopster;
}

declare interface Expect {
    it: It;
}

declare interface And {
    reset: () => Snoopster;
    callWithContext: (context: {}) => Snoopster;
    throw: () => Snoopster;
    throwWithMessage: (message: string) => Snoopster;
    throwWithName: (name: string) => Snoopster;
    return: (ret: any) => Snoopster;
    callFake: (fn: (...args) => any) => Snoopster;
    callActual: () => Snoopster;
    callStub: () => Snoopster;
    expect: Expect;
}

declare interface Expectations {
    toBeCalled: boolean;
    toBeCalledWith: any[];
    toBeCalledWithContext: {};
    toReturn: any;
    toThrow: boolean;
    toThrowWithName: string;
    toThrowWithMessage: string;
}

declare interface Calls {
    count: () => number;
    forCall: (i: number) => ACall;
    all: () => ACall[];
    wasCalledWith: (args: any[]) => boolean;
    wasCalledWithContext: (obj: {}) => boolean;
    returned: (value: any) => boolean;
    threw: () => boolean;
    threwWithName: (name: string) => boolean;
    threwWithMessage: (message: string) => boolean;
}

declare interface Snoopster extends StaticSnoopster {
    _snoopsterMaker: string;
    _returns: any;
    _callActual: boolean;
    _callFake: (...args) => any;
    _callWithContext: {};
    _throws: boolean;
    _throwsMessage: string;
    _throwsName: string;
    _hasExpectations: boolean;
    and: And;
    calls: Calls;
    _expectations: Expectations;
    _resetCalls: () => void;
}

declare interface XStatic {
    (argObject: {}, argPropertyNames: string[]): void;
}

declare interface SpyOnStatic {
    (...args): Snoopster;
}

declare interface SpyOn extends SpyOnStatic {
    x: XStatic;
}

// args API
declare class Args {
    args: any[];
    constructor(...args);
    getLength: () => number;
    hasArg: (i: number) => boolean;
    getArg: (i: number) => any;
    hasArgProperty: (i: number, propertyName: string) => boolean;
    getArgProperty: (i: number, propertyName: string) => string;
}

declare class ACall {
    constructor(context: {}, args: Args, error: Error, returned: any);
    getContext: () => {};
    getArgs: () => Args;
    getArg: (i: number) => any;
    getArgsLength: () => number;
    getArgProperty: (i: number, propertyName: string) => any;
    hasArgProperty: (i: number, propertyName: string) => boolean;
    hasArg: (i: number) => boolean;
    getError: () => Error;
    getReturned: () => any;
}
