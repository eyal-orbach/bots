(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subject_density_subject_density_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject-density/subject-density.component */ "./src/app/subject-density/subject-density.component.ts");
/* harmony import */ var _behaviour_similarity_behaviour_similarity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviour-similarity/behaviour-similarity.component */ "./src/app/behaviour-similarity/behaviour-similarity.component.ts");
/* harmony import */ var _tweet_similarity_tweet_similarity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tweet-similarity/tweet-similarity.component */ "./src/app/tweet-similarity/tweet-similarity.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], data: { title: 'Home' } },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], data: { title: 'Home' } },
    { path: 'density', component: _subject_density_subject_density_component__WEBPACK_IMPORTED_MODULE_3__["SubjectDensityComponent"], data: { title: 'Subject Density' } },
    { path: 'behaviour', component: _behaviour_similarity_behaviour_similarity_component__WEBPACK_IMPORTED_MODULE_4__["BehaviourSimilarityComponent"], data: { title: 'Behaviour Similarity' } },
    { path: 'tweet', component: _tweet_similarity_tweet_similarity_component__WEBPACK_IMPORTED_MODULE_5__["TweetSimilarityComponent"], data: { title: 'Tweet Similarity' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\n    scroll-behavior: unset ;\n}\n.header-toolbar {\nposition: fixed;\nz-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtBQUNBLGVBQWU7QUFDZixVQUFVO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xuICAgIHNjcm9sbC1iZWhhdmlvcjogdW5zZXQgO1xufVxuLmhlYWRlci10b29sYmFyIHtcbnBvc2l0aW9uOiBmaXhlZDtcbnotaW5kZXg6IDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navigation></app-navigation>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bots';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _subject_density_subject_density_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject-density/subject-density.component */ "./src/app/subject-density/subject-density.component.ts");
/* harmony import */ var _behaviour_similarity_behaviour_similarity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviour-similarity/behaviour-similarity.component */ "./src/app/behaviour-similarity/behaviour-similarity.component.ts");
/* harmony import */ var _tweet_similarity_tweet_similarity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tweet-similarity/tweet-similarity.component */ "./src/app/tweet-similarity/tweet-similarity.component.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _subject_density_density_settings_density_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subject-density/density-settings/density-settings.component */ "./src/app/subject-density/density-settings/density-settings.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./results-container/results-container.component */ "./src/app/results-container/results-container.component.ts");
/* harmony import */ var _tweet_similarity_tweet_similarity_settings_tweet_similarity_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component */ "./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.ts");
/* harmony import */ var _behaviour_similarity_behaviour_settings_behaviour_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./behaviour-similarity/behaviour-settings/behaviour-settings.component */ "./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _subject_density_subject_density_component__WEBPACK_IMPORTED_MODULE_8__["SubjectDensityComponent"],
                _behaviour_similarity_behaviour_similarity_component__WEBPACK_IMPORTED_MODULE_9__["BehaviourSimilarityComponent"],
                _tweet_similarity_tweet_similarity_component__WEBPACK_IMPORTED_MODULE_10__["TweetSimilarityComponent"],
                _subject_density_density_settings_density_settings_component__WEBPACK_IMPORTED_MODULE_12__["DensitySettingsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_16__["ResultsContainerComponent"],
                _tweet_similarity_tweet_similarity_settings_tweet_similarity_settings_component__WEBPACK_IMPORTED_MODULE_17__["TweetSimilaritySettingsComponent"],
                _behaviour_similarity_behaviour_settings_behaviour_settings_component__WEBPACK_IMPORTED_MODULE_18__["BehaviourSettingsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_11__["CustomMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#settingsContainer{\n    padding-left: 10px;\n}\n\na.toollabel{\n    color: #5893b7;\n    padding-top: 13px;\n    vertical-align: bottom;\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n#show-results-button{\n    background-color: #1ca1f2;\n    left: 50%;\n    margin-left: -60px;\n    top: 60%;\n}\n\n#kUsersInput{\n    margin-left: 20px;\n    width: 40px;\n}\n\n#useridInput{\n    width: 150px;\n    height: 30px;\n}\n\n#textbox-container{\n    margin-left: 20px;\n}\n\nlabel.settings-container1{\n    margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVoYXZpb3VyLXNpbWlsYXJpdHkvYmVoYXZpb3VyLXNldHRpbmdzL2JlaGF2aW91ci1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9iZWhhdmlvdXItc2ltaWxhcml0eS9iZWhhdmlvdXItc2V0dGluZ3MvYmVoYXZpb3VyLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNzZXR0aW5nc0NvbnRhaW5lcntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmEudG9vbGxhYmVse1xuICAgIGNvbG9yOiAjNTg5M2I3O1xuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4jc2hvdy1yZXN1bHRzLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhMWYyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgdG9wOiA2MCU7XG59XG5cbiNrVXNlcnNJbnB1dHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuI3VzZXJpZElucHV0e1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbiN0ZXh0Ym94LWNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxubGFiZWwuc2V0dGluZ3MtY29udGFpbmVyMXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=settingsBoxContainer fxLayout=\"row\" fxLayoutGap=10%>\n  <div id=settingsContainer1 fxLayout=\"column\" fxLayout.xs=\"row\" fxLayoutGap=\"10px\">\n    <label class=\"settings-container1\">Enter cutoff number for the list of returned users</label>\n    <input matInput type=\"number\" id=\"kUsersInput\" [value]=\"kUsers\" (change)=\"kUsers=$event.target.value\">\n    <label class=\"settings-container1\">Enter user's Twitter id <br>\n    (finding user's id by his user name can be done via sites like \n    <a href=\"https://codeofaninja.com/tools/find-twitter-id\">https://codeofaninja.com/tools/find-twitter-id</a> )</label>\n    <div id=\"textbox-container\" fxLayout=\"row\" fxFlex=60px>\n      <input matInput id=\"useridInput\" [value]=\"idUser\" (change)=\"idUser=$event.target.value\"\n      pattern=\"[0-9]*\">\n    </div>\n  </div>\n  <div id=settingsContainer2 fxLayout=\"column\" fxLayout.xs=\"row\" fxLayoutGap=\"10px\">\n    <button mat-raised-button color=\"primary\" id=\"show-results-button\" (click)=\"showResults()\">Show results</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BehaviourSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviourSettingsComponent", function() { return BehaviourSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var K_USERS = "k_users";
var ORIGIN_USER_ID = "origin_user_id";
var BehaviourSettingsComponent = /** @class */ (function () {
    function BehaviourSettingsComponent() {
        this.kUsers = 20;
        this.idUser = 1092588148163559424;
        this.resultsTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BehaviourSettingsComponent.prototype.showResults = function () {
        var settingsObj = {};
        settingsObj[K_USERS] = this.kUsers;
        settingsObj[ORIGIN_USER_ID] = this.idUser;
        this.resultsTrigger.emit(settingsObj);
    };
    BehaviourSettingsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BehaviourSettingsComponent.prototype, "resultsTrigger", void 0);
    BehaviourSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-behaviour-settings',
            template: __webpack_require__(/*! ./behaviour-settings.component.html */ "./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.html"),
            styles: [__webpack_require__(/*! ./behaviour-settings.component.css */ "./src/app/behaviour-similarity/behaviour-settings/behaviour-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BehaviourSettingsComponent);
    return BehaviourSettingsComponent;
}());



/***/ }),

/***/ "./src/app/behaviour-similarity/behaviour-similarity.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/behaviour-similarity/behaviour-similarity.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlaGF2aW91ci1zaW1pbGFyaXR5L2JlaGF2aW91ci1zaW1pbGFyaXR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/behaviour-similarity/behaviour-similarity.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/behaviour-similarity/behaviour-similarity.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; overflow: hidden;\">\n  <p id=info>\n    This is the behaviour similarity module.<br>\n    Here you can search for users that had similar tweets to a given user in similar times.\n  </p>\n  <hr>\n  <app-behaviour-settings (resultsTrigger)=handleSettings($event) style=\"height:25%\">\n  </app-behaviour-settings>\n  <br><br>\n  <hr>\n  <app-results-container [tweetsJson]=\"resultsJson\" [resultsPlaceHolderStyle]=\"resultsState\"></app-results-container>\n</div>"

/***/ }),

