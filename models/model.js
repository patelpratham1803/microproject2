import mongoose from 'mongoose';
const schema = new mongoose.Schema({
   field1: { type: String, required: true },
   field2: { type: Number, required: true },
   field3: { type: Date, default: Date.now },
   field4: { type: String, enum: ['option1', 'option2'], required: true },
   field5: { type: Boolean, default: false }
});
export default mongoose.model('model', schema);