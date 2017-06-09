'use strict';

var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
//var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider

  .when('/', {
    templateUrl : '/pages/home.html',
    controller  : ''
  })

  .when('/wildGoa', {
    templateUrl : '/pages/wildGoa.html',
    controller  : ''
  })
  
  .when('/birds', {
    templateUrl : '/pages/birds.html',
    controller  : 'FaunaCtrl'
  })

  .when('/reptiles', {
    templateUrl : '/pages/reptiles.html',
    controller  : 'FaunaCtrl'
  })

  .when('/mammals', {
    templateUrl : '/pages/mammals.html',
    controller  : 'FaunaCtrl'
  })

  .when('/amphibians', {
    templateUrl : '/pages/famphibians.html',
    controller  : 'FaunaCtrl'
  })

  .when('/wildlife', {
    templateUrl : '/pages/wildLife.html',
    controller  : ''
  })

  .when('/speciesInThreat', {
    templateUrl : '/pages/threatSpecies.html',
    controller  : ''
  })

  .when('/raids', {
    templateUrl : '/pages/raids.html',
    controller  : ''
  })

  .when('/firstAid', {
    templateUrl : '/pages/firstAid.html',
    controller  : ''
  })

  .when('/individualRole', {
    templateUrl : '/pages/individualRole.html',
    controller  : ''
  })

  .when('/trainingCamp', {
    templateUrl : '/pages/trainingCamp.html',
    controller  : ''
  })

   .when('/news', {
    templateUrl : '/pages/news.html',
    controller  : ''
  })

  .when('/videos', {
    templateUrl : '/pages/videos.html',
    controller  : ''
  })

  .when('/ourSuccess', {
    templateUrl : '/pages/ourSuccess.html',
    controller  : ''
  })

  .when('/contactUs', {
    templateUrl : '/pages/contact.html',
    controller  : ''
  })

  .when('/rescueOperations', {
    templateUrl : '/pages/rescue.html',
    controller  : ''
  })

  .otherwise({redirectTo: '$routeProvider'});
});

/*
app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from AboutController';
});

app.controller('ResumeController', ['$scope', '$window', function ($scope, $window) {
    $scope.redirectToGoogle = function () {
        $window.open('https://drive.google.com/open?id=0BwbhQ5M2CNxWVW5lSzA0MUoyalk', '_blank');
    };
}]);

app.controller('ProjectDescController', CarouselDemoCtrl);

function CarouselDemoCtrl($scope, $http, $sce){
 
  $http.get("https://quarkbackend.com/getfile/dessaikishori123/projectlist")
            .then(function(response) {
              $scope.projectList = response.data;       
              },
             function() {
                console.log('could not find someFile.json');
            });
  
  $scope.trustSrc = function(src) {
       // trust an insecure url
       console.log(src);
       return $sce.trustAsResourceUrl(src);
    };
}

*/
app.controller('CarouselDemoCtrl', CarouselDemoCtrl);

function CarouselDemoCtrl($scope){
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.activeSlide = 0;
  $scope.slides = [
    {
      image: 'images/slider/birdie.jpg'
    },
    {
      image: 'images/slider/bear.jpg'
    },
    {
      image: 'images/slider/cheetah.jpg'
    },
    {
      image: 'images/slider/elephant.jpg'
    },
     {
      image: 'images/slider/deer.jpg'
    },
    {
      image: 'images/slider/crocodile.jpg'
    },
    {
      image: 'images/slider/snake.jpg'
    },
     {
      image: 'images/slider/wildGoa.jpg'
    }
  ];
}

app.directive('autoHeader', function () {
  return {
    restrict: 'E',
    scope: {
      title: '@'
    },
    templateUrl: '/pages/autoHeader.html',
    link: function(scope, element, attrs){
    }
  };
})


