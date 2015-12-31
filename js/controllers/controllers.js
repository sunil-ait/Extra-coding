var app = angular.module("app.controllers", ['app.services']);

app.controller('areascontroller', ['$scope','Areas','Area','$stateParams','$state', function($scope,Areas,Area,$stateParams,$state){
  $scope.allAreas = Areas.query();
  var Id = $stateParams.areaId;

  $scope.deletearea = function(area){
    $scope.allAreas.splice($scope.allAreas.indexOf(area), 1);
      Area.delete({areaId: area.id});
  }
}]);

app.controller('areadetailcontroller', ['$scope','Area','$stateParams', function($scope,Area,$stateParams){
  var Id = $stateParams.areaId;

  if(typeof(Id) === 'undefined'){
    $scope.area = new Areas();
  }
  else{
    $scope.area= Area.get({
      areaId: Id
    });
  }

  $scope.save = function(id){
    if (id ===1) {
      $scope.area.$save();
    }
    else{
      $scope.area.$update();
    }
  };
}]);

app.controller('coursescontroller', ['$scope','AreaCourse','Course','$stateParams','$rootScope', function($scope,AreaCourse,Course,$stateParams,$rootScope){
  var Id = $stateParams.areaId;
  $rootScope.areaid = Id;
  $scope.allCourses = AreaCourse.query({areaId: Id});

  $scope.deletecourse= function(course){
    $scope.allCourses.splice($scope.allCourses.indexOf(course), 1);
      Course.delete({courseId: course.id});
  }
}]);

