
/*Controller Module Difining*/

var app = angular.module("app.controllers", ['app.services']);  /*Services as Dependency Injection*/

/*Area get and Delete Controller*/

app.controller('areascontroller', ['$scope','Areas','Area','$stateParams','$state','$rootScope','$uibModal', '$log', function($scope,Areas,Area,$stateParams,$state,$rootScope,$uibModal, $log){
  $scope.allAreas = Areas.query();
  var Id = $stateParams.areaId;
  $rootScope.aid = Id;

  /*$scope.deletearea = function(area){
    var result = confirm("do you wonna delete?");
    if (result) {
    $scope.allAreas.splice($scope.allAreas.indexOf(area), 1);
      Area.delete({areaId: area.id});
    }
  }*/
    $scope.animationsEnabled = true;

   $scope.deletearea = function(area){
    /*var result = confirm("do you wonna delete?");
    if (result) {*/
    $rootScope.Area =area;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myareaModalContentdelete.html',
      controller: 'areadeleteModalInstanceCtrl'
    });
      
    /*}*/
  }

  $scope.areagraph = function(){
    
      var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myareagraphModal.html',
      controller: 'areadeleteModalInstanceCtrl'
    });
  }




 //Model Related code

  $scope.open = function (size, id) {
    $rootScope.size =size;
    $rootScope.id =id;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myareaModalContent.html',
      controller: 'AreaModalInstanceCtrl'
    });
  };
}]);

/*Model related Controller*/

/*app.controller('areadetailcontroller', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});*/

/*Area Creating and Updating Controller*/

app.controller('AreaModalInstanceCtrl', ['$scope','$rootScope','Area','Areas','$stateParams','$uibModalInstance','$uibModal', '$log','$window', function($scope,$rootScope,Area,Areas,$stateParams,$uibModalInstance,$uibModal,$log,$window){
  var Id = $stateParams.areaId;
  $rootScope.aid = Id;
  var size =$rootScope.size;
 $scope.id = $rootScope.id;
  /*console.log(size);*/

  if(typeof(size) === 'undefined'){
    $scope.area = new Areas();
  }
  else{
    $scope.area= Area.get({
      areaId: size
    });
  }
  
  $scope.regex='\w+-\d{3}';

  $scope.save = function(id){
    if (id ===1) {
      $uibModalInstance.close();
      $scope.allAreas = Areas.query();
      $scope.allAreas.push($scope.area);
      console.log($scope.allAreas);
      $scope.area.$save();
      /*location.reload();*/
      
   /*$window.location.reload();*/
     /*$state.reload();*/
    }
    else{
      $uibModalInstance.close();
      $scope.area.$update();
      $window.location.reload();
    }
  };
  
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);

/*Course Getting and Deleting Controller*/

app.controller('coursescontroller', ['$scope','AreaCourse','Course','$stateParams','$rootScope','$uibModal','$log', function($scope,AreaCourse,Course,$stateParams,$rootScope,$uibModal,$log){
  var Id = $stateParams.areaId;
  $rootScope.areaid = Id;
  $scope.allCourses = AreaCourse.query({areaId: Id});

  $scope.deletecourse= function(course){
    $scope.allCourses.splice($scope.allCourses.indexOf(course), 1);
      Course.delete({courseId: course.id});
  }

  // Model of course
  $scope.editcourse = function(courseid, id){
    $rootScope.courseid = courseid;
    $rootScope.id = id;

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'mycourseModalContent.html',
      controller: 'CourseModalInstanceCtrl'
    });
  };

  $scope.open = function (size, id) {
    $rootScope.size = size;
    $rootScope.id = id;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'mycourseModalContent.html',
      controller: 'CourseModalInstanceCtrl'
    });
  };
}]);

/*Course Creating and Updating Controller*/

