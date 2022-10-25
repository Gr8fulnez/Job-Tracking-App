import mongoose, { connect } from 'mongoose'


const connectDB = (url) =>{
    return mongoose.connect(`mongodb+srv://John:Ayokunle@job-tracking-app.ktizlwa.mongodb.net/?retryWrites=true&w=majority`)
}

export default connectDB