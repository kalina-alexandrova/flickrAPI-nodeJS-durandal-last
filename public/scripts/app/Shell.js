// This define call is requirejs boilerplate used to define the module and isolate the scope:
define(['plugins/router', 'durandal/app'], function(router, app, exports, module) {
    var self = this,
        ko = require('knockout'),
        searchTerm = ko.observable();
    return {
        router: router,
        searchTerm: searchTerm,
        router: router,
        app: app,
        search: function() {
            var searchKey = searchTerm();
            alert('You are looking for ' + '"' + searchKey + '"' + '!');
            $('div', $('#imagesList')).each(function() {
                var resultObject = $(this).find(".searching"),
                    resultText = $(this).find(".searching").text();
                resultObject.css("color", "#cccccc");
                resultObject.css("backgroundColor", "transparent");

                if (resultText.indexOf(searchKey) > -1) {
                    var resPosition = resultText.indexOf(searchKey);
                    resultObject.css("color", "#3EA818");
                    resultObject.css("backgroundColor", "#e0e0eb");
                }
            });

        },
        activate: function() {
            router.map([
                { route: '', title: 'Flickr', moduleId: 'home/FlickrView', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }

    };
    module.exports = Shell;
});
/*define(function(require, exports, module) {

    // These require(...) calls will load other requirejs modules asynchronously, this one is a Durandal plugin:
    var router = require('plugins/router');
    var app = require('durandal/app');
    var ko = require('knockout');

    function Model() {
        var self = this;
        
        var ko = require('knockout');
        self.searchValue = ko.observable();
        self.find = function() {
            alert("search value is " + self.searchValue());
            return false;
        };
        module.exports = Model;
    }

    // Constructor function for this module
    function Shell() {
        // This is (one) convention used to manage the scope of 'this', common in Knockout examples:
        var self = this;

        self.router = router;
        // Durandal, by convention, will call 'activate' function on any module when it's loaded, if it is defined.
        self.activate = function() {

            // This sets up the client-side hash routing - has nothing to do with server side paths:
            router.map([
                { route: '', title: 'Flickr', moduleId: 'home/FlickrView', nav: true }
            ]);

            return router.activate();
        }
    }

    // This returns the constructor function, will be called automatically by Durandal when composing view:
    module.exports = Shell;
});*/
