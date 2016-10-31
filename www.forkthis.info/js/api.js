/*global
$
*/
'use strict';
var FORK_THIS_API = {
  Ajax: {
    settings: function(endpoint, operation, data){
      data.operation = operation;
      return {
        url: "https://jivd6u6gmd.execute-api.us-west-2.amazonaws.com/prod/" + endpoint,
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type":"application/json",
          "x-api-key": "jUWR7OHgL31HZBL2S4tkB2zFbAp3V9Rk9yuEhdMs",
          "Authorization": FORK_THIS_API.Account.authorization
        },
        data: JSON.stringify(data)
      };
    },
    makeCall: function(settings,onSuccess,onError){
      $.ajax(settings).done(onSuccess).fail(onError);
    }
  },
  Session: {
    add: function(session, onSuccess, onError){
      var settings = FORK_THIS_API.Ajax.settings("session","add",{session:session});
      FORK_THIS_API.Ajax.makeCall(settings,onSuccess,onError);
    },
    update: function(session, onSuccess, onError){
      var settings = FORK_THIS_API.Ajax.settings("session","update",{session:session});
      FORK_THIS_API.Ajax.makeCall(settings,onSuccess,onError);},
    list: function(onSuccess, onError){
      var settings = FORK_THIS_API.Ajax.settings("session","list",{});
      FORK_THIS_API.Ajax.makeCall(settings,onSuccess,onError);},
    owned: function(ownerId, onSuccess, onError){
      var settings = FORK_THIS_API.Ajax.settings("session","owned",{session:{ownerId:ownerId || "guest"}});
      FORK_THIS_API.Ajax.makeCall(settings,onSuccess,onError);},
    read: function(sessionId,onSuccess, onError){
      var settings = FORK_THIS_API.Ajax.settings("session","add",{session:sessionId});
      FORK_THIS_API.Ajax.makeCall(settings,onSuccess,onError);
    }
  },
  Account: {
    authorization: ""
  }
};