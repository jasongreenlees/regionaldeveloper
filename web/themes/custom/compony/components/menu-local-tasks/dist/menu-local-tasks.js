!function r(t,e,n){function o(i,a){if(!e[i]){if(!t[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=e[i]={exports:{}};t[i][0].call(s.exports,function(r){return o(t[i][1][r]||r)},s,s.exports,r,t,e,n)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(r,t,e){"use strict";var n;n=jQuery,Drupal.behaviors.Tabs={attach:function(r,t){n(document).on("click",".tabs__tab--active a",function(r){r.preventDefault(),n(this).parents(".tabs").toggleClass("js-expanded")})}}},{}]},{},[1]);