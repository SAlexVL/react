"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.business = exports.Business = void 0;

var _sponsors = require("./sponsors");

var _employers = require("./employers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Business =
/*#__PURE__*/
function () {
  function Business(owner, director, cash, emp) {
    _classCallCheck(this, Business);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(Business, [{
    key: "makeBusiness",
    value: function makeBusiness() {
      var sumSponsors = _sponsors.eu.concat(_sponsors.rus, "unexpected sponsor");

      console.log("We have a business. Owner: ".concat(this.owner, ", director:  ").concat(this.director, ". Our budget:  ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log('And we have a sponsors: ');
      console.log.apply(null, sumSponsors);
      console.log("Note. Be careful with ".concat(_sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return Business;
}();

exports.Business = Business;
var business = new Business('Sam', 'Victor', _sponsors.money, _employers.employersNames);
exports.business = business;
business.makeBusiness();