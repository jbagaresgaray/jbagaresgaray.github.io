webpackJsonp([21],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, loadingCtrl, storage, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
    };
    DetailsPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    DetailsPage.prototype.likeItem = function () {
    };
    DetailsPage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
        modal.present();
    };
    DetailsPage.prototype.viewChat = function () {
        // TODO: Check if Authenticated
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <ion-title>\n      Air Jordan 1 Banned\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class="info">\n    <div text-center>\n      <ion-slides pager>\n        <ion-slide>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-slide>\n        <ion-slide>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-slide>\n        <ion-slide>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class="card-title">Air Jordan 1 Banned</div>\n    <ion-row>\n      <ion-col>\n        <span class="price">P 1500.00</span>\n        <br>\n        <span class="rating">\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        5/5 (14)</span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="info mt-10">\n    <div class="shipping_info">\n      <ion-row>\n        <ion-col col-2>\n          <img src="./assets/imgs/ship.png">\n        </ion-col>\n        <ion-col col-10>\n          <span>30% off shipping with min. order of P250.00, 100% off shipping with min. order of P500.00</span>\n        </ion-col>\n      </ion-row>\n      <ion-row padding>\n        <ion-col col-2>\n          <img src="./assets/imgs/ship1.png">\n        </ion-col>\n        <ion-col col-10>\n          <p>Shipping to: </p>\n          <p>Cost: </p>\n        </ion-col>\n      </ion-row>\n      <ion-row padding-left padding-right>\n        <ion-col col-5>\n          <button ion-button icon-left outline block>\n            <ion-icon name="heart-outline"></ion-icon>\n            Like\n          </button>\n        </ion-col>\n        <ion-col col-5>\n          <button ion-button icon-left outline block>\n            <ion-icon ios="ios-chatboxes-outline" md="md-chatboxes-outline"></ion-icon>\n            Comment\n          </button>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button icon-only outline>\n            <ion-icon ios="ios-share-outline" md="md-share-outline"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class="info mt-10">\n    <ion-item no-lines>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Active 1 day ago</p>\n      <button ion-button outline item-end>View Shop</button>\n    </ion-item>\n    <ion-row padding-left padding-right padding-top>\n      <ion-col text-center class="borderleft">\n        <ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon> <span class="highlight">156</span>\n        <div class="blblbl">Products</div>\n      </ion-col>\n      <ion-col text-center class="borderleft">\n        <ion-icon ios="ios-star-outline" md="ios-star-outline"></ion-icon> <span class="highlight">5.80</span>\n        <div class="blblbl">Rating</div>\n      </ion-col>\n      <ion-col text-center>\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon> <span class="highlight">65%</span>\n        <div class="blblbl">Chat Response</div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="info mt-10 tbldetails">\n    <ion-item no-lines class="details">\n      <h2>Product Detail</h2>\n      <p>Air Jordan 1 Banned from Nike Air Shoes</p>\n      <ion-note item-end>\n        <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n        56 days\n      </ion-note>\n    </ion-item>\n    <ion-row padding-top>\n      <ion-col text-left col-4>\n        Categories\n      </ion-col>\n      <ion-col text-left col-8>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left col-4>\n        Brand\n      </ion-col>\n      <ion-col text-left col-8 class="withdetails">\n        no brand\n        <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left col-4>\n        Origin\n      </ion-col>\n      <ion-col text-left col-8>\n        Imported\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left col-4>\n        Material\n      </ion-col>\n      <ion-col text-left col-8>\n        Rubber\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="info mt-10 tbldetails">\n    <ion-row padding-top>\n      <ion-col text-left col-4>\n        Condition\n      </ion-col>\n      <ion-col text-left col-8>\n        New\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left col-4>\n        Variations\n      </ion-col>\n      <ion-col text-left col-8 class="withdetails">\n        no brand\n        <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left col-4>\n        Stock\n      </ion-col>\n      <ion-col text-left col-8>\n        Imported\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-left col-4>\n        Ships From\n      </ion-col>\n      <ion-col text-left col-8>\n        Zone 2 Luis Hambre St. Poblaction, Naawan Misamis Oriental, 9023\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="info mt-10">\n    <ion-item no-lines>\n      <h2>Product Ratings</h2>\n      <span class="rating">\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        5/5 (14)</span>\n      <button ion-button clear item-end>See All\n        <ion-icon ios="ios-arrow-forward-outline" md="md-arrow-forward-outline"></ion-icon>\n      </button>\n    </ion-item>\n  </div>\n  <ion-list>\n    <ion-list-header>\n      FROM THE SAME SHOP\n      <div class="pull-right">\n        See all\n      </div>\n    </ion-list-header>\n    <div padding>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="25">\n              <div class="myCard" (click)="gotoDetails()">\n                <img src="./assets/imgs/product/1.jpg" />\n                <div class="card-title">Air Jordan 1 Banned</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard" (click)="gotoDetails()">\n                <img src="./assets/imgs/product/2.jpg" />\n                <div class="card-title">Nike Kobe 11 BHM</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard" (click)="gotoDetails()">\n                <img src="./assets/imgs/product/3.jpg" />\n                <div class="card-title">Nike Kobe 11 BLUE</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="25">\n              <div class="myCard">\n                <img src="./assets/imgs/product/1.jpg" />\n                <div class="card-title">Air Jordan 1 Banned</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard">\n                <img src="./assets/imgs/product/2.jpg" />\n                <div class="card-title">Nike Kobe 11 BHM</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard">\n                <img src="./assets/imgs/product/3.jpg" />\n                <div class="card-title">Nike Kobe 11 BLUE</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _f || Object])
    ], DetailsPage);
    return DetailsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ShoppingcartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingcartPage = (function () {
    function ShoppingcartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShoppingcartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingcartPage');
    };
    ShoppingcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shoppingcart',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Shopping Cart\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="myCard" *ngIf="cartArr.length < 1">\n    <div padding text-center>\n    	<img src="./assets/imgs/shopping-cart.svg" />\n    </div>\n    <ion-card-content>\n      <p text-center>\n        <button ion-button color="secondary" (click)="back()">Go Shopping Now</button>\n      </p>\n    </ion-card-content>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShoppingcartPage);
    return ShoppingcartPage;
}());

