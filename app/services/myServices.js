
app.factory('saveFormdata', function ($resource) {
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