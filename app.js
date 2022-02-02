import express from 'express';
require("./src/models/db");
import userRoutes from './src/routes/user'
import blogRoutes from './src/routes/blog'
import feedbacks from './src/routes/feedbacks'
import cors from 'cors'


const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(cors());


//routes middleware
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
app.use("/feedbacks", feedbacks);



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