/***/ "./src/app/behaviour-similarity/behaviour-similarity.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/behaviour-similarity/behaviour-similarity.component.ts ***!
  \************************************************************************/
/*! exports provided: BehaviourSimilarityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviourSimilarityComponent", function() { return BehaviourSimilarityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results-container/results-container.component */ "./src/app/results-container/results-container.component.ts");
/* harmony import */ var _hebrew_bots_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hebrew-bots-service.service */ "./src/app/hebrew-bots-service.service.ts");




var BehaviourSimilarityComponent = /** @class */ (function () {
    function BehaviourSimilarityComponent(botsService) {
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__["RESULTS_STATE"].WAITING;
        this.botService = botsService;
    }
    BehaviourSimilarityComponent.prototype.handleSettings = function (evt) {
        var _this = this;
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__["RESULTS_STATE"].LOADING;
        this.resultsJson = null;
        var setingsJson = JSON.stringify(evt);
        this.botService.getSimilarBehaviours(setingsJson, function (r) { _this.set_json(r); });
    };
    BehaviourSimilarityComponent.prototype.set_json = function (json) {
        this.resultsJson = json;
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__["RESULTS_STATE"].LOADED;
    };
    BehaviourSimilarityComponent.prototype.ngOnInit = function () {
    };
    BehaviourSimilarityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-behaviour-similarity',
            template: __webpack_require__(/*! ./behaviour-similarity.component.html */ "./src/app/behaviour-similarity/behaviour-similarity.component.html"),
            styles: [__webpack_require__(/*! ./behaviour-similarity.component.css */ "./src/app/behaviour-similarity/behaviour-similarity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hebrew_bots_service_service__WEBPACK_IMPORTED_MODULE_3__["HebrewBotsServiceService"]])
    ], BehaviourSimilarityComponent);
    return BehaviourSimilarityComponent;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_tweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tweet */ "./node_modules/ngx-tweet/fesm5/ngx-tweet.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], ngx_tweet__WEBPACK_IMPORTED_MODULE_3__["NgxTweetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], ngx_tweet__WEBPACK_IMPORTED_MODULE_3__["NgxTweetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/hebrew-bots-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/hebrew-bots-service.service.ts ***!
  \************************************************/
/*! exports provided: HebrewBotsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HebrewBotsServiceService", function() { return HebrewBotsServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var subject_density_api = '/bots/api/subjectdensity';
var tweet_similarity_api = '/bots/api/tweetsimilarity';
var behaviour_similarity_api = '/bots/api/behavioursimilarity';
var HebrewBotsServiceService = /** @class */ (function () {
    function HebrewBotsServiceService(http, location) {
        this.http = http;
        this.location = location;
        this.httpClient = http;
    }
    HebrewBotsServiceService.prototype.getSubjectDensityList = function (settingJson, updateResultsCallback) {
        var url = this.location.prepareExternalUrl(subject_density_api);
        this.callApi(settingJson, updateResultsCallback, url);
    };
    HebrewBotsServiceService.prototype.getSimilarTweets = function (setingsJson, updateResultsCallback) {
        var url = this.location.prepareExternalUrl(tweet_similarity_api);
        this.callApi(setingsJson, updateResultsCallback, url);
    };
    HebrewBotsServiceService.prototype.getSimilarBehaviours = function (setingsJson, updateResultsCallback) {
        var url = this.location.prepareExternalUrl(behaviour_similarity_api);
        this.callApi(setingsJson, updateResultsCallback, url);
    };
    HebrewBotsServiceService.prototype.callApi = function (settingJson, updateResultsCallback, url) {
        this.httpClient.post(url, settingJson, httpOptions).subscribe(function (data) {
            console.log(data);
            updateResultsCallback(data);
        });
    };
    HebrewBotsServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HebrewBotsServiceService);
    return HebrewBotsServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#intro{\n    text-align: left;\n    left: 30px;\n    padding-left: 30px;\n    padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnRyb3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p id=\"intro\">\n This application helps find un-organic activity on Twitter, currently supports Hebrew data only. <br>\n The application provides a set of tools that helps screening, filtering and viewing real data from Twitter. <br>\n This application does not claim to make the final classification between bots, puppets, fake or real users, <br>\n rather, it helps viewing tweeter data according to the described logic which can assist the end user to further investigate certain <br>\n users or interactions and classify them according to his or her logic. <br>\n It is easy to follow the links here to the actual tweeter accounts/comments and highly advised, to make your own mind according to your findings.\n<br>\n<br>\nMy goal is to to add more usefull tools in the future and support various other languages\n\n\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\n  width: 100% !important;\n  height: calc(100vh - 64px) !important;\n}\n  \ndiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4000px;\n}\n  \nmat-toolbar {\n  height: 64px;\n  position: relative;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KSAhaW1wb3J0YW50O1xufVxuICBcbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwMDBweDtcbn1cblxubWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\n  <mat-toolbar-row> \n    <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"primary\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    The Bots Finder\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\"  mode=\"side\"\n            opened=\"true\"\n            [fixedInViewport]=\"true\"\n            [fixedTopGap]=\"64\">\n    <mat-nav-list>\n      <a mat-list-item routerLink='/home'>Home</a>\n      <a mat-list-item routerLink='/tweet'>Tweet Similarity</a>\n      <a mat-list-item routerLink='/density'>Subject Density</a>\n      <a mat-list-item routerLink='/behaviour'>Behaviour Similarity</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/results-container/results-container.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/results-container/results-container.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.tweetcontainer{\n    top:2px;\n    padding: 3px;\n    text-align: right;\n    left: 20%;\n    position: relative;\n}\n\n.removed_label{\n    top: 40px;\n    position: relative;\n    left: 10px;\n    z-index: -100;\n}\n\n.userseperator{\n    height: 1px;\n    background: #333;\n    background-image: linear-gradient(to right, #ccc, #333, #ccc);\n}\n\n.usertweets{\n    border: 0;\n    border-bottom: 1px dashed #ccc;\n    background: #999;\n}\n\n.tweetseperator{\n    border: 0;\n    height: 1px;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\n}\n\n.results_container{\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 75%;\n    padding-left: 20%;\n    padding-right: 20%;\n}\n\na.username{\n    padding: 3px;\n    margin-left: 20px;\n    margin-top: 2px; \n}\n\na.await-results{\n    color: #89959c;\n    margin-left: -150px;\n    text-align: center;\n    width: 300px;\n    position: relative;\n    left: 50%;\n    top: 20%;\n}\n\na.load-results{\n    margin-left: -150px;\n    text-align: center;\n    width: 300px;\n    position: relative;\n    left: 50%;\n    top: 20%;\n    -webkit-animation: blink 1s linear infinite;\n            animation: blink 1s linear infinite;\n}\n\n@-webkit-keyframes blink{\n0%{opacity: 0;  color:#638ba1; }\n50%{opacity: .5; color:#638ba1;}\n80%{opacity: 1; color: #638ba1;}\n100%{opacity: 0.5; color: #638ba1;}\n\n}\n\n@keyframes blink{\n0%{opacity: 0;  color:#638ba1; }\n50%{opacity: .5; color:#638ba1;}\n80%{opacity: 1; color: #638ba1;}\n100%{opacity: 0.5; color: #638ba1;}\n\n}\n\na.results-loaded{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy1jb250YWluZXIvcmVzdWx0cy1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksU0FBUztJQUNULDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLG9HQUFvRztBQUN4Rzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDOztBQUNBO0FBQ0EsR0FBRyxVQUFVLEdBQUcsYUFBYSxFQUFFO0FBQy9CLElBQUksV0FBVyxFQUFFLGFBQWEsQ0FBQztBQUMvQixJQUFJLFVBQVUsRUFBRSxjQUFjLENBQUM7QUFDL0IsS0FBSyxZQUFZLEVBQUUsY0FBYyxDQUFDOztBQUVsQzs7QUFOQTtBQUNBLEdBQUcsVUFBVSxHQUFHLGFBQWEsRUFBRTtBQUMvQixJQUFJLFdBQVcsRUFBRSxhQUFhLENBQUM7QUFDL0IsSUFBSSxVQUFVLEVBQUUsY0FBYyxDQUFDO0FBQy9CLEtBQUssWUFBWSxFQUFFLGNBQWMsQ0FBQzs7QUFFbEM7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy1jb250YWluZXIvcmVzdWx0cy1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnR3ZWV0Y29udGFpbmVye1xuICAgIHRvcDoycHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGxlZnQ6IDIwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yZW1vdmVkX2xhYmVse1xuICAgIHRvcDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTBweDtcbiAgICB6LWluZGV4OiAtMTAwO1xufVxuXG4udXNlcnNlcGVyYXRvcntcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzMzMywgI2NjYyk7XG59XG5cbi51c2VydHdlZXRze1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2M7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbn1cblxuLnR3ZWV0c2VwZXJhdG9ye1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC43NSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG4ucmVzdWx0c19jb250YWluZXJ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XG59XG5cbmEudXNlcm5hbWV7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDsgXG59XG5cbmEuYXdhaXQtcmVzdWx0c3tcbiAgICBjb2xvcjogIzg5OTU5YztcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbn1cblxuYS5sb2FkLXJlc3VsdHN7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJsaW5re1xuMCV7b3BhY2l0eTogMDsgIGNvbG9yOiM2MzhiYTE7IH1cbjUwJXtvcGFjaXR5OiAuNTsgY29sb3I6IzYzOGJhMTt9XG44MCV7b3BhY2l0eTogMTsgY29sb3I6ICM2MzhiYTE7fVxuMTAwJXtvcGFjaXR5OiAwLjU7IGNvbG9yOiAjNjM4YmExO31cblxufVxuXG5cbmEucmVzdWx0cy1sb2FkZWR7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/results-container/results-container.component.html":
/*!********************************************************************!*\
  !*** ./src/app/results-container/results-container.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloaded_tweet\" style=\"display:hidden\">\n  <ngx-tweet tweetId=\"1110423138570067968\" style=\"display:none\"></ngx-tweet>\n</div>\n<section class=\"example-section\">\n  Text\n  <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"embeddTweets\"\n    (change)=\"embeddTweets = !embeddTweets\" [disabled]=\"disabled\">\n    Embedded tweets\n  </mat-slide-toggle>\n</section>\n<div class=\"results_container\">\n  <a [class]=\"resultsPlaceHolderStyle\">results will show here</a>\n  <ng-container *ngFor=\"let user of tweetsJson\">\n    <div class=\"usercontainer\">\n      <div class=\"usernamebox\">\n        <a href=\"http://twitter.com/{{user.name}}\" class=\"username\"> {{user.name}} </a>\n      </div>\n      <div *ngFor=\"let tweet of user.tweets\">\n        <div class=\"tweetcontainer\" *ngIf=\"embeddTweets\">\n          <ngx-tweet tweetId={{tweet.tweetid}}></ngx-tweet>\n        </div>\n        <div class=\"tweetcontainer\" *ngIf=\"!embeddTweets\">\n          <a href=\"http://twitter.com/user/status/{{tweet.tweetid}}\">{{tweet.msg}}</a>\n        </div>\n      </div>\n      <hr class=\"tweetseperator\">\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/results-container/results-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/results-container/results-container.component.ts ***!
  \******************************************************************/
/*! exports provided: RESULTS_STATE, ResultsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULTS_STATE", function() { return RESULTS_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsContainerComponent", function() { return ResultsContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RESULTS_STATE = {
    WAITING: 'await-results',
    LOADING: 'load-results',
    LOADED: 'results-loaded'
};
var ResultsContainerComponent = /** @class */ (function () {
    function ResultsContainerComponent() {
        this.embeddTweets = false;
    }
    ResultsContainerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultsContainerComponent.prototype, "tweetsJson", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ResultsContainerComponent.prototype, "resultsPlaceHolderStyle", void 0);
    ResultsContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results-container',
            template: __webpack_require__(/*! ./results-container.component.html */ "./src/app/results-container/results-container.component.html"),
            styles: [__webpack_require__(/*! ./results-container.component.css */ "./src/app/results-container/results-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultsContainerComponent);
    return ResultsContainerComponent;
}());



/***/ }),

/***/ "./src/app/subject-density/density-settings/density-settings.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/subject-density/density-settings/density-settings.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#density-settings-origin-text{\n    width: 80%;\n}\n\n#settingsContainer{\n    padding-left: 10px;\n}\n\na.toollabel{\n    color: #5893b7;\n    padding-top: 13px;\n    vertical-align: bottom;\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n#show-results-button{\n    background-color: #1ca1f2;\n    left: 50%;\n    margin-left: -60px;\n    top: 80%;\n}\n\n#k_userInput{\n    margin-left: 20px;\n    width: 40px;\n}\n\n#textbox-container{\n    margin-left: 20px;\n}\n\nlabel.settings-container1{\n    margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViamVjdC1kZW5zaXR5L2RlbnNpdHktc2V0dGluZ3MvZGVuc2l0eS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdWJqZWN0LWRlbnNpdHkvZGVuc2l0eS1zZXR0aW5ncy9kZW5zaXR5LXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVuc2l0eS1zZXR0aW5ncy1vcmlnaW4tdGV4dHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4jc2V0dGluZ3NDb250YWluZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5hLnRvb2xsYWJlbHtcbiAgICBjb2xvcjogIzU4OTNiNztcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI3Nob3ctcmVzdWx0cy1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTFmMjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgIHRvcDogODAlO1xufVxuXG4ja191c2VySW5wdXR7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbiN0ZXh0Ym94LWNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxubGFiZWwuc2V0dGluZ3MtY29udGFpbmVyMXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/subject-density/density-settings/density-settings.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/subject-density/density-settings/density-settings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=settingsBoxContainer fxLayout=\"row\"  fxLayoutGap=10%>\n<div id=settingsContainer1 fxLayout=\"column\" fxLayout.xs=\"row\" fxLayoutGap=\"10px\"  >\n<label class=\"settings-container1\">Enter cutoff number  for the list of returned users</label>\n<input mdInput type=\"number\" id=\"k_userInput\" [value]=\"k_users\" (change)=\"k_users=$event.target.value\">\n\n<label class=\"settings-container1\">Enter origin text to which user's tweets should be similar to <br>(notice sentiments are not taken into consideration, only topical relations)</label>\n<div id=\"textbox-container\" fxLayout=\"row\" fxFlex=60px>\n<textarea matInput placeholder=\"Origin text\" [value]=\"originText\" (change)=\"doTextareaValueChange($event)\" fxFlex = 90%>\n  ביבי מבטיח נאום \"חד כתער\" באסיפה הכללית מחר. מה יהיה שם? איראן? טרור?? צדקת דרכנו??? שואה???? שרה והשגריר המיקרונזי לא\n  יכולים לחכות.\n</textarea>\n</div>\n</div>\n<div id=settingsContainer2 fxLayout=\"column\" fxLayout.xs=\"row\" fxLayoutGap=\"10px\" >\n<label>select  what should recive more weight <br>(tweets density vs proximity to the sentence entered)</label>\n<div id=\"slider-container\" fxLayout=\"row\">\n  <a class=\"toollabel\">density of tweets</a>\n  <mat-slider min=\"0\" max=\"1\" step=\"0.001\" [value]=\"subjectProximity\" fxFlex=200px (change)=\"subjectProximity=$event.value\"></mat-slider>\n  <a class=\"toollabel\">similarity to origin</a>\n</div>\n<div id=\"button-container\" fxLayout=\"row\"  fxLayoutGap=\"10px\">\n  <button mat-raised-button color=\"primary\" id=\"show-results-button\" (click)=\"showResults()\">Show results</button>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/subject-density/density-settings/density-settings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/subject-density/density-settings/density-settings.component.ts ***!
  \********************************************************************************/
/*! exports provided: DensitySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DensitySettingsComponent", function() { return DensitySettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PROMPT_ORIGIN_TEXT = "ביבי מבטיח נאום \"חד כתער\"\ באסיפה הכללית מחר.מה יהיה שם ? איראן ? טרור ?? צדקת דרכנו ??? שואה ???? שרה והשגריר המיקרונזי לא יכולים לחכות";
var ORIGIN_TEXT = "originText";
var K_USERS = "k_users";
var SUBJECT_PROXIMITY = "subjectProximity";
var DENSITY = "density";
var DensitySettingsComponent = /** @class */ (function () {
    function DensitySettingsComponent() {
        this.resultsTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.originText = PROMPT_ORIGIN_TEXT;
        this.k_users = 30;
        this.subjectProximity = 0.8;
    }
    DensitySettingsComponent.prototype.showResults = function () {
        var settingsObj = {};
        settingsObj[ORIGIN_TEXT] = this.originText;
        settingsObj[K_USERS] = this.k_users;
        settingsObj[SUBJECT_PROXIMITY] = this.subjectProximity;
        settingsObj[DENSITY] = (1 - Number(this.subjectProximity));
        this.resultsTrigger.emit(settingsObj);
    };
    DensitySettingsComponent.prototype.doTextareaValueChange = function (ev) {
        try {
            this.originText = ev.target.value;
        }
        catch (e) {
            console.info('could not set textarea-value');
        }
    };
    DensitySettingsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DensitySettingsComponent.prototype, "resultsTrigger", void 0);
    DensitySettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-density-settings',
            template: __webpack_require__(/*! ./density-settings.component.html */ "./src/app/subject-density/density-settings/density-settings.component.html"),
            styles: [__webpack_require__(/*! ./density-settings.component.css */ "./src/app/subject-density/density-settings/density-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DensitySettingsComponent);
    return DensitySettingsComponent;
}());



/***/ }),

/***/ "./src/app/subject-density/subject-density.component.css":
/*!***************************************************************!*\
  !*** ./src/app/subject-density/subject-density.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#info{\n    text-align: center;\n    -webkit-text-emphasis-style: bold;\n            text-emphasis-style: bold;\n    color: #1ca1f2;    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViamVjdC1kZW5zaXR5L3N1YmplY3QtZGVuc2l0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3QtZGVuc2l0eS9zdWJqZWN0LWRlbnNpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbmZve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWVtcGhhc2lzLXN0eWxlOiBib2xkO1xuICAgIGNvbG9yOiAjMWNhMWYyOyAgICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/subject-density/subject-density.component.html":
/*!****************************************************************!*\
  !*** ./src/app/subject-density/subject-density.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; overflow: hidden;\" >\n  <p id=info>\n    This is the subjects density module.<br>\n    Here you can search for users which mostly tweet about a single topic, meaning their topical variance is low \n  </p>\n  <hr>\n  <app-density-settings (resultsTrigger) = handleSettings($event) style=\"height:25%\" ></app-density-settings >\n  <br><br>\n  <hr>\n    <app-results-container [tweetsJson]=\"resultsJson\" [resultsPlaceHolderStyle]=\"resultsState\"></app-results-container>\n</div>\n"

/***/ }),

