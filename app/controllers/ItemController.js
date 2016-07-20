app.controller('ItemController', function(saveFormdata, getBday, deleteData, $filter, $scope, $http, $location, $routeParams, uiGridConstants, EditData) {

    loadAPIData();
    /***   Get Todays B'day and anniversary  ***/
    function loadAPIData() {
        var Bdays = getBday.get({});
        Bdays.$promise.then(function(data) {
            console.log(data)
            $scope.bdays = data.bdays;
            $scope.anniversary = data.anniver;
        });
    }
    $scope.dateToday = new Date();
    $scope.saveFormData = function(formData) {
        console.log(formData)
        var SaveFromData = saveFormdata.post(formData);
        SaveFromData.$promise.then(function(result) {
            $scope.devices = result;
            $scope.successMsg = "Saved";
            Materialize.toast('<span>Successfully Saved.</span>', 1500);
            $scope.statusMsg = 2;
            $scope.templatebtntxt = 'Saved Successfully';
        })
    }

    $scope.edit = function(id) {
        saveFormdata.edit('items/' + id + '/edit').then(function(data) {
            $scope.form = data;
        });
    }

    $scope.saveEdit = function() {
        saveFormdata.httpRequest('items/' + $scope.form.id, 'PUT', {}, $scope.form).then(function(data) {
            $(".modal").modal("hide");
            $scope.data = apiModifyTable($scope.data, data.id, data);
        });
    }

    $scope.remove = function(item, index) {
        var result = confirm("Are you sure delete this item?");
        if (result) {
            saveFormdata.remove('items/' + item.id, 'DELETE').then(function(data) {
                $scope.data.splice(index, 1);
            });
        }
    }


    //Grid of table
    var paginationOptions = {
        sort: null
    };
    $scope.edit = function(row) {
        $location.path('/clients/cliedit/' + row.entity.id);
    };
    if ($routeParams.cliedit == "cliedit" && $routeParams.id != "") {
        var data = {};
        data.clientId = $routeParams.id;
        var EditDatas = EditData.post(data);
        EditDatas.$promise.then(function(result) {
            $scope.formData = result;
            $scope.formData.dob = new Date($scope.formData.dob); // convert filed to date
            $scope.formData.marriage_ani = new Date($scope.formData.marriage_ani); // convert filed to date
        })
    }

    $scope.view = function(row) {
        $location.path('/profile/pro/' + row.entity.id);
    };
    if ($routeParams.pro == "pro" && $routeParams.id != "") {
        var data = {};
        data.clientId = $routeParams.id;
        var EditDatas = EditData.post(data);
        EditDatas.$promise.then(function(result) {
            $scope.formData = result;
        });
    }

    $scope.delete = function(row) {
        var data = {};
        data.clientId = row.entity.id;
        var deleteDatas = deleteData.post(data);
        deleteDatas.$promise.then(function(result) {
            Materialize.toast('<span>Successfully Saved.</span>', 1500);
        });
    };
    $scope.gridOptions = {
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        useExternalPagination: true,
        useExternalSorting: false,
        enableGridMenu: true,
        enableFiltering: true,
        flatEntityAccess: true,
        fastWatch: true,
        columnDefs: [
            {name: 'firstname'},
            {name: 'lastname'},
            {name: 'gender'},
            {name: 'dob'},
            {name: 'pan_card'},
            {name: 'pers_mobile'},
            {name: 'occupation'},
            {name: 'Edit',
                cellTemplate: '<button class="btn primary" ng-click="grid.appScope.edit(row)">Edit</button>'},
            {name: 'View',
                cellTemplate: '<button class="btn primary" ng-click="grid.appScope.view(row)">View</button>'},
            {name: 'Delete',
                cellTemplate: '<button class="btn primary" ng-click="grid.appScope.delete(row)">Delete</button>'},
        ],
        exporterSuppressColumns: ['Edit', 'View', 'Delete'],
        exporterAllDataFn: function() {
            return getPage(1, $scope.gridOptions.totalItems, paginationOptions.sort)
                    .then(function() {
                        $scope.gridOptions.useExternalPagination = false;
                        $scope.gridOptions.useExternalSorting = false;
                        getPage = null;
                    });
        },
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
                if (getPage) {
                    if (sortColumns.length > 0) {
                        paginationOptions.sort = sortColumns[0].sort.direction;
                    } else {
                        paginationOptions.sort = null;
                    }
                    getPage(grid.options.paginationCurrentPage, grid.options.paginationPageSize, paginationOptions.sort)
                }
            });
            gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
                if (getPage) {
                    getPage(newPage, pageSize, paginationOptions.sort);
                }
            });
        }
    };

    var getPage = function(curPage, pageSize, sort) {
        var url;
        switch (sort) {
            case uiGridConstants.ASC:
                url = 'clientsData';
                break;
            case uiGridConstants.DESC:
                url = 'clientsData';
                break;
            default:
                url = 'clientsData';
                break;
        }

        var _scope = $scope;
        return $http.get(url)
                .success(function(data) {
                    $scope.totalClient = data.length;
                    var firstRow = (curPage - 1) * pageSize;
                    $scope.gridOptions.totalItems = data.length;
                    $scope.gridOptions.data = data.slice(firstRow, firstRow + pageSize)
                });
    };
    getPage(1, $scope.gridOptions.paginationPageSize);
});

app.filter('myDate', function($filter) {
    alert('l')
    var angularDateFilter = $filter('date');
    return function(theDate) {
        return angularDateFilter(theDate, 'Y-m-d');
    }
});