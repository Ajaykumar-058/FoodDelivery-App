import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ajaykumarbaleboina:ajay2780@cluster0.tvmv4n7.mongodb.net/food-del', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1); // Exit process if connection fails
    }
};
