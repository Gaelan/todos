// This needs to be run on client and server. On the client, it will create the
// temporary cache for client-side access.
Todos = new Meteor.Collection("todos");

if (Meteor.isClient) {
  // Allow the template to access a list of todos.
  UI.body.todos = function() {
    return Todos.find();
  };

  // The magic behind the add form.
  Template.addForm.events({
    "submit": function(event, template) {
      // Make it so that the browser doesn't trigger an HTTP post when the user
      // submits.
      event.preventDefault();

      // Actually add the todo to the database.
      return Todos.insert({
        name: template.find("#addTodoBox").value
      });
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