// @flow
import commonTest from "./common";

async function expectedTest1(): Promise<mixed> {
    const { data } = await commonTest();
    return data;
}

export async function expectedTest2(): Promise<{ a: number }> {
    return await expectedTest1();
}