/***/ "./src/app/subject-density/subject-density.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/subject-density/subject-density.component.ts ***!
  \**************************************************************/
/*! exports provided: SubjectDensityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDensityComponent", function() { return SubjectDensityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hebrew_bots_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hebrew-bots-service.service */ "./src/app/hebrew-bots-service.service.ts");
/* harmony import */ var _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-container/results-container.component */ "./src/app/results-container/results-container.component.ts");




var SubjectDensityComponent = /** @class */ (function () {
    function SubjectDensityComponent(botsService) {
        this.botService = botsService;
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_3__["RESULTS_STATE"].WAITING;
    }
    SubjectDensityComponent.prototype.handleSettings = function (evt) {
        var _this = this;
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_3__["RESULTS_STATE"].LOADING;
        this.resultsJson = null;
        var setingsJson = JSON.stringify(evt);
        this.botService.getSubjectDensityList(setingsJson, function (r) { _this.set_json(r); });
    };
    SubjectDensityComponent.prototype.set_json = function (json) {
        this.resultsJson = json;
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_3__["RESULTS_STATE"].LOADED;
    };
    SubjectDensityComponent.prototype.ngOnInit = function () {
    };
    SubjectDensityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-density',
            template: __webpack_require__(/*! ./subject-density.component.html */ "./src/app/subject-density/subject-density.component.html"),
            styles: [__webpack_require__(/*! ./subject-density.component.css */ "./src/app/subject-density/subject-density.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hebrew_bots_service_service__WEBPACK_IMPORTED_MODULE_2__["HebrewBotsServiceService"]])
    ], SubjectDensityComponent);
    return SubjectDensityComponent;
}());



