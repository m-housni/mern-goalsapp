const mongoose = require('mongoose') // Mongoose is a node module that allows us to work with MongoDB

/* 
  Here is the explanation for the code above:
  1. We defined the goalSchema variable and set it to the mongoose.Schema method.
  2. We passed in an object to the mongoose.Schema method that defined the fields we want to add to the model. 
  In this case, we have the user field and the text field. The user field is of type mongoose.Schema.Types.ObjectId. 
  This is because we want to associate a goal with a user. The ref key is for the model that we want to associate the user field with. 
  In this case, it is the User model.
  3. We passed in another object to the mongoose.Schema method that defines the timestamps option. 
  This will automatically add the createdAt and updatedAt fields to the model. 
*/
const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', 
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema) // Export the model
