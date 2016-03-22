declare interface IMatcher {
    apiName: string;
    api(...args: any[]): any;
    evalueator(expectedValue: any, matcherValue?: any): boolean;
    negator?: boolean;
    minArgs: number;
    maxArgs: number;
}
