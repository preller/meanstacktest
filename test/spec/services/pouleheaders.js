'use strict';

describe('Service: PouleHeaders', function () {

  // load the service's module
  beforeEach(module('meanstacktestApp'));

  // instantiate service
  var PouleHeaders;
  beforeEach(inject(function (_PouleHeaders_) {
    PouleHeaders = _PouleHeaders_;
  }));

  it('should do something', function () {
    expect(!!PouleHeaders).toBe(true);
  });

});