/***/ }),

/***/ "./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#density-settings-origin-text{\n    width: 80%;\n}\n\n#settingsContainer{\n    padding-left: 10px;\n}\n\na.toollabel{\n    color: #5893b7;\n    padding-top: 13px;\n    vertical-align: bottom;\n    padding-left: 5px;\n    padding-right: 5px;\n}\n\n#show-results-button{\n    background-color: #1ca1f2;\n    left: 50%;\n    margin-left: -60px;\n    bottom: 20%;\n}\n\n#kTweetSelector{\n    margin-left: 20px;\n    width: 40px;\n}\n\n#textbox-container{\n    margin-left: 20px;\n}\n\nlabel.settings-container1{\n    margin-left: 20px;\n}\n\n#dist-method-selector{\n    width: 200px;\n    padding-top:20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXQtc2ltaWxhcml0eS90d2VldC1zaW1pbGFyaXR5LXNldHRpbmdzL3R3ZWV0LXNpbWlsYXJpdHktc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0LXNpbWlsYXJpdHkvdHdlZXQtc2ltaWxhcml0eS1zZXR0aW5ncy90d2VldC1zaW1pbGFyaXR5LXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVuc2l0eS1zZXR0aW5ncy1vcmlnaW4tdGV4dHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4jc2V0dGluZ3NDb250YWluZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5hLnRvb2xsYWJlbHtcbiAgICBjb2xvcjogIzU4OTNiNztcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI3Nob3ctcmVzdWx0cy1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTFmMjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgIGJvdHRvbTogMjAlO1xufVxuXG4ja1R3ZWV0U2VsZWN0b3J7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbiN0ZXh0Ym94LWNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxubGFiZWwuc2V0dGluZ3MtY29udGFpbmVyMXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuI2Rpc3QtbWV0aG9kLXNlbGVjdG9ye1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=settingsBoxContainer fxLayout=\"row\" fxLayoutGap=10%>\n  <div id=settingsContainer1 fxLayout=\"column\" fxLayout.xs=\"row\" fxLayoutGap=\"10px\">\n    <label class=\"settings-container1\">Enter cutoff number for the list of returned tweets</label>\n    <input mdInput type=\"number\" id=\"kTweetSelector\" [value]=\"kTweets\" (change)=\"kTweets=$event.target.value\">\n\n    <label class=\"settings-container1\">Enter origin text to which tweets should be similar to <br>(notice\n      sentiments are not taken into consideration, only topical relations)</label>\n    <div id=\"textbox-container\" fxLayout=\"row\" fxFlex=60px>\n      <textarea matInput placeholder=\"Origin text\" [value]=\"originText\" (change)=\"doTextareaValueChange($event)\"\n        fxFlex=90%>\n</textarea>\n    </div>\n  </div>\n  <div id=settingsContainer2 fxLayout=\"column\" fxLayout.xs=\"row\" fxLayoutGap=\"30%\">\n    <div id=\"dist-method-selector\" fxLayout=\"column\"  fxLayoutGap=\"5px\">\n      <label>Similarity method</label>\n      <mat-select  [(value)]=\"distanceMethod\">\n        <mat-option value=\"euclidean\">euclidean distance</mat-option>\n        <mat-option value=\"cosine\">cosine distance</mat-option>\n    </mat-select>\n    </div>\n    <div id=\"button-container\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n      <button mat-raised-button color=\"primary\" id=\"show-results-button\" (click)=\"showResults()\">Show results</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TweetSimilaritySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetSimilaritySettingsComponent", function() { return TweetSimilaritySettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var K_TWEETS = "kTweets";
var ORIGIN_TEXT = "originText";
var PROMPT_ORIGIN_TEXT = "חפש ציוץ כמוני";
var SIMILARITY_METHOD = "sim_method";
var TweetSimilaritySettingsComponent = /** @class */ (function () {
    function TweetSimilaritySettingsComponent() {
        this.resultsTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.originText = PROMPT_ORIGIN_TEXT;
        this.kTweets = 30;
        this.distanceMethod = "euclidean";
    }
    TweetSimilaritySettingsComponent.prototype.showResults = function () {
        var settingsObj = {};
        settingsObj[ORIGIN_TEXT] = this.originText;
        settingsObj[K_TWEETS] = this.kTweets;
        settingsObj[SIMILARITY_METHOD] = this.distanceMethod;
        this.resultsTrigger.emit(settingsObj);
    };
    TweetSimilaritySettingsComponent.prototype.doTextareaValueChange = function (ev) {
        try {
            this.originText = ev.target.value;
        }
        catch (e) {
            console.info('could not set textarea-value');
        }
    };
    TweetSimilaritySettingsComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TweetSimilaritySettingsComponent.prototype, "resultsTrigger", void 0);
    TweetSimilaritySettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tweet-similarity-settings',
            template: __webpack_require__(/*! ./tweet-similarity-settings.component.html */ "./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.html"),
            styles: [__webpack_require__(/*! ./tweet-similarity-settings.component.css */ "./src/app/tweet-similarity/tweet-similarity-settings/tweet-similarity-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TweetSimilaritySettingsComponent);
    return TweetSimilaritySettingsComponent;
}());



/***/ }),

