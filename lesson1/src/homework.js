"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (name) {
  return name.length > 0 && name.length != '';
});
employersNames = employersNames.map(function (item) {
  return item.toLowerCase().trim();
});
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  // let everyCash = Array.from(arguments);
  var total = own;
  total = cash.reduce(function (cash, b) {
    return cash + b;
  }, 0);
  return total;
}

var money = calcCash(null, cash);

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
      var sumSponsors = eu.concat(rus, "unexpected sponsor");
      console.log("We have a business. Owner: ".concat(this.owner, ", director:  ").concat(this.director, ". Our budget:  ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log('And we have a sponsors: ');
      console.log.apply(null, sumSponsors);
      console.log("Note. Be careful with ".concat(eu[0], ". It's a huge risk."));
    }
  }]);

  return Business;
}();

var business = new Business('Sam', 'Victor', money, employersNames);
business.makeBusiness();