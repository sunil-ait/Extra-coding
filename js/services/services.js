
/*Define Service module */

angular.module("app.services", ["ngResource"])  /*ng-resource as dependency Injection*/

/*Getting all areas service*/

.factory('Areas', function($resource) {
    return Areas = $resource('http://192.168.1.14:8080/area',{
      areaId: '@id'
      },{
      update : {
    	method: 'PUT'
      }
    })
    Areas.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all courses corresponding to an area*/

.factory('AreaCourse', function($resource) {
    return AreaCourse = $resource('http://192.168.1.14:8080/area/course/:areaId',{
    areaId: '@id'
    },{
	  method: 'GET'
	})
	AreaCourse.prototype.isNew = function() {
	  return (typeof (this.id) === 'undefined');
	};
})

/*Getting  and deleting an area*/

.factory('Area', function($resource) {
    var Area = $resource('http://192.168.1.14:8080/area/:areaId',{
      areaId: '@id'
      },{
      update : {
    	method: 'PUT'
      }
   });

    Area.prototype.isNew = function() {
	  return (typeof (this.id) === 'undefined');
	};
   return Area;
})

/*Getting all courses*/

.factory('Courses', function($resource) {
    return Courses = $resource('http://192.168.1.14:8080/area/:areaId/course',{
      areaId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Courses.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting and deleting a course*/

.factory('Course', function($resource) {
    return Course = $resource('http://192.168.1.14:8080/course/:courseId',{
      courseId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   });

    Course.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

/*Getting all modules corresponding to a course*/

.factory('Coursemodules', function($resource) {
    
    return Coursemodules = $resource('http://192.168.1.14:8080/course/module/:courseId',{
      courseId: '@id'
    },{
      method: 'GET'
    })
    AreaCourse.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

/*Getting all modules */

.factory('Modules', function($resource) {
    return Modules = $resource('http://192.168.1.14:8080/course/:courseId/module',{
      courseId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Modules.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting and deleting the module*/

.factory('Module', function($resource) {
    return Module = $resource('http://192.168.1.14:8080/module/:moduleId',{
      moduleId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Module.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all lessons corresponding to a module*/

.factory('ModuleLessons', function($resource) {
    return ModuleLessons = $resource('http://192.168.1.14:8080/module/lesson/:moduleId',{
      moduleId: '@id'
    },{
      method: 'GET'
    })
    ModuleLessons.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
 })

/*Getting all learning objectives corresponding to a lesson*/

.factory('LessonLos', function($resource) {
    return LessonLos = $resource('http://192.168.1.14:8080/lesson/lo/:lessonId',{
      lessonId: '@id'
    },{
      method: 'GET'
    })
    LessonLos.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

/*Getting and deleting a lesson*/

.factory('Lesson', function($resource) {
    return Lesson = $resource('http://192.168.1.14:8080/lesson/:lessonId',{
      lessonId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Lesson.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all the lesson*/

.factory('Lessons', function($resource) {
    return Lessons = $resource('http://192.168.1.14:8080/module/:moduleId/lesson',{
      moduleId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Lessons.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting learning objective and deleting*/

.factory('Lo', function($resource) {
    return Lo = $resource('http://192.168.1.14:8080/lo/:loId',{
      loId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Lo.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all learning objectives*/

.factory('Los', function($resource) {
    return Los = $resource('http://192.168.1.14:8080/lesson/:lessonId/lo',{
      lessonId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Los.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all skills corresponding to a skill*/

.factory('LoSkills', function($resource) {
    return LoSkills = $resource('http://192.168.1.14:8080/lo/skill/:loId',{
      loId: '@id'
    },{
      method: 'GET'
    })
    LoSkills.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

/*Getting skill and deleting skills */

.factory('Skill', function($resource) {
    return Skill = $resource('http://192.168.1.14:8080/skill/:skillId',{
      skillId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Skill.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all skills*/

.factory('Skills', function($resource) {
    return Skills = $resource('http://192.168.1.14:8080/lo/:loId/skill',{
      loId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Skills.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting an Item and Deleting an Item*/

.factory('Item', function($resource) {
    return Items = $resource('http://192.168.1.14:8080/item/:itemId',{
      itemId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Item.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

/*Getting all Items corresponding to lesson*/

.factory('Items', function($resource) {
  return Items = $resource('http://192.168.1.14:8080/lesson/:lessonId/item',{
    lessonId: '@id'
    },{
    update : {
      method: 'PUT'
    }
  })
  Items.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

.factory('ItemMapping', function($resource) {
    return ItemMapping = $resource('http://192.168.1.14:8080/item/:itemId/skill/:skillId',{
      itemId: '@id',
      skillId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   ItemMapping.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

/*Getting all items*/

.factory('AllItems', function($resource) {
  return AllItems = $resource('http://192.168.1.14:8080/item');  
})

/*Getting all course test*/

.factory('AllCourseTests', function($resource) {
  return AllCourseTests = $resource('http://192.168.1.14:8080/course/test');
})

/*Getting Course Test and deleting test*/

.factory('Test', function($resource) {
    return Test = $resource('http://192.168.1.14:8080/test/:TestId',{
      TestId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   Test.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

/*Getting all Course Tests*/

.factory('Tests', function($resource) {
    return Tests = $resource('http://192.168.1.14:8080/course/:courseId/test',{
      courseId: '@id'
      },{
      update : {
      method: 'PUT'
      }
    })
    Tests.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all Modules tests*/

.factory('AllModuleTests', function($resource) {
  return AllModuleTests = $resource('http://192.168.1.14:8080/module/test');
})

/*Getting module test and deleting test*/

.factory('MTest', function($resource) {
    return Test = $resource('http://192.168.1.14:8080/test/:TestId',{
      TestId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   MTest.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

/*Getting all test corresponding to module*/

.factory('MTests', function($resource) {
    return MTests = $resource('http://192.168.1.14:8080/module/:moduleId/test',{
      moduleId: '@id'
      },{
      update : {
      method: 'PUT'
      }
    })
    MTests.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all lesson test*/
.factory('AllLessonTests', function($resource) {
  return AllLessonTests = $resource('http://192.168.1.14:8080/lesson/test');
})

/*Getting lesson test and deleting */

.factory('LTest', function($resource) {
    return LTest = $resource('http://192.168.1.14:8080/test/:TestId',{
      TestId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   LTest.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

/*Getting all testes corresponding to lesson*/

.factory('LTests', function($resource) {
    return Tests = $resource('http://192.168.1.14:8080/lesson/:lessonId/test',{
      lessonId: '@id'
      },{
      update : {
      method: 'PUT'
      }
    })
    LTests.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting testitem corresponding to test*/

.factory('TestItems', function($resource) {
    return TestItems = $resource('http://192.168.1.14:8080/test/:TestId/testitem',{
      TestId: '@id'
      },{
      update : {
      method: 'GET'
      }
    })
    TestItems.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting all coursetest item*/

.factory('CourseTestItems', function($resource) {
    return CourseTestItems = $resource('http://192.168.1.14:8080/testitem',{
      TestId: '@id'
      },{
      update : {
      method: 'PUT'
      }
    })
    TestItems.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Getting test item and deleting*/

.factory('CourseTestItem', function($resource) {
    return CourseTestItem = $resource('http://192.168.1.14:8080/testitem/:ItemId',{
      ItemId: '@id'
      },{
      update : {
        method: 'PUT'
      }
   })
   CourseTestItem.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

/*Coursetestitem post means publish the test*/

.factory('CoursePostTestItem', function($resource) {
    return CoursePostTestItem = $resource('http://192.168.1.14:8080/publish/test/:TestId',{
      TestId: '@id'
      },{
      update : {
        method: 'GET'
      }
   })
   CoursePostTestItem.prototype.isNew = function() {
    return (typeof (this.id) === 'undefined');
  };  
})

/*Adjecency of Skill Service*/

.factory('Adjecency', function($resource) {
    return Adjecency = $resource('http://192.168.1.14:8080/skillp/:skillpId/skillc/:skillcId',{
      skillpId: '@id',
      skillcId: '@id'
      },{
      update : {
      method: 'GET', 
      isArray: true
      }
    })
    Adjecency.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Direct All Skills getting Service*/

.factory('Allskillgraphs', function($resource) {
    return Allskillgraphs = $resource('http://192.168.1.14:8080/skill/skillgraph/:skillpId',{
      skillpId: "@id"
    },{
      method: 'GET'
    })
    Allskillgraphs.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

.factory('SkillgraphDelete', function($resource) {
    return SkillgraphDelete = $resource('http://192.168.1.14:8080/skillp/:skillpId/skillc/:skillcId',{
      skillpId: "@id",
      skillcId: "@id"
    },{
      method: 'DELETE'
    })
    SkillgraphDelete.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

/*Uploading the file service*/

.factory('Allimages', function($resource) {
    return Allimages = $resource('http://192.168.1.14:8080/files/image',{
      },{
      update : {
      method: 'GET'
      }
    })
    Allimages.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

/*Searching image service*/

.factory('ImageSearch', function($resource) {
    return ImageSearch = $resource('http://192.168.1.14:8080/files/search/image/tag/:tagname',{
      tagname: '@id'
      },{
      update : {
      method: 'GET'
      }
    })
    ImageSearch.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})

 /*Publishing the Images to Server*/

.factory('ImagePublish', function($resource) {
    return ImagePublish = $resource('http://192.168.1.14:8080/files/publish/image/:imageId',{
      imageId: '@id'
      },{
      update : {
      method: 'GET'
      }
    })
    ImagePublish.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };  
})
