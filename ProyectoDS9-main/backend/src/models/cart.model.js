import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    items: [{ type: mongoose.Types.ObjectId, ref: "Item" }],
    total_price: { type: Number, require: true },
    status: {
      type: String,
      enum: ["pendiente", "completada", "cancelada"],
      default: "pendiente",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
