import mongoose from "../domain/db/conn";
const { Schema } = mongoose;

const TestModel =
  mongoose.models.TestModel ||
  mongoose.model(
    "TestModel",
    new Schema(
      {
        test: {
          type: String,
          required: false,
        },
      },
      { timestamps: true }
    )
  );

export default TestModel;
