//@flow
export default function currentTest(): Promise<mixed> {
    return new Promise(resolve => {
        resolve({ a: 1 });
    });
}
