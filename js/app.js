'use strict';

/*Defining the Module*/

var app = angular.module("app", ['app.controllers','app.services','ngFileUpload','xeditable','ui.router','ui.bootstrap','ngCkeditor']); /*Dependency Injection*/

/*xeditable bootstrap theme*/

app.run(function(editableOptions){
  editableOptions.theme = 'bs3';
});

/*Configuration of UI-Routing*/

app.config(function($stateProvider,$urlRouterProvider){
$stateProvider
  .state("app.content",{
    url: "/contentareas",
    templateUrl: 'templates/areas/contentareas.html',
    controller: 'areascontroller'
  })
  .state("app.contentareacourses",{  
    url: "/Contentareacourses/{areaId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/courses/contentcourses.html',
    controller: 'coursescontroller'
  })
  .state("app.contentcoursemodules",{  
    url: "/Contentsallmodules/{courseId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/modules/contentmodules.html',
    controller: 'modulecontroller'
  })
  .state("app.contentmodulelessons",{
    url: "/Contentsalllessons/{moduleId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/lessons/contentlessons.html',
    controller: 'lessoncontroller'
  })
  .state("app.contentlessonlos",{
    url: "/contentsalllos/{lessonId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/los/contentlos.html',
    controller: 'locontroller'
  })
  .state("app.contentloskills",{
    url: "/contentsallskills/{loId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/skills/contentskills.html',
    controller: 'skillcontroller'
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
  .state("app.skillpopupeditckeditor",{
    url: "/editskillcontent/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/skills/ckeditor.html',
    controller: 'skilldetailcontroller'
  })

  /*END HERE CIRRCULUM PLAYER*/


  /*NOW ITEM MANAGHER STARTING*/

/*.state('app.itemarea',{
      url: "/itemareas",
      templateUrl: 'templates/areas/itemareas.html',
      controller : 'areascontroller'
    })*/

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
  .state('app.itemskills',{
    url: "/itemskills/{loId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/skills/itemskills.html',
    controller : 'skillcontroller'
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
  .state('app.comprehension',{
    url: "/comprehension/{lessonId2:[0-9a-fA-F]{1,8}}",
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
  .state('logout',{
    url: "/logout",
    templateUrl: 'templates/others/logout.html' 
    })
  .state('app.dashboard',{
    url: "/dashboard",
    templateUrl: 'templates/others/Dashboard.html'
  })
  
  /*TEST MANAGER STRARTING*/

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
  .state("app.testsimplequestion",{
    url: "/Addsimplequestion/{TestId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/test/newcoursetestsimplequestion.html',
    controller: 'coursetestitemdetailcontroller'
  })
  .state("app.edittestsimplequestion",{
    url: "/Editsimplequestion/{ItemId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/test/edittestsimplequestion.html',
    controller: 'coursetestitemdetailcontroller'
  })
  .state("app.comprehensiontestitem",{
    url: "/comprehensiontestitem/{TestId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/test/newcomprehesionquestions.html'
  })
  .state("app.comprehension.views",{
    url: "Item/{Itemtype:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/items/template.html',
    controller: "itemcontroller"
  })
  .state("app.adjecencies",{
    url: "/adjecencies/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/skills/adjecencies.html',
    controller: 'Skilladdingcontroller'
  })
  .state("app.areagraph",{
    url: "/areagraph",
    templateUrl: 'templates/areas/areagraph.html'
  })
  .state("app.imagearea",{
    url: "/imageareas",
    templateUrl: 'templates/image/imageareas.html',
    controller: 'areascontroller'
  })
  .state("app.imageareacourses",{
    url: "/imagecourses/{areaId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imagecourses.html',
    controller: 'coursescontroller'
  })
  .state("app.imagecoursemodules",{
    url: "/imagecoursemodules/{courseId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imagecoursemodules.html',
    controller: 'modulecontroller'
  })
  .state("app.imagemodulelessons",{
    url: "/imagemodulelessons/{moduleId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imagemodulelessons.html',
    controller: 'lessoncontroller'
  })
  .state("app.imagelessonlos",{
    url: "/imagelessonlos/{lessonId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imagelessonlos.html',
    controller: 'locontroller'
  })
  .state("app.imageloskills",{
    url: "/imageloskills/{loId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imageloskills.html',
    controller: 'skillcontroller'
  })
  .state("app.imagelisting",{
    url: "/imagelisting/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imagelisting.html',
    controller: 'imagelistingcontroller'
  })
  .state("app.images",{
    url: "/images/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imagemanager.html',
    controller: 'Imageuploadcontroller'
  })
  .state("app.searchresult",{
    url: "/Imagesearchresults/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/image/imagesearchresults.html',
    controller: 'imagesearchingcontroller'
  })

  /*Its for videos*/

  .state("app.videoareas",{
    url: "/videoareas",
    templateUrl: 'templates/video/videoareas.html',
    controller: 'areascontroller'
  })
  .state("app.videoareacourses",{
    url: "/videocourses/{areaId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'temlpates/video/imagvideocourses.html',
    controller: 'coursescontroller'
  })
  .state("app.videocoursemodules",{
    url: "/videocoursemodules/{courseId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/video/videocoursemodules.html',
    controller: 'modulecontroller'
  })
  .state("app.videomodulelessons",{
    url: "/videomodulelessons/{moduleId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/video/videomodulelessons.html',
    controller: 'lessoncontroller'
  })
  .state("app.videolessonlos",{
    url: "/videolessonlos/{lessonId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/video/videolessonlos.html',
    controller: 'locontroller'
  })
  .state("app.videoloskills",{
    url: "/videoloskills/{loId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/video/videoloskills.html',
    controller: 'skillcontroller'
  })
  .state("app.videolisting",{
    url: "/videolisting/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/video/videolisting.html',
    controller: 'videolistingcontroller'
  })
  .state("app.videos",{
    url: "/videos/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/video/imagemanager.html',
    controller: 'videouploadcontroller'
  })
  .state("app.videosearchresult",{
    url: "/videosearchresults/{skillId:[0-9a-fA-F]{1,8}}",
    templateUrl: 'templates/video/videosearchresults.html',
    controller: 'videosearchingcontroller'
  })
});