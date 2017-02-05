describe('Article form', function() {

  var $controller,
      $rootScope,
      ArticleDetailController,
      $articleScope,
      articleServiceMock,
      $rootScope,
      $mdDialogMock,
      EVENTS,
      newArticleId = 123,
      $q,
      getArticleByIdDefer,
      updateArticleDefer,
      mdDialogDefer,
      newArticle;

    // Before each test load bloglog module
  beforeEach(angular.mock.module('bloglog'));
  
  
  beforeEach(inject(function (_$controller_, _$rootScope_, _EVENTS_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $articleScope = _$rootScope_.$new();
    $q = _$q_;
    EVENTS = _EVENTS_;

    newArticle = {
      id: newArticleId,
      title: "new article title",
      text: "new article test",
      user: {
        user_id: "someuserId",
        name: "user name"
      }
    }

    articleServiceMock = {

      getArticleById: function () {
        getArticleByIdDefer = $q.defer();
        return getArticleByIdDefer.promise;
      },

      updateArticle: function (article) {
        updateArticleDefer = $q.defer();
        return updateArticleDefer.promise;
      }

    };

    $mdDialogMock = {
      show: function () {
        mdDialogDefer = $q.defer();
        return mdDialogDefer.promise;
      }
    }

    ArticleDetailController = $controller('ArticleDetailController', {
      $scope: $articleScope,
      articleService: articleServiceMock,
      $mdDialog: $mdDialogMock

    });

    // Spy on our service call but allow it to continue to its implementation
    spyOn(articleServiceMock, "getArticleById").and.callThrough();
    spyOn(articleServiceMock, "updateArticle").and.callThrough();
    spyOn(articleServiceMock, "deleteArticle").and.callThrough();deleteArticle
  }));


  it('ArticleDetailController should be defined', function() {    
    expect(ArticleDetailController).toBeDefined();
  });

  it('Check "loadArticle"', function() {
    ArticleDetailController.loadArticle();
    getArticleByIdDefer.resolve(newArticle);
    
    // wait for resolve promises.
    $rootScope.$apply();

    // since we have spyon the "getArticleById" - check that "getArticleById" has benn called.
    expect(articleServiceMock.getArticleById).toHaveBeenCalled();
    
    // check that when "loadArticles" finishes - we have the correct valuen in the controller. 
    expect(ArticleDetailController.article.id).toBe(newArticleId);
    expect(ArticleDetailController.article.user.user_id).toBe(newArticle.user.user_id);

  });

  it('Check "editArticle"', function() {
    var changedTitle = "changedTitle";

    ArticleDetailController.editArticle(newArticle);
    newArticle.title = changedTitle;

    mdDialogDefer.resolve(newArticle);
    $rootScope.$apply();

    updateArticleDefer.resolve({data: newArticle});
    $rootScope.$apply();

    expect(articleServiceMock.updateArticle).toHaveBeenCalled();
    expect(ArticleDetailController.article.title).toBe(changedTitle);
    
  });
  
  it('Check "deleteArticle"', function() {
    var changedTitle = "changedTitle";

    ArticleDetailController.deleteArticle(newArticle);

    mdDialogDefer.resolve(newArticle);
    $rootScope.$apply();

    updateArticleDefer.resolve({data: newArticle});
    $rootScope.$apply();

    expect(articleServiceMock.updateArticle).toHaveBeenCalled();
    expect(ArticleDetailController.article.title).toBe(changedTitle);
    
  });

});