app.controller('CourseModalInstanceCtrl', ['$scope','Course','Courses','$stateParams','$rootScope','$uibModalInstance', function($scope,Course,Courses,$stateParams,$rootScope,$uibModalInstance){
  var Id = $stateParams.courseId;
  $rootScope.courseId =Id;
  $scope.areaid1 = $rootScope.areaid;
  var size =$rootScope.size;
  var coursed = $rootScope.courseid;
  $scope.id = $rootScope.id;

  if(typeof(coursed)=== 'undefined'){
    $scope.course = new Courses({
      areaId: size
    });
  }
  else{
    $scope.course = Course.get({
      courseId: coursed
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $uibModalInstance.close();
      $scope.course.$save({areaId: $scope.areaid1});
    }else{
      $uibModalInstance.close();
      $scope.course.$update();
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);

/*Module Getting and Deleting Controller*/

app.controller('modulecontroller', ['$scope','Coursemodules','Module','$stateParams','$rootScope','$uibModal','$log', function($scope,Coursemodules,Module,$stateParams,$rootScope,$uibModal,$log){
  var Id = $stateParams.courseId;
  $rootScope.courseid = Id;
  $scope.areaid = $rootScope.areaid;
  $scope.allModules = Coursemodules.query({courseId: Id});

  $scope.deletemodule= function(module){
    $scope.allModules.splice($scope.allModules.indexOf(module), 1);
    Module.delete({moduleId: module.id});
  }

   $scope.editmodule = function(moduleid, id){
    $rootScope.moduleid = moduleid;
    $rootScope.id = id;

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'mymoduleModalContent.html',
      controller: 'ModuleModalInstanceCtrl'
    });
  }

  $scope.open = function (size, id) {
    $rootScope.size = size;
    $rootScope.id = id;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'mymoduleModalContent.html',
      controller: 'ModuleModalInstanceCtrl'
    });
  };

}]);

/*Module Creating and Updating Controller*/

app.controller('ModuleModalInstanceCtrl', ['$scope','Module','Modules','$stateParams','$rootScope','$uibModalInstance', function($scope,Module,Modules,$stateParams,$rootScope,$uibModalInstance){
  var Id = $stateParams.moduleId;
  $scope.courseid1 = $rootScope.courseid;

  var size =$rootScope.size;
  var moduled = $rootScope.moduleid;
  $scope.id = $rootScope.id;

  if(typeof(moduled) === 'undefined'){
    $scope.module = new Modules({
      courseId: size
    });
  }
  else{
    $scope.module = Module.get({
      moduleId: moduled
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $uibModalInstance.close();
      $scope.module.$save({courseId: $scope.courseid1});
    }
    else {
      $uibModalInstance.close();
      $scope.module.$update();
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);

/*Lessson getting and Deleting Controller*/

app.controller('lessoncontroller', ['$scope','ModuleLessons','$stateParams','$rootScope','$uibModal','$log', function($scope,ModuleLessons,$stateParams,$rootScope,$uibModal,$log){
  var Id = $stateParams.moduleId;
  $rootScope.moduleid = Id;
  $scope.courseid = $rootScope.courseid;
  $scope.allLessons= ModuleLessons.query({moduleId: Id});

  $scope.deletelesson= function(lesson){
    $scope.allLessons.splice($scope.allLessons.indexOf(lesson), 1);
    Lesson.delete({lessonId: lesson.id});
  }

  $scope.editlesson = function(lessonid,id){
    $rootScope.lessond = lessonid;
    $rootScope.id = id;

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'mylessonModalContent.html',
      controller: 'LessonModalInstanceCtrl'
    });
  }

  $scope.open = function (size, id) {
    $rootScope.size = size;
    $rootScope.id = id;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'mylessonModalContent.html',
      controller: 'LessonModalInstanceCtrl'
    });
  };

}]);

/*Lesson Creating and Updating Controller*/

app.controller('LessonModalInstanceCtrl', ['$scope','Lesson','Lessons','$stateParams','$rootScope','$uibModalInstance', function($scope,Lesson,Lessons,$stateParams,$rootScope,$uibModalInstance){
  var Id = $stateParams.lessonId;
  var moduleid1 = $rootScope.moduleid;
  $rootScope.lessonid = Id;

  var size =$rootScope.size;
  var lessond = $rootScope.lessond;
  $scope.id = $rootScope.id;

  if(typeof(lessond) === 'undefined'){
    $scope.lesson = new Lessons({
      moduleId: size
    });
  }
  else{
    $scope.lesson = Lesson.get({
      lessonId: lessond
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $uibModalInstance.close();
      $scope.lesson.$save({moduleId: moduleid1});
    }else {
      $uibModalInstance.close();
      $scope.lesson.$update();
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);

/*Learning Objective getting and Deleting Controller*/

app.controller('locontroller', ['$scope','LessonLos','Lo','$stateParams','$rootScope','$uibModal','$log', function($scope,LessonLos,Lo,$stateParams,$rootScope,$uibModal,$log){
  var Id = $stateParams.lessonId;
  $rootScope.lessonid = Id;
  $scope.moduleid = $rootScope.moduleid;
  $scope.alllos= LessonLos.query({lessonId: Id});
  
  $scope.deletelo= function(lo){
    $scope.alllos.splice($scope.alllos.indexOf(lo), 1);
    Lo.delete({loId: lo.id});
  }

  $scope.editlo = function(loid,id){
    $rootScope.loid = loid;
    $rootScope.id = id;

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myloModalContent.html',
      controller: 'LoModalInstanceCtrl'
    });
  }

  $scope.open = function (size, id) {
    $rootScope.size = size;
    $rootScope.id = id;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myloModalContent.html',
      controller: 'LoModalInstanceCtrl'
    });
  };

}]);

/*Learning Objective Creating and Updating Controller*/

app.controller('LoModalInstanceCtrl', ['$scope','Lo','Los','$stateParams','$rootScope','$uibModalInstance', function($scope,Lo,Los,$stateParams,$rootScope,$uibModalInstance){
  var Id = $stateParams.loId;
  var lessonid1 = $rootScope.lessonid;

  var size =$rootScope.size;
  var lid = $rootScope.loid;
  $scope.id = $rootScope.id;

  if(typeof(lid) === 'undefined'){
    $scope.lo = new Los({
      lessonId: size
    });
  }
  else{
    $scope.lo = Lo.get({
      loId: lid
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $uibModalInstance.close();
      $scope.lo.$save({lessonId: lessonid1});
    }else {
      $uibModalInstance.close();
      $scope.lo.$update();
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);

/*Skill getting and deleting Controller*/

app.controller('skillcontroller', ['$scope','LoSkills','Skill','$stateParams','$rootScope','$uibModal','$log', function($scope,LoSkills,Skill,$stateParams,$rootScope,$uibModal,$log){
  var Id = $stateParams.loId;
  $rootScope.loid = Id;
  $scope.lessonid = $rootScope.lessonid;
  $scope.allSkills= LoSkills.query({loId: Id});
  
  $scope.deleteskill= function(skill){
  $scope.allSkills.splice($scope.allSkills.indexOf(skill), 1);
    Skill.delete({skillId: skill.id});
  }

    $scope.editskill = function(skillid,id){
    $rootScope.skillid = skillid;
    $rootScope.id = id;

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myskillModalContent.html',
      controller: 'SkillModalInstanceCtrl'
    });
  }

  $scope.open = function (size, id) {
    $rootScope.size = size;
    $rootScope.id = id;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myskillModalContent.html',
      controller: 'SkillModalInstanceCtrl'
    });
  };
}]);

/*Skill creating and updating controller*/

app.controller('SkillModalInstanceCtrl', ['$scope','Skill','Skills','$stateParams','$rootScope','$uibModalInstance', function($scope,Skill,Skills,$stateParams,$rootScope,$uibModalInstance){
  
  var Id = $stateParams.skillId;
 $rootScope.loid1 = $rootScope.loid;

  var size =$rootScope.size;
  var skilld = $rootScope.skillid;
  $scope.id = $rootScope.id;

  if(typeof(skilld) === 'undefined'){
    $scope.skill = new Skills({
      loId: size
    });
  }
  else{
    $scope.skill = Skill.get({
      skillId: skilld
    });
  }

  $scope.save = function(id){
    if (id === 1) {
      $uibModalInstance.close();
      $scope.skill.$save({loId: $rootScope.loid1});
    }else {
      $uibModalInstance.close();
      $scope.skill.$update();
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  
}]);

app.controller('ckeditorcontroller',  ['$scope','Skill','Skills','$stateParams','$rootScope', function($scope,Skill,Skills,$stateParams,$rootScope){

  var Id = $stateParams.skillId;
  $scope.loid1 = $rootScope.loid;

  /*var size =$rootScope.size;
  var skilld = $rootScope.skillid;
  $scope.id = $rootScope.id;*/

  if(typeof(Id) === 'undefined'){
    $scope.skill = new Skills({
      loId: size
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

  $scope.Allitems = AllItems.query();

  $scope.lessonid11= $stateParams.lessonId;
  $rootScope.lessonIds = $stateParams.lessonId2;
  $rootScope.lid =$scope.lessonid11;
  console.log($scope.lessonid11);
  
  // Deleting the Item as Simple question

  $scope.delete = function(item){
    $scope.items.splice($scope.items.indexOf(item), 1);
    Item.delete({itemId: item.id});
  }

// Comprehension question creation code and saving 
  
  $scope.addQuestion = function(itemtype) {
    $scope.itemt = itemtype;
  }
  var itemid = $stateParams.itemId;
 $scope.lessonid12 = $rootScope.lessonIds;

 $rootScope.items = {
  qtype :"fdsf",
  skill:"asdadd",
  level: "fgffdjgbdg",
  diff: "gkdgdg",
  grit: "gfgfgg",
  type: "vjkvdvkv",
  question:{
    items: [{
      "itype": "0",
      "Answer": "dsdjkfnnsf",
      "solution": "djkfnssfsf",
      "passage": "Hare",
      "question": "ib",
      "solution": "ib",
      "option1": "ib",
      "option2": "b",
      "option3": "bi",
      "option4": "bib",
      "option5": null,
      "option6": null,
      "matcha": null,
      "matchb": null,
      "matchc": null,
      "matchd": null,
      "matche": null,
      "matchf": null,
      "hint1": null,
      "hint2": null,
      "hint3": null,
      "hintcheck": null,
      "grit": "ib",
      "level": "ibi",
      "difficulty": "bib",
      "skill": "ib"
     }]
  }
 };

/*$scope.getting = function(itype){
  $scope.index =itype;
}*/
if(typeof(itemid) === 'undefined'){
     $scope.item = new Items({
      lessonId : $scope.lessonid12
     })
    }
  else{
    $scope.item = Item.get({
      itemId : itemid
    })
  }

$scope.saving = function(item){
  $scope.item.question.items.push(item);
  /*$scope.item = $scope.itemm;*/
  $scope.item.$update();
}
$scope.savelocal = function(question){
  console.log("I am here right");
  console.log(question);
  $rootScope.items.question.items.push(question);
  console.log($rootScope.items);
}

$scope.createsave = function(question){
  $scope.item.grit = $scope.items.grit;
  $scope.item.level = $scope.items.level;
  $scope.item.diff = $scope.items.diff; 
  $scope.item.type = $scope.items.type;
  $scope.item.qtype = $scope.items.qtype;
  $scope.item.skill = $scope.items.skill;
  $scope.item.question = $scope.items.question;
  console.log($scope.item);
  console.log($scope.lessonid12);
  $scope.item.$save({lessonId: $scope.lessonid12});
}

/*=============================================*/
 /*if(typeof(itemid) === 'undefined'){
   $scope.item = new Items({
    lessonId : lessonid12
   })
  }

  $scope.savecq = function(itemt, item){
    console.log(itemt);
   /* $scope.Iteming = item.question.items[itemt]; 
    $scope.item.question.items[itemt] = $scope.Iteming;*/
    /*$scope.question = item;
    console.log($scope.question);*/
   /* $scope.data= $scope.item;
    console.log("Hare Krsna Prabhu");

    var item1 = angular.toJson(item.question);
    $scope.data.question = "["+ item1 + "]";
    console.log($scope.data);*/
     /*$scope.data.question.items[itemt]= datas;*/
    /*$scope.item.question =item.question.items;*/
    /*console.log($scope.data);*/

    /*var item1 = angular.toJson($scope.item.question);
    console.log("Hare Krsna");
    console.log(item1);
    $scope.question.items= "["+ item1 + "]";
    console.log($scope.items);
    $scope.item.question= $scope.question.items;
    console.log("OK");*/
    /*console.log($scope.item);*/
   /* $scope.item.$save({lessonId: lessonid12});*/
 /* }*/
}]);

/*Item creating and updating controller*/

app.controller('itemcontroller', ['$rootScope','$stateParams','$scope','Item','Items','AllItems','LessonLos','LoSkills','ItemMapping', function($rootScope,$stateParams,$scope,Item,Items,AllItems,LessonLos,LoSkills,ItemMapping){
 
  $scope.lessonid2 = $stateParams.lessonId1;
  $scope.lessid =$rootScope.lid;
  var itemid = $stateParams.itemId;

  // the creating item for comprehension code for navigating the template

  $scope.itype =$stateParams.Itemtype;

// the code of simple question item saving and editing
 
  if(typeof(itemid) === 'undefined'){
     $scope.item = new Items({
      lessonId : $scope.lessonid2
     })
    }
  else{
    $scope.item = Item.get({
      itemId : itemid
    })
  }

  $scope.save = function(id){
    if(id === 1){
      var item1 = angular.toJson($scope.item.question.items);
      var item2 = "["+ item1 + "]";
      $scope.item.question.items= item2;
      $scope.item.$save({lessonId: $scope.lessonid2});
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

  $scope.los = LessonLos.query({lessonId: $scope.lessid});

  console.log($scope.los);

  $scope.passlo= function(loid){
    console.log(loid);
    $scope.skills = LoSkills.query({loId: loid});
    console.log($scope.skills);
  }

  $scope.mapped = function(skillid,itemid){
    console.log(skillid);
    console.log(itemid);
    var item1 = angular.toJson($scope.item.question.items[0]);
    var item2 = "["+ item1 + "]";
    $scope.item.question.items = item2;
    console.log($scope.item);
    $scope.item.$update({itemId:itemid,skillId:skillid});
  }
}]);


app.controller("Itemmappingcontroller", ['$rootScope','$scope','Item','Items','LessonLos','LoSkills','ItemMapping', function($rootScope, $scope,Item,Items,LessonLos,LoSkills,ItemMapping){
  $scope.lessid =$rootScope.lid;

}]);

/*Coursetest getting and deleting controller*/

app.controller('coursetestcontroller', ["$scope","AllCourseTests","CourseTestItems","CourseTestItem","Test","$stateParams","$rootScope","CoursePostTestItem", function($scope,AllCourseTests,CourseTestItems,CourseTestItem,Test,$stateParams,$rootScope,CoursePostTestItem){
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

/*Publishing the tests calling function*/
  
  $scope.publish = function(id){
    CoursePostTestItem.get({TestId: id});
  }

  $scope.publishingTest =function(id){
    console.log(id);
    CoursePostTestItem.update({TestId: id});
    console.log("Successfully Done");
  }
}]);

/*Cousetest getting and deleting controller*/

app.controller('coursetestdetailcontroller', ["$scope","AllCourseTests","Test","Tests","CoursePostTestItem","$stateParams","$rootScope", function($scope,AllCourseTests,Test,Tests,CoursePostTestItem,$stateParams,$rootScope){
  var courseid = $stateParams.courseId;
  var Id = $stateParams.TestId;

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

  $scope.publish = function(id){
    CoursePostTestItem.$save({TestId: id});
  }
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
    }  };

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

app.controller('Skilladdingcontroller', ["$scope","$rootScope","$stateParams","Areas","AreaCourse","Coursemodules","ModuleLessons","LessonLos","LoSkills","Allskillgraphs","SkillgraphDelete","Adjecency",function($scope,$rootScope,$stateParams,Areas,AreaCourse,Coursemodules,ModuleLessons,LessonLos,LoSkills,Allskillgraphs,SkillgraphDelete,Adjecency){
$scope.skillpid = $stateParams.skillId;
$scope.loid = $rootScope.loid;

/*Getting the all areas*/
$scope.areas = Areas.query();

/*Getting the all Courses*/
$scope.passingarea= function(id){
  var aid = id;
  console.log(aid);
  $scope.courses = AreaCourse.query({areaId: aid});
  console.log($scope.courses);
}
$scope.passingcourse= function(id){
  var cid = id;
  console.log(cid);
  $scope.modules = Coursemodules.query({courseId: cid});
  console.log($scope.modules);
}
$scope.passingmodule= function(id){
  var mid = id;
  console.log(mid);
  $scope.lessons = ModuleLessons.query({moduleId: mid});
  console.log($scope.lessons);
}
$scope.passinglesson= function(id){
  var lid = id;
  console.log(lid);
  $scope.los = LessonLos.query({lessonId: lid});
  console.log($scope.los);
}
$scope.passinglo= function(id){
  var loid = id;
  console.log(loid);
  $scope.skills = LoSkills.query({loId: loid});
}
/*$scope.passingskill= function(id){
  var skillid = id;

}*/

$scope.save= function(id){
  Adjecency.get({skillpId: $scope.skillpid,skillcId: id});
  console.log("get saved Successfully");
  $scope.Skills = Allskillgraphs.query({skillpId: $scope.skillpid});
  console.log($scope.Skills);
};

$scope.Delete= function(skill){
  console.log(skill[0].id);
  $scope.Skills.splice($scope.Skills.indexOf(skill[0].skillc), 1);

  SkillgraphDelete.delete({skillpId: $scope.skillpid,skillcId: skill[0].skillc});
  console.log("Deleted Successfully");
  $scope.Skills = Allskillgraphs.query({skillpId: $scope.skillpid});
  alert("Deleted It");
 };
}]);

/*Image LIsting controller*/

app.controller('imagelistingcontroller', ['$scope','$stateParams','Allimages','ImageSearch','ImagePublish', function($scope,$stateParams,Allimages,ImageSearch,ImagePublish){
  $scope.skillid = $stateParams.skillId;

  /*Getting all images from AWS*/

  $scope.images = Allimages.query();

  /*Image Publishing */
  $scope.publish = function(image){
    ImagePublish.get({imageId: image.id});
    /*image.$save({imageId: image.id});*/
  }
}]);

/*Image Uploading Controller*/

app.controller('Imageuploadcontroller', ['$scope','$stateParams','Upload', function($scope, $stateParams,Upload){
  $scope.skillid = $stateParams.skillId;
/*Uploading the Skill Image*/
  $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: 'http://192.168.1.5:8080/files/upload/simage',
      data: {file: file, name: $scope.username, tag1: $scope.tag1, tag2: $scope.tag2, tag3: $scope.tag3, skillid: $scope.skillid}
    });
  }
  /*Uploading Question Image*/
  $scope.uploadPicQ = function(file, id) {
    file.upload = Upload.upload({
      url: 'http://192.168.1.5:8080/files/upload/qimage',
      data: {file: file, name: $scope.username, tag1: $scope.tag1, tag2: $scope.tag2, tag3: $scope.tag3, qid: id}
    });
  }
}]);

/*Searchiing Image Controller*/

app.controller('imagesearchingcontroller', ['$scope','$stateParams','ImageSearch', function($scope,$stateParams,ImageSearch){
  $scope.skillid = $stateParams.skillId;

  /*Getting all images from Seaching*/

  $scope.search= function(tag){
    $scope.images = ImageSearch.get({tagname: tag});
  }
}]);

app.controller('graphcontroller', ['$stateParams', '$scope', function($stateParams,$scope){
  $scope.name = 'World';
  $scope.id = $stateParams.areaId;
}]);

app.controller('viewmapeditemscontroller', ['$scope','$stateParams','AllItems', function($scope,$stateParams,AllItems){
  $scope.skillid =$stateParams.skillId;
  $scope.Allitems = AllItems.query();
}]);


app.controller('areadeleteModalInstanceCtrl', ['$rootScope','$uibModalInstance','$scope','Area','$stateParams','$window', function($rootScope,$uibModalInstance,$scope,Area,$stateParams,$window){

  $scope.area = $rootScope.Area;
  $scope.name = 'World';
  $scope.id = $stateParams.areaId;

 $scope.deletearea =function(){
   $scope.allAreas = Areas.query();
   $scope.allAreas.splice($scope.allAreas.indexOf($scope.area), 1);
   $uibModalInstance.close();
   Area.delete({areaId: $scope.area.id});
   /*location.reload();*/
   /*location.href ="#app/allareas";*/
   /*$scope.apply();*/
 }

 $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);