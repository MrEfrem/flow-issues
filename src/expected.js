// @flow
import commonTest from "./common";

async function expectedTest1(): mixed {
    return await commonTest();
}

export async function expectedTest2(): Promise<{ a: number }> {
    return await expectedTest1();
}