app.controller('coursedetailcontroller', ['$scope','Course','Courses','$stateParams','$rootScope', function($scope,Course,Courses,$stateParams,$rootScope){
  var Id = $stateParams.courseId;
  var areaid1 = $rootScope.areaid;

  if(typeof(Id) === 'undefined'){
    $scope.course = new Courses({
      areaId: areaid1
    });
  }
  else{
    $scope.course = Course.get({
      courseId: Id
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $scope.course.$save({areaId: areaid1});
    }else{
      $scope.course.$update();
    }
  };
}]);

app.controller('modulecontroller', ['$scope','Coursemodules','Module','$stateParams','$rootScope', function($scope,Coursemodules,Module,$stateParams,$rootScope){
  var Id = $stateParams.courseId;
  $rootScope.courseid = Id;
  $scope.allModules = Coursemodules.query({courseId: Id});

  $scope.deletemodule= function(module){
    $scope.allModules.splice($scope.allModules.indexOf(module), 1);
    Module.delete({moduleId: module.id});
  }
}]);

app.controller('moduledetailcontroller', ['$scope','Module','Modules','$stateParams','$rootScope', function($scope,Module,Modules,$stateParams,$rootScope){
  var Id = $stateParams.moduleId;
  var courseid1 = $rootScope.courseid;

  if(typeof(Id) === 'undefined'){
    $scope.module = new Modules({
      courseId: courseid1
    });
  }
  else{
    $scope.module = Module.get({
      moduleId: Id
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $scope.module.$save({courseId: courseid1});
    }
    else {
      $scope.module.$update();
    }
  };
}]);

app.controller('lessoncontroller', ['$scope','ModuleLessons','$stateParams','$rootScope', function($scope,ModuleLessons,$stateParams,$rootScope){
  var Id = $stateParams.moduleId;
  $rootScope.moduleid = Id;
  $scope.allLessons= ModuleLessons.query({moduleId: Id});

  $scope.deletelesson= function(lesson){
    $scope.allLessons.splice($scope.allLessons.indexOf(lesson), 1);
    Lesson.delete({lessonId: lesson.id});
  }
}]);

app.controller('lessondetailcontroller', ['$scope','Lesson','Lessons','$stateParams','$rootScope', function($scope,Lesson,Lessons,$stateParams,$rootScope){
  var Id = $stateParams.lessonId;
  var moduleid1 = $rootScope.moduleid;
  $rootScope.lessonid = Id;

  if(typeof(Id) === 'undefined'){
    $scope.lesson = new Lessons({
      moduleId: moduleid1
    });
  }
  else{
    $scope.lesson = Lesson.get({
      lessonId: Id
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $scope.lesson.$save({moduleId: moduleid1});
    }else {
      $scope.lesson.$update();
    }
  };
}]);

app.controller('locontroller', ['$scope','LessonLos','Lo','$stateParams','$rootScope', function($scope,LessonLos,Lo,$stateParams,$rootScope){
  var Id = $stateParams.lessonId;
  $rootScope.lessonid = Id;
  $scope.alllos= LessonLos.query({lessonId: Id});
  
  $scope.deletelo= function(lo){
    $scope.alllos.splice($scope.alllos.indexOf(lo), 1);
    Lo.delete({loId: lo.id});
  }
}]);

app.controller('lodetailcontroller', ['$scope','Lo','Los','$stateParams','$rootScope', function($scope,Lo,Los,$stateParams,$rootScope){
  var Id = $stateParams.loId;
  var lessonid1 = $rootScope.lessonid;

  if(typeof(Id) === 'undefined'){
    $scope.lo = new Los({
      lessonId: lessonid1
    });
  }
  else{
    $scope.lo = Lo.get({
      loId: Id
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $scope.lo.$save({lessonId: lessonid1});
    }else {
      $scope.lo.$update();
    }
  };
}]);

app.controller('skillcontroller', ['$scope','LoSkills','Skill','$stateParams','$rootScope', function($scope,LoSkills,Skill,$stateParams,$rootScope){
  var Id = $stateParams.loId;
  $rootScope.loid = Id;
  $scope.allSkills= LoSkills.query({loId: Id});
  
  $scope.deleteskill= function(skill){
  $scope.allSkills.splice($scope.allSkills.indexOf(skill), 1);
    Skill.delete({skillId: skill.id});
  }
}]);

app.controller('skilldetailcontroller', ['$scope','Skill','Skills','$stateParams','$rootScope', function($scope,Skill,Skills,$stateParams,$rootScope){
  var Id = $stateParams.skillId;
  var loid1 = $rootScope.loid;

  if(typeof(Id) === 'undefined'){
    $scope.skill = new Skills({
      loId: loid1
    });
  }
  else{
    $scope.skill = Skill.get({
      skillId: Id
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $scope.skill.$save({loId: loid1});
    }else {
      $scope.skill.$update();
    }
  };
}]);

app.controller('simplecontroller', ['$rootScope','$stateParams','$scope','Item','Items','AllItems', function($rootScope,$stateParams,$scope,Item,Items,AllItems){
  $scope.items = AllItems.query();
  $scope.lessonid11= $stateParams.lessonId;
  
  $scope.delete = function(item){
    $scope.items.splice($scope.items.indexOf(item), 1);
    Item.delete({itemId: item.id});
  }
}]);  

app.controller('itemcontroller', ['$rootScope','$stateParams','$scope','Item','Items','AllItems', function($rootScope,$stateParams,$scope,Item,Items,AllItems){
  // $scope.lessonid11= $stateParams.lessonId;
  var lessonid2 = $stateParams.lessonId1;
  var itemid = $stateParams.itemId;

  if(typeof(itemid) === 'undefined'){
     $scope.item = new Items({
      lessonId : lessonid2
     });
    }
  else{
    $scope.item = Item.get({
      itemId : itemid
    })
  }

  $scope.save = function(id){
    if(id === 1){
      var item1 = angular.toJson($scope.item.question);
      var item2 = "["+ item1 + "]";
      $scope.item.question = item2;
      console.log($scope.item);
      $scope.item.$save({lessonId: lessonid2});
    }
  };

  $scope.edit = function(id){
    if(id === 2)
    {
      $scope.item.$update(); 
    }
  };

  $scope.addUser = function() {  
    $scope.inserted = {
      qid: $scope.datajsons.length+1,
      qtype:"1",
      passage:"passage",
      question:"question",
      answer:"answer",
      solution:"solution",
      option1:"option1",
      option2:"option2",
      option3:"option3",
      option4:"option4",
      option5:"option5",
      option6:"option6",
      matcha:"matcha",
      matchb:"matchb",
      matchc:"matchc",
      matchd:"matchd",
      matche:"matche",
      matchf:"matchf",
      hint1:"hint1",
      hint2:"hint2",
      hint3:"hint3",
      hintcheck:"hintcheck",
      grit:"grit",
      level:"level",
      diff:"diff",
      skill:"skill"
    }
    $scope.datajsons.push($scope.inserted);
  }
}]);