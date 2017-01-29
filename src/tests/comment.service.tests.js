describe('Comment service', function() {
  
  const CommentsRoute = '';

  var commentService,
      $q,
      $httpBackend,
      URLS;

  let httpInterceptorService =
    {
      request: function(config){ return config;},
      responseError: function(responce){ return responce;}
    };
  
    // Before each test load bloglog module
  beforeEach(angular.mock.module('bloglog'));
  beforeEach(
    module(function ($provide) {
      $provide.value('httpInterceptorService', httpInterceptorService);
    })
  );
  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_commentService_, _$q_, _$httpBackend_, _URLS_) {
    commentService = _commentService_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
    URLS = _URLS_;

    // Spy on our service call but allow it to continue to its implementation
    spyOn(commentService, "add").and.callThrough();
    spyOn(commentService, "getComments").and.callThrough();
  }));




  it('has defined "add"', function() {    
    expect(commentService.add).toBeDefined();
  });

  it('Check "add" function', function() {
    let responce = {
        success: true
    };

    let article_id = 1;

    let resultData;
    
    // Declare the endpoint we expect our service to hit and provide it with our mocked return values
    $httpBackend
      .whenPOST(URLS.BASE + URLS.ARTICLES + article_id + "/" + URLS.COMMENTS + "add")
      .respond(function (method, url, data, headers) {
        return [200, responce, {}];
      });
    
    expect(commentService.add).not.toHaveBeenCalled();
    
    commentService.add(article_id, {})
    .then(result => {
         resultData = result;
    });

    // Flush pending HTTP requests
    $httpBackend.flush();

    expect(commentService.add).toHaveBeenCalled();
    expect(resultData.success).toBeDefined();
    expect(resultData.success).toEqual(true);

  });
  
  it('has defined "getComments"', function() {    
    expect(commentService.getComments).toBeDefined();
  });

    it('Check "getComments" function', function() {
    let responce = {
        success: true
    };

    let article_id = 1,
        pageNumber = 1,
        pageSize = 1;

    let resultData;
    
    // Declare the endpoint we expect our service to hit and provide it with our mocked return values
    $httpBackend
      .whenGET(URLS.BASE + URLS.ARTICLES + article_id + "/" + URLS.COMMENTS + pageNumber + '/' + pageSize)
      .respond(function (method, url, data) {
        return [200, responce, {}];
      });
    
    expect(commentService.getComments).not.toHaveBeenCalled();
    
    commentService.getComments(article_id, pageNumber, pageSize)
    .then(result => {
         resultData = result;
    });

    // Flush pending HTTP requests
    $httpBackend.flush();

    expect(commentService.getComments).toHaveBeenCalled();
    expect(resultData.success).toBeDefined();
    expect(resultData.success).toEqual(true);

  });

});