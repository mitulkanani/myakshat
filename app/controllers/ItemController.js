app.controller('AdminController', function($scope,$http){
 
  $scope.pools = [];
   
});

app.controller('ItemController', function(saveFormdata,$scope,$http){

  $scope.saveFormData = function(formData){
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

  $scope.edit = function(id){
    saveFormdata.edit('items/'+id+'/edit').then(function(data) {
    	console.log(data);
      	$scope.form = data;
    });
  }

  $scope.saveEdit = function(){
    saveFormdata.httpRequest('items/'+$scope.form.id,'PUT',{},$scope.form).then(function(data) {
      	$(".modal").modal("hide");
        $scope.data = apiModifyTable($scope.data,data.id,data);
    });
  }

  $scope.remove = function(item,index){
    var result = confirm("Are you sure delete this item?");
   	if (result) {
      saveFormdata.remove('items/'+item.id,'DELETE').then(function(data) {
          $scope.data.splice(index,1);
      });
    }
  }
   
});