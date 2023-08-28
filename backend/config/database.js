import mongoose from 'mongoose'

// mongoose.connect('mongodb://localhost:27017/rkbm', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB Connected")
// });

mongoose.connect(`mongodb+srv://Harrish:harrishrajesh007@cluster0.hfiz24k.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected")
});
