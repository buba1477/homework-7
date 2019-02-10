function throughOnce(fn) {
  var i = 0;
  return function(text) {
    i == 0 && fn(text);
    i = i == 0 ? 1 : 0;
  }
}

var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World!"); // "Hello World!"

logThroughOnce("Hello World!"); //

logThroughOnce("Hello World!"); // "Hello World!"

logThroughOnce("Hello World!"); //
