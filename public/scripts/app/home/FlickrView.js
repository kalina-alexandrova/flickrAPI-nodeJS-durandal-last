define(['plugins/http', 'durandal/app', 'knockout'], function(http, app, ko) {
    function improveResponse(response) {
        response.forEach(function(item) {

            for (key in item) {
                if (key === "link") {
                    var value = item[key],
                        pos = value.indexOf('photos'),
                        newValue = value.substring(pos + 7, value.length - 13).replace(" ", "");
                    item["authorUrl"] = "https://www.flickr.com/people/" + newValue;
                }
                if (key === "description") {
                    var old = item[key],
                        newDescr = old.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");
                    item["newDescription"] = newDescr;
                }
            }
        });

        return response;
    }

    return {
        displayName: 'Flickr',
        images: ko.observableArray([]),
        activate: function() {
            //the router's activator calls this function and waits for it to complete before proceeding
            if (this.images().length > 0) {
                return;
            }
            var that = this;
            return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', { tags: 'mount ranier', tagmode: 'any', format: 'json' }, 'jsoncallback').then(function(response) {
                var clearResponse = improveResponse(response.items);
                that.images(clearResponse);
                //console.log("response", clearResponse);
            });
        }
    };
});