app.controller('FaunaCtrl', function($scope){
 $scope.birds = [ { "title": "Peregrine (Shaheen) Falcon (Falco peregrinus)", "imgUrl": ["images/birds/image365.jpg"]  },
                  { "title": "Blake-backed Kingfisher (Ceyx erithaca)", "imgUrl": ["images/birds/image367.jpg"] },
                  { "title": "Greater coucal (Bhardwaj) (Centropus sinensis)", "imgUrl": ["images/birds/image368.jpg"]  },
                  { "title": "Crested Serpent eagle (Spilomis cheela)", "imgUrl": ["images/birds/image369.jpg", "images/birds/image370.jpg"] },
                  { "title": "Common Barn-Owl (Tyto alba)", "imgUrl": ["images/birds/image372.jpg", "images/birds/image374.jpg"]  },
                  { "title": "Brown Fish- Owl", "imgUrl": ["images/birds/image009.jpg"] },
                  { "title": "Brown Wood – Owl (Strix leptogrammica)", "imgUrl": ["images/birds/image014.jpg"]  },
                  { "title": "Brown Hawk-Owl", "imgUrl": ["images/birds/image024.jpg", "images/birds/image026.jpg"] },
                  { "title": "Rock Pigeon (Columba livia)", "imgUrl": ["images/birds/image378.jpg"]  },
                  { "title": "Indian Peafowl (Pavo cristatus)", "imgUrl": ["images/birds/image379.jpg", "images/birds/image380.jpg"] },
                  { "title": "Brahmini kite (Haliastur indus)", "imgUrl": ["images/birds/image028.jpg", "images/birds/image033.jpg"]  },
                  { "title": "Black Kite (Milvus migrans)", "imgUrl": ["images/birds/image037.jpg"] },
                  { "title": "Malabar Grey- Hornbill (Ocyceros griseus)", "imgUrl": ["images/birds/image040.jpg"]},
                  { "title": "Asian Koel (Eudynamys scolopaceus)", "imgUrl": ["images/birds/image386.jpg"]},
                  { "title": "Red-wattled Lepwing (Vanellus indicus)", "imgUrl": ["images/birds/1.jpg"]},
                  { "title": "Jungle Nightjar", "imgUrl": ["images/birds/2.jpg"]}
                 ];

 $scope.reptiles = [  {"title": "Spectacled Cobra (Naja naja)", "imgUrl": ["images/reptiles/image306.jpg"] },
                      {"title": "Common Krait (Bungarus caeruleus)", "imgUrl": ["images/reptiles/image304.jpg"] },
                      {"title": "Partial Albino Common Krait (Bungarus caeruleus)", "imgUrl": ["images/reptiles/image305.jpg"] },
                      {"title": "Saw-Scaled Viper (Echis carinatus)", "imgUrl": ["images/reptiles/image307.jpg"] },
                      {"title": "Striped Coral Snake (Calliophis nigrescens)", "imgUrl": ["images/reptiles/image309.jpg"] },
                      {"title": "Bamboo Pit Viper (Trimeresurus gramineus)", "imgUrl": ["images/reptiles/image310.jpg"] },
                      {"title": "Malabar Pit Vipers1 (Trimeresurus malabaricus)", "imgUrl": ["images/reptiles/image311.jpg", "images/reptiles/image312.jpg"] },
                      {"title": "King Cobra (Ophiophagus hannah)", "imgUrl": ["images/reptiles/image315.jpg", "images/reptiles/image316.jpg" ] },
                      {"title": "Short Sea Snake (Lapemis Curtus)", "imgUrl": ["images/reptiles/image317.jpg"] },
                      {"title": "Hook-nosed Sea Snake (Enhydrina schistosa)", "imgUrl": ["images/reptiles/image318.jpg"] },
                      {"title": "Common Vine Snake (Ahaetulla nasuta)", "imgUrl": ["images/reptiles/image296.jpg"] },
                      {"title": "Brown Vine Snake (Ahaetulla pulverulenta)", "imgUrl": ["images/reptiles/image297.jpg"] },
                      {"title": "Common Catsnake (Boiga trigonata)", "imgUrl": ["images/reptiles/image298.jpg"] },
                      {"title": "Ornate Flying Snake (Chrysopelea ornata)", "imgUrl": ["images/reptiles/image300.jpg"]},
                      {"title": "Forsten Cat Snake (Boiga trigonata)", "imgUrl": ["images/reptiles/image301.jpg"]},
                      {"title": "Dogface Watersnake (Cerberus rynchops)", "imgUrl": ["images/reptiles/image302.jpg"]},
                      {"title": "Travancore Wolf Snake (Lycodon travancoricus)", "imgUrl": ["images/reptiles/image119.jpg"]},
                      {"title": "Stiped Keelbacks (Amphiesma Stolatum)", "imgUrl": ["images/reptiles/image121.jpg"]},
                      {"title": "Pied-belly Shieldtail (Melanophidium  punctatum)", "imgUrl": ["images/reptiles/image153.jpg"]},
                      {"title": "Bronzebacke tree Snake (Dendrelaphis tristis)", "imgUrl": ["images/reptiles/image167.jpg"]},
                      {"title": "Painted Bronzeback (Dendrelaphis pictus)", "imgUrl": ["images/reptiles/image173.jpg"]},
                      {"title": "Montane Trinket (Coelognathus helena monticollaris)", "imgUrl": ["images/reptiles/image176.jpg"]},
                      {"title": "Dumeril’s Black- headed Snake (Sibynophis subpunctatus)", "imgUrl": ["images/reptiles/image192.jpg"]},
                      {"title": "Common Wolf Snake (Lycodon aulicus)", "imgUrl": ["images/reptiles/image202.jpg", "images/reptiles/image210.jpg"]},
                      {"title": "Common Blind or Worm Snake (Ramphotyphlops braminus)", "imgUrl": ["images/reptiles/image224.jpg"]},
                      {"title": "Beaked Blind or Worm Snake (Grypotyphlops acutus)", "imgUrl": ["images/reptiles/image232.jpg"]}
                  ];

 $scope.mammals = [ {"title": "Gaur (Bos gaurus)", "imgUrl": ["images/mammals/image365.jpg"]},
                    {"title": "Bonnet Macaque (Macaca radiata)", "imgUrl": ["images/mammals/image347.jpg"]},
                    {"title": "Indian Pangolin", "imgUrl": ["images/mammals/image334.jpg"]},
                    {"title": "Indian Giant squirrel (Ratufa indica)", "imgUrl": ["images/mammals/image121.jpg"]},
                    {"title": "Sloth Bear (Melureus ursinus)", "imgUrl": ["images/mammals/image231.jpg"]},                    
                    {"title": "Jackal [Canis aureus]", "imgUrl": ["images/mammals/image242.jpg"]}
                  ];

$scope.amphibians = [ {"title": "Common Tree Frog (Polypedates maculatus)", "imgUrl": ["images/amphibians/image396.jpg"]},                    
                    {"title": "Indian Bull Frog (Hoplobatrachus tigerinus)", "imgUrl": ["images/amphibians/image389.jpg", "images/amphibians/image390.jpg"]},
                    {"title": "Fungoid Frog (Rana malabarica)", "imgUrl": ["images/amphibians/image391.jpg"]},
                    {"title": "Skittering Frog (Euphlyctis cyanophlyctis)", "imgUrl": ["images/amphibians/image392.jpg"]},
                    {"title": "Caecilian", "imgUrl": ["images/amphibians/image387.jpg", "images/amphibians/image388.jpg"]},
                    {"title": "Burrowing Frog", "imgUrl": ["images/amphibians/image393.jpg"]},
                    {"title": "Balloon Frog (Uperodon globulosum)", "imgUrl": ["images/amphibians/image394.jpg"]},
                    {"title": "Rao's Burrowing Frog", "imgUrl": ["images/amphibians/image395.jpg"]},                   
                    {"title": "Common Indian Toad (Bufo melanostictus)", "imgUrl": ["images/amphibians/image397.jpg", "images/amphibians/image398.jpg"]}
                  ];
})

// when using '=' provide the name of the array/object in the element's attribute
app.directive('displayList', function () {
  return {
    restrict: 'E',
    scope: {
      list : "="
    },
    template: "<center><div ng-repeat='item in list track by $index'> <span class='subHeader' style='display: block;'> {{item.title}} </span> \
    <p ng-repeat='slide in item.imgUrl track by $index' style='display: inline;'> <img ng-src={{slide}} height='320'/> </p> <p style='height: 25px;'>&nbsp;</p></div></center>",
   // templateUrl: '/pages/autoHeader.html',
    link: function(scope, element, attrs){
    }
  };
})