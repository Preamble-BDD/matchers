declare interface StaticSpy {
    (...args): any;
}

declare interface It {
    toBeCalled: () => Spy;
    toBeCalledWith: () => Spy;
    toBeCalledWithContext: (context: {}) => Spy;
    toReturn: (value: any) => Spy;
    toThrow: () => Spy;
    toThrowWithName: (name: string) => Spy;
    toThrowWithMessage: (message: string) => Spy;
}

declare interface Expect {
    it: It;
}

declare interface And {
    reset: () => Spy;
    callWithContext: (context: {}) => Spy;
    throw: () => Spy;
    throwWithMessage: (message: string) => Spy;
    throwWithName: (name: string) => Spy;
    return: (ret: any) => Spy;
    callFake: (fn: (...args) => any) => Spy;
    callActual: () => Spy;
    callStub: () => Spy;
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
    wasCalledWith: (...args) => boolean;
    wasCalledWithContext: (obj: {}) => boolean;
    returned: (value: any) => boolean;
    threw: () => boolean;
    threwWithName: (name: string) => boolean;
    threwWithMessage: (message: string) => boolean;
}

declare interface Spy extends StaticSpy {
    _spyMaker: string;
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

declare interface SpyOnStatic {
    (...args): Spy;
}

declare interface SpyOn extends SpyOnStatic {
    x: (argObject: {}, argPropertyNames: string[]) => void;
}

// args API
declare class Args {
    args: any[];
    constructor(args);
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
