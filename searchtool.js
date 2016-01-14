
var searchtoolapp = angular.module('searchtoolapp',[]);

searchtoolapp.directive('searchtool', function(){

 return{
	 
	restrict: 'E',
    templateUrl: './templates/searchTemplate.html',
    controller: ['$scope', '$http', function($scope, $http){
		
		$scope.visibility = false;
		
		$scope.visibility2 = false;
		
		$scope.suggestionVisibility = false;
		
		$scope.resultSetVisibility = false;
		
		$scope.filter = 'All';
		
		$scope.filterValue = 'all';
		
		//$scope.cattleData = [{"term":"cattle"},{"term":"dairy cattle"},{"term":"cattle manure"},{"term":"cattle diseases"},{"term":"cattle inefficiencies"},{"term":"grazing cattle"},{"term":"livestock cattle"},{"term":"edible cattle"},{"term":"fancy cattle"}];
	    
		$scope.suggestions = [
		
		                    {'term':'dogs','termRank':1200,'fieldName':'Title','field':'title'},
							{'term':'dog diseases','termRank':920,'fieldName':'Subject(s)','field':'subjects'},
							{'term':'Doggetti','termRank':200,'fieldName':'Author','field':'author'}	
		
		           ];
	 
	 
	      //Filter criteria drop down handler functions
			 $scope.all = function(){
			 
			   $scope.searchterm = '';
			   $scope.articleData = '';
			   $scope.filter = 'All';
			   $scope.filterValue = 'all';
			   $scope.suggestionVisibility = false;
			 
			 };
			 
			 $scope.title = function(){
			 
			   $scope.searchterm = '';
			   $scope.articleData = '';
			   $scope.filter = 'Title';
			   $scope.filterValue = 'title';
			   $scope.suggestionVisibility = false;
			 
			 };
			 
			 $scope.pubag = function(){
			 
			   $scope.searchterm = '';
			   $scope.articleData = '';
			   $scope.filter = 'PubAg ID';
			   $scope.filterValue = 'agid';
			   $scope.suggestionVisibility = false;
			 
			 };
			 
			 $scope.author = function(){
			 
			   $scope.searchterm = '';
			   $scope.articleData = '';
			   $scope.filter = 'Author';
			   $scope.filterValue = 'authors';
			   $scope.suggestionVisibility = false;
			 
			 };
			 
			 $scope.subjects = function(){
			 
			   $scope.searchterm = '';
			   $scope.articleData = '';
			   $scope.filter = 'Subject(s)';
			   $scope.filterValue = 'subjects';
			   $scope.suggestionVisibility = false;
			 
			 };
			 
			 $scope.clearTerm = function(){
				 
				$scope.searchterm = ''; 
				 
			 };
   
          //Fulfilling results list function
		  $scope.getList = function(){
			  
			  $scope.articleData = '';
			  
			  $scope.resultSetVisibility = false;
			
			  var exp = new RegExp('[a-zA-Z0-9]{3,}');
			  
			  if(exp.test($scope.searchterm) == true){
			   
			    if($scope.filterValue=='all'){
				
					   $http.get('http://localhost:5000/getList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						  $scope.visibility2 = true;
						  $scope.suggestionVisibility = true;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });			   
									
				  }else if($scope.filterValue == 'title'){
					 
					  $http.get('http://localhost:5000/getTitleList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						  $scope.visibility2 = true;
						  $scope.suggestionVisibility = false;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					 
				  }else if($scope.filterValue == 'agid'){
					  
					  $http.get('http://localhost:5000/getPubagList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						  $scope.visibility2 = true;
						  $scope.suggestionVisibility = false;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					  
				  }else if($scope.filterValue == 'authors'){
					  
					  $http.get('http://localhost:5000/getAuthorsList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						  $scope.visibility2 = true;
						  $scope.suggestionVisibility = false;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					  
				  }else if($scope.filterValue == 'subjects'){
					  
					  $http.get('http://localhost:5000/getSubjectsList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						  $scope.visibility2 = true;
						  $scope.suggestionVisibility = false;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					  
				  }	
		       }	
		    };
			
			//Fulfilling results list function
		  $scope.search = function(filter, term){
			
			  var exp = new RegExp('[a-zA-Z0-9]{3,}');
			  
			  if(exp.test(term) == true){
			   
			    if($scope.filterValue=='all'){
				
					   $http.get('http://localhost:5000/getList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.resultSetVisibility = true;
						  //$scope.visibility2 = true;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });			   
									
				  }else if($scope.filterValue == 'title'){
					 
					  $http.get('http://localhost:5000/getTitleList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						 //$scope.visibility2 = true;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					 
				  }else if($scope.filterValue == 'agid'){
					  
					  $http.get('http://localhost:5000/getPubagList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						  //$scope.visibility2 = true;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					  
				  }else if($scope.filterValue == 'authors'){
					  
					  $http.get('http://localhost:5000/getAuthorsList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.resultSetVisibility = true;
						  //$scope.visibility = true;
						  //$scope.visibility2 = true;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					  
				  }else if($scope.filterValue == 'subjects'){
					  
					  $http.get('http://localhost:5000/getSubjectsList?searchterm=' + $scope.searchterm).success(function(data){
					   
						  $scope.articleData = data;
						  $scope.visibility = true;
						  //$scope.visibility2 = true;
					   
					   }).error(function(err, status){
					   
						  console.log('Error code: ' + err + 'Status code: ' + status);
					   
					   });
					  
				  }	
		       }	
		    };
			
			$scope.termChange = function(data){
				
				//temporary until static data is added
				$scope.searchterm = data.subjects[0];
				
                $scope.search($scope.filterValue, $scope.searchterm); 

                $scope.visibility2 = false;				

				$scope.resultSetVisibility = true;
				
				$scope.searchterm = '';
				
			};
			
			$scope.termFilterChange = function(suggestion){
				
				$scope.searchterm = '';
				
				$scope.filterValue = suggestion.field;
				//$scope.filter = suggestion.fieldName;
				$scope.searchterm = suggestion.term;				
				
				$scope.suggestionVisibility = false;
				$scope.visibility2 = false;
				
				$scope.search($scope.filterValue, $scope.searchterm);
				
				$scope.resultSetVisibility = true;				
				
			};

           $scope.test = function(word, data){
			 
			  var term = word;
			  
			  var exp = new Regexp('/' + term + '/i');
			  
			  var subject = data.subjects[0];
			  
			  if(exp.test(subject)){
				 
                subject.replace('/' + term + '/' ,'<b>' + term + '</b>'); 		
				  
			  }
			  
		   }; 	

		   
			 
		 }],
	 link: function(scope, elems, attrs){
		
		
	      }  	 
	 
    }

});