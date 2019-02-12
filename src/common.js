// @flow
export default function currentTest(): Promise<{
    data: mixed
}> {
    return new Promise(resolve => resolve({ data: { a: 1 } }));
}
