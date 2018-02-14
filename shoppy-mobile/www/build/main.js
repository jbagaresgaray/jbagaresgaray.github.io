webpackJsonp([21],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(152);
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
            selector: 'page-details',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Air Jordan 1 Banned\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n            <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class="info">\n        <div text-center>\n            <ion-slides pager>\n                <ion-slide>\n                    <img src="./assets/imgs/product/1.jpg">\n                </ion-slide>\n                <ion-slide>\n                    <img src="./assets/imgs/product/1.jpg">\n                </ion-slide>\n                <ion-slide>\n                    <img src="./assets/imgs/product/1.jpg">\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="card-title">Air Jordan 1 Banned</div>\n        <ion-row>\n            <ion-col>\n                <span class="price">P 1500.00</span>\n                <br>\n                <span class="rating">\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          5/5 (14)</span>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10">\n        <div class="shipping_info">\n            <ion-row>\n                <ion-col col-2>\n                    <img src="./assets/imgs/ship.png">\n                </ion-col>\n                <ion-col col-10>\n                    <span>30% off shipping with min. order of P250.00, 100% off shipping with min. order of P500.00</span>\n                </ion-col>\n            </ion-row>\n            <ion-row padding>\n                <ion-col col-2>\n                    <img src="./assets/imgs/ship1.png">\n                </ion-col>\n                <ion-col col-10>\n                    <p>Shipping to: </p>\n                    <p>Cost: </p>\n                </ion-col>\n            </ion-row>\n            <ion-row padding-left padding-right>\n                <ion-col col-5>\n                    <button ion-button icon-left outline block>\n            <ion-icon name="heart-outline"></ion-icon>\n            Like\n          </button>\n                </ion-col>\n                <ion-col col-5>\n                    <button ion-button icon-left outline block (click)="viewProductComment()">\n            <ion-icon ios="ios-chatboxes-outline" md="md-chatboxes-outline"></ion-icon>\n            Comment\n          </button>\n                </ion-col>\n                <ion-col col-2>\n                    <button ion-button icon-only outline>\n            <ion-icon ios="ios-share-outline" md="md-share-outline"></ion-icon>\n          </button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n    <div class="info mt-10">\n        <ion-item no-lines>\n            <ion-avatar item-start>\n                <img src="./assets/imgs/user.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n            <p>Active 1 day ago</p>\n            <button ion-button outline item-end>View Shop</button>\n        </ion-item>\n        <ion-row padding-left padding-right padding-top>\n            <ion-col text-center class="borderleft">\n                <ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon>\n                <span class="highlight">156</span>\n                <div class="blblbl">Products</div>\n            </ion-col>\n            <ion-col text-center class="borderleft">\n                <ion-icon ios="ios-star-outline" md="ios-star-outline"></ion-icon>\n                <span class="highlight">5.80</span>\n                <div class="blblbl">Rating</div>\n            </ion-col>\n            <ion-col text-center>\n                <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n                <span class="highlight">65%</span>\n                <div class="blblbl">Chat Response</div>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10 tbldetails">\n        <ion-item no-lines class="details">\n            <h2>Product Detail</h2>\n            <p>Air Jordan 1 Banned from Nike Air Shoes</p>\n            <ion-note item-end>\n                <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                56 days\n            </ion-note>\n        </ion-item>\n        <ion-row padding-top>\n            <ion-col text-left col-4>\n                Categories\n            </ion-col>\n            <ion-col text-left col-8>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Brand\n            </ion-col>\n            <ion-col text-left col-8 class="withdetails">\n                no brand\n                <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Origin\n            </ion-col>\n            <ion-col text-left col-8>\n                Imported\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Material\n            </ion-col>\n            <ion-col text-left col-8>\n                Rubber\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10 tbldetails">\n        <ion-row padding-top>\n            <ion-col text-left col-4>\n                Condition\n            </ion-col>\n            <ion-col text-left col-8>\n                New\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Variations\n            </ion-col>\n            <ion-col text-left col-8 class="withdetails">\n                no brand\n                <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Stock\n            </ion-col>\n            <ion-col text-left col-8>\n                Imported\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Ships From\n            </ion-col>\n            <ion-col text-left col-8>\n                Zone 2 Luis Hambre St. Poblaction, Naawan Misamis Oriental, 9023\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10">\n        <ion-item no-lines>\n            <h2>Product Ratings</h2>\n            <span class="rating">\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        5/5 (14)</span>\n            <button ion-button clear item-end (click)="viewProductRating()">See All\n        <ion-icon ios="ios-arrow-forward-outline" md="md-arrow-forward-outline"></ion-icon>\n      </button>\n        </ion-item>\n    </div>\n    <ion-list>\n        <ion-list-header>\n            FROM THE SAME SHOP\n            <div class="pull-right">\n                See all\n            </div>\n        </ion-list-header>\n        <ion-slides>\n            <ion-slide>\n                <ion-row>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/1.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                            <ion-row>\n                                <ion-col>\n                                    <div class="rating">\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/2.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/3.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/1.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                            <ion-row>\n                                <ion-col>\n                                    <div class="rating">\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/2.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/3.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-slide>\n        </ion-slides>\n    </ion-list>\n</ion-content>\n<ion-footer no-border>\n    <ion-row>\n        <ion-col>\n            <button ion-button full color="secondary">\n                <div>\n                <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon><br>\n                <label>Add to Cart</label>\n                </div>\n            </button>\n        </ion-col>\n        <ion-col>\n            <button ion-button full color="danger">Buy Now</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function ChatPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Chats\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="close()"><ion-icon ios="ios-close-circle-outline" md="ios-close-circle-outline"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorites_favorites__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(235);
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

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		593,
		44
	],
	"../pages/chatdetail/chatdetail.module": [
		618,
		27
	],
	"../pages/confirmation/confirmation.module": [
		594,
		43
	],
	"../pages/deliveryaddress/deliveryaddress.module": [
		595,
		42
	],
	"../pages/login/login.module": [
		596,
		41
	],
	"../pages/makepayment/makepayment.module": [
		597,
		40
	],
	"../pages/myaccount/myaccount.module": [
		598,
		39
	],
	"../pages/myprofile/myprofile.module": [
		601,
		38
	],
	"../pages/myrating/myrating.module": [
		599,
		37
	],
	"../pages/orderdetails/orderdetails.module": [
		602,
		36
	],
	"../pages/paymentmethod/paymentmethod.module": [
		600,
		35
	],
	"../pages/paymentoption/paymentoption.module": [
		603,
		34
	],
	"../pages/productcomment/productcomment.module": [
		604,
		33
	],
	"../pages/productratings/productratings.module": [
		606,
		32
	],
	"../pages/search/search.module": [
		605,
		31
	],
	"../pages/searchresult/searchresult.module": [
		607,
		30
	],
	"../pages/shippingoption/shippingoption.module": [
		609,
		26
	],
	"../pages/shoppingcart/shoppingcart.module": [
		610,
		29
	],
	"../pages/shopprofile/shopprofile.module": [
		608,
		25
	],
	"../pages/signup/signup.module": [
		611,
		24
	],
	"../pages/tabs/tabs.module": [
		613,
		28
	],
	"../pages/userprofile/userprofile.module": [
		612,
		23
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
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shoppingcart_shoppingcart__ = __webpack_require__(84);
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
    HomePage.prototype.viewChat = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-searchbar (input)="getItems($event)" showCancelButton="false"></ion-searchbar>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n            <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div>\n        <ion-slides pager>\n            <ion-slide>\n                <img src="./assets/imgs/thumb1.png">\n            </ion-slide>\n            <ion-slide>\n                <img src="./assets/imgs/thumb2.png">\n            </ion-slide>\n            <ion-slide>\n                <img src="./assets/imgs/thumb1.png">\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <ion-list>\n        <ion-list-header>\n            Popular Products\n            <div class="pull-right">\n                See more ...\n            </div>\n        </ion-list-header>\n        <div padding>\n            <ion-slides>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/1.jpg" />\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/2.jpg" />\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/3.jpg" />\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/1.jpg" />\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/2.jpg" />\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/3.jpg" />\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            FLASH DEALS\n            <div class="pull-right">\n                See all deals\n            </div>\n        </ion-list-header>\n        <div padding>\n        </div>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            OFFICIAL SHOPS\n            <div class="pull-right">\n                See more ...\n            </div>\n        </ion-list-header>\n        <div padding>\n            <ion-slides>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/adidas.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/chanel.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/ktm.png">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/panasonic.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/puma.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/zara.png">\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/adidas.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/chanel.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/ktm.png">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/panasonic.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/puma.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/zara.png">\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/adidas.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/chanel.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/ktm.png">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/panasonic.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/puma.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/zara.png">\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            Categories\n        </ion-list-header>\n        <div padding>\n            <ion-slides class="categories">\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/polo.png">\n                            <p><small>Men\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/jeans.png">\n                            <p><small>Jeans</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/sneakers.png">\n                            <p><small>Sneakers</small></p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/dress.png">\n                            <p><small>Women\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/skirt.png">\n                            <p><small>Skirts</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/bag.png">\n                            <p><small>Bag</small></p>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/polo.png">\n                            <p><small>Men\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/jeans.png">\n                            <p><small>Jeans</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/sneakers.png">\n                            <p><small>Sneakers</small></p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/dress.png">\n                            <p><small>Women\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/skirt.png">\n                            <p><small>Skirts</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/bag.png">\n                            <p><small>Bag</small></p>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/polo.png">\n                            <p><small>Men\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/jeans.png">\n                            <p><small>Jeans</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/sneakers.png">\n                            <p><small>Sneakers</small></p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/dress.png">\n                            <p><small>Women\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/skirt.png">\n                            <p><small>Skirts</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/bag.png">\n                            <p><small>Bag</small></p>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 231:
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

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(60);
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_details_details__ = __webpack_require__(130);
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

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakepaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyratingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentmethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the ProductcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductcommentPage = (function () {
    function ProductcommentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductcommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductcommentPage');
    };
    ProductcommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-productcomment',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productcomment/productcomment.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Comments\n        </ion-title>\n        <ion-buttons end>\n            <img src="./assets/imgs/product/1.jpg">\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productcomment/productcomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductcommentPage);
    return ProductcommentPage;
}());

