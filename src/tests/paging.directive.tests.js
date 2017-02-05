describe('Paging directive', function() {

  var $compile,
      $scope,
      directiveElem,
      directiveController,
      directiveScope;

    // Before each test load bloglog module
  beforeEach(angular.mock.module('bloglog'));
  
  
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    
    directiveElem = getCompiledElement();
    // Spy on our service call but allow it to continue to its implementation
    // spyOn(articleServiceMock, "getArticlesByFilter").and.callThrough();
    // spyOn(articleServiceMock, "addArticle").and.callThrough();
  }));

  function getCompiledElement() {
    var element = angular.element('<paging-control flex pages="10" current-page="1" steps="5" cl-align="center center"></paging-control>');
    var compiledElement = $compile(element)($scope);
    directiveScope = compiledElement.isolateScope() || compiledElement.scope();
    $scope.$digest();
    directiveController = compiledElement.controller("pagingControl");
    return compiledElement;
  }

  it('Paging directive should be defined', function() {
    expect(directiveElem).toBeDefined();
  });

  it('check swith to specific page', function() {
    var pageValue = 5;
    directiveController.goto(pageValue);
    expect(directiveScope.currentPage - 1).toBe(pageValue);
  });

  it('check swith to previous page', function () {
    var prevPage = directiveScope.currentPage - 1;
    directiveController.gotoPrev();
    expect(directiveScope.currentPage).toBe(prevPage);
  });

  it('check swith to next page', function () {
    var nextPage = directiveScope.currentPage + directiveScope.steps;
    directiveController.gotoNext();
    expect(directiveScope.currentPage).toBe(nextPage);
  });
  
  it('check swith to first page', function () {
    directiveScope.currentPage = 5;
    directiveController.gotoFirst();
    expect(directiveScope.currentPage).toBe(1);
  });

  it('check swith to last page', function () {
    directiveController.gotoLast();
    expect(directiveScope.currentPage).toBe(directiveScope.pages);
  });

});