//# sourceMappingURL=shoppingcart.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorites_favorites__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__pages_favorites_favorites__["a" /* FavoritesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/tabs/tabs.html"*/'<ion-tabs no-border>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="ios-paper-outline"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Sell" tabIcon="ios-camera-outline"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Notifications" tabIcon="ios-notifications-outline"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Me" tabIcon="ios-contact-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		589,
		20
	],
	"../pages/confirmation/confirmation.module": [
		591,
		19
	],
	"../pages/deliveryaddress/deliveryaddress.module": [
		590,
		18
	],
	"../pages/login/login.module": [
		592,
		17
	],
	"../pages/makepayment/makepayment.module": [
		594,
		16
	],
	"../pages/myaccount/myaccount.module": [
		593,
		15
	],
	"../pages/myprofile/myprofile.module": [
		596,
		14
	],
	"../pages/myrating/myrating.module": [
		595,
		13
	],
	"../pages/orderdetails/orderdetails.module": [
		597,
		12
	],
	"../pages/paymentmethod/paymentmethod.module": [
		598,
		11
	],
	"../pages/paymentoption/paymentoption.module": [
		600,
		10
	],
	"../pages/productcomment/productcomment.module": [
		599,
		7
	],
	"../pages/productratings/productratings.module": [
		601,
		6
	],
	"../pages/search/search.module": [
		602,
		5
	],
	"../pages/searchresult/searchresult.module": [
		603,
		4
	],
	"../pages/shippingoption/shippingoption.module": [
		604,
		3
	],
	"../pages/shoppingcart/shoppingcart.module": [
		605,
		9
	],
	"../pages/shopprofile/shopprofile.module": [
		606,
		2
	],
	"../pages/signup/signup.module": [
		607,
		1
	],
	"../pages/tabs/tabs.module": [
		608,
		8
	],
	"../pages/userprofile/userprofile.module": [
		609,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shoppingcart_shoppingcart__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, DataFactory, loadingCtrl, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.DataFactory = DataFactory;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.tickerArr = [];
        this.tickerArrCopy = [];
        this.favorites = [];
        this.actions = 'top';
        this.global = {};
        storage.get('favorites').then(function (val) {
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](val)) {
                _this.favorites = val;
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    HomePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        console.log('val: ', val);
        if (val && val.trim() != '') {
            this.tickerArr = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.tickerArrCopy, function (row) {
                return row.name == val;
            });
        }
        else {
            this.tickerArr = this.tickerArrCopy;
        }
    };
    HomePage.prototype.gotoDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_details_details__["a" /* DetailsPage */], {
            crypto: item
        });
    };
    HomePage.prototype.addToFav = function (item) {
    };
    HomePage.prototype.segmentChanged = function (ev) {
    };
    HomePage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar (input)="getItems($event)" showCancelButton="false"></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <ion-slides pager>\n      <ion-slide>\n        <img src="./assets/imgs/thumb1.png">\n      </ion-slide>\n      <ion-slide>\n        <img src="./assets/imgs/thumb2.png">\n      </ion-slide>\n      <ion-slide>\n        <img src="./assets/imgs/thumb1.png">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <ion-list>\n    <ion-list-header>\n      Popular Products\n      <div class="pull-right">\n        See more ...\n      </div>\n    </ion-list-header>\n    <div padding>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="25">\n              <div class="myCard" (click)="gotoDetails()">\n                <img src="./assets/imgs/product/1.jpg" />\n                <div class="card-title">Air Jordan 1 Banned</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard" (click)="gotoDetails()">\n                <img src="./assets/imgs/product/2.jpg" />\n                <div class="card-title">Nike Kobe 11 BHM</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard" (click)="gotoDetails()">\n                <img src="./assets/imgs/product/3.jpg" />\n                <div class="card-title">Nike Kobe 11 BLUE</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="25">\n              <div class="myCard">\n                <img src="./assets/imgs/product/1.jpg" />\n                <div class="card-title">Air Jordan 1 Banned</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard">\n                <img src="./assets/imgs/product/2.jpg" />\n                <div class="card-title">Nike Kobe 11 BHM</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n            <ion-col width="25">\n              <div class="myCard">\n                <img src="./assets/imgs/product/3.jpg" />\n                <div class="card-title">Nike Kobe 11 BLUE</div>\n                <ion-row>\n                  <ion-col>\n                    <div class="price">P 1500.00</div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      FLASH DEALS\n      <div class="pull-right">\n        See all deals\n      </div>\n    </ion-list-header>\n    <div padding>\n    </div>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      OFFICIAL SHOPS\n      <div class="pull-right">\n        See more ...\n      </div>\n    </ion-list-header>\n    <div padding>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/adidas.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/chanel.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/ktm.png">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/panasonic.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/puma.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/zara.png">\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/adidas.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/chanel.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/ktm.png">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/panasonic.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/puma.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/zara.png">\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/adidas.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/chanel.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/ktm.png">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/panasonic.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/puma.png">\n            </ion-col>\n            <ion-col width="33" class="shops">\n              <img src="./assets/imgs/brands/zara.png">\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Categories\n    </ion-list-header>\n    <div padding>\n      <ion-slides class="categories">\n        <ion-slide>\n          <ion-row>\n            <ion-col width="33">\n              <img src="./assets/imgs/polo.png">\n              <p><small>Men\'s apparel</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/jeans.png">\n              <p><small>Jeans</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/sneakers.png">\n              <p><small>Sneakers</small></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width="33">\n              <img src="./assets/imgs/dress.png">\n              <p><small>Women\'s apparel</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/skirt.png">\n              <p><small>Skirts</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/bag.png">\n              <p><small>Bag</small></p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="33">\n              <img src="./assets/imgs/polo.png">\n              <p><small>Men\'s apparel</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/jeans.png">\n              <p><small>Jeans</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/sneakers.png">\n              <p><small>Sneakers</small></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width="33">\n              <img src="./assets/imgs/dress.png">\n              <p><small>Women\'s apparel</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/skirt.png">\n              <p><small>Skirts</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/bag.png">\n              <p><small>Bag</small></p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n            <ion-col width="33">\n              <img src="./assets/imgs/polo.png">\n              <p><small>Men\'s apparel</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/jeans.png">\n              <p><small>Jeans</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/sneakers.png">\n              <p><small>Sneakers</small></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col width="33">\n              <img src="./assets/imgs/dress.png">\n              <p><small>Women\'s apparel</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/skirt.png">\n              <p><small>Skirts</small></p>\n            </ion-col>\n            <ion-col width="33">\n              <img src="./assets/imgs/bag.png">\n              <p><small>Bag</small></p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'https://api.coinmarketcap.com/v1/',
    api_url_coincap: 'http://coincap.io/',
    api_url_cryptocompare: 'https://www.cryptocompare.com/api/data',
    env: 'local',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, DataFactory, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.DataFactory = DataFactory;
        this.loadingCtrl = loadingCtrl;
        this.schoolsArr = [];
    }
    AboutPage.prototype.doRefresh = function (e) {
        setTimeout(function () {
            e.complete();
        }, 600);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/about/about.html"*/'<ion-header no-border no-line>\n  <ion-navbar color="richblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="richblue">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_details_details__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, DataFactory, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DataFactory = DataFactory;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.tickerArr = [];
        this.tickerArrCopy = [];
        this.favorites = [];
        this.actions = '/1day';
        this.lineChartOptions = {
            responsive: true,
            animation: false,
            tooltipEvents: [
                'mousemove',
                'touchstart',
                'touchmove'
            ],
            elements: {
                point: { radius: 0 },
                line: { fill: false }
            },
            scales: {
                yAxes: [{ display: true }],
                xAxes: [{ display: false }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: '#A1ADDC ',
                borderColor: '#525CAB',
                pointBackgroundColor: '#525CAB',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#525CAB'
            }];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        storage.get('favorites').then(function (val) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](val)) {
                _this.favorites = val;
            }
        });
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.DataFactory.getAllTicker().then(function (data) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                var temp_1 = [];
                __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data, function (row) {
                    row.img = './assets/icon/' + row.symbol + '.png';
                    if (__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](_this.favorites, { id: row.id })) {
                        temp_1.push(row);
                    }
                });
                __WEBPACK_IMPORTED_MODULE_4_async__["each"](temp_1, function (item, callback) {
                    item.price_data = [];
                    item.price_labels = [];
                    item.marketcap_data = [];
                    item.marketcap_labels = [];
                    item.volume_data = [];
                    item.volume_labels = [];
                    _this.DataFactory.getChartData(_this.actions, item.symbol).then(function (data) {
                        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
                        if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                            if (data.price && data.price.length > 0) {
                                __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.price, function (value) {
                                    item.price_data.push(value[1]);
                                    item.price_labels.push(datePipe.transform(value[0], 'medium'));
                                });
                            }
                        }
                    }).then(function () {
                        callback();
                    });
                }, function () {
                    _this.tickerArr = temp_1;
                    _this.tickerArrCopy = temp_1;
                });
            }
        }, function (error) {
            // loading.dismiss();
        }).then(function () {
            loading.dismiss();
        });
    };
    FavoritesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.DataFactory.getAllTicker().then(function (data) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                var temp_2 = [];
                __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data, function (row) {
                    row.img = './assets/icon/' + row.symbol + '.png';
                    if (__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](_this.favorites, { id: row.id })) {
                        temp_2.push(row);
                    }
                });
                __WEBPACK_IMPORTED_MODULE_4_async__["each"](temp_2, function (item, callback) {
                    item.price_data = [];
                    item.price_labels = [];
                    item.marketcap_data = [];
                    item.marketcap_labels = [];
                    item.volume_data = [];
                    item.volume_labels = [];
                    _this.DataFactory.getChartData(_this.actions, item.symbol).then(function (data) {
                        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
                        if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                            if (data.price && data.price.length > 0) {
                                __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.price, function (value) {
                                    item.price_data.push(value[1]);
                                    item.price_labels.push(datePipe.transform(value[0], 'medium'));
                                });
                            }
                        }
                    }).then(function () {
                        callback();
                    });
                }, function () {
                    _this.tickerArr = temp_2;
                    _this.tickerArrCopy = temp_2;
                });
            }
        }, function (error) {
            // refresher.complete();
        }).then(function () {
            refresher.complete();
        });
    };
    FavoritesPage.prototype.gotoDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_details_details__["a" /* DetailsPage */], {
            crypto: item
        });
    };
    FavoritesPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        console.log('val: ', val);
        if (val && val.trim() != '') {
            this.tickerArr = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.tickerArrCopy, function (row) {
                return row.name == val;
            });
        }
        else {
            this.tickerArr = this.tickerArrCopy;
        }
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/favorites/favorites.html"*/'<ion-header no-border no-line>\n  <ion-navbar color="richblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Crypto Watcher\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar color="richblue">\n    <ion-searchbar (input)="getItems($event)" showCancelButton="true"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="richblue">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor="let item of tickerArr">\n    <ion-item (click)="gotoDetails(item)">\n      <ion-avatar item-start>\n        <!-- <img [src]="item.img" onError="this.src=\'./assets/imgs/ionic.png\'"> -->\n        <img src="https://files.coinmarketcap.com/static/img/coins/64x64/{{item.id}}.png" onError="this.src=\'./assets/imgs/ionic.png\'">\n      </ion-avatar>\n      <h2>{{item.name}} <small>({{item.symbol}})</small></h2>\n      <p> <strong>{{item.price_usd | currency:\'USD\'}}</strong></p>\n      <ion-note item-end color="secondary" *ngIf="item.percent_change_24h > 0">\n        <strong>{{item.percent_change_24h}} %</strong>\n      </ion-note>\n      <ion-note item-end color="danger" *ngIf="item.percent_change_24h < 0">\n        <strong>{{item.percent_change_24h}} %</strong>\n      </ion-note>\n      <ion-icon ios="md-arrow-round-up" md="md-arrow-round-up" item-end color="secondary" *ngIf="item.percent_change_24h > 0"></ion-icon>\n      <ion-icon ios="md-arrow-round-down" md="md-arrow-round-down" item-end color="danger" *ngIf="item.percent_change_24h < 0"></ion-icon>\n    </ion-item>\n    <!-- <img src="./assets/imgs/advance-card-map-mario.png"> -->\n    <canvas baseChart [data]="item.price_data" [labels]="item.price_labels" [options]="lineChartOptions" [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType"></canvas>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mores = [];
        console.log('MorePage');
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter MorePage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/settings/settings.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border no-line>\n  <ion-navbar color="richblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="richblue">\n  <ion-list>\n    <button ion-item *ngFor="let item of mores" (click)="itemSelected(item)">\n      <ion-icon color="primary" ios="{{item.icon}}" md="{{item.icon}}" item-start></ion-icon>\n      {{ item.title }}\n      <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Chats\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()"><ion-icon ios="ios-close-circle-outline" md="ios-close-circle-outline"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the DeliveryaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliveryaddressPage = (function () {
    function DeliveryaddressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeliveryaddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeliveryaddressPage');
    };
    DeliveryaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-deliveryaddress',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/deliveryaddress/deliveryaddress.html"*/'<!--\n  Generated template for the DeliveryaddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>deliveryaddress</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/deliveryaddress/deliveryaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DeliveryaddressPage);
    return DeliveryaddressPage;
}());

