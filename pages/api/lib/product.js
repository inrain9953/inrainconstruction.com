import mongoose from 'mongoose'

const productionModel = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: Number,
    message: String
  },
  {
    timestamps: true
  }
)

export const Product =
  mongoose.models?.inrain9953 || mongoose.model('inrain9953', productionModel)
