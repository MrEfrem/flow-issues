// @flow
import commonTest from "./common";

function currentTest1() {
    return commonTest();
}

export async function currentTest2(): Promise<{ a: number }> {
    return currentTest1();
}
