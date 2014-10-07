Template.upDown.events({
  'click .pauseUploads': function(event, template) {
    FS.HTTP.uploadQueue.pause();
  },
  'click .resumeUploads': function(event, template) {
    FS.HTTP.uploadQueue.resume();
  },
  'click .cancelUploads': function(event, template) {
    FS.HTTP.uploadQueue.cancel();
  }
});
