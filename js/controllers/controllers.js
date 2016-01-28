
/*Controller Module Difining*/

var app = angular.module("app.controllers", ['app.services']);  /*Services as Dependency Injection*/

/*Area get and Delete Controller*/

app.controller('areascontroller', ['$scope','Areas','Area','$stateParams','$state', function($scope,Areas,Area,$stateParams,$state){
  $scope.allAreas = Areas.query();
  var Id = $stateParams.areaId;

  $scope.deletearea = function(area){
    $scope.allAreas.splice($scope.allAreas.indexOf(area), 1);
      Area.delete({areaId: area.id});
  }
}]);

/*Area Creating and Updating Controller*/

app.controller('areadetailcontroller', ['$scope','$rootScope','Area','Areas','$stateParams', function($scope,$rootScope,Area,Areas,$stateParams){
  var Id = $stateParams.areaId;
  $rootScope.aid = Id;
  if(typeof(Id) === 'undefined'){
    $scope.area = new Areas();
  }
  else{
    $scope.area= Area.get({
      areaId: Id
    });
  }

  $scope.save = function(id){
    if (id ===1 && $scope.createarea.$valid) {
      $scope.area.$save();
    }
    else{
      $scope.area.$update();
    }
  };
}]);

/*Course Getting and Deleting Controller*/

app.controller('coursescontroller', ['$scope','AreaCourse','Course','$stateParams','$rootScope', function($scope,AreaCourse,Course,$stateParams,$rootScope){
  var Id = $stateParams.areaId;
  $rootScope.areaid = Id;
  $scope.allCourses = AreaCourse.query({areaId: Id});

  $scope.deletecourse= function(course){
    $scope.allCourses.splice($scope.allCourses.indexOf(course), 1);
      Course.delete({courseId: course.id});
  }
}]);

/*Course Creating and Updating Controller*/

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

/*Module Getting and Deleting Controller*/

app.controller('modulecontroller', ['$scope','Coursemodules','Module','$stateParams','$rootScope', function($scope,Coursemodules,Module,$stateParams,$rootScope){
  var Id = $stateParams.courseId;
  $rootScope.courseid = Id;
  $scope.allModules = Coursemodules.query({courseId: Id});

  $scope.deletemodule= function(module){
    $scope.allModules.splice($scope.allModules.indexOf(module), 1);
    Module.delete({moduleId: module.id});
  }
}]);

/*Module Creating and Updating Controller*/

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

/*Lessson getting and Deleting Controller*/

app.controller('lessoncontroller', ['$scope','ModuleLessons','$stateParams','$rootScope', function($scope,ModuleLessons,$stateParams,$rootScope){
  var Id = $stateParams.moduleId;
  $rootScope.moduleid = Id;
  $scope.allLessons= ModuleLessons.query({moduleId: Id});

  $scope.deletelesson= function(lesson){
    $scope.allLessons.splice($scope.allLessons.indexOf(lesson), 1);
    Lesson.delete({lessonId: lesson.id});
  }
}]);

/*Lesson Creating and Updating Controller*/

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

/*Learning Objective getting and Deleting Controller*/

app.controller('locontroller', ['$scope','LessonLos','Lo','$stateParams','$rootScope', function($scope,LessonLos,Lo,$stateParams,$rootScope){
  var Id = $stateParams.lessonId;
  $rootScope.lessonid = Id;
  $scope.alllos= LessonLos.query({lessonId: Id});
  
  $scope.deletelo= function(lo){
    $scope.alllos.splice($scope.alllos.indexOf(lo), 1);
    Lo.delete({loId: lo.id});
  }
}]);

/*Learning Objective Creating and Updating Controller*/

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

/*Skill getting and deleting Controller*/

app.controller('skillcontroller', ['$scope','LoSkills','Skill','$stateParams','$rootScope', function($scope,LoSkills,Skill,$stateParams,$rootScope){
  var Id = $stateParams.loId;
  $rootScope.loid = Id;
  $scope.allSkills= LoSkills.query({loId: Id});
  
  $scope.deleteskill= function(skill){
  $scope.allSkills.splice($scope.allSkills.indexOf(skill), 1);
    Skill.delete({skillId: skill.id});
  }
}]);

/*Skill creating and updating controller*/

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

/*Simple & Comprehension Question/ Item getting and deleting  and comprehension creating controller*/

