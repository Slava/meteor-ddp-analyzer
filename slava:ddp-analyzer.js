DDPAnalyzer = {
  registerConnection: function (name, conn) {
    ["message", "reset", "disconnect"].forEach(function (type) {
      conn._stream.on(type, function (m) {
        DDPAnalyzer.DevTools.send({
          type: type,
          name: name,
          body: m
        });
      });
    });
  }
};

DDPAnalyzer.DevTools = {
  _buffer: [],
  send: function (o) {
    this._buffer.push(o);
  },
  getBuffered: function () {
    var ret = this._buffer;
    this._buffer = [];
    return ret;
  }
};

if (Meteor.isClient) {
  DDPAnalyzer.registerConnection("default", Meteor.default_connection);
}


