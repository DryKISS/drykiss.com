##
# Application Initialisation
#
# @author Ian Warner <ian.warner@drykiss.com>
##

##
# JS Lint
##
'use strict'

##
# Set Modules
#
# @param ngRoute Router
# @param codeBlenderControllers Controller
##
angular
    .module 'app',  [

        'ui.router'

        'app.controller'
        'app.directive'

    ]

# Module
angular.module 'app.controller', []
angular.module 'app.directive',  []
