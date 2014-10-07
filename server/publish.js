Meteor.publish("images", function() {
  return Collections.Images.find();
});

Meteor.publish("files", function() {
  return Collections.Files.find();
});

Meteor.publish("docs", function() {
  return Collections.Docs.find();
});

Meteor.publish("docs2", function() {
  return Collections.Docs2.find();
});