// This needs to be run on client and server. On the client, it will create the
// temporary cache for client-side access.
Todos = new Meteor.Collection("todos");

if (Meteor.isClient) {
  // Allow the template to access a list of todos.
  // Say more here about how UI.body works.
  UI.body.todos = function() {
    return Todos.find(); // What is returned?
  };

  // The magic behind the add form.
  // Explain the naming convention.
  Template.addForm.events({
    "submit": function(event, template) {
      // Make it so that the browser doesn't trigger an HTTP post when the user
      // submits.
      event.preventDefault();

      // Find the text box in the template.
      var textBox = template.find("#addTodoBox")

      // Actually add the todo to the database.
      Todos.insert({
        name: textBox.value
      });

      // Empty the text box for the next todo.
      textBox.value = '';
    }
  });
}

// Modify a todo:
// Todos.update(theIdOfTheTodoYouWantToModify, {$set: {attribute: value}});

// Uncomment and finish this code when you are ready to make this app secure:
// -----------------------------------------------------------------------------
// if (Meteor.isServer) {
//   // You will also need to call Meteor.subscribe("todos") on the client.
//   Meteor.publish("todos", function() {
//     return Todos.find()
//   });
//
//   Todos.allow({
//     "insert": function(userId, todo) {

//       // Should userId (will be null unless you enable users) be able to
//       // insert todo into the database?

//     },
//     "update": function(userId, todo, changedFields) {
//       // Should userId be able to update changedFields on todo?
//       // Note: if you need to go into more detail, there is a fourth
//       // paramater that gives you the second argument to update (the
//       // modifier).
//     },
//   })
// }
// -----------------------------------------------------------------------------
// Also run:
// meteor remove insecure
// meteor remove autopublish
