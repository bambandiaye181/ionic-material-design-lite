angular.module('ionic')
    .provider('$ionicMaterialConfig', function ($ionicConfigProvider) {
        var provider = this;

        provider.$get = function () {
          return provider;
        };
    });
angular.module('ionic')
    .directive('button', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-js-button mdl-js-ripple-effect');
                }
            }
        }
    });

angular.module('ionic')
    .directive('ionTabNav', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-tabs__tab');
                }
            }
        }
    });

angular.module('ionic')
    .directive('ionTabs', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-js-tabs mdl-js-ripple-effect');
                }
            }
        }
    });
