
  'use strict';
angular.module('sbAdminApp')
.service('httpService',['$http','$q','helper',httpService]);  

    function httpService($http,$q,helper) {
        var thisInstance = this;
        var instance = this;
        var DOMAIN = helper.getBaseUrl();



        this.getUsersQuotes = function(){return DOMAIN+"getQuotes"} 
        this.postUsersQuotes = function(){return DOMAIN+"quotes"}     

        this.isError =  function (response) {
            var str = response.data;
            if ( !str || str == '' || (str.status && str.status.code!=="0") ) {
                return true; 
            }
            else {
                return false;
            }
        };
        this.get =   function(url,header){
            return $q( function(resolve,reject) {
                header = header ? header : {};
                header.Accept = 'application/json';
                header['Content-Type'] = 'application/json'; 


                $http({
                    method: "GET",
                    url: url,
                    headers: header
                })
                .then(function success(response) {
                    if(instance.isError(response) || response.status !==200)
                        reject(response);
                    else
                        resolve(response);
                }, function error(errorResponse) {
                    reject(errorResponse);
                });

            });
        }; 


        this.post =   function(url,header,body){
            return $q( function(resolve,reject) {
                header = header ? header : {};
                header.Accept = 'application/json';
                header['Content-Type'] = 'application/json'; 


                $http({
                    method: "POST",
                    url: url,
                    headers: header,
                    data : body
                })
                .then(function success(response) {
                    if(instance.isError(response) || response.status !==200)
                        reject(response);
                    else
                        resolve(response);
                }, function error(errorResponse) {
                    reject(errorResponse);
                });

            });
        };

        this.put =   function(url,header,body){
            return $q( function(resolve,reject) {
                header = header ? header : {};
                header.Accept = 'application/json';
                header['Content-Type'] = 'application/json'; 


                $http({
                    method: "PUT",
                    url: url,
                    headers: header,
                    data : body
                })
                .then(function success(response) {
                    if(instance.isError(response) || response.status !==200)
                        reject(response);
                    else
                        resolve(response);
                }, function error(errorResponse) {
                    reject(errorResponse);
                });

            });
        };


        this.delete =   function(url,header,body){
            return $q( function(resolve,reject) {
                header = header ? header : {};
                header.Accept = 'application/json';
                header['Content-Type'] = 'application/json'; 


                $http({
                    method: "DELETE",
                    url: url,
                    headers: header,
                    data : body
                })
                .then(function success(response) {
                    if(instance.isError(response) || response.status !==200)
                        reject(response);
                    else
                        resolve(response);
                }, function error(errorResponse) {
                    reject(errorResponse);
                });

            });
        };    

    }
 
