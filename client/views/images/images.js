function getHandler(dropped) {
  return FS.EventHandlers.insertFiles(Collections.Images, {
    metadata: function (fileObj) {
      return {
        owner: Meteor.userId(),
        foo: "bar",
        dropped: dropped
      };
    },
    after: function (error, fileObj) {
      if (!error) {
        console.log("Inserted", fileObj.name());
      }
    }
  });
}

// Can't call getHandler until startup so that Collections object is available
Meteor.startup(function () {

  Template.images.events({
    'dropped .imageArea': getHandler(true),
    'dropped .imageDropArea': getHandler(true),
    'change input.images': getHandler(false)
  });

});

Template.images.uploadedImages = function() {
  return Collections.Images.find();
};