/***/ "./src/app/tweet-similarity/tweet-similarity.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tweet-similarity/tweet-similarity.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0LXNpbWlsYXJpdHkvdHdlZXQtc2ltaWxhcml0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tweet-similarity/tweet-similarity.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tweet-similarity/tweet-similarity.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; overflow: hidden;\">\n  <p id=info>\n    This is the tweet similarity module.<br>\n    Here you can search for tweets that are close to the given input sentence, in a specified time frame.\n  </p>\n  <hr>\n  <app-tweet-similarity-settings (resultsTrigger)=handleSettings($event) style=\"height:25%\"></app-tweet-similarity-settings>\n  <br><br>\n  <hr>\n  <app-results-container [tweetsJson]=\"resultsJson\" [resultsPlaceHolderStyle]=\"resultsState\"></app-results-container>\n</div>"

/***/ }),

/***/ "./src/app/tweet-similarity/tweet-similarity.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tweet-similarity/tweet-similarity.component.ts ***!
  \****************************************************************/
/*! exports provided: TweetSimilarityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetSimilarityComponent", function() { return TweetSimilarityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../results-container/results-container.component */ "./src/app/results-container/results-container.component.ts");
/* harmony import */ var _hebrew_bots_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hebrew-bots-service.service */ "./src/app/hebrew-bots-service.service.ts");




