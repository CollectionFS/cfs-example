Template.files.created = function () {
  this.filename = new ReactiveVar('');
};

// Can't call getHandler until startup so that Collections object is available
Meteor.startup(function () {

  Template.files.events({
    'change input.any': FS.EventHandlers.insertFiles(Collections.Files, {
      metadata: function (fileObj) {
        return {
          owner: Meteor.userId(),
          foo: "bar",
          dropped: false
        };
      },
      after: function (error, fileObj) {
        if (!error) {
          console.log("Inserted", fileObj.name());
        }
      }
    }),
    'keyup .filename': function () {
      var ins = Template.instance();
      if (ins) {
        ins.filename.set($('.filename').val());
      }
    }
  });

});

Template.files.helpers({
  uploadedFiles: function() {
    return Collections.Files.find();
  },
  curl: function () {
    var ins = Template.instance(), filename = '';
    if (ins) {
      filename = ins.filename.get();
    }

    if (filename.length === 0) {
      filename = 'example.txt';
    }

    var authObject = {
      authToken: Accounts._storedLoginToken() || '',
    };

    // Set the authToken
    var authString = JSON.stringify(authObject);
    var authToken = FS.Utility.btoa(authString);

    return 'curl "' + Meteor.absoluteUrl('cfs/files/' + Collections.Files.name) + '?filename=' + filename + '&token=' + authToken + '" -H "Content-Type: text/plain" -T "' + filename + '"';
  }
});
