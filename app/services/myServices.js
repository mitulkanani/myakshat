
app.factory('saveFormdata', function($resource) {
    return $resource(
            "savedata",
            {},
            {
                "post": {
                    method: 'POST',
                    params: {},
                    isArray: false,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                },
                "edit": {
                    method: 'GET',
                    params: {},
                    isArray: false,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
            }
    );
});
app.factory('getBday', function($resource) {
    return $resource(
            "getBday",
            {},
            {
                "get": {
                    method: 'GET',
                    params: {},
                    isArray: false,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
            }
    );
});
app.factory('EditData', function($resource) {
    return $resource(
            "EditData",
            {},
            {
                "post": {
                    method: 'POST',
                    params: {},
                    isArray: false,
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
            }
    );
});