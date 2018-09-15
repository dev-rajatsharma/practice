import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema(
    {
        name: { type: String, required: true, max: 100 },
        date_of_birth: { type: Date, required: true },
        salary: { type: Number, min:0, required: true },
        skills: {type: String, required: true, enum: ['skill1', 'skill2', 'skill3', 'skill4','skill5','skill6','skill7','skill8','skill9','skill10'], default: 'skill1'},
    }
);

export default mongoose.model('Employee', EmployeeSchema);

