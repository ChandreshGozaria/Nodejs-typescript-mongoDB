import mongoose from 'mongoose';

interface ITodo {
    title: string;
    description: string;
}

interface todoModelInterface extends mongoose.Model<any>{
    build(attr: ITodo): any
}
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

todoSchema.statics.build = (attr: ITodo) => {
    return new Todo(attr);
}

const Todo = mongoose.model('Todo', todoSchema);

const build = (attr: ITodo) => {
    return new Todo(attr);
}

export { Todo };