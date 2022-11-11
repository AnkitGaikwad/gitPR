var async = require('async');

var func1 = (callback) => {
    callback(null, "First function output");
};
var func2 = (callback) => {
    callback(null, "Second function output");
};
var func3 = (callback) => {
    callback(null, "Third function output");
};

var stack = [
    func1, func2, func3
];

// Async Parallel
async.parallel(stack, function(err, result) {
    console.log(result);
});

// Async Waterfall
async.waterfall(
    [
        function (callback) {
            callback(null, "Task 1", "Task 2");
        },
        function (args1, args2, callback) {
            let args3 = args1 + " " + args2;
            callback(null, args3);
        },
        function (args1, callback) {
            let args2 = args1 + " Completed." ;
            callback(null, args2);
        }
    ]
    , function(err, result) {
        console.log(result);
    }
);

// Async Series 
async.series(
    [
        function (callback) {
            callback(null, "Task 1");
        },
        function (callback) {
            callback(null, "Task 2");
        },
        function (callback) {
            callback(null, "Task 3");
        }
    ]
    , function(err, result) {
        console.log(result);
    }
);

// Async Queue 
var q = async.queue(function(task, callback) {
    console.log('Hello ' + task.name);
    callback();
}, 2);

q.drain = function() {
    console.log('All items have been processed');
};
q.push({name: 'foo'}, function(err) {
    console.log('Finished processing foo');
});
q.push({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
});

