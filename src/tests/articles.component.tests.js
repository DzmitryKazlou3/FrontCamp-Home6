describe('Articles component', function() {

  var $controller,
      $rootScope,
      ArticlesController,
      $articleScope,
      articleServiceMock,
      $rootScope,
      $mdDialogMock,
      EVENTS,
      newArticleId = 123,
      $q,
      newArticle = {
          title: "new article title",
          text: "new article test"
      };


    // Before each test load bloglog module
  beforeEach(angular.mock.module('bloglog'));
  
  
  beforeEach(inject(function(_$controller_, _$rootScope_, _EVENTS_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $articleScope = _$rootScope_.$new();
    $q = _$q_;
    EVENTS = _EVENTS_;

    articleServiceMock = {

      getArticlesByFilter : function(filterData, currentPage, pageSize){
          return $q.defer().resolve({
            data: [{id:newArticleId}],
            count: 20
          });
      },

      addArticle: function(article){
        article.id = newArticleId;
        return Promise.resolve(article);
      }

    };

    $mdDialogMock = {
      show: function(){
          return Promise.resolve(newArticle);
      }
    }

    ArticlesController = $controller('ArticlesController', {
      $scope: $articleScope,
      articleService: articleServiceMock,
      $mdDialog: $mdDialogMock

    });

    // Spy on our service call but allow it to continue to its implementation
    spyOn(articleServiceMock, "getArticlesByFilter").and.callThrough();
    spyOn(articleServiceMock, "addArticle").and.callThrough();
  }));


  it('ArticlesController should be defined', function() {    
    expect(ArticlesController).toBeDefined();
  });

  it('Check "loadArticles" function', function() {
    
    let asd = $articleScope;
    $rootScope.$broadcast(EVENTS.SEARCH, {});    
    
    expect(articleServiceMock.getArticlesByFilter).toHaveBeenCalled();
    
    setTimeout(function() { 
        expect(ArticlesController.articles[0].id).toBe(newArticleId);
        expect(ArticlesController.pageCount).toBe(2);
    }, 0);
    
  });

  it('Check "addArticle" function', function() {
    
    ArticlesController.addArticle();

    //expect(articleServiceMock.addArticle).toHaveBeenCalled();

    // setTimeout(function () {
    //   expect(articleServiceMock.addArticle).toHaveBeenCalled();
    //   console.log(true);
    // }, 0);
    // // let asd = $articleScope;
    // $rootScope.$broadcast(EVENTS.SEARCH, {});
    
    // $rootScope.$apply();
    // $articleScope.$apply();
    // $articleScope.$digest();
    // let df = ArticlesController;
    // expect(articleServiceMock.getArticlesByFilter).toHaveBeenCalled();
    
    // setTimeout(function() { 
    //     expect(ArticlesController.articles[0].id).toBe(newArticleId);
    //     expect(ArticlesController.pageCount).toBe(2);
    // }, 0);
    
  });

});