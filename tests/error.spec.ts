import mongoose from "mongoose";
import { connectMongo } from "../src/domain/db/conn";
import TestModel from "../src/models/test";

describe("Error", () => {
  beforeAll(async () => {
    await connectMongo();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    await TestModel.deleteMany({});
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
  });

  describe("test()", () => {
    test("test", async () => {
      const mockedDate = new Date(new Date().getFullYear(), 10, 2);

      jest.useFakeTimers({ doNotFake: ["nextTick"] }).setSystemTime(mockedDate);

      const test = await new TestModel({
        test: "test",
      });
      const res = await test.save();

      expect(res.test).toBeTruthy();
    });
  });
});