var TweetSimilarityComponent = /** @class */ (function () {
    function TweetSimilarityComponent(botsService) {
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__["RESULTS_STATE"].WAITING;
        this.botService = botsService;
    }
    TweetSimilarityComponent.prototype.handleSettings = function (evt) {
        var _this = this;
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__["RESULTS_STATE"].LOADING;
        this.resultsJson = null;
        var setingsJson = JSON.stringify(evt);
        this.botService.getSimilarTweets(setingsJson, function (r) { _this.set_json(r); });
    };
    TweetSimilarityComponent.prototype.set_json = function (json) {
        this.resultsJson = json;
        this.resultsState = _results_container_results_container_component__WEBPACK_IMPORTED_MODULE_2__["RESULTS_STATE"].LOADED;
    };
    TweetSimilarityComponent.prototype.ngOnInit = function () {
    };
    TweetSimilarityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tweet-similarity',
            template: __webpack_require__(/*! ./tweet-similarity.component.html */ "./src/app/tweet-similarity/tweet-similarity.component.html"),
            styles: [__webpack_require__(/*! ./tweet-similarity.component.css */ "./src/app/tweet-similarity/tweet-similarity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hebrew_bots_service_service__WEBPACK_IMPORTED_MODULE_3__["HebrewBotsServiceService"]])
    ], TweetSimilarityComponent);
    return TweetSimilarityComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eyalorbach/Projects/bots/bots1/web/frontend/bots/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map