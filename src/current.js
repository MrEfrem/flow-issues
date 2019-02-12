// @flow
import commonTest from "./common";

async function currentTest1() {
    const { data } = await commonTest();
    return data;
}

export async function currentTest2(): Promise<{ a: number }> {
    return await currentTest1();
}