app.controller('simplecontroller', ['$rootScope','$stateParams','$scope','Item','Items','AllItems', function($rootScope,$stateParams,$scope,Item,Items,AllItems){

// Getting the All items as simple and comprehension

  $scope.items = AllItems.query();

  $scope.lessonid11= $stateParams.lessonId;
  $rootScope.lessonIds = $stateParams.lessonId2;
  
  // Deleting the Item as Simple question

  $scope.delete = function(item){
    $scope.items.splice($scope.items.indexOf(item), 1);
    Item.delete({itemId: item.id});
  }

// Comprehension question creation code and saving 
  
  $scope.addQuestion = function(itemtype) {
    $scope.itemt = itemtype;
  }

 var lessonid12= $rootScope.lessonIds;

 if(typeof(itemid) === 'undefined'){
   $scope.item = new Items({
    lessonId : lessonid12
   })
  }

  $scope.savecq = function(id,itemt){
    if (id == 1){
      $scope.item.question.items[0].itype = itemt;
      var item1 = angular.toJson($scope.item.question.items[0]);
      var item2 = "["+ item1 + "]";
      $scope.item.question.items = item2;
      $scope.item.$save({lessonId: lessonid12});
    }
  }
}]);

/*Item creating and updating controller*/

app.controller('itemcontroller', ['$rootScope','$stateParams','$scope','Item','Items','AllItems', function($rootScope,$stateParams,$scope,Item,Items,AllItems){
 
  var lessonid2 = $stateParams.lessonId1;
  var itemid = $stateParams.itemId;

  // the creating item for comprehension code for navigating the template

  $scope.itype =$stateParams.Itemtype;

// the code of simple question item saving and editing
 
  if(typeof(itemid) === 'undefined'){
     $scope.item = new Items({
      lessonId : lessonid2
     })
    }
  else{
    $scope.item = Item.get({
      itemId : itemid
    })
  }

  $scope.save = function(id){
    if(id === 1){
      var item1 = angular.toJson($scope.item.question.items[0]);
      var item2 = "["+ item1 + "]";
      $scope.item.question.items[0] = item2;
      $scope.item.$save({lessonId: lessonid2});
    }
  };

  $scope.edit = function(id){
    if(id === 2){
      var item1 = angular.toJson($scope.item.question.items[0]);
      var item2 = "["+ item1 + "]";
      $scope.item.question.items = item2;
      $scope.item.$update(); 
    }
  }  
}]);

/*Coursetest getting and deleting controller*/

app.controller('coursetestcontroller', ["$scope","AllCourseTests","CourseTestItems","CourseTestItem","Test","$stateParams","$rootScope", function($scope,AllCourseTests,CourseTestItems,CourseTestItem,Test,$stateParams,$rootScope){
  $scope.courseid = $stateParams.courseId;
  $scope.testid = $stateParams.TestId;  
  $scope.CourseTests = AllCourseTests.query();

  $scope.Testdetails = Test.get({TestId: $scope.testid});
  $scope.ItemdetailsofCourseTests = CourseTestItems.query();

  $scope.deleteTest = function(CourseTest){
    $scope.CourseTests.splice($scope.CourseTests.indexOf(CourseTest), 1);
    Test.delete({TestId: CourseTest.id});
  }

  $scope.deleteTestItem = function(ItemdetailsofCourseTest){
    $scope.ItemdetailsofCourseTests.splice($scope.ItemdetailsofCourseTests.indexOf(ItemdetailsofCourseTest), 1);
    CourseTestItem.delete({ItemId: ItemdetailsofCourseTest.id});
  }
}]);

/*Cousetest getting and deleting controller*/

app.controller('coursetestdetailcontroller', ["$scope","AllCourseTests","Test","Tests","CoursePostTestItem","$stateParams","$rootScope", function($scope,AllCourseTests,Test,Tests,CoursePostTestItem,$stateParams,$rootScope){
  var courseid = $stateParams.courseId;
  var Id = $stateParams.TestId;

  $scope.publish = function(id){
    CoursePostTestItem.$save({TestId: id});
  }

  if(typeof(Id) === 'undefined'){
    $scope.CourseTest = new Tests({
      courseId: courseid
    });
  }
  else{
    $scope.CourseTest= Test.get({
      TestId: Id
    });
  }

  $scope.save = function(id){
    if (id ===1) {
      $scope.CourseTest.$save({courseId: courseid});
    }
    else{
      $scope.CourseTest.$update();
    }
  };
}]);

/*Moduletset getting and deleting controller*/

app.controller('moduletestcontroller', ["$scope","AllModuleTests","MTest","$stateParams","$rootScope", function($scope,AllModuleTests,MTest,$stateParams,$rootScope){
  $scope.moduleid = $stateParams.moduleId;
  var testid = $stateParams.TestId;  
  $scope.ModuleTests = AllModuleTests.query();
  $scope.Testdetails = MTest.get({TestId: testid});

  $scope.deleteTest = function(ModuleTest){
    $scope.ModuleTests.splice($scope.ModuleTests.indexOf(ModuleTest), 1);
    MTest.delete({TestId: ModuleTest.id});
  }
}]);

/*Moduletest creating and updating controller*/

