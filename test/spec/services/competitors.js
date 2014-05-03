'use strict';

describe('Service: Competitors', function () {

  // load the service's module
  beforeEach(module('meanstacktestApp'));

  // instantiate service
  var Competitors;
  beforeEach(inject(function (_Competitors_) {
    Competitors = _Competitors_;
  }));

  it('should do something', function () {
    expect(!!Competitors).toBe(true);
  });

});