//# sourceMappingURL=productcomment.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductratingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the ProductratingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductratingsPage = (function () {
    function ProductratingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductratingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductratingsPage');
    };
    ProductratingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-productratings',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productratings/productratings.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Product Rating\n        </ion-title>\n        <ion-buttons end>\n            <img src="./assets/imgs/product/1.jpg">\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productratings/productratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductratingsPage);
    return ProductratingsPage;
}());

//# sourceMappingURL=productratings.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the SearchresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchresultPage = (function () {
    function SearchresultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchresultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchresultPage');
    };
    SearchresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-searchresult',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/searchresult/searchresult.html"*/'<!--\n  Generated template for the SearchresultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>searchresult</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/searchresult/searchresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchresultPage);
    return SearchresultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(439);


__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */].getPluginRef = function () { return "cordova.plugin.http"; };

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_confirmation_confirmation__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_deliveryaddress_deliveryaddress__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_makepayment_makepayment__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_myaccount_myaccount__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_myprofile_myprofile__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_myrating_myrating__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_orderdetails_orderdetails__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_paymentmethod_paymentmethod__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_paymentoption_paymentoption__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_productcomment_productcomment__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_productratings_productratings__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_search_search__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_searchresult_searchresult__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_settings_settings__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_shoppingcart_shoppingcart__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_service_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_http__ = __webpack_require__(88);
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
                __WEBPACK_IMPORTED_MODULE_27__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
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
                        { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliveryaddress/deliveryaddress.module#DeliveryaddressPageModule', name: 'DeliveryaddressPage', segment: 'deliveryaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/makepayment/makepayment.module#MakepaymentPageModule', name: 'MakepaymentPage', segment: 'makepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrating/myrating.module#MyratingPageModule', name: 'MyratingPage', segment: 'myrating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentmethod/paymentmethod.module#PaymentmethodPageModule', name: 'PaymentmethodPage', segment: 'paymentmethod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentoption/paymentoption.module#PaymentoptionPageModule', name: 'PaymentoptionPage', segment: 'paymentoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productcomment/productcomment.module#ProductcommentPageModule', name: 'ProductcommentPage', segment: 'productcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productratings/productratings.module#ProductratingsPageModule', name: 'ProductratingsPage', segment: 'productratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchresult/searchresult.module#SearchresultPageModule', name: 'SearchresultPage', segment: 'searchresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopprofile/shopprofile.module#ShopprofilePageModule', name: 'ShopprofilePage', segment: 'shopprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shippingoption/shippingoption.module#ShippingoptionPageModule', name: 'ShippingoptionPage', segment: 'shippingoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shoppingcart/shoppingcart.module#ShoppingcartPageModule', name: 'ShoppingcartPage', segment: 'shoppingcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_27__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_35__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 280,
	"./af.js": 280,
	"./ar": 281,
	"./ar-dz": 282,
	"./ar-dz.js": 282,
	"./ar-kw": 283,
	"./ar-kw.js": 283,
	"./ar-ly": 284,
	"./ar-ly.js": 284,
	"./ar-ma": 285,
	"./ar-ma.js": 285,
	"./ar-sa": 286,
	"./ar-sa.js": 286,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 281,
	"./az": 288,
	"./az.js": 288,
	"./be": 289,
	"./be.js": 289,
	"./bg": 290,
	"./bg.js": 290,
	"./bn": 291,
	"./bn.js": 291,
	"./bo": 292,
	"./bo.js": 292,
	"./br": 293,
	"./br.js": 293,
	"./bs": 294,
	"./bs.js": 294,
	"./ca": 295,
	"./ca.js": 295,
	"./cs": 296,
	"./cs.js": 296,
	"./cv": 297,
	"./cv.js": 297,
	"./cy": 298,
	"./cy.js": 298,
	"./da": 299,
	"./da.js": 299,
	"./de": 300,
	"./de-at": 301,
	"./de-at.js": 301,
	"./de-ch": 302,
	"./de-ch.js": 302,
	"./de.js": 300,
	"./dv": 303,
	"./dv.js": 303,
	"./el": 304,
	"./el.js": 304,
	"./en-au": 305,
	"./en-au.js": 305,
	"./en-ca": 306,
	"./en-ca.js": 306,
	"./en-gb": 307,
	"./en-gb.js": 307,
	"./en-ie": 308,
	"./en-ie.js": 308,
	"./en-nz": 309,
	"./en-nz.js": 309,
	"./eo": 310,
	"./eo.js": 310,
	"./es": 311,
	"./es-do": 312,
	"./es-do.js": 312,
	"./es.js": 311,
	"./et": 313,
	"./et.js": 313,
	"./eu": 314,
	"./eu.js": 314,
	"./fa": 315,
	"./fa.js": 315,
	"./fi": 316,
	"./fi.js": 316,
	"./fo": 317,
	"./fo.js": 317,
	"./fr": 318,
	"./fr-ca": 319,
	"./fr-ca.js": 319,
	"./fr-ch": 320,
	"./fr-ch.js": 320,
	"./fr.js": 318,
	"./fy": 321,
	"./fy.js": 321,
	"./gd": 322,
	"./gd.js": 322,
	"./gl": 323,
	"./gl.js": 323,
	"./gom-latn": 324,
	"./gom-latn.js": 324,
	"./he": 325,
	"./he.js": 325,
	"./hi": 326,
	"./hi.js": 326,
	"./hr": 327,
	"./hr.js": 327,
	"./hu": 328,
	"./hu.js": 328,
	"./hy-am": 329,
	"./hy-am.js": 329,
	"./id": 330,
	"./id.js": 330,
	"./is": 331,
	"./is.js": 331,
	"./it": 332,
	"./it.js": 332,
	"./ja": 333,
	"./ja.js": 333,
	"./jv": 334,
	"./jv.js": 334,
	"./ka": 335,
	"./ka.js": 335,
	"./kk": 336,
	"./kk.js": 336,
	"./km": 337,
	"./km.js": 337,
	"./kn": 338,
	"./kn.js": 338,
	"./ko": 339,
	"./ko.js": 339,
	"./ky": 340,
	"./ky.js": 340,
	"./lb": 341,
	"./lb.js": 341,
	"./lo": 342,
	"./lo.js": 342,
	"./lt": 343,
	"./lt.js": 343,
	"./lv": 344,
	"./lv.js": 344,
	"./me": 345,
	"./me.js": 345,
	"./mi": 346,
	"./mi.js": 346,
	"./mk": 347,
	"./mk.js": 347,
	"./ml": 348,
	"./ml.js": 348,
	"./mr": 349,
	"./mr.js": 349,
	"./ms": 350,
	"./ms-my": 351,
	"./ms-my.js": 351,
	"./ms.js": 350,
	"./my": 352,
	"./my.js": 352,
	"./nb": 353,
	"./nb.js": 353,
	"./ne": 354,
	"./ne.js": 354,
	"./nl": 355,
	"./nl-be": 356,
	"./nl-be.js": 356,
	"./nl.js": 355,
	"./nn": 357,
	"./nn.js": 357,
	"./pa-in": 358,
	"./pa-in.js": 358,
	"./pl": 359,
	"./pl.js": 359,
	"./pt": 360,
	"./pt-br": 361,
	"./pt-br.js": 361,
	"./pt.js": 360,
	"./ro": 362,
	"./ro.js": 362,
	"./ru": 363,
	"./ru.js": 363,
	"./sd": 364,
	"./sd.js": 364,
	"./se": 365,
	"./se.js": 365,
	"./si": 366,
	"./si.js": 366,
	"./sk": 367,
	"./sk.js": 367,
	"./sl": 368,
	"./sl.js": 368,
	"./sq": 369,
	"./sq.js": 369,
	"./sr": 370,
	"./sr-cyrl": 371,
	"./sr-cyrl.js": 371,
	"./sr.js": 370,
	"./ss": 372,
	"./ss.js": 372,
	"./sv": 373,
	"./sv.js": 373,
	"./sw": 374,
	"./sw.js": 374,
	"./ta": 375,
	"./ta.js": 375,
	"./te": 376,
	"./te.js": 376,
	"./tet": 377,
	"./tet.js": 377,
	"./th": 378,
	"./th.js": 378,
	"./tl-ph": 379,
	"./tl-ph.js": 379,
	"./tlh": 380,
	"./tlh.js": 380,
	"./tr": 381,
	"./tr.js": 381,
	"./tzl": 382,
	"./tzl.js": 382,
	"./tzm": 383,
	"./tzm-latn": 384,
	"./tzm-latn.js": 384,
	"./tzm.js": 383,
	"./uk": 385,
	"./uk.js": 385,
	"./ur": 386,
	"./ur.js": 386,
	"./uz": 387,
	"./uz-latn": 388,
	"./uz-latn.js": 388,
	"./uz.js": 387,
	"./vi": 389,
	"./vi.js": 389,
	"./x-pseudo": 390,
	"./x-pseudo.js": 390,
	"./yo": 391,
	"./yo.js": 391,
	"./zh-cn": 392,
	"./zh-cn.js": 392,
	"./zh-hk": 393,
	"./zh-hk.js": 393,
	"./zh-tw": 394,
	"./zh-tw.js": 394
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
webpackContext.id = 574;

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(60);
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

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(231);
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function ShoppingcartPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.cartArr = [];
    }
    ShoppingcartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingcartPage');
    };
    ShoppingcartPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ShoppingcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shoppingcart',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Shopping Cart\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="myCard" *ngIf="cartArr.length < 1">\n    <div padding text-center>\n    	<img src="./assets/imgs/shopping-cart.svg" />\n    </div>\n    <ion-card-content>\n      <p text-center>\n        <button ion-button color="secondary" (click)="back()">Go Shopping Now</button>\n      </p>\n    </ion-card-content>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ShoppingcartPage);
    return ShoppingcartPage;
}());

//# sourceMappingURL=shoppingcart.js.map

/***/ })

},[411]);
//# sourceMappingURL=main.js.map