app.controller('moduletestdetailcontroller', ["$scope","AllModuleTests","MTest","MTests","$stateParams","$rootScope", function($scope,AllModuleTests,MTest,MTests,$stateParams,$rootScope){
  var moduleid = $stateParams.moduleId;
  var Id = $stateParams.TestId;

  if(typeof(Id) === 'undefined'){
    $scope.ModuleTest = new MTests({
      moduleId: moduleid
    });
  }
  else{
    $scope.ModuleTest= MTest.get({
      TestId: Id
    });
  }

  $scope.save = function(id){
    if (id ===1) {
      $scope.ModuleTest.$save({moduleId: moduleid});
    }
    else{
      $scope.ModuleTest.$update();
    }
  };
}]);

/*Lessontest getting and deleting controller*/

app.controller('lessontestcontroller', ["$scope","AllLessonTests","LTest","$stateParams","$rootScope", function($scope,AllLessonTests,LTest,$stateParams,$rootScope){
  $scope.lessonid = $stateParams.lessonId;
  var testid = $stateParams.TestId;  
  $scope.LessonTests = AllLessonTests.query();
  $scope.Testdetails = LTest.get({TestId: testid});

  $scope.deleteTest = function(LessonTest){
    $scope.LessonTests.splice($scope.LessonTests.indexOf(LessonTest), 1);
    LTest.delete({TestId: LessonTest.id});
  }
}]);

/*Lessontest creating and updatnig controler*/

app.controller('lessontestdetailcontroller', ["$scope","AllLessonTests","LTest","LTests","$stateParams","$rootScope", function($scope,AllLessonTests,LTest,LTests,$stateParams,$rootScope){
  var lessonid = $stateParams.lessonId;
  var Id = $stateParams.TestId;

  if(typeof(Id) === 'undefined'){
    $scope.LessonTest = new LTests({
      lessonId: lessonid
    });
  }
  else{
    $scope.LessonTest= LTest.get({
      TestId: Id
    });
  }

  $scope.save = function(id){
    if (id ===1) {
      $scope.LessonTest.$save({lessonId: lessonid});
    }
    else{
      $scope.LessonTest.$update();
    }
  };
}]);

/*Coursetest item getting and deleting controller*/

app.controller('coursetestitemcontroller', ["$scope","AllLessonTests","LTest","$stateParams","$rootScope", function($scope,AllLessonTests,LTest,$stateParams,$rootScope){
  $scope.lessonid = $stateParams.lessonId;
  var testid = $stateParams.TestId;  
  $scope.LessonTests = AllLessonTests.query();
  $scope.Testdetails = LTest.get({TestId: testid});

  $scope.deleteTest = function(LessonTest){
    $scope.LessonTests.splice($scope.LessonTests.indexOf(LessonTest), 1);
    LTest.delete({TestId: LessonTest.id});
  }
}]);

/*Coursetestitem creating and updating controller*/

app.controller('coursetestitemdetailcontroller', ["$scope","$stateParams","TestItems","CourseTestItem",function($scope,$stateParams,TestItems,CourseTestItem){
  
  var Id = $stateParams.ItemId;
  var testid =$stateParams.TestId;

  if(typeof(Id) === 'undefined'){
    $scope.item = new TestItems({
      TestId: testid
    });
  }
  else{
    $scope.item= CourseTestItem.get({
      ItemId: Id
    });
  }

  $scope.save = function(id){
    if (id ===1) {
      console.log($scope.item.question.items[0]);
      var item1 = angular.toJson($scope.item.question.items[0]);
      var item2 = "["+ item1 + "]";
      $scope.item.question.items = item2;
      console.log($scope.item);
      
      $scope.item.$save({TestId: testid});
    }
    else{
      var item1 = angular.toJson($scope.item.question.items[0]);
      var item2 = "["+ item1 + "]";
      $scope.item.question.items = item2;
      $scope.item.$update();
    }
  };
}]);

/*Skiil Adjecencies controller*/

app.controller('Skilladdingcontroller', ["$scope","$rootScope","$stateParams","Areas","Adjecency",function($scope,$rootScope,$stateParams,Areas,Adjecency){

$scope.areaid = $rootScope.aid;
$scope.areas = Areas.query();

$scope.getting = function(){
 var myselect = document.getElementById("selectOpt");
 console.log(myselect);
}

  /*$scope.colors = [{
      name: 'black'
     },
     {
      name: 'white'
     },
     {
      name: 'red' 
     },
     {
      name: 'blue'
     },
     {
      name: 'yellow'
     }
     ];
*/
  $scope.save= function(){
   $scope.areas.push($scope.area); 
  };

  $scope.Delete= function (){
    console.log($scope.selectedColors);
    $scope.areas.splice($scope.areas.indexOf($scope.selectedColors), 1);
  };

}]);