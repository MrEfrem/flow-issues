//@flow
import commonTest from "./common";

async function currentTest1() {
    return await commonTest();
}

export async function currentTest2(): Promise<{ a: number }> {
    return await currentTest1();
}
