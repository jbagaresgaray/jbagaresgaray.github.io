webpackJsonp([1],{

<<<<<<< HEAD
/***/ 627:
=======
/***/ 660:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MybankcardsPageModule", function() { return MybankcardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mybankcards__ = __webpack_require__(644);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(181);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MybankcardsPageModule = (function () {
    function MybankcardsPageModule() {
    }
    MybankcardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mybankcards__["a" /* MybankcardsPage */],
            ],
            imports: [
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mybankcards__["a" /* MybankcardsPage */]),
=======
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
>>>>>>> master
            ],
        })
    ], MybankcardsPageModule);
    return MybankcardsPageModule;
}());

//# sourceMappingURL=mybankcards.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MybankcardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MybankcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MybankcardsPage = (function () {
    function MybankcardsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MybankcardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MybankcardsPage');
    };
    MybankcardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mybankcards',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/mybankcards/mybankcards.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Bank Accounts/Cards</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n<ion-list>\n  <button ion-item>\n    <h2>Bank of the Philippines Islands (BPI)</h2>\n    <small>Checked</small>\n    <ion-note item-end>*3483</ion-note>\n  </button>  \n  <button ion-item>\n    <h2>Bank of the Philippines Islands (BPI)</h2>\n    <small>Checked</small>\n    <ion-note item-end>*3483</ion-note>\n  </button>  \n</ion-list>\n<ion-list padding-top>\n    <button ion-item detail-none (click)="addNewAccount()">\n      Add New Bank Account\n      <ion-icon name="add" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/mybankcards/mybankcards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MybankcardsPage);
    return MybankcardsPage;
}());

//# sourceMappingURL=mybankcards.js.map

/***/ })

});
//# sourceMappingURL=1.js.map