//# sourceMappingURL=deliveryaddress.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmationPage = (function () {
    function ConfirmationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmationPage');
    };
    ConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmation',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/confirmation/confirmation.html"*/'<!--\n  Generated template for the ConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>confirmation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/confirmation/confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfirmationPage);
    return ConfirmationPage;
}());

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyaccountPage = (function () {
    function MyaccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyaccountPage');
    };
    MyaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myaccount',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaccount/myaccount.html"*/'<!--\n  Generated template for the MyaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myaccount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaccount/myaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakepaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MakepaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MakepaymentPage = (function () {
    function MakepaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MakepaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakepaymentPage');
    };
    MakepaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-makepayment',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/makepayment/makepayment.html"*/'<!--\n  Generated template for the MakepaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>makepayment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/makepayment/makepayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MakepaymentPage);
    return MakepaymentPage;
}());

//# sourceMappingURL=makepayment.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyratingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MyratingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyratingPage = (function () {
    function MyratingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyratingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyratingPage');
    };
    MyratingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myrating',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myrating/myrating.html"*/'<!--\n  Generated template for the MyratingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myrating</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myrating/myrating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MyratingPage);
    return MyratingPage;
}());

//# sourceMappingURL=myrating.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = (function () {
    function MyprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyprofilePage');
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myprofile/myprofile.html"*/'<!--\n  Generated template for the MyprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myprofile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myprofile/myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderdetailsPage = (function () {
    function OrderdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderdetailsPage');
    };
    OrderdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orderdetails',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/orderdetails/orderdetails.html"*/'<!--\n  Generated template for the OrderdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>orderdetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/orderdetails/orderdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OrderdetailsPage);
    return OrderdetailsPage;
}());

//# sourceMappingURL=orderdetails.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentmethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the PaymentmethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentmethodPage = (function () {
    function PaymentmethodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentmethodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentmethodPage');
    };
    PaymentmethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymentmethod',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentmethod/paymentmethod.html"*/'<!--\n  Generated template for the PaymentmethodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>paymentmethod</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentmethod/paymentmethod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PaymentmethodPage);
    return PaymentmethodPage;
}());

//# sourceMappingURL=paymentmethod.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the PaymentoptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentoptionPage = (function () {
    function PaymentoptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentoptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentoptionPage');
    };
    PaymentoptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paymentoption',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentoption/paymentoption.html"*/'<!--\n  Generated template for the PaymentoptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>paymentoption</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentoption/paymentoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PaymentoptionPage);
    return PaymentoptionPage;
}());

//# sourceMappingURL=paymentoption.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(435);


__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */].getPluginRef = function () { return "cordova.plugin.http"; };

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_confirmation_confirmation__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_deliveryaddress_deliveryaddress__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_makepayment_makepayment__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_myaccount_myaccount__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_myprofile_myprofile__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_myrating_myrating__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_orderdetails_orderdetails__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_paymentmethod_paymentmethod__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_paymentoption_paymentoption__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_settings_settings__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_shoppingcart_shoppingcart__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_service_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_http__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].api_url);
    RestangularProvider.setPlainByDefault(true);
    RestangularProvider.setFullResponse(true);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                }, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliveryaddress/deliveryaddress.module#DeliveryaddressPageModule', name: 'DeliveryaddressPage', segment: 'deliveryaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/makepayment/makepayment.module#MakepaymentPageModule', name: 'MakepaymentPage', segment: 'makepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrating/myrating.module#MyratingPageModule', name: 'MyratingPage', segment: 'myrating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentmethod/paymentmethod.module#PaymentmethodPageModule', name: 'PaymentmethodPage', segment: 'paymentmethod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productcomment/productcomment.module#ProductcommentPageModule', name: 'ProductcommentPage', segment: 'productcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentoption/paymentoption.module#PaymentoptionPageModule', name: 'PaymentoptionPage', segment: 'paymentoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productratings/productratings.module#ProductratingsPageModule', name: 'ProductratingsPage', segment: 'productratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchresult/searchresult.module#SearchresultPageModule', name: 'SearchresultPage', segment: 'searchresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shippingoption/shippingoption.module#ShippingoptionPageModule', name: 'ShippingoptionPage', segment: 'shippingoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shoppingcart/shoppingcart.module#ShoppingcartPageModule', name: 'ShoppingcartPage', segment: 'shoppingcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopprofile/shopprofile.module#ShopprofilePageModule', name: 'ShopprofilePage', segment: 'shopprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__["RestangularModule"].forRoot(RestangularConfigFactory),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(restangular, http, _http, platform) {
        this.restangular = restangular;
        this.http = http;
        this._http = _http;
        this.platform = platform;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getAllTicker = function (convert, start, limit) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]();
        var _params = {};
        if (convert) {
            params = params.append('convert', convert);
            _params.convert = convert;
        }
        if (start) {
            params = params.append('start', start.toString());
            _params.start = start;
        }
        if (limit) {
            params = params.append('limit', limit.toString());
            _params.limit = limit;
        }
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp);
            };
            var callbackResponse2 = function (resp) {
                resolve(JSON.parse(resp.data));
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            // this.restangular.all('ticker').customGET("", params).subscribe(callbackResponse,errorResponse);
            if (_this.platform.is('cordova')) {
                _this._http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url + 'ticker', _params, {}).then(callbackResponse2, errorResponse);
            }
            else {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url + 'ticker', { params: params }).subscribe(callbackResponse, errorResponse);
            }
        });
    };
    ServiceProvider.prototype.getTickerById = function (id, convert) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]();
        var _params = {};
        if (convert) {
            params = params.append('convert', convert);
            _params.convert = convert;
        }
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp);
            };
            var callbackResponse2 = function (resp) {
                resolve(JSON.parse(resp.data));
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            // this.restangular.all('ticker').customGET(id, params).subscribe(callbackResponse, errorResponse);
            if (_this.platform.is('cordova')) {
                _this._http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url + 'ticker/' + id, _params, {}).then(callbackResponse2, errorResponse);
            }
            else {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url + 'ticker/' + id, { params: params }).subscribe(callbackResponse, errorResponse);
            }
        });
    };
    ServiceProvider.prototype.getGlobalData = function (convert) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]();
        var _params = {};
        if (convert) {
            params = params.append('convert', convert);
            _params.convert = convert;
        }
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp);
            };
            var callbackResponse2 = function (resp) {
                resolve(JSON.parse(resp.data));
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            // this.restangular.all('global').customGET("", params).subscribe(callbackResponse, errorResponse);
            if (_this.platform.is('cordova')) {
                _this._http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url + 'global', _params, {}).then(callbackResponse2, errorResponse);
            }
            else {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url + 'global', { params: params }).subscribe(callbackResponse, errorResponse);
            }
        });
    };
    ServiceProvider.prototype.getChartData = function (timespan, symbol) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp);
            };
            var callbackResponse2 = function (resp) {
                resolve(JSON.parse(resp.data));
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            /*this.restangular.withConfig((config) => {
              config.setBaseUrl(environment.api_url_coincap);
            }).all('history' + timespan + '/' + symbol).customGET().subscribe(callbackResponse, errorResponse);*/
            if (_this.platform.is('cordova')) {
                _this._http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url_coincap + 'history' + timespan + '/' + symbol, {}, {}).then(callbackResponse2, errorResponse);
            }
            else {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_url_coincap + 'history' + timespan + '/' + symbol).subscribe(callbackResponse, errorResponse);
            }
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 279,
	"./af.js": 279,
	"./ar": 280,
	"./ar-dz": 281,
	"./ar-dz.js": 281,
	"./ar-kw": 282,
	"./ar-kw.js": 282,
	"./ar-ly": 283,
	"./ar-ly.js": 283,
	"./ar-ma": 284,
	"./ar-ma.js": 284,
	"./ar-sa": 285,
	"./ar-sa.js": 285,
	"./ar-tn": 286,
	"./ar-tn.js": 286,
	"./ar.js": 280,
	"./az": 287,
	"./az.js": 287,
	"./be": 288,
	"./be.js": 288,
	"./bg": 289,
	"./bg.js": 289,
	"./bn": 290,
	"./bn.js": 290,
	"./bo": 291,
	"./bo.js": 291,
	"./br": 292,
	"./br.js": 292,
	"./bs": 293,
	"./bs.js": 293,
	"./ca": 294,
	"./ca.js": 294,
	"./cs": 295,
	"./cs.js": 295,
	"./cv": 296,
	"./cv.js": 296,
	"./cy": 297,
	"./cy.js": 297,
	"./da": 298,
	"./da.js": 298,
	"./de": 299,
	"./de-at": 300,
	"./de-at.js": 300,
	"./de-ch": 301,
	"./de-ch.js": 301,
	"./de.js": 299,
	"./dv": 302,
	"./dv.js": 302,
	"./el": 303,
	"./el.js": 303,
	"./en-au": 304,
	"./en-au.js": 304,
	"./en-ca": 305,
	"./en-ca.js": 305,
	"./en-gb": 306,
	"./en-gb.js": 306,
	"./en-ie": 307,
	"./en-ie.js": 307,
	"./en-nz": 308,
	"./en-nz.js": 308,
	"./eo": 309,
	"./eo.js": 309,
	"./es": 310,
	"./es-do": 311,
	"./es-do.js": 311,
	"./es.js": 310,
	"./et": 312,
	"./et.js": 312,
	"./eu": 313,
	"./eu.js": 313,
	"./fa": 314,
	"./fa.js": 314,
	"./fi": 315,
	"./fi.js": 315,
	"./fo": 316,
	"./fo.js": 316,
	"./fr": 317,
	"./fr-ca": 318,
	"./fr-ca.js": 318,
	"./fr-ch": 319,
	"./fr-ch.js": 319,
	"./fr.js": 317,
	"./fy": 320,
	"./fy.js": 320,
	"./gd": 321,
	"./gd.js": 321,
	"./gl": 322,
	"./gl.js": 322,
	"./gom-latn": 323,
	"./gom-latn.js": 323,
	"./he": 324,
	"./he.js": 324,
	"./hi": 325,
	"./hi.js": 325,
	"./hr": 326,
	"./hr.js": 326,
	"./hu": 327,
	"./hu.js": 327,
	"./hy-am": 328,
	"./hy-am.js": 328,
	"./id": 329,
	"./id.js": 329,
	"./is": 330,
	"./is.js": 330,
	"./it": 331,
	"./it.js": 331,
	"./ja": 332,
	"./ja.js": 332,
	"./jv": 333,
	"./jv.js": 333,
	"./ka": 334,
	"./ka.js": 334,
	"./kk": 335,
	"./kk.js": 335,
	"./km": 336,
	"./km.js": 336,
	"./kn": 337,
	"./kn.js": 337,
	"./ko": 338,
	"./ko.js": 338,
	"./ky": 339,
	"./ky.js": 339,
	"./lb": 340,
	"./lb.js": 340,
	"./lo": 341,
	"./lo.js": 341,
	"./lt": 342,
	"./lt.js": 342,
	"./lv": 343,
	"./lv.js": 343,
	"./me": 344,
	"./me.js": 344,
	"./mi": 345,
	"./mi.js": 345,
	"./mk": 346,
	"./mk.js": 346,
	"./ml": 347,
	"./ml.js": 347,
	"./mr": 348,
	"./mr.js": 348,
	"./ms": 349,
	"./ms-my": 350,
	"./ms-my.js": 350,
	"./ms.js": 349,
	"./my": 351,
	"./my.js": 351,
	"./nb": 352,
	"./nb.js": 352,
	"./ne": 353,
	"./ne.js": 353,
	"./nl": 354,
	"./nl-be": 355,
	"./nl-be.js": 355,
	"./nl.js": 354,
	"./nn": 356,
	"./nn.js": 356,
	"./pa-in": 357,
	"./pa-in.js": 357,
	"./pl": 358,
	"./pl.js": 358,
	"./pt": 359,
	"./pt-br": 360,
	"./pt-br.js": 360,
	"./pt.js": 359,
	"./ro": 361,
	"./ro.js": 361,
	"./ru": 362,
	"./ru.js": 362,
	"./sd": 363,
	"./sd.js": 363,
	"./se": 364,
	"./se.js": 364,
	"./si": 365,
	"./si.js": 365,
	"./sk": 366,
	"./sk.js": 366,
	"./sl": 367,
	"./sl.js": 367,
	"./sq": 368,
	"./sq.js": 368,
	"./sr": 369,
	"./sr-cyrl": 370,
	"./sr-cyrl.js": 370,
	"./sr.js": 369,
	"./ss": 371,
	"./ss.js": 371,
	"./sv": 372,
	"./sv.js": 372,
	"./sw": 373,
	"./sw.js": 373,
	"./ta": 374,
	"./ta.js": 374,
	"./te": 375,
	"./te.js": 375,
	"./tet": 376,
	"./tet.js": 376,
	"./th": 377,
	"./th.js": 377,
	"./tl-ph": 378,
	"./tl-ph.js": 378,
	"./tlh": 379,
	"./tlh.js": 379,
	"./tr": 380,
	"./tr.js": 380,
	"./tzl": 381,
	"./tzl.js": 381,
	"./tzm": 382,
	"./tzm-latn": 383,
	"./tzm-latn.js": 383,
	"./tzm.js": 382,
	"./uk": 384,
	"./uk.js": 384,
	"./ur": 385,
	"./ur.js": 385,
	"./uz": 386,
	"./uz-latn": 387,
	"./uz-latn.js": 387,
	"./uz.js": 386,
	"./vi": 388,
	"./vi.js": 388,
	"./x-pseudo": 389,
	"./x-pseudo.js": 389,
	"./yo": 390,
	"./yo.js": 390,
	"./zh-cn": 391,
	"./zh-cn.js": 391,
	"./zh-hk": 392,
	"./zh-hk.js": 392,
	"./zh-tw": 393,
	"./zh-tw.js": 393
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 570;

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, DataFactory) {
        this.DataFactory = DataFactory;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[407]);
//# sourceMappingURL=main.js.map