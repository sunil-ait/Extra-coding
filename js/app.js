'use strict';

var app = angular.module("app", ['app.controllers','app.services','xeditable','ui.router','ui.bootstrap','ngCkeditor']);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.config(function($stateProvider,$urlRouterProvider){
$stateProvider
  .state("app.content",{
     url: "/content",
     templateUrl: 'templates/others/content.html'
    })
  .state("app.contentarea",{
     url: "/allareas",
     templateUrl: 'templates/areas/allarea.html',
     controller: 'areascontroller'
    })
  .state('app.areapopup',{
     url: "/newarea",
     templateUrl: 'templates/areas/areapopup.html',
     controller: 'areadetailcontroller'
    })
  .state('app.areapopupedit',{
     url: "/editarea/{areaId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/areas/editareapopup.html',
     controller: 'areadetailcontroller'
    })
  .state("app.areacourses",{  
     url: "/allcourses/{areaId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/courses/allcourse.html',
     controller: 'coursescontroller'
    })
  .state("app.coursepopup",{  
     url: "/newcourses",
     templateUrl: 'templates/courses/coursepopup.html',
     controller: 'coursedetailcontroller'
    })
  .state("app.coursepopupedit",{
     url: "/editcourses/{courseId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/courses/editcoursepopup.html',
     controller: 'coursedetailcontroller'
    })
  .state("app.coursemodules",{  
     url: "/allmodules/{courseId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/modules/allmodule.html',
     controller: 'modulecontroller'
    })
  .state("app.modulepopup",{
     url: "/newmodule",
     templateUrl: 'templates/modules/modulepopup.html',
     controller: 'moduledetailcontroller'
    })
  .state("app.modulepopupedit",{
     url: "/editmodule/{moduleId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/modules/editmodulepopup.html',
     controller: 'moduledetailcontroller'
    })
  .state("app.modulelessons",{
     url: "/alllessons/{moduleId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/lessons/alllesson.html',
     controller: 'lessoncontroller'
    }) 
  .state("app.lessonpopup",{
     url: "/newlesson",
     templateUrl: 'templates/lessons/lessonpopup.html',
     controller: 'lessondetailcontroller'
    })
  .state("app.lessonpopupedit",{
     url: "/editlesson/{lessonId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/lessons/editlessonpopup.html',
     controller: 'lessondetailcontroller'
    })
  .state("app.lessonlos",{
     url: "/alllos/{lessonId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/los/alllo.html',
     controller: 'locontroller'
    })
  .state("app.lopopup",{
     url: "/newlo",
     templateUrl: 'templates/los/lopopup.html',
     controller: 'lodetailcontroller'
    })
  .state("app.lopopupedit",{
     url: "/editlo/{loId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/los/editlopopup.html',
     controller: 'lodetailcontroller'
    })  
  .state("app.loskills",{
     url: "/allskills/{loId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/skills/allskill.html',
     controller: 'skillcontroller'
    })
  .state("app.skillpopup",{
     url: "/newskill",
     templateUrl: 'templates/skills/skillpopup.html',
     controller: 'skilldetailcontroller'
    })
  .state("app.skillpopupedit",{
     url: "/editskill/{skillId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/skills/editskillpopup.html',
     controller: 'skilldetailcontroller'
    })

  /*TILL HERE CIRRCULUM PLAYER*/

  /*NOW ITEM RLUTING*/

  .state('app.itemarea',{
      url: "/itemareas",
      templateUrl: 'templates/areas/itemareas.html',
      controller : 'areascontroller'
    })
  .state('app.item',{
      url: "/itemareas",
      templateUrl: 'templates/areas/itemareas.html',
      controller : 'areascontroller'
    })
  .state('app.itemcourses',{
      url: "/itemcourses/{areaId:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/courses/itemcourses.html',
      controller : 'coursescontroller'
    }) 
  .state('app.itemmodules',{
      url: "/itemmodules/{courseId:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/modules/itemmodules.html',
      controller : 'modulecontroller'
    })
  .state('app.itemlessons',{
      url: "/itemlessons/{moduleId:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/lessons/itemlessons.html',
      controller : 'lessoncontroller'
    })
  .state('app.itemlos',{
      url: "/itemlos/{lessonId:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/los/itemlos.html',
      controller : 'locontroller'
    })
  .state('app.itemtree',{
      url: "/itemtree",
      templateUrl: 'templates/others/itemtree.html'
    })
  .state('app.quemodel',{
      url: "/quemodel",
      templateUrl: 'templates/others/quemodel.html'
    })
  .state('app.itemtype',{
      url: "/itemtype/{lessonId:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/others/itemtype.html',
      controller: 'simplecontroller'
    })
  .state('app.simplequestion',{
      url: "/newsimplequestion/{lessonId1:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/others/simplequestion.html',
      controller: 'itemcontroller'
    })
   .state('app.simplequestionedit',{
      url: "/edititem/{itemId:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/others/simplequestionedit.html',
      controller: 'itemcontroller'
    })
  .state('app.simplepublish1',{
      url: "/simplepublish1",
      templateUrl: 'templates/others/simplepublish1.html',
      controller: 'simplecontroller' 
    }) 
  .state('app.simplepublish2',{ 
      url: "/simplepublish2",
      templateUrl: 'templates/others/simplepublish2.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish3',{
      url: "/simplepublish3",
      templateUrl: 'templates/others/simplepublish3.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish4',{
      url: "/simplepublish4",
      templateUrl: 'templates/others/simplepublish4.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish5',{
      url: "/simplepublish5",
      templateUrl: 'templates/others/simplepublish5.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish6',{
      url: "/simplepublish6",
      templateUrl: 'templates/others/simplepublish6.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish7',{
      url: "/simplepublish7",
      templateUrl: 'templates/others/simplepublish7.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish8',{
      url: "/simplepublish8",
      templateUrl: 'templates/others/simplepublish8.html',
      controller: 'simplecontroller'
    })  
  .state('app.simplepublish9',{
      url: "/simplepublish9",
      templateUrl: 'templates/others/simplepublish9.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish10',{
      url: "/simplepublish10",
      templateUrl: 'templates/others/simplepublish10.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish11',{
      url: "/simplepublish11",
      templateUrl: 'templates/others/simplepublish11.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish12',{
      url: "/simplepublish12",
      templateUrl: 'templates/others/simplepublish12.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish13',{
      url: "/simplepublish13",
      templateUrl: 'templates/others/simplepublish13.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish14',{
      url: "/simplepublish14",
      templateUrl: 'templates/others/simplepublish14.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish15',{
      url: "/simplepublish15",
      templateUrl: 'templates/others/simplepublish15.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish16',{
      url: "/simplepublish16",
      templateUrl: 'templates/others/simplepublish16.html',
      controller: 'simplecontroller'
    })
  .state('app.simplepublish17',{
      url: "/simplepublish17",
      templateUrl: 'templates/others/simplepublish17.html',
      controller: 'simplecontroller'
    })
  .state('app.comprehension',{
      url: "/comprehension",
      templateUrl: 'templates/others/comprehension.html',
      controller: 'simplecontroller'
    })
  .state("app.content.course",{  
     url: "/course",
     templateUrl: 'templates/others/course.html'
    })
  .state('app.content.module',{
      url: "/module",
     templateUrl: 'templates/others/module.html'
    })
  .state("app.content.lession",{
     url: "/lession",
     templateUrl: 'templates/others/lession.html'
    })
  .state('/',{
     url: "",
     templateUrl: 'templates/others/login.html'           
    })
  .state('forgot-password',{
     url: "/forgot-password",
     templateUrl: 'templates/others/forgot-password.html'           
    })
  .state('new-account',{
     url: "/new-account",    
     templateUrl: 'templates/others/new-account.html'      
    })
  .state('app',{
     url: "/app",
     templateUrl: 'templates/others/landingpage.html'
    })
  .state('app.curriculum',{
     url: "/Curriculum",
     templateUrl: 'templates/others/curriculum.html',
     controller: ''
    })
  .state('app.newcourse',{
      url: "/Newcourse",
     templateUrl: 'templates/others/newcourse.html',    
     controller: '' 
    })
  .state('logout',{
      url: "/logout",
      templateUrl: 'templates/others/logout.html' 
    })
  .state('app.dashboard',{
      url: "/dashboard",
      templateUrl: 'templates/others/Dashboard.html'
    })
  .state('app.coursemodel',{
      url: "/coursemodel",
      templateUrl: 'templates/others/coursemodel.html',
      controller: 'areascontroller'
    })
  .state('app.test',{
      url: "/alltestareas",
      templateUrl: 'templates/test/allareas.html',
      controller: 'areascontroller'
    })
  .state('app.testcourses',{
      url: "/alltestcourses/{areaId:[0-9a-fA-F]{1,8}}",
      templateUrl: 'templates/test/allcourses.html',
      controller: 'coursescontroller'
    })
  .state("app.testmodules",{
     url: "/alltestmodules/{courseId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/allmodules.html',
     controller: 'modulecontroller'
    })
  .state("app.moduletest",{
     url: "/alltestmodules/{moduleId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/moduletest.html',
     controller: 'moduletestcontroller'
    })
  .state("app.viewmoduletest",{
     url: "/Testdetails/{TestId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/moduletestdetails.html',
     controller: 'moduletestcontroller'
    })
  .state("app.newmoduletest",{
     url: "/NewModuleTest/{moduleId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/newmoduletest.html',
     controller: 'moduletestdetailcontroller'
    })
  .state("app.editmoduletest",{
     url: "/EditModuleTest/{TestId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/editmoduletest.html',
     controller: 'moduletestdetailcontroller'
    })
  .state("app.testlessons",{
     url: "/alltestlessons/{moduleId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/alllessons.html',
     controller: 'lessoncontroller'
    })
  .state("app.lessontest",{
     url: "/alltestlesson/{lessonId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/lessontest.html',
     controller: 'lessontestcontroller'
    })
  .state("app.viewlessontest",{
     url: "/Testdetails/{TestId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/lessontestdetails.html',
     controller: 'lessontestcontroller'
    })
  .state("app.newlessontest",{
     url: "/NewLessonTest/{lessonId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/newlessontest.html',
     controller: 'lessontestdetailcontroller'
    })
  .state("app.editlessontest",{
     url: "/EditLessonTest/{TestId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/editlessontest.html',
     controller: 'lessontestdetailcontroller'
    })
  .state("app.coursetest",{
     url: "/coursetests/{courseId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/coursetest.html',
     controller: 'coursetestcontroller'
    })
  .state("app.viewcoursetest",{
     url: "/Testdetails/{TestId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/coursetestdetails.html',
     controller: 'coursetestcontroller'
    })
  .state("app.newcoursetest",{
     url: "/NewCourseTest/{courseId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/newcoursetest.html',
     controller: 'coursetestdetailcontroller'
    })
  .state("app.editcoursetest",{
     url: "/EditCourseTest/{TestId:[0-9a-fA-F]{1,8}}",
     templateUrl: 'templates/test/editcoursetest.html',
     controller: 'coursetestdetailcontroller'
    })
});