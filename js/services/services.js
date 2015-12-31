angular.module("app.services", ["ngResource"])

.factory('Areas', function($resource) {
    return Areas = $resource('http://192.168.1.12:8080/area',{
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

.factory('AreaCourse', function($resource) {
    return AreaCourse = $resource('http://192.168.1.12:8080/area/course/:areaId',{
    areaId: '@id'
    },{
	  method: 'GET'
	})
	AreaCourse.prototype.isNew = function() {
	  return (typeof (this.id) === 'undefined');
	};
})

.factory('Area', function($resource) {
    var Area = $resource('http://192.168.1.12:8080/area/:areaId',{
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

.factory('Courses', function($resource) {
    return Courses = $resource('http://192.168.1.12:8080/area/:areaId/course',{
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

.factory('Course', function($resource) {
    return Course = $resource('http://192.168.1.12:8080/course/:courseId',{
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

.factory('Coursemodules', function($resource) {
    
    return Coursemodules = $resource('http://192.168.1.12:8080/course/module/:courseId',{
      courseId: '@id'
    },{
      method: 'GET'
    })
    AreaCourse.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

.factory('Modules', function($resource) {
    return Modules = $resource('http://192.168.1.12:8080/course/:courseId/module',{
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

.factory('Module', function($resource) {
    return Module = $resource('http://192.168.1.12:8080/module/:moduleId',{
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

.factory('ModuleLessons', function($resource) {
    return ModuleLessons = $resource('http://192.168.1.12:8080/module/lesson/:moduleId',{
      moduleId: '@id'
    },{
      method: 'GET'
    })
    ModuleLessons.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
 })

.factory('LessonLos', function($resource) {
    return LessonLos = $resource('http://192.168.1.12:8080/lesson/lo/:lessonId',{
      lessonId: '@id'
    },{
      method: 'GET'
    })
    LessonLos.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

.factory('Lesson', function($resource) {
    return Lesson = $resource('http://192.168.1.12:8080/lesson/:lessonId',{
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

.factory('Lessons', function($resource) {
    return Lessons = $resource('http://192.168.1.12:8080/module/:moduleId/lesson',{
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

.factory('Lo', function($resource) {
    return Lo = $resource('http://192.168.1.12:8080/lo/:loId',{
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

.factory('Los', function($resource) {
    return Los = $resource('http://192.168.1.12:8080/lesson/:lessonId/lo',{
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

.factory('LoSkills', function($resource) {
    return LoSkills = $resource('http://192.168.1.12:8080/lo/skill/:loId',{
      loId: '@id'
    },{
      method: 'GET'
    })
    LoSkills.prototype.isNew = function() {
      return (typeof (this.id) === 'undefined');
    };
})

.factory('Skill', function($resource) {
    return Skill = $resource('http://192.168.1.12:8080/skill/:skillId',{
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

.factory('Skills', function($resource) {
    return Skills = $resource('http://192.168.1.12:8080/lo/:loId/skill',{
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

.factory('Item', function($resource) {
    return Items = $resource('http://192.168.1.12:8080/item/:itemId',{
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

.factory('Items', function($resource) {
  return Items = $resource('http://192.168.1.12:8080/lesson/:lessonId/item',{
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

.factory('AllItems', function($resource) {
  return AllItems = $resource('http://192.168.1.12:8080/item');  
});