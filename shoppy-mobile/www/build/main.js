webpackJsonp([34],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
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
            selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>About </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandsServiceProvider = (function () {
    function BrandsServiceProvider(restangular) {
        this.restangular = restangular;
    }
    BrandsServiceProvider.prototype.getAllBrands = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('brand').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    BrandsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"]])
    ], BrandsServiceProvider);
    return BrandsServiceProvider;
}());

//# sourceMappingURL=brands.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myaddress_myaddress__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_userprofile_userprofile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mybankcards_mybankcards__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountsettingsPage = (function () {
    function AccountsettingsPage(navCtrl, navParams, modalCtrl, actionSheetCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AccountsettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsettingsPage');
    };
    AccountsettingsPage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    AccountsettingsPage.prototype.viewMyAddressess = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_myaddress_myaddress__["a" /* MyaddressPage */]);
    };
    AccountsettingsPage.prototype.viewProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_userprofile_userprofile__["a" /* UserprofilePage */]);
    };
    AccountsettingsPage.prototype.viewBankCards = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_mybankcards_mybankcards__["a" /* MybankcardsPage */]);
    };
    AccountsettingsPage.prototype.viewAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */]);
    };
    AccountsettingsPage.prototype.logout = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Your profile will be saved. Can\'t wait to have you back',
            buttons: [
                {
                    text: 'Logout',
                    role: 'destructive',
                    handler: function () {
                        var loader = _this.loadingCtrl.create({
                            duration: 1000
                        });
                        localStorage.removeItem('app.user');
                        localStorage.removeItem('app.token');
                        loader.onDidDismiss(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], null, { animate: true, direction: 'back' });
                        });
                        loader.present();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AccountsettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accountsettings',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\accountsettings\accountsettings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Account Settings</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">My Account</ion-item-divider>\n\n    <button ion-item (click)="viewProfile()">My Profile</button>\n\n    <button ion-item (click)="viewMyAddressess()">My Address</button>\n\n    <button ion-item (click)="viewBankCards()">Bank Accounts/Cards</button>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">Settings</ion-item-divider>\n\n    <button ion-item>Chat Settings</button>\n\n    <button ion-item>Notification Settings</button>\n\n    <button ion-item>Privacy Settings</button>\n\n    <button ion-item>Blocked Users</button>\n\n    <button ion-item>Language</button>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">Support</ion-item-divider>\n\n    <button ion-item>Help Centre</button>\n\n    <button ion-item>Policies</button>\n\n    <button ion-item (click)="viewAbout()">About us</button>\n\n    <button ion-item>Request for Account Deletion</button>\n\n  </ion-item-group>\n\n  <div padding>\n\n    <button ion-button block color="danger" (click)="logout()">Logout</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\accountsettings\accountsettings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _e || Object])
    ], AccountsettingsPage);
    return AccountsettingsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=accountsettings.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myaddress_entry_myaddress_entry__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyaddressPage = (function () {
    function MyaddressPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    MyaddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyaddressPage');
    };
    MyaddressPage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    MyaddressPage.prototype.addNewAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_myaddress_entry_myaddress_entry__["a" /* MyaddressEntryPage */]);
    };
    MyaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myaddress',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\myaddress\myaddress.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Addressess</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Address 1\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>(+63)9394049310</p>\n\n      <p>4th Flr. Pioneer House Bldg. A. Mabini-Velez St.</p>\n\n      <p>Brgy. 14 Pob. Cagayan De Oro City</p>\n\n      <p>Mindanao, Misamis Oriental 9000</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Address 2\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>(+63)9394049310</p>\n\n      <p>Ground Flr. 47 Hayes St.</p>\n\n      <p>Brgy. 1 Pob. Cagayan De Oro City</p>\n\n      <p>Mindanao, Misamis Oriental 9000</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-list>\n\n    <button ion-item detail-none (click)="addNewAddress()">\n\n      Add New Address\n\n      <ion-icon name="add" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\myaddress\myaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], MyaddressPage);
    return MyaddressPage;
}());

//# sourceMappingURL=myaddress.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaddressEntryPage; });
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
 * Generated class for the MyaddressEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyaddressEntryPage = (function () {
    function MyaddressEntryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyaddressEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyaddressEntryPage');
    };
    MyaddressEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myaddress-entry',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\myaddress-entry\myaddress-entry.html"*/'<!--\n\n  Generated template for the MyaddressEntryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>New Address</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n  	<ion-item>\n\n      <ion-label>Name</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Phone Number</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>State</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Suburb</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>City</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Postal Code</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Country</ion-label>\n\n      <ion-select [(ngModel)]="gaming">\n\n        <ion-option value="nes">NES</ion-option>\n\n        <ion-option value="n64">Nintendo64</ion-option>\n\n        <ion-option value="ps">PlayStation</ion-option>\n\n        <ion-option value="genesis">Sega Genesis</ion-option>\n\n        <ion-option value="saturn">Sega Saturn</ion-option>\n\n        <ion-option value="snes">SNES</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Detailed Address</ion-label>\n\n      <textarea placeholder="Set Detailed Address"></textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list padding-top>\n\n    <ion-item>\n\n      <ion-label> Set As Default Address</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label> Set As Pickup Address</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label> Set As Return Address</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block>SUBMIT</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\myaddress-entry\myaddress-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MyaddressEntryPage);
    return MyaddressEntryPage;
}());

//# sourceMappingURL=myaddress-entry.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofilePage; });
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
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserprofilePage = (function () {
    function UserprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageUrl = 'assets/imgs/bg.jpg';
        this.user = {};
    }
    UserprofilePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter MyprofilePage');
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        console.log('this.user: ', this.user);
    };
    UserprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userprofile',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\userprofile\userprofile.html"*/'<ion-header transparent>\n\n  <ion-navbar transparent>\n\n    <ion-title>Edit Profile</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button clear>\n\n        Save\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}">\n\n  </div>\n\n  <div id="content">\n\n    <div id="profile-info">\n\n      <img id="profile-image" src="./assets/imgs/user.png">\n\n    </div>\n\n    <ion-list>\n\n      <button ion-item detail-none>\n\n        <ion-label>Username</ion-label>\n\n        <ion-note item-end>myusername</ion-note>\n\n      </button>\n\n      <button ion-item>\n\n        Change Password\n\n      </button>\n\n    </ion-list>\n\n    <ion-list padding-top>\n\n      <ion-item detail-none>\n\n        <ion-label>Gaming</ion-label>\n\n        <ion-select [(ngModel)]="gaming">\n\n          <ion-option value="nes">Male</ion-option>\n\n          <ion-option value="n64">Female</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <button ion-item>\n\n        Birthday\n\n      </button>\n\n      <button ion-item>\n\n        Phone\n\n        <ion-note item-end>*********24</ion-note>\n\n      </button>\n\n      <button ion-item>\n\n        Email\n\n        <ion-note item-end>ph*********@yopmail.com</ion-note>\n\n      </button>\n\n      <button ion-item>\n\n        Social Media Accounts\n\n      </button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\userprofile\userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], UserprofilePage);
    return UserprofilePage;
}());

//# sourceMappingURL=userprofile.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MybankcardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_mybankcards_entry_mybankcards_entry__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MybankcardsPage = (function () {
    function MybankcardsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    MybankcardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MybankcardsPage');
    };
    MybankcardsPage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    MybankcardsPage.prototype.addNewAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_mybankcards_entry_mybankcards_entry__["a" /* MybankcardsEntryPage */]);
    };
    MybankcardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mybankcards',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\mybankcards\mybankcards.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Bank Accounts/Cards</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n\n  <button ion-item>\n\n    <h2>Bank of the Philippines Islands (BPI)</h2>\n\n    <small>Checked</small>\n\n    <ion-note item-end>*3483</ion-note>\n\n  </button>  \n\n  <button ion-item>\n\n    <h2>Bank of the Philippines Islands (BPI)</h2>\n\n    <small>Checked</small>\n\n    <ion-note item-end>*3483</ion-note>\n\n  </button>  \n\n</ion-list>\n\n<ion-list padding-top>\n\n    <button ion-item detail-none (click)="addNewAccount()">\n\n      Add New Bank Account\n\n      <ion-icon name="add" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\mybankcards\mybankcards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], MybankcardsPage);
    return MybankcardsPage;
}());

//# sourceMappingURL=mybankcards.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MybankcardsEntryPage; });
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
 * Generated class for the MybankcardsEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MybankcardsEntryPage = (function () {
    function MybankcardsEntryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MybankcardsEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MybankcardsEntryPage');
    };
    MybankcardsEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mybankcards-entry',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\mybankcards-entry\mybankcards-entry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Add Bank Account</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Full Name in the Bank</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Account No</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Bank Name</ion-label>\n\n      <ion-select [(ngModel)]="gaming">\n\n        <ion-option value="nes">NES</ion-option>\n\n        <ion-option value="n64">Nintendo64</ion-option>\n\n        <ion-option value="ps">PlayStation</ion-option>\n\n        <ion-option value="genesis">Sega Genesis</ion-option>\n\n        <ion-option value="saturn">Sega Saturn</ion-option>\n\n        <ion-option value="snes">SNES</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <button ion-button full>Save</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\mybankcards-entry\mybankcards-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MybankcardsEntryPage);
    return MybankcardsEntryPage;
}());

//# sourceMappingURL=mybankcards-entry.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_brands__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandsPage = (function () {
    function BrandsPage(navCtrl, navParams, brands) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.brands = brands;
        this.brandsArr = [];
    }
    BrandsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BrandsPage');
        this.brands.getAllBrands().then(function (data) {
            console.log('categories: ', data);
            if (data && data.success) {
                _this.brandsArr = data.result;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](_this.brandsArr, function (row) {
                    row.opened = false;
                });
            }
        });
    };
    BrandsPage.prototype.doRefresh = function (ev) {
        var _this = this;
        console.log('ionViewDidLoad CategoriesPage');
        this.brands.getAllBrands().then(function (data) {
            console.log('categories: ', data);
            if (data && data.success) {
                _this.brandsArr = data.result;
                ev.complete();
            }
        });
    };
    BrandsPage.prototype.viewBrands = function (item) {
        console.log('viewBrands');
    };
    BrandsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-brands',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\brands\brands.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Brands</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n		<ion-refresher-content></ion-refresher-content>\n	</ion-refresher>\n	<ion-list>\n		<button ion-item *ngFor="let item of brandsArr" (click)="viewBrands(item)">\n			<ion-thumbnail item-start>\n				<img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n			</ion-thumbnail>\n			<h2>{{item.name}}</h2>\n		</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\brands\brands.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_brands__["a" /* BrandsServiceProvider */]])
    ], BrandsPage);
    return BrandsPage;
}());

//# sourceMappingURL=brands.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_searchresult_searchresult__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_categories__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, navParams, categories) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categories = categories;
        this.categoriesArr = [];
    }
    CategoriesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CategoriesPage');
        this.categories.getAllCategories().then(function (data) {
            console.log('categories: ', data);
            if (data && data.success) {
                _this.categoriesArr = data.result;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](_this.categoriesArr, function (row) {
                    row.opened = false;
                });
            }
        });
    };
    CategoriesPage.prototype.doRefresh = function (ev) {
        var _this = this;
        console.log('ionViewDidLoad CategoriesPage');
        this.categories.getAllCategories().then(function (data) {
            console.log('categories: ', data);
            if (data && data.success) {
                _this.categoriesArr = data.result;
                ev.complete();
            }
        });
    };
    CategoriesPage.prototype.viewCategory = function (item) {
        console.log('viewCategory');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_searchresult_searchresult__["a" /* SearchresultPage */]);
    };
    CategoriesPage.prototype.viewSubcategory = function (item, $event) {
        console.log('viewSubcategory');
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](this.categoriesArr, function (row) {
            if (item.categoryId == row.categoryId) {
                row.opened = !row.opened;
            }
        });
        $event.stopPropagation();
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\categories\categories.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Categories</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n		<ion-refresher-content></ion-refresher-content>\n	</ion-refresher>\n	<ion-list>\n		<div *ngFor="let item of categoriesArr">\n			<ion-item (click)="viewCategory(item,\'category\')">\n				<ion-thumbnail item-start>\n					<img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n				</ion-thumbnail>\n				<h2>{{item.name}}</h2>\n				<button ion-button clear item-end>\n					<ion-icon name="ios-arrow-down-outline" *ngIf="!item.opened" (click)="viewSubcategory(item,$event)"></ion-icon>\n					<ion-icon name="ios-arrow-up-outline" *ngIf="item.opened" (click)="viewSubcategory(item,$event)"></ion-icon>\n				</button>\n			</ion-item>\n			<div *ngIf="item.opened">\n				<button ion-item *ngFor="let row of item.subcategory">\n					<ion-avatar item-start>\n						<img [src]="row.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n					</ion-avatar>\n					<h2>{{row.name}}</h2>\n				</button>\n			</div>\n		</div>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_categories__["a" /* CategoriesServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductratingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_details_details__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductratingsPage = (function () {
    function ProductratingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductratingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductratingsPage');
    };
    ProductratingsPage.prototype.viewProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_details_details__["b" /* DetailsPage */]);
    };
    ProductratingsPage.prototype.doRefresh = function (ev) {
        setTimeout(function () {
            ev.complete();
        }, 2000);
    };
    ProductratingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-productratings',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\productratings\productratings.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Product Rating\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="./assets/imgs/product/1.jpg">\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button ion-button block outline>All <br>(1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block outline>With Comments <br>(1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block outline>With Photos <br>(1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">5 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">4 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">3 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button block color="light">2 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button block color="light">1 Star (1)</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/user.png">\n\n      </ion-avatar>\n\n      <h2>Cher</h2>\n\n      <p>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n      </p>\n\n      <p>Thank you. Till next transaction. :)</p>\n\n      <small>02/03/2018 14:32</small>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/user.png">\n\n      </ion-avatar>\n\n      <h2>John Doe</h2>\n\n      <p>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n      </p>\n\n      <p>Thank you. Item Shipped Immediately, Till next transaction. :)</p>\n\n      <small>02/03/2018 14:32</small>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\productratings\productratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ProductratingsPage);
    return ProductratingsPage;
}());

//# sourceMappingURL=productratings.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopProfilePopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShopprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chatdetail_chatdetail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShopProfilePopoverPage = (function () {
    function ShopProfilePopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ShopProfilePopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ShopProfilePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close()\">Share</button>\n      <button ion-item (click)=\"close()\">Report this user</button>\n      <button ion-item (click)=\"close()\">Block this user</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ShopProfilePopoverPage);
    return ShopProfilePopoverPage;
}());

var ShopprofilePage = (function () {
    function ShopprofilePage(app, navCtrl, navParams, menuCtrl, popoverCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.imageUrl = 'assets/imgs/bg.jpg';
        this.mode = 'shop';
        this.action = 'popular';
        this.isLow = false;
    }
    ShopprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopprofilePage');
    };
    ShopprofilePage.prototype.gotoDetails = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__pages_details_details__["b" /* DetailsPage */]);
    };
    ShopprofilePage.prototype.sortPrice = function () {
        this.isLow = !this.isLow;
    };
    ShopprofilePage.prototype.viewChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], {
            user: {
                "Id": "210000198410281948",
                "name": "Cassio Zen",
                "email": "cassiozen@gmail.com"
            }
        });
    };
    ShopprofilePage.prototype.viewFilters = function () {
        this.menuCtrl.enable(true, 'filtermenu');
        this.menuCtrl.toggle('right');
    };
    ShopprofilePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(ShopProfilePopoverPage);
        popover.present({
            ev: myEvent
        });
    };
    ShopprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shopprofile',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\shopprofile\shopprofile.html"*/'<ion-header no-border no-line>\n\n	<ion-navbar>\n\n		<ion-title>\n\n			Nike Store\n\n		</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button icon-only (click)="viewFilters()">\n\n				<ion-icon ios="ios-funnel-outline" md="ios-funnel-outline"></ion-icon>\n\n			</button>\n\n			<button ion-button icon-only (click)="presentPopover($event)">\n\n				<ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}">\n\n		<button class="button1" ion-button small outline color="light">\n\n			<ion-icon ios="ios-add-outline" md="ios-add-outline"></ion-icon>&nbsp; Follow\n\n		</button>\n\n		<button class="button2" ion-button small outline color="light" (click)="viewChat()">\n\n			<ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>&nbsp; Chat\n\n		</button>\n\n	</div>\n\n	<div id="content">\n\n		<div id="profile-info">\n\n			<img id="profile-image" src="./assets/imgs/user.png">\n\n			<h4 id="profile-name">Nike Store</h4>\n\n		</div>\n\n		<ion-segment [(ngModel)]="mode" mode="md">\n\n			<ion-segment-button value="shop">\n\n				Shop\n\n			</ion-segment-button>\n\n			<ion-segment-button value="all">\n\n				All Products\n\n			</ion-segment-button>\n\n			<ion-segment-button value="categories">\n\n				Categories\n\n			</ion-segment-button>\n\n		</ion-segment>\n\n		<div [ngSwitch]="mode">\n\n			<div *ngSwitchCase="\'shop\'">\n\n				<div class="contentbox">\n\n					<ion-card-content style="padding: 0 !important;">\n\n						<ion-row>\n\n							<ion-col class="keyColumn">\n\n								<ion-icon ios="ios-albums-outline" md="ios-albums-outline"></ion-icon> Products:\n\n							</ion-col>\n\n							<ion-col class="valueColumn">\n\n								&nbsp; 156\n\n							</ion-col>\n\n						</ion-row>\n\n						<ion-row>\n\n							<ion-col class="keyColumn">\n\n								<ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon> Response Rate\n\n							</ion-col>\n\n							<ion-col class="valueColumn">\n\n								&nbsp; 65%\n\n							</ion-col>\n\n						</ion-row>\n\n						<ion-row>\n\n							<ion-col class="keyColumn">\n\n								<ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon> Response Time\n\n							</ion-col>\n\n							<ion-col class="valueColumn">\n\n								&nbsp; Within Hours\n\n							</ion-col>\n\n						</ion-row>\n\n						<ion-row>\n\n							<ion-col class="keyColumn">\n\n								<ion-icon ios="ios-person-outline" md="ios-person-outline"></ion-icon> Joined\n\n							</ion-col>\n\n							<ion-col class="valueColumn">\n\n								&nbsp; 14 weeks\n\n							</ion-col>\n\n						</ion-row>\n\n						<ion-row>\n\n							<ion-col class="keyColumn">\n\n								<ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon> Preparation Time\n\n							</ion-col>\n\n							<ion-col class="valueColumn">\n\n								&nbsp; 2-3 days\n\n							</ion-col>\n\n						</ion-row>\n\n					</ion-card-content>\n\n				</div>\n\n				<ion-list>\n\n					<button ion-item>\n\n						<ion-icon name="ios-star-outline" item-start></ion-icon>\n\n						Ratings (5.0 out of 5)\n\n						<ion-note item-end>(155 Ratings)</ion-note>\n\n					</button>\n\n				</ion-list>\n\n				<div class="contentbox">\n\n					<ion-list-header>\n\n						About Us\n\n					</ion-list-header>\n\n					<ion-card-content style="padding: 0 !important;">\n\n						<p>\n\n							The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n						</p>\n\n						<p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n					</ion-card-content>\n\n					<ion-list>\n\n						<ion-list-header>\n\n							Shop Link\n\n						</ion-list-header>\n\n						<ion-item>\n\n							<p class="shoplink"> www.facebook.com/mychemicalromance</p>\n\n						</ion-item>\n\n						<ion-list-header>\n\n							Verified Accounts\n\n						</ion-list-header>\n\n						<button ion-item>\n\n							<ion-icon name="logo-facebook" item-start></ion-icon>\n\n							Facebook\n\n						</button>\n\n						<button ion-item>\n\n							<ion-icon name="md-mail" item-start></ion-icon>\n\n							Email\n\n						</button>\n\n						<button ion-item>\n\n							<ion-icon name="md-phone-portrait" item-start></ion-icon>\n\n							Phone\n\n						</button>\n\n					</ion-list>\n\n				</div>\n\n			</div>\n\n			<div *ngSwitchCase="\'all\'">\n\n				<div padding>\n\n					<ion-segment [(ngModel)]="action">\n\n						<ion-segment-button value="popular">\n\n							Popular\n\n						</ion-segment-button>\n\n						<ion-segment-button value="all">\n\n							Latest\n\n						</ion-segment-button>\n\n						<ion-segment-button value="categories">\n\n							Top Sales\n\n						</ion-segment-button>\n\n						<ion-segment-button value="price" (ionSelect)="sortPrice()">\n\n							Price &nbsp;\n\n							<ion-icon ios="md-arrow-dropup" md="md-arrow-dropup" *ngIf="!isLow"></ion-icon>\n\n							<ion-icon ios="md-arrow-dropdown" md="md-arrow-dropdown" *ngIf="isLow"></ion-icon>\n\n						</ion-segment-button>\n\n					</ion-segment>\n\n				</div>\n\n				<ion-list>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n					<ion-item tappable (click)="gotoDetails()">\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/product/1.jpg">\n\n						</ion-thumbnail>\n\n						<h2>Air Jordan 1 Breds</h2>\n\n						<p class="price">PHP 1500.00</p>\n\n						<div class="rating">\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							<ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n							5/5 (14)</div>\n\n						<button ion-button icon-only clear item-end>\n\n							<ion-icon name="heart-outline"></ion-icon>\n\n						</button>\n\n					</ion-item>\n\n				</ion-list>\n\n			</div>\n\n			<div *ngSwitchCase="\'categories\'">\n\n				<ion-list>\n\n					<button ion-item>\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/polo.png">\n\n						</ion-thumbnail>\n\n						<h2>Bakeware</h2>\n\n						<p>138 Products</p>\n\n					</button>\n\n					<button ion-item>\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/jeans.png">\n\n						</ion-thumbnail>\n\n						<h2>Bakeware</h2>\n\n						<p>138 Products</p>\n\n					</button>\n\n					<button ion-item>\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/hoodie.png">\n\n						</ion-thumbnail>\n\n						<h2>Bakeware</h2>\n\n						<p>138 Products</p>\n\n					</button>\n\n					<button ion-item>\n\n						<ion-thumbnail item-start>\n\n							<img src="./assets/imgs/shoes.png">\n\n						</ion-thumbnail>\n\n						<h2>Bakeware</h2>\n\n						<p>138 Products</p>\n\n					</button>\n\n				</ion-list>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\shopprofile\shopprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], ShopprofilePage);
    return ShopprofilePage;
}());

//# sourceMappingURL=shopprofile.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcommentPage; });
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
 * Generated class for the ProductcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductcommentPage = (function () {
    function ProductcommentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commentsArr = [];
        this.showEmojiPicker = false;
        this.editorMsg = '';
    }
    ProductcommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductcommentPage');
    };
    ProductcommentPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ProductcommentPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    ProductcommentPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ProductcommentPage.prototype.sendMsg = function () {
        if (!this.editorMsg.trim())
            return;
        // Mock message
        var id = Date.now().toString();
        var newMsg = {
            messageId: Date.now().toString(),
            time: Date.now(),
            message: this.editorMsg,
            status: 'pending'
        };
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
    };
    ProductcommentPage.prototype.pushNewMsg = function (msg) {
        this.commentsArr.push(msg);
        this.scrollToBottom();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* TextInput */])
    ], ProductcommentPage.prototype, "messageInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProductcommentPage.prototype, "content", void 0);
    ProductcommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-productcomment',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\productcomment\productcomment.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Comments\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="./assets/imgs/product/1.jpg">\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="myCard" *ngIf="commentsArr.length < 1">\n\n    <div padding text-center>\n\n      <img src="./assets/imgs/chat.svg" />\n\n    </div>\n\n    <ion-card-content>\n\n      <p text-center>\n\n        Be the first one to leave a comment\n\n      </p>\n\n    </ion-card-content>\n\n  </div>\n\n  <div *ngIf="commentsArr.length > 0">\n\n    <ion-card *ngFor="let item of commentsArr">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="./assets/imgs/user.png">\n\n        </ion-avatar>\n\n        <h2>Marty McFly</h2>\n\n        <p>November 5, 1955</p>\n\n        <ion-note item-end>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-card-content>\n\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n  <ion-grid class="input-wrap">\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n          <ion-icon name="md-happy"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (ionFocus)="onFocus()">\n\n        </ion-textarea>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n          <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <emoji-picker *ngIf="showEmojiPicker" name="fieldEmoji" ngDefaultControl [(ngModel)]="editorMsg"></emoji-picker>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\productcomment\productcomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ProductcommentPage);
    return ProductcommentPage;
}());

//# sourceMappingURL=productcomment.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
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
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.continue = function () {
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\forgot\forgot.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Phone Number/ Email</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p>\n    Please enter your registered email address or phone number\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Email/Phone No." [(ngModel)]="email"></ion-input>\n    </ion-item>\n  </ion-list>\n   <button ion-button block (click)="continue()">Continue</button>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\forgot\forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedPage = (function () {
    function FeedPage(navCtrl, navParams, app, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
    };
    FeedPage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    FeedPage.prototype.viewChat = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal_1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            modal_1.present();
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\feed\feed.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Feed</ion-title>\n\n    <ion-buttons end *ngIf="!showList">\n\n      <button ion-button icon-only (click)="viewCart()">\n\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakepaymentPage; });
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
            selector: 'page-makepayment',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\makepayment\makepayment.html"*/'<!--\n\n  Generated template for the MakepaymentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>makepayment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\makepayment\makepayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MakepaymentPage);
    return MakepaymentPage;
}());

//# sourceMappingURL=makepayment.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myrating_myrating__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_accountsettings_accountsettings__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mywallet_mywallet__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mypurchases_mypurchases__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyprofilePage = (function () {
    function MyprofilePage(app, navCtrl, navParams, modalCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.imageUrl = 'assets/imgs/bg.jpg';
        this.user = {};
        this.mode = 'buyer';
        this.showProfile = false;
        console.log('ionViewCanEnter constructor');
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.showProfile = true;
        }
    }
    MyprofilePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter MyprofilePage');
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        console.log('users: ', this.user);
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.showProfile = true;
        }
    };
    MyprofilePage.prototype.openLogin = function () {
        var _this = this;
        // TODO: Check for authentication
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
        modal.onDidDismiss(function (res) {
            if (res == 'login') {
                _this.user = JSON.parse(localStorage.getItem('app.user')) || {};
                if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](_this.user)) {
                    _this.showProfile = true;
                }
            }
        });
        modal.present();
    };
    MyprofilePage.prototype.openSignUp = function () {
        // TODO: Check for authentication
        console.log('openSignUp');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */]);
        modal.present();
    };
    MyprofilePage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        // this.navCtrl.push(ShoppingcartPage);
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    MyprofilePage.prototype.viewChat = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    MyprofilePage.prototype.viewAccountSettings = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        // this.navCtrl.push(AccountsettingsPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */]);
    };
    MyprofilePage.prototype.viewMyRating = function () {
        // this.navCtrl.push(MyratingPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_myrating_myrating__["a" /* MyratingPage */]);
    };
    MyprofilePage.prototype.viewMyPurchases = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__pages_mypurchases_mypurchases__["a" /* MypurchasesPage */]);
    };
    MyprofilePage.prototype.viewMyWallet = function () {
        // this.navCtrl.push(MywalletPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_mywallet_mywallet__["a" /* MywalletPage */]);
    };
    MyprofilePage.prototype.viewAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */]);
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\myprofile\myprofile.html"*/'<ion-header transparent>\n\n  <ion-navbar transparent>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewAccountSettings()">\n\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>&nbsp;</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="viewCart()">\n\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}" *ngIf="showProfile">\n\n  </div>\n\n  <div id="content" *ngIf="showProfile">\n\n    <div id="profile-info">\n\n      <img id="profile-image" src="./assets/imgs/user.png">\n\n      <h4 id="profile-name">{{this.user.firstname}} {{this.user.lastname}}</h4>\n\n      \n\n    </div>\n\n    <ion-segment [(ngModel)]="mode" mode="md">\n\n      <ion-segment-button value="buyer">\n\n        Buyer\n\n      </ion-segment-button>\n\n      <ion-segment-button value="seller">\n\n        Seller\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <ion-list>\n\n      <div [ngSwitch]="mode">\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyPurchases()">\n\n          <ion-icon name="list-box" item-start></ion-icon>\n\n          My Purchases\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'seller\'">\n\n          <ion-icon name="card" item-start></ion-icon>\n\n          My Sales\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'">\n\n          <ion-icon name="heart-outline" item-start></ion-icon>\n\n          My Likes\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyRating()">\n\n          <ion-icon name="star-outline" item-start></ion-icon>\n\n          My Ratings\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyWallet()">\n\n          <ion-icon name="cash" item-start></ion-icon>\n\n          My Wallet\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'seller\'">\n\n          <ion-icon name="card" item-start></ion-icon>\n\n          My Income\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'seller\'">\n\n          <ion-icon name="plane" item-start></ion-icon>\n\n          My Shipping\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'seller\'">\n\n          <ion-icon name="star-outline" item-start></ion-icon>\n\n          Shop Ratings\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'seller\'">\n\n          <ion-icon name="stats" item-start></ion-icon>\n\n          My Performance\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'seller\'">\n\n          <ion-icon name="build" item-start></ion-icon>\n\n          Seller Assistant\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewAccountSettings()">\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n          My Account\n\n        </button>\n\n        <button ion-item>\n\n          <ion-icon name="help-circle" item-start></ion-icon>\n\n          Help Centre\n\n        </button>\n\n        <ion-item-divider color="light" *ngSwitchCase="\'seller\'">&nbsp;</ion-item-divider>\n\n        <button ion-item *ngSwitchCase="\'seller\'">\n\n          <ion-icon name="home" item-start></ion-icon>\n\n          View My Shop\n\n        </button>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n  <ion-list *ngIf="!showProfile">\n\n    <button ion-item (click)="openLogin()">\n\n      <ion-icon name="ios-key-outline" item-start></ion-icon>\n\n      <h2>Login</h2>\n\n    </button>\n\n    <button ion-item (click)="openSignUp()">\n\n      <ion-icon name="ios-person-add-outline" item-start></ion-icon>\n\n      <h2>Sign Up</h2>\n\n    </button>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n    <button ion-item (click)="openLogin()">\n\n      <ion-icon name="ios-cart-outline" item-start></ion-icon>\n\n      <h2>My Purchases</h2>\n\n    </button>\n\n    <button ion-item (click)="openLogin()">\n\n      <ion-icon name="heart-outline" item-start></ion-icon>\n\n      <h2>My Likes</h2>\n\n    </button>\n\n    <ion-item-divider color="light">A</ion-item-divider>\n\n    <button ion-item (click)="viewAbout()">\n\n      <ion-icon name="ios-information-circle-outline" item-start></ion-icon>\n\n      About Us\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="ios-document-outline" item-start></ion-icon>\n\n      Policies\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="ios-help-circle-outline" item-start></ion-icon>\n\n      Help Centre\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _d || Object])
    ], MyprofilePage);
    return MyprofilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyratingPage; });
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
 * Generated class for the MyratingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyratingPage = (function () {
    function MyratingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = 'buyer';
    }
    MyratingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyratingPage');
    };
    MyratingPage.prototype.doRefresh = function (ev) {
        setTimeout(function () {
            ev.complete();
        }, 2000);
    };
    MyratingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myrating',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\myrating\myrating.html"*/'<!--\n\n  Generated template for the MyratingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Rating</ion-title>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="pet" mode="md">\n\n    <ion-segment-button value="shop">\n\n      Shop Rating\n\n    </ion-segment-button>\n\n    <ion-segment-button value="buyer">\n\n      Buyer Rating\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button ion-button block>All (1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">5 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">4 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">3 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">2 Star (1)</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button block color="light">1 Star (1)</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/user.png">\n\n      </ion-avatar>\n\n      <h2>Cher</h2>\n\n      <p>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n      </p>\n\n      <p>Thank you. Till next transaction. :)</p>\n\n      <ion-item no-border class="productinfo">\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/2.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Kyrie 2</h2>\n\n      </ion-item>\n\n      <small>02/03/2018 14:32</small>\n\n      <button ion-button outline item-end>Reply</button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/user.png">\n\n      </ion-avatar>\n\n      <h2>John Doe</h2>\n\n      <p>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n      </p>\n\n      <p>Thank you. Item Shipped Immediately, Till next transaction. :)</p>\n\n      <ion-item no-border class="productinfo">\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/3.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Kobe 11</h2>\n\n      </ion-item>\n\n      <small>02/03/2018 14:32</small>\n\n      <button ion-button outline item-end>Reply</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\myrating\myrating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MyratingPage);
    return MyratingPage;
}());

//# sourceMappingURL=myrating.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MywalletPage; });
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
 * Generated class for the MywalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MywalletPage = (function () {
    function MywalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MywalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MywalletPage');
    };
    MywalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mywallet',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\mywallet\mywallet.html"*/'<!--\n\n  Generated template for the MywalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Wallet</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n\n	<ion-item>\n\n		<div text-center>\n\n			<small>Wallet Ballance</small>\n\n			<h1 class="balance">Php 0.00</h1>\n\n		</div>\n\n	</ion-item>\n\n	<ion-item>\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col col-6>\n\n					<div text-center class="withdrawal">\n\n						<ion-icon name="cash"></ion-icon>\n\n						<br>\n\n						<label>WITHDRAWAL</label>\n\n					</div>\n\n				</ion-col>\n\n				<ion-col col-6>\n\n					<div text-center class="transaction">\n\n						<ion-icon name="copy"></ion-icon>\n\n						<br>\n\n						<label>TRANSACTIONS</label>\n\n					</div>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n	</ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\mywallet\mywallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MywalletPage);
    return MywalletPage;
}());

//# sourceMappingURL=mywallet.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypurchasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_makepayment_makepayment__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chatdetail_chatdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_orderdetails_orderdetails__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MypurchasesPage = (function () {
    function MypurchasesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        this.selectedSegment = 'pay';
        this.slides = [
            {
                id: "pay"
            },
            {
                id: "ship"
            },
            {
                id: "receive"
            },
            {
                id: "completed"
            },
            {
                id: "cancelled"
            },
            {
                id: "return"
            }
        ];
    }
    MypurchasesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MypurchasesPage');
    };
    MypurchasesPage.prototype.onSegmentChanged = function (segmentButton) {
        console.log("Segment changed to", segmentButton.value);
        var selectedIndex = this.slides.findIndex(function (slide) {
            return slide.id === segmentButton.value;
        });
        this.slider.slideTo(selectedIndex);
    };
    MypurchasesPage.prototype.onSlideChanged = function (slider) {
        console.log('Slide changed');
        var currentSlide = this.slides[slider.getActiveIndex()];
        if (currentSlide) {
            this.selectedSegment = currentSlide.id;
        }
    };
    MypurchasesPage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    MypurchasesPage.prototype.payNow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_makepayment_makepayment__["a" /* MakepaymentPage */]);
    };
    MypurchasesPage.prototype.contactSeller = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], {
            user: {
                "Id": "210000198410281948",
                "name": "Cassio Zen",
                "email": "cassiozen@gmail.com"
            }
        });
    };
    MypurchasesPage.prototype.viewOrderDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mySlider'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]) === "function" && _a || Object)
    ], MypurchasesPage.prototype, "slider", void 0);
    MypurchasesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mypurchases',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\mypurchases\mypurchases.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Purchases</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)" mode="md">\n\n      <ion-segment-button value="pay">\n\n        To Pay\n\n      </ion-segment-button>\n\n      <ion-segment-button value="ship">\n\n        To Ship\n\n      </ion-segment-button>\n\n      <ion-segment-button value="receive">\n\n        To Receive\n\n      </ion-segment-button>\n\n      <ion-segment-button value="completed">\n\n        Completed\n\n      </ion-segment-button>\n\n      <ion-segment-button value="cancelled">\n\n        Cancelled\n\n      </ion-segment-button>\n\n      <ion-segment-button value="return">\n\n        Return/Refund\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-slides #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n\n    <ion-slide id="pay">\n\n      <ion-list>\n\n        <ion-item-group (click)="viewOrderDetails()">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              To Pay\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>Pay by 03/24/2018 with Online Banking</small>\n\n            </ion-note>\n\n            <button ion-button color="danger" item-end (click)="payNow()">Pay Now</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide id="ship">\n\n      <ion-list>\n\n        <ion-item-group (click)="viewOrderDetails()">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              To Ship\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>Products will be shipped out <br> by 03/24/2018</small>\n\n            </ion-note>\n\n            <button ion-button color="danger" item-end (click)="contactSeller($event)">Contact Seller</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide id="receive">\n\n      <h1>To Receive</h1>\n\n    </ion-slide>\n\n    <ion-slide id="completed">\n\n      <ion-list>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Completed\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>No rating received</small>\n\n            </ion-note>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Rated\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <button ion-button color="danger" item-start>View Shop Rating</button>\n\n            <button ion-button color="danger" item-end>View Buyer Rating</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Rated\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>No rating received</small>\n\n            </ion-note>\n\n            <button ion-button color="danger" item-end>View Shop Rating</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Rated\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <button ion-button color="danger" item-end>View Buyer Rating</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide id="cancelled">\n\n      <h1>Cancelled</h1>\n\n    </ion-slide>\n\n    <ion-slide id="return">\n\n      <h1>Return/Refund</h1>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\mypurchases\mypurchases.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _d || Object])
    ], MypurchasesPage);
    return MypurchasesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=mypurchases.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsPage; });
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
            selector: 'page-orderdetails',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\orderdetails\orderdetails.html"*/'<!--\n\n  Generated template for the OrderdetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>orderdetails</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\orderdetails\orderdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], OrderdetailsPage);
    return OrderdetailsPage;
}());

//# sourceMappingURL=orderdetails.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.mapTabEnabled = true;
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.mapTabEnabled = false;
        }
        else {
            this.mapTabEnabled = true;
        }
        console.log('this.mapTabEnabled', this.mapTabEnabled);
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.openLogin = function () {
        // TODO: Check for authentication
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
        modal.present();
    };
    NotificationPage.prototype.openSignUp = function () {
        // TODO: Check for authentication
        console.log('openSignUp');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */]);
        modal.present();
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="myCard" *ngIf="!mapTabEnabled">\n\n    <div padding text-center>\n\n      <img src="./assets/imgs/ring.svg" />\n\n    </div>\n\n    <ion-card-content>\n\n      <p text-center>\n\n        <button ion-button block (click)="openLogin()">Login</button>\n\n        <button ion-button block clear (click)="openSignUp()">Sign Up</button>\n\n      </p>\n\n    </ion-card-content>\n\n  </div>\n\n  <ion-list *ngIf="mapTabEnabled">\n\n    <button ion-item>\n\n      <ion-icon name="pricetag" item-start></ion-icon>\n\n      <h2>Promotions</h2>\n\n      <ion-badge item-end>26</ion-badge> \n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="cash" item-start></ion-icon>\n\n      <h2>Wallet Updates</h2>\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="notifications" item-start></ion-icon>\n\n      <h2>App Updates</h2>\n\n      <ion-badge item-end>2</ion-badge> \n\n    </button>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">Order Updates</ion-item-divider>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Rate Products</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Shipped Out</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Shipped Out</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Cancellation Request Accepted</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Payment Confirm</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_details_details__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPopoverPage = (function () {
    function SearchPopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SearchPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SearchPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close()\">Best Match</button>\n      <button ion-item (click)=\"close()\">Price (Low to High)</button>\n      <button ion-item (click)=\"close()\">Price (High to Low)</button>\n      <button ion-item (click)=\"close()\">Number of Orders</button>\n      <button ion-item (click)=\"close()\">Top Sales</button>\n      <button ion-item (click)=\"close()\">Date Added</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], SearchPopoverPage);
    return SearchPopoverPage;
}());

var SearchPage = (function () {
    function SearchPage(app, navCtrl, navParams, popoverCtrl, menuCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.menuCtrl = menuCtrl;
        this.items = [];
        this.showList = false;
        this.isList = true;
        this.items = [
            "macbook pro",
            "macbook pro case",
            "macbook pro laptops",
            "macbook pro 13",
            "macbook pro 15",
            "macbook pro retina",
            "macbook pro charger",
            "macbook pro 2016",
            "macbook pro cover",
            "macbook pro sleeve",
            "macbook pro 2012",
            "macbook pro cable",
            "macbook pro 2017",
        ];
    }
    SearchPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(SearchPopoverPage);
        popover.present({
            ev: myEvent
        });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(false, 'filtermenu');
    };
    SearchPage.prototype.onInput = function (ev) {
    };
    SearchPage.prototype.onCancel = function (ev) {
        this.showList = false;
        this.content.resize();
    };
    SearchPage.prototype.checkBlur = function () {
        // this.showList = false;
    };
    SearchPage.prototype.checkFocus = function () {
        this.showList = true;
        this.content.resize();
    };
    SearchPage.prototype.viewFilters = function () {
        console.log('viewFilters');
        this.menuCtrl.enable(true, 'filtermenu');
        this.menuCtrl.toggle('right');
    };
    SearchPage.prototype.checkDisplay = function (display) {
        this.isList = (display === 'list') ? true : false;
    };
    SearchPage.prototype.gotoDetails = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__pages_details_details__["b" /* DetailsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SearchPage.prototype, "content", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="true" (ionBlur)="checkBlur()" (ionFocus)="checkFocus()" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n    <ion-buttons end *ngIf="!showList">\n\n      <button ion-button clear (click)="viewFilters()">\n\n        <ion-icon ios="ios-funnel-outline" md="ios-funnel-outline"></ion-icon>\n\n        &nbsp; Filter\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar *ngIf="!showList">\n\n    <ion-buttons left>\n\n      <button ion-button clear (click)="presentPopover($event)">\n\n        Best match &nbsp;\n\n        <ion-icon ios="md-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only *ngIf="isList" (click)="checkDisplay(\'grid\')">\n\n        <ion-icon ios="ios-apps-outline" md="ios-apps-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only *ngIf="!isList" (click)="checkDisplay(\'list\')">\n\n        <ion-icon ios="ios-list-box-outline" md="ios-list-box-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf="showList">\n\n    <ion-item *ngFor="let item of items">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngIf="!showList">\n\n    <div *ngIf="isList">\n\n      <ion-item tappable (click)="gotoDetails()">\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Air Jordan 1 Breds</h2>\n\n        <p class="price">PHP 1500.00</p>\n\n        <span class="rating">\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          5/5 (14)</span>\n\n        <button ion-button icon-only clear item-end>\n\n          <ion-icon name="heart-outline"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item tappable (click)="gotoDetails()">\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Air Jordan 1 Breds</h2>\n\n        <p class="price">PHP 1500.00</p>\n\n        <span class="rating">\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          5/5 (14)</span>\n\n        <button ion-button icon-only clear item-end>\n\n          <ion-icon name="heart-outline"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item tappable (click)="gotoDetails()">\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Air Jordan 1 Breds</h2>\n\n        <p class="price">PHP 1500.00</p>\n\n        <span class="rating">\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          5/5 (14)</span>\n\n        <button ion-button icon-only clear item-end>\n\n          <ion-icon name="heart-outline"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n    </div>\n\n    <ion-grid *ngIf="!isList">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/1.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Air Jordan 1 Banned</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/2.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Nike Kobe 11 BHM</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__ = __webpack_require__(179);
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
    function TabsPage(navCtrl, navParams, app, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__["a" /* FeedPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__["a" /* FavoritesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* NotificationPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__pages_myprofile_myprofile__["a" /* MyprofilePage */];
        this.user = {};
        this.mapTabEnabled = true;
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.mapTabEnabled = false;
        }
        else {
            this.mapTabEnabled = true;
        }
    }
    TabsPage.prototype.myMethod = function ($event) {
        /*if (_.isEmpty(this.user)) {
          let modal = this.modalCtrl.create(LoginPage);
          modal.onDidDismiss((resp) => {
            console.log('onDidDismiss');
            this.app.getRootNav().setRoot(TabsPage);
          });
          modal.present();
        }*/
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\tabs\tabs.html"*/'<ion-tabs no-border>\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="ios-paper-outline"></ion-tab>\n\n    <ion-tab [root]="tab3Root" [enabled]="mapTabEnabled" tabTitle="Sell" tabIcon="ios-camera-outline" (ionSelect)="myMethod($event)"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Notifications" tabBadge="2" tabIcon="ios-notifications-outline" (ionSelect)="myMethod($event)"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="Me" tabIcon="ios-contact-outline" (ionSelect)="myMethod($event)"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountsettings/accountsettings.module": [
		631,
		33
	],
	"../pages/brands/brands.module": [
		633,
		32
	],
	"../pages/categories/categories.module": [
		634,
		31
	],
	"../pages/chat/chat.module": [
		632,
		30
	],
	"../pages/chatdetail/chatdetail.module": [
		638,
		29
	],
	"../pages/confirmation/confirmation.module": [
		635,
		28
	],
	"../pages/deliveryaddress/deliveryaddress.module": [
		642,
		27
	],
	"../pages/feed/feed.module": [
		636,
		26
	],
	"../pages/forgot/forgot.module": [
		639,
		25
	],
	"../pages/login/login.module": [
		637,
		24
	],
	"../pages/makepayment/makepayment.module": [
		640,
		23
	],
	"../pages/myaccount/myaccount.module": [
		641,
		22
	],
	"../pages/myaddress-entry/myaddress-entry.module": [
		644,
		21
	],
	"../pages/myaddress/myaddress.module": [
		643,
		20
	],
	"../pages/mybankcards-entry/mybankcards-entry.module": [
		650,
		19
	],
	"../pages/mybankcards/mybankcards.module": [
		649,
		18
	],
	"../pages/myprofile/myprofile.module": [
		645,
		17
	],
	"../pages/mypurchases/mypurchases.module": [
		646,
		16
	],
	"../pages/myrating/myrating.module": [
		647,
		15
	],
	"../pages/mywallet/mywallet.module": [
		648,
		14
	],
	"../pages/notification/notification.module": [
		654,
		13
	],
	"../pages/orderdetails/orderdetails.module": [
		651,
		12
	],
	"../pages/paymentmethod/paymentmethod.module": [
		652,
		11
	],
	"../pages/paymentoption/paymentoption.module": [
		653,
		10
	],
	"../pages/productcomment/productcomment.module": [
		662,
		9
	],
	"../pages/productratings/productratings.module": [
		656,
		8
	],
	"../pages/search/search.module": [
		657,
		7
	],
	"../pages/searchresult/searchresult.module": [
		655,
		6
	],
	"../pages/shippingoption/shippingoption.module": [
		658,
		5
	],
	"../pages/shoppingcart/shoppingcart.module": [
		659,
		4
	],
	"../pages/shopprofile/shopprofile.module": [
		664,
		3
	],
	"../pages/signup/signup.module": [
		661,
		2
	],
	"../pages/tabs/tabs.module": [
		660,
		1
	],
	"../pages/userprofile/userprofile.module": [
		663,
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
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatService = (function () {
    function ChatService(http, events) {
        this.http = http;
        this.events = events;
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: './assets/imgs/user.png',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        var msgListUrl = './assets/data/msg-list.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: './assets/imgs/user.png'
        };
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = (function () {
    function AuthProvider(restangular) {
        this.restangular = restangular;
    }
    AuthProvider.prototype.authenticate = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            var authdata = window.btoa(data.username + ':' + data.password);
            _this.restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setDefaultHeaders({ 'Authorization': 'Basic ' + authdata });
            }).all('login').customPOST(data).subscribe(callbackResponse, errorResponse);
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shoppingcart_shoppingcart__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_brands_brands__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_searchresult_searchresult__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_categories__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_service_brands__ = __webpack_require__(124);
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
    function HomePage(app, navCtrl, loadingCtrl, storage, alertCtrl, modalCtrl, categories, brands) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.categories = categories;
        this.brands = brands;
        this.tickerArr = [];
        this.tickerArrCopy = [];
        this.items = [];
        this.favorites = [];
        this.categoriesArr = [];
        this.brandsArr = [];
        this.actions = 'top';
        this.global = {};
        this.user = {};
        this.showList = false;
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        storage.get('favorites').then(function (val) {
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](val)) {
                _this.favorites = val;
            }
        });
        this.categories.getAllCategories().then(function (data) {
            console.log('categories: ', data);
            if (data && data.success) {
                _this.categoriesArr = data.result;
            }
        });
        this.brands.getAllBrands().then(function (data) {
            console.log('brands: ', data);
            if (data && data.success) {
                _this.brandsArr = data.result;
            }
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.showList = false;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.items = [
            "macbook pro",
            "macbook pro case",
            "macbook pro laptops",
            "macbook pro 13",
            "macbook pro 15",
            "macbook pro retina",
            "macbook pro charger",
            "macbook pro 2016",
            "macbook pro cover",
            "macbook pro sleeve",
            "macbook pro 2012",
            "macbook pro cable",
            "macbook pro 2017",
        ];
    };
    HomePage.prototype.checkBlur = function () {
        // this.showList = false;
    };
    HomePage.prototype.checkFocus = function () {
        this.showList = true;
    };
    HomePage.prototype.onCancel = function () {
        this.showList = false;
    };
    HomePage.prototype.gotoSearch = function () {
        console.log('gotoSearch');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_async__["parallel"]([
            function (callback) {
                _this.categories.getAllCategories().then(function (data) {
                    console.log('categories: ', data);
                    if (data && data.success) {
                        _this.categoriesArr = data.result;
                        callback();
                    }
                }, function (error) {
                    callback();
                });
            },
            function (callback) {
                _this.brands.getAllBrands().then(function (data) {
                    console.log('brands: ', data);
                    if (data && data.success) {
                        _this.brandsArr = data.result;
                        callback();
                    }
                }, function (error) {
                    callback();
                });
            }
        ], function () {
            refresher.complete();
        });
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
        /* this.navCtrl.push(DetailsPage, {
            crypto: item
        }); */
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_details_details__["b" /* DetailsPage */], {
            crypto: item
        });
    };
    HomePage.prototype.addToFav = function (item) {
    };
    HomePage.prototype.segmentChanged = function (ev) {
    };
    HomePage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    HomePage.prototype.viewChat = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal_1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
            modal_1.present();
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    HomePage.prototype.viewCategories = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.viewBrands = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__pages_brands_brands__["a" /* BrandsPage */]);
    };
    HomePage.prototype.viewResults = function (item, type) {
        console.log('item: ', item);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_12__pages_searchresult_searchresult__["a" /* SearchresultPage */], {
            type: type,
            item: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\home\home.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-searchbar (input)="getItems($event)" (ionBlur)="checkBlur()" (ionFocus)="checkFocus()" (ionCancel)="onCancel()" showCancelButton="true"></ion-searchbar>\n\n    <ion-buttons end *ngIf="!showList">\n\n      <button ion-button icon-only (click)="viewCart()">\n\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf="showList">\n\n    <ion-item *ngFor="let item of items" (click)="gotoSearch()">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="!showList">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n    <div>\n\n      <ion-slides pager>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb1.png">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb2.png">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb1.png">\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Categories\n\n        <div class="pull-right" (click)="viewCategories()">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-grid class="categories">\n\n          <ion-row>\n\n            <ion-col col-4 text-center *ngFor="let item of categoriesArr | slice:0:9" (click)="viewResults(item,\'category\')">\n\n              <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n              <p>\n\n                <small>{{item.name}}</small>\n\n              </p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Brands\n\n        <div class="pull-right" (click)="viewBrands()">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col width="33" class="shops" *ngFor="let item of brandsArr  | slice:0:3">\n\n              <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col width="33" class="shops" *ngFor="let item of brandsArr  | slice:3:6">\n\n              <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        OFFICIAL SHOPS\n\n        <div class="pull-right">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/adidas.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/chanel.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/ktm.png">\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/panasonic.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/puma.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/zara.png">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/adidas.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/chanel.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/ktm.png">\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/panasonic.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/puma.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/zara.png">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/adidas.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/chanel.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/ktm.png">\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/panasonic.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/puma.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops">\n\n                <img src="./assets/imgs/brands/zara.png">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        FLASH DEALS\n\n        <div class="pull-right">\n\n          See all deals\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Popular Products\n\n        <div class="pull-right">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/1.jpg" />\n\n                  <div class="card-title">Air Jordan 1 Banned</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/2.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BHM</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/3.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BLUE</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/1.jpg" />\n\n                  <div class="card-title">Air Jordan 1 Banned</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/2.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BHM</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/3.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BLUE</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_service_categories__["a" /* CategoriesServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_service_brands__["a" /* BrandsServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(49);
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
    function FavoritesPage(navCtrl, navParams, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.favorites = [];
        storage.get('favorites').then(function (val) {
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](val)) {
                _this.favorites = val;
            }
        });
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
    };
    FavoritesPage.prototype.doRefresh = function (refresher) {
    };
    FavoritesPage.prototype.gotoDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_details_details__["b" /* DetailsPage */], {
            crypto: item
        });
    };
    FavoritesPage.prototype.getItems = function (ev) {
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\favorites\favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sell</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item>\n\n      <ion-icon name="camera" item-start></ion-icon>\n\n      <h2>Camera</h2>\n\n      <p>Upload image with camera</p>\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="images" item-start></ion-icon>\n\n      <h2>Photos</h2>\n\n      <p>Upload image from album gallery</p>\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="add" item-start></ion-icon>\n\n      <h2>Add Product</h2>\n\n      <p>Add product directly without image</p>\n\n    </button>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chatdetail_chatdetail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.contactsArr = [];
        this.pet = 'all';
        this.initializeData();
    }
    ChatPage.prototype.initializeData = function () {
        this.contactsArr = [
            {
                "Id": "210000198410281948",
                "name": "Cassio Zen",
                "email": "cassiozen@gmail.com"
            },
            {
                "Id": "210000198410281948",
                "name": "Dan Abramov",
                "email": "gaearon@somewhere.com"
            },
            {
                "Id": "210000198410281948",
                "name": "Pete Hunt",
                "email": "floydophone@somewhere.com"
            },
            {
                "Id": "210000198410281948",
                "name": "Paul O’Shannessy",
                "email": "zpao@somewhere.com"
            },
            {
                "Id": "210000198410281948",
                "name": "Ryan Florence",
                "email": "rpflorence@somewhere.com"
            },
            {
                "Id": "210000198410281948",
                "name": "Sebastian Markbage",
                "email": "sebmarkbage@here.com"
            }
        ];
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ChatPage.prototype.getItems = function (ev) {
        this.initializeData();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.contactsArr = this.contactsArr.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ChatPage.prototype.doRefresh = function (ev) {
        setTimeout(function () {
            ev.complete();
        }, 2000);
    };
    ChatPage.prototype.delete = function () {
    };
    ChatPage.prototype.unread = function () {
    };
    ChatPage.prototype.gotoDetail = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], {
            user: user
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\chat\chat.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Chats\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon ios="ios-close-circle-outline" md="ios-close-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-searchbar (input)="getItems($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n  <ion-segment [(ngModel)]="pet" mode="md">\n\n    <ion-segment-button value="all">\n\n      All\n\n    </ion-segment-button>\n\n    <ion-segment-button value="unread">\n\n      Unread\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-item-sliding *ngFor="let user of contactsArr">\n\n    <ion-item (click)="gotoDetail(user)">\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/user.png">\n\n      </ion-avatar>\n\n      <h2>{{user.name}}</h2>\n\n      <p>{{user.email}}</p>\n\n    </ion-item>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="dark" (click)="unread()">\n\n        <ion-icon name="create"></ion-icon>\n\n        Mark as unread\n\n      </button>\n\n      <button ion-button color="danger" (click)="delete()">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Delete\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    EmojiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmojiProvider);
    return EmojiProvider;
}());

//# sourceMappingURL=emojis.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
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
            selector: 'page-confirmation',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\confirmation\confirmation.html"*/'<!--\n\n  Generated template for the ConfirmationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>confirmation</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\confirmation\confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ConfirmationPage);
    return ConfirmationPage;
}());

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
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
            selector: 'page-myaccount',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\myaccount\myaccount.html"*/'<!--\n\n  Generated template for the MyaccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>myaccount</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\myaccount\myaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryaddressPage; });
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
            selector: 'page-deliveryaddress',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\deliveryaddress\deliveryaddress.html"*/'<!--\n\n  Generated template for the DeliveryaddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>deliveryaddress</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\deliveryaddress\deliveryaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], DeliveryaddressPage);
    return DeliveryaddressPage;
}());

//# sourceMappingURL=deliveryaddress.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentmethodPage; });
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
            selector: 'page-paymentmethod',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\paymentmethod\paymentmethod.html"*/'<!--\n\n  Generated template for the PaymentmethodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>paymentmethod</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\paymentmethod\paymentmethod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PaymentmethodPage);
    return PaymentmethodPage;
}());

//# sourceMappingURL=paymentmethod.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentoptionPage; });
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
            selector: 'page-paymentoption',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\paymentoption\paymentoption.html"*/'<!--\n\n  Generated template for the PaymentoptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>paymentoption</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\paymentoption\paymentoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PaymentoptionPage);
    return PaymentoptionPage;
}());

//# sourceMappingURL=paymentoption.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingoptionPage; });
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
 * Generated class for the ShippingoptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShippingoptionPage = (function () {
    function ShippingoptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShippingoptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShippingoptionPage');
    };
    ShippingoptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shippingoption',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\shippingoption\shippingoption.html"*/'<!--\n\n  Generated template for the ShippingoptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>shippingoption</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\shippingoption\shippingoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ShippingoptionPage);
    return ShippingoptionPage;
}());

//# sourceMappingURL=shippingoption.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(459);


__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */].getPluginRef = function () { return "cordova.plugin.http"; };

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth0_angular_jwt__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chatdetail_chatdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_confirmation_confirmation__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_deliveryaddress_deliveryaddress__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_makepayment_makepayment__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_myaccount_myaccount__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_myprofile_myprofile__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_myrating_myrating__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_myaddress_myaddress__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_myaddress_entry_myaddress_entry__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_mybankcards_mybankcards__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_mybankcards_entry_mybankcards_entry__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_mywallet_mywallet__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_mypurchases_mypurchases__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_orderdetails_orderdetails__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_paymentmethod_paymentmethod__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_paymentoption_paymentoption__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_productcomment_productcomment__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_productratings_productratings__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_search_search__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_searchresult_searchresult__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_shippingoption_shippingoption__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_shoppingcart_shoppingcart__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_shopprofile_shopprofile__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_signup_signup__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_forgot_forgot__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_userprofile_userprofile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_notification_notification__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_accountsettings_accountsettings__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_feed_feed__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_categories_categories__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_brands_brands__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_emoji_picker_emoji_picker__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pipes_relative_time_relative_time__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_service_authentication__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_service_emojis__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_service_chat__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_service_categories__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_service_brands__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_status_bar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_http__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























































function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].api_url);
    RestangularProvider.setPlainByDefault(true);
    RestangularProvider.setFullResponse(true);
}
function tokenGetter() {
    return localStorage.getItem('app.token');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_15__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], __WEBPACK_IMPORTED_MODULE_15__pages_chatdetail_chatdetail__["a" /* ChatDetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["b" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["a" /* DetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mypurchases_mypurchases__["a" /* MypurchasesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_37__pages_search_search__["b" /* SearchPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_shopprofile_shopprofile__["b" /* ShopprofilePage */], __WEBPACK_IMPORTED_MODULE_42__pages_shopprofile_shopprofile__["a" /* ShopProfilePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myaddress_myaddress__["a" /* MyaddressPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_myaddress_entry_myaddress_entry__["a" /* MyaddressEntryPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_mybankcards_mybankcards__["a" /* MybankcardsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_mywallet_mywallet__["a" /* MywalletPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mybankcards_entry_mybankcards_entry__["a" /* MybankcardsEntryPage */],
                __WEBPACK_IMPORTED_MODULE_51__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */], __WEBPACK_IMPORTED_MODULE_52__pipes_relative_time_relative_time__["a" /* RelativeTimePipe */],
                __WEBPACK_IMPORTED_MODULE_48__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_brands_brands__["a" /* BrandsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios',
                }, {
                    links: [
                        { loadChildren: '../pages/accountsettings/accountsettings.module#AccountsettingsPageModule', name: 'AccountsettingsPage', segment: 'accountsettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brands/brands.module#BrandsPageModule', name: 'BrandsPage', segment: 'brands', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatdetail/chatdetail.module#ChatdetailPageModule', name: 'ChatdetailPage', segment: 'chatdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/makepayment/makepayment.module#MakepaymentPageModule', name: 'MakepaymentPage', segment: 'makepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliveryaddress/deliveryaddress.module#DeliveryaddressPageModule', name: 'DeliveryaddressPage', segment: 'deliveryaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaddress/myaddress.module#MyaddressPageModule', name: 'MyaddressPage', segment: 'myaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaddress-entry/myaddress-entry.module#MyaddressEntryPageModule', name: 'MyaddressEntryPage', segment: 'myaddress-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypurchases/mypurchases.module#MypurchasesPageModule', name: 'MypurchasesPage', segment: 'mypurchases', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrating/myrating.module#MyratingPageModule', name: 'MyratingPage', segment: 'myrating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mywallet/mywallet.module#MywalletPageModule', name: 'MywalletPage', segment: 'mywallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mybankcards/mybankcards.module#MybankcardsPageModule', name: 'MybankcardsPage', segment: 'mybankcards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mybankcards-entry/mybankcards-entry.module#MybankcardsEntryPageModule', name: 'MybankcardsEntryPage', segment: 'mybankcards-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentmethod/paymentmethod.module#PaymentmethodPageModule', name: 'PaymentmethodPage', segment: 'paymentmethod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentoption/paymentoption.module#PaymentoptionPageModule', name: 'PaymentoptionPage', segment: 'paymentoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchresult/searchresult.module#SearchresultPageModule', name: 'SearchresultPage', segment: 'searchresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productratings/productratings.module#ProductratingsPageModule', name: 'ProductratingsPage', segment: 'productratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shippingoption/shippingoption.module#ShippingoptionPageModule', name: 'ShippingoptionPage', segment: 'shippingoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shoppingcart/shoppingcart.module#ShoppingcartPageModule', name: 'ShoppingcartPage', segment: 'shoppingcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productcomment/productcomment.module#ProductcommentPageModule', name: 'ProductcommentPage', segment: 'productcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopprofile/shopprofile.module#ShopprofilePageModule', name: 'ShopprofilePage', segment: 'shopprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__["RestangularModule"].forRoot(RestangularConfigFactory),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_15__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], __WEBPACK_IMPORTED_MODULE_15__pages_chatdetail_chatdetail__["a" /* ChatDetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["b" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["a" /* DetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mypurchases_mypurchases__["a" /* MypurchasesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_37__pages_search_search__["b" /* SearchPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_shopprofile_shopprofile__["b" /* ShopprofilePage */], __WEBPACK_IMPORTED_MODULE_42__pages_shopprofile_shopprofile__["a" /* ShopProfilePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myaddress_myaddress__["a" /* MyaddressPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_myaddress_entry_myaddress_entry__["a" /* MyaddressEntryPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_mybankcards_mybankcards__["a" /* MybankcardsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_mywallet_mywallet__["a" /* MywalletPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mybankcards_entry_mybankcards_entry__["a" /* MybankcardsEntryPage */],
                __WEBPACK_IMPORTED_MODULE_51__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_brands_brands__["a" /* BrandsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_53__providers_service_authentication__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_service_emojis__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_service_chat__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_56__providers_service_categories__["a" /* CategoriesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_service_brands__["a" /* BrandsServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chatdetail_chatdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_productratings_productratings__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shopprofile_shopprofile__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_productcomment_productcomment__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DetailPopoverPage = (function () {
    function DetailPopoverPage(viewCtrl, navCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
    }
    DetailPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DetailPopoverPage.prototype.viewChat = function () {
        // TODO: Check if Authenticated
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], {
            user: {
                "Id": "210000198410281948",
                "name": "Cassio Zen",
                "email": "cassiozen@gmail.com"
            }
        });
        this.viewCtrl.dismiss();
    };
    DetailPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <ion-item (click)=\"viewChat()\"><ion-icon ios=\"ios-chatbubbles-outline\" md=\"ios-chatbubbles-outline\" item-start></ion-icon>Chat Now</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon ios=\"ios-share-outline\" md=\"ios-share-outline\" item-start></ion-icon>Share</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon ios=\"ios-home-outline\" md=\"ios-home-outline\" item-start></ion-icon>Back to Home</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon ios=\"ios-information-circle-outline\" md=\"ios-information-circle-outline\" item-start></ion-icon>Report this product</ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], DetailPopoverPage);
    return DetailPopoverPage;
}());

var DetailsPage = (function () {
    function DetailsPage(app, navCtrl, navParams, loadingCtrl, storage, alertCtrl, modalCtrl, popoverCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.user = {};
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
    }
    DetailsPage_1 = DetailsPage;
    DetailsPage.prototype.ionViewDidLoad = function () {
    };
    DetailsPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    DetailsPage.prototype.likeItem = function () {
    };
    DetailsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(DetailPopoverPage);
        popover.present({
            ev: myEvent
        });
    };
    DetailsPage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal_1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal_1.present();
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
        modal.present();
    };
    DetailsPage.prototype.viewProductRating = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_productratings_productratings__["a" /* ProductratingsPage */]);
    };
    DetailsPage.prototype.viewShopProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_shopprofile_shopprofile__["b" /* ShopprofilePage */]);
    };
    DetailsPage.prototype.viewProductComment = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_productcomment_productcomment__["a" /* ProductcommentPage */]);
    };
    DetailsPage.prototype.gotoDetails = function () {
        this.app.getRootNav().push(DetailsPage_1);
    };
    DetailsPage.prototype.viewChat = function () {
        // TODO: Check if Authenticated
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], {
            user: {
                "Id": "210000198410281948",
                "name": "Cassio Zen",
                "email": "cassiozen@gmail.com"
            }
        });
    };
    DetailsPage.prototype.addToCart = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
    };
    DetailsPage.prototype.buyNow = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
    };
    DetailsPage = DetailsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\details\details.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Air Jordan 1 Banned\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewCart()">\n\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <div class="info">\n\n    <div text-center>\n\n      <ion-slides pager>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <div class="card-title">Air Jordan 1 Banned</div>\n\n    <ion-row>\n\n      <ion-col>\n\n        <span class="price">P 1500.00</span>\n\n        <br>\n\n        <span class="rating">\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n          5/5 (14)</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="info mt-10">\n\n    <div class="shipping_info">\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <img src="./assets/imgs/ship.png">\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <span>30% off shipping with min. order of P250.00, 100% off shipping with min. order of P500.00</span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row padding>\n\n        <ion-col col-2>\n\n          <img src="./assets/imgs/ship1.png">\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <p>Shipping to: </p>\n\n          <p>Cost: </p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row padding-left padding-right>\n\n        <ion-col col-4>\n\n          <button ion-button icon-left outline block small>\n\n            <ion-icon name="heart-outline"></ion-icon>\n\n            Like\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <button ion-button icon-left outline block small (click)="viewProductComment()">\n\n            <ion-icon ios="ios-chatboxes-outline" md="md-chatboxes-outline"></ion-icon>\n\n            Comment\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <button ion-button icon-only outline small (click)="viewChat()">\n\n            <ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles-outline"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <button ion-button icon-only outline small>\n\n            <ion-icon ios="ios-share-outline" md="md-share-outline"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <div class="info mt-10">\n\n    <ion-item no-lines>\n\n      <h2>Product Ratings</h2>\n\n      <span class="rating">\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n        5/5 (14)</span>\n\n      <button ion-button clear item-end (click)="viewProductRating()">See All\n\n        <ion-icon ios="ios-arrow-forward-outline" md="md-arrow-forward-outline"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </div>\n\n  <div class="info mt-10">\n\n    <ion-item no-lines>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/user.png">\n\n      </ion-avatar>\n\n      <h2>Marty McFly</h2>\n\n      <p>Active 1 day ago</p>\n\n      <button ion-button outline item-end (click)="viewShopProfile()">View Shop</button>\n\n    </ion-item>\n\n    <ion-row padding-left padding-right padding-top>\n\n      <ion-col text-center class="borderleft">\n\n        <ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon>\n\n        <span class="highlight">156</span>\n\n        <div class="blblbl">Products</div>\n\n      </ion-col>\n\n      <ion-col text-center class="borderleft">\n\n        <ion-icon ios="ios-star-outline" md="ios-star-outline"></ion-icon>\n\n        <span class="highlight">5.80</span>\n\n        <div class="blblbl">Rating</div>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n        <span class="highlight">65%</span>\n\n        <div class="blblbl">Chat Response</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="info mt-10 tbldetails">\n\n    <ion-item no-lines class="details">\n\n      <h2>Product Detail</h2>\n\n      <p>Air Jordan 1 Banned from Nike Air Shoes</p>\n\n      <ion-note item-end>\n\n        <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n\n        56 days\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-row padding-top>\n\n      <ion-col text-left col-4>\n\n        Categories\n\n      </ion-col>\n\n      <ion-col text-left col-8>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-left col-4>\n\n        Brand\n\n      </ion-col>\n\n      <ion-col text-left col-8 class="withdetails">\n\n        no brand\n\n        <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-left col-4>\n\n        Origin\n\n      </ion-col>\n\n      <ion-col text-left col-8>\n\n        Imported\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-left col-4>\n\n        Material\n\n      </ion-col>\n\n      <ion-col text-left col-8>\n\n        Rubber\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="info mt-10 tbldetails">\n\n    <ion-row padding-top>\n\n      <ion-col text-left col-4>\n\n        Condition\n\n      </ion-col>\n\n      <ion-col text-left col-8>\n\n        New\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-left col-4>\n\n        Variations\n\n      </ion-col>\n\n      <ion-col text-left col-8 class="withdetails">\n\n        no brand\n\n        <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-left col-4>\n\n        Stock\n\n      </ion-col>\n\n      <ion-col text-left col-8>\n\n        Imported\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-left col-4>\n\n        Ships From\n\n      </ion-col>\n\n      <ion-col text-left col-8>\n\n        Zone 2 Luis Hambre St. Poblaction, Naawan Misamis Oriental, 9023\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      FROM THE SAME SHOP\n\n      <div class="pull-right">\n\n        See all\n\n      </div>\n\n    </ion-list-header>\n\n    <ion-slides>\n\n      <ion-slide>\n\n        <ion-row>\n\n          <ion-col width="33">\n\n            <div class="myCard" (click)="gotoDetails()">\n\n              <img src="./assets/imgs/product/1.jpg" />\n\n              <div class="pl-10 pr-10">\n\n                <div class="card-title">Air Jordan 1 Banned</div>\n\n                <ion-row>\n\n                  <ion-col class="pl-0">\n\n                    <div class="price">P 1500.00</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col width="33">\n\n            <div class="myCard" (click)="gotoDetails()">\n\n              <img src="./assets/imgs/product/2.jpg" />\n\n              <div class="pl-10 pr-10">\n\n                <div class="card-title">Nike Kobe 11 BHM</div>\n\n                <ion-row>\n\n                  <ion-col class="pl-0">\n\n                    <div class="price">P 1500.00</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <div class="rating">\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col width="33">\n\n            <div class="myCard" (click)="gotoDetails()">\n\n              <img src="./assets/imgs/product/3.jpg" />\n\n              <div class="pl-10 pr-10">\n\n                <div class="card-title">Nike Kobe 11 BLUE</div>\n\n                <ion-row>\n\n                  <ion-col class="pl-0">\n\n                    <div class="price">P 1500.00</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <div class="rating">\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <ion-row>\n\n          <ion-col width="33">\n\n            <div class="myCard" (click)="gotoDetails()">\n\n              <img src="./assets/imgs/product/1.jpg" />\n\n              <div class="pl-10 pr-10">\n\n                <div class="card-title">Air Jordan 1 Banned</div>\n\n                <ion-row>\n\n                  <ion-col class="pl-0">\n\n                    <div class="price">P 1500.00</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col width="33">\n\n            <div class="myCard" (click)="gotoDetails()">\n\n              <img src="./assets/imgs/product/2.jpg" />\n\n              <div class="pl-10 pr-10">\n\n                <div class="card-title">Nike Kobe 11 BHM</div>\n\n                <ion-row>\n\n                  <ion-col class="pl-0">\n\n                    <div class="price">P 1500.00</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <div class="rating">\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col width="33">\n\n            <div class="myCard" (click)="gotoDetails()">\n\n              <img src="./assets/imgs/product/3.jpg" />\n\n              <div class="pl-10 pr-10">\n\n                <div class="card-title">Nike Kobe 11 BLUE</div>\n\n                <ion-row>\n\n                  <ion-col class="pl-0">\n\n                    <div class="price">P 1500.00</div>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <div class="rating">\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                      <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                    </div>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button full color="secondary" (click)="addToCart()">\n\n        <div>\n\n          <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n          <br>\n\n          <label>Add to Cart</label>\n\n        </div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button full color="danger" (click)="buyNow()">Buy Now</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], DetailsPage);
    return DetailsPage;
    var DetailsPage_1;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_authentication__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_forgot_forgot__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
    }
    LoginPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.forgot = function () {
        console.log('forgot: ');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log('this.user: ', this.user);
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var alert_1 = this.alertCtrl.create({
                title: 'Invalid Username',
                subTitle: 'Invalid username and password!',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user.username)) {
            var alert_2 = this.alertCtrl.create({
                title: 'Invalid Username',
                subTitle: 'Invalid username and password!',
                buttons: ['OK']
            });
            alert_2.present();
            return;
        }
        else if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user.password)) {
            var alert_3 = this.alertCtrl.create({
                title: 'Invalid Password',
                subTitle: 'Invalid username and password!',
                buttons: ['OK']
            });
            alert_3.present();
            return;
        }
        var loading = this.loadingCtrl.create();
        loading.present();
        this.auth.authenticate(this.user).then(function (data) {
            console.log('data: ', data);
            if (data && data.success) {
                localStorage.setItem('app.user', JSON.stringify(data.result.user));
                localStorage.setItem('app.token', data.result.token);
                loading.dismiss();
                setTimeout(function () {
                    _this.viewCtrl.dismiss('login');
                }, 1000);
            }
            else if (data && !data.success) {
                loading.dismiss();
                var alert_4 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: data.msg,
                    buttons: ['OK']
                });
                alert_4.present();
                return;
            }
        }, function (error) {
            console.log('error: ', error);
            loading.dismiss();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon ios="ios-close-outline" md="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Username" [(ngModel)]="user.username"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block (click)="login()">Login</button>\n\n    <button ion-button block clear (click)="forgot()">Forgot?</button>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-row padding-left padding-right>\n\n    <button ion-button block color="secondary" icon-left>\n\n      <ion-icon ios="ios-mail-outline" md="ios-mail-outline"></ion-icon>\n\n      Login with SMS\n\n    </button>\n\n  </ion-row>\n\n  <ion-row padding-left padding-right>\n\n    <button ion-button block color="primary" icon-left>\n\n      <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n      Login with Facebook\n\n    </button>\n\n  </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_authentication__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_chat__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatDetailPopoverPage = (function () {
    function ChatDetailPopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ChatDetailPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ChatDetailPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <ion-item (click)=\"close()\"><ion-icon name=\"contact\" item-start></ion-icon> View Profile</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon name=\"information-circle\" item-start></ion-icon> Report this user</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon name=\"remove-circle\" item-start></ion-icon> Block this user</ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ChatDetailPopoverPage);
    return ChatDetailPopoverPage;
}());

var ChatdetailPage = (function () {
    function ChatdetailPage(navCtrl, navParams, popoverCtrl, chatService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.chatService = chatService;
        this.events = events;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.user = navParams.get('user');
        this.toUser = {
            id: this.user.Id,
            name: this.user.name
        };
        console.log('this.toUser: ', this.toUser);
        // Get mock user information
        this.chatService.getUserInfo()
            .then(function (res) {
            _this.userinfo = res;
            console.log('this.userinfo: ', _this.userinfo);
        });
    }
    ChatdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatdetailPage');
    };
    ChatdetailPage.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    ChatdetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //get message list
        this.getMsg();
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', function (msg) {
            _this.pushNewMsg(msg);
        });
    };
    ChatdetailPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatdetailPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * @name getMsg
     * @returns {Promise<ChatMessage[]>}
     */
    ChatdetailPage.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getMsgList()
            .subscribe(function (res) {
            _this.msgList = res;
            console.log('this.msgList: ', _this.msgList);
            _this.scrollToBottom();
        });
    };
    /**
     * @name sendMsg
     */
    ChatdetailPage.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        // Mock message
        var id = Date.now().toString();
        var newMsg = {
            messageId: Date.now().toString(),
            userId: this.user.id,
            userName: this.user.name,
            userAvatar: this.user.avatar,
            toUserId: this.toUser.id,
            time: Date.now(),
            message: this.editorMsg,
            status: 'pending'
        };
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.chatService.sendMsg(newMsg)
            .then(function () {
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 'success';
            }
        });
    };
    /**
     * @name pushNewMsg
     * @param msg
     */
    ChatdetailPage.prototype.pushNewMsg = function (msg) {
        var userId = this.user.id, toUserId = this.toUser.id;
        // Verify user relationships
        if (msg.userId === userId && msg.toUserId === toUserId) {
            this.msgList.push(msg);
        }
        else if (msg.toUserId === userId && msg.userId === toUserId) {
            this.msgList.push(msg);
        }
        this.scrollToBottom();
    };
    ChatdetailPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    ChatdetailPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatdetailPage.prototype.more = function (myEvent) {
        var popover = this.popoverCtrl.create(ChatDetailPopoverPage);
        popover.present({
            ev: myEvent
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ChatdetailPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* TextInput */])
    ], ChatdetailPage.prototype, "messageInput", void 0);
    ChatdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatdetail',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\chatdetail\chatdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{user.name}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="more($event)">\n\n        <ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="message-wrap">\n\n\n\n        <div *ngFor="let msg of msgList" class="message" [class.left]=" msg.userId === toUser.id " [class.right]=" msg.userId === userinfo.id ">\n\n            <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n\n            <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n\n            <div class="msg-detail">\n\n                <div class="msg-info">\n\n                    <p>\n\n                        {{msg.userName}} &nbsp; &nbsp; &nbsp; {{msg.time | relativeTime}}\n\n                    </p>\n\n                </div>\n\n                <div class="msg-content">\n\n                    <span class="triangle"></span>\n\n                    <p class="line-breaker ">{{msg.message}}</p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n    <ion-grid class="input-wrap">\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n                    <ion-icon name="md-happy"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (ionFocus)="onFocus()">\n\n                </ion-textarea>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n                    <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <emoji-picker *ngIf="showEmojiPicker" name="fieldEmoji" ngDefaultControl [(ngModel)]="editorMsg"></emoji-picker>\n\n</ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\chatdetail\chatdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_chat__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], ChatdetailPage);
    return ChatdetailPage;
}());

//# sourceMappingURL=chatdetail.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingcartPage = (function () {
    function ShoppingcartPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.cartArr = [];
    }
    ShoppingcartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingcartPage');
    };
    ShoppingcartPage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    ShoppingcartPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ShoppingcartPage.prototype.test = function () {
        this.cartArr.push(Date.now().toString());
        console.log('this.cartArr: ', this.cartArr);
    };
    ShoppingcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shoppingcart',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\shoppingcart\shoppingcart.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Shopping Cart\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="myCard" *ngIf="cartArr.length < 1">\n\n    <div padding text-center>\n\n      <img src="./assets/imgs/shopping-cart.svg" />\n\n    </div>\n\n    <ion-card-content>\n\n      <p text-center>\n\n        <button ion-button color="secondary" (click)="test()">Go Shopping Now</button>\n\n      </p>\n\n    </ion-card-content>\n\n  </div>\n\n  <ion-list *ngIf="cartArr.length > 0">\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">\n\n        <ion-avatar item-start>\n\n          <img src="./assets/imgs/user.png">\n\n        </ion-avatar>\n\n        <h2>Nike Store</h2>\n\n        <div class="pull-right">\n\n          To Ship\n\n        </div>\n\n      </ion-item-divider>\n\n      <ion-item class="cart-item" item-content>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Air Jordan 1 Breds sadasdadsadadad</h2>\n\n        <h2 class="price">Php 1500</h2>\n\n        <p style="margin-top:15px;">\n\n          <ion-icon class="navicon2 qty" name="remove"></ion-icon>\n\n          <b>1</b>\n\n          <ion-icon class="navicon2 qty" name="add"></ion-icon>\n\n        </p>\n\n        <ion-icon item-end name="trash" class="cart-trash" color="danger"></ion-icon>\n\n      </ion-item>\n\n      <ion-item class="cart-item" item-content>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Air Jordan 1 Breds sadasdadsadadad</h2>\n\n        <h2 class="price">Php 1500</h2>\n\n        <p style="margin-top:15px;">\n\n          <ion-icon class="navicon2 qty" name="remove"></ion-icon>\n\n          <b>1</b>\n\n          <ion-icon class="navicon2 qty" name="add"></ion-icon>\n\n        </p>\n\n        <ion-icon item-end name="trash" class="cart-trash" color="danger"></ion-icon>\n\n      </ion-item>\n\n      <button ion-item>\n\n        <h2>Shipping: <small class="shippingprice">Php 250</small></h2>\n\n        <p text-wrap style="font-size: 1.2rem;">\n\n          30% off shipping with min. order of Php 250.00, 100% off shipping with min. order pf Php 500.00\n\n        </p>\n\n      </button>\n\n      <ion-item style="line-height: 10px;">\n\n        <ion-row>\n\n          <ion-col class="keyColumn">\n\n            Subtotal:\n\n          </ion-col>\n\n          <ion-col class="valueColumn">\n\n            &nbsp; PHP 1500.00\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="keyColumn">\n\n            Shipping\n\n          </ion-col>\n\n          <ion-col class="valueColumn">\n\n            &nbsp; PHP 250.00\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="keyColumn">\n\n            Total\n\n          </ion-col>\n\n          <ion-col class="valueColumn">\n\n            &nbsp; PHP 1750.00\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">\n\n        <ion-avatar item-start>\n\n          <img src="./assets/imgs/user.png">\n\n        </ion-avatar>\n\n        <h2>Nike Store</h2>\n\n      </ion-item-divider>\n\n      <ion-item class="cart-item" item-content>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Air Jordan 1 Breds sadasdadsadadad</h2>\n\n        <h2 class="price">Php 1500</h2>\n\n        <p style="margin-top:15px;">\n\n          <ion-icon class="navicon2 qty" name="remove"></ion-icon>\n\n          <b>1</b>\n\n          <ion-icon class="navicon2 qty" name="add"></ion-icon>\n\n        </p>\n\n        <ion-icon item-end name="trash" class="cart-trash" color="danger"></ion-icon>\n\n      </ion-item>\n\n      <button ion-item>\n\n        <h2>Shipping: <small class="shippingprice">Php 250</small></h2>\n\n        <p text-wrap style="font-size: 1.2rem;">\n\n          30% off shipping with min. order of Php 250.00, 100% off shipping with min. order pf Php 500.00\n\n        </p>\n\n      </button>\n\n      <ion-item style="line-height: 10px;">\n\n        <ion-row>\n\n          <ion-col class="keyColumn">\n\n            Subtotal:\n\n          </ion-col>\n\n          <ion-col class="valueColumn">\n\n            &nbsp; PHP 1500.00\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="keyColumn">\n\n            Shipping\n\n          </ion-col>\n\n          <ion-col class="valueColumn">\n\n            &nbsp; PHP 250.00\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="keyColumn">\n\n            Total\n\n          </ion-col>\n\n          <ion-col class="valueColumn">\n\n            &nbsp; PHP 1750.00\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-border *ngIf="cartArr.length > 0">\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-list style="margin: 0px;">\n\n        <ion-item>\n\n          <ion-icon item-start name="ios-card-outline"></ion-icon>\n\n          <ion-input type="text" placeholder="Please enter promo code"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-7>\n\n      <h4><small>Total:</small>&nbsp; <span class="shippingprice">PHP 15000</span></h4>\n\n    </ion-col>\n\n    <ion-col col-5>\n\n      <button class="checkout" ion-button full color="danger">Buy ({{cartArr.length}})</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\shoppingcart\shoppingcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], ShoppingcartPage);
    return ShoppingcartPage;
}());

//# sourceMappingURL=shoppingcart.js.map

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 307,
	"./af.js": 307,
	"./ar": 308,
	"./ar-dz": 309,
	"./ar-dz.js": 309,
	"./ar-kw": 310,
	"./ar-kw.js": 310,
	"./ar-ly": 311,
	"./ar-ly.js": 311,
	"./ar-ma": 312,
	"./ar-ma.js": 312,
	"./ar-sa": 313,
	"./ar-sa.js": 313,
	"./ar-tn": 314,
	"./ar-tn.js": 314,
	"./ar.js": 308,
	"./az": 315,
	"./az.js": 315,
	"./be": 316,
	"./be.js": 316,
	"./bg": 317,
	"./bg.js": 317,
	"./bn": 318,
	"./bn.js": 318,
	"./bo": 319,
	"./bo.js": 319,
	"./br": 320,
	"./br.js": 320,
	"./bs": 321,
	"./bs.js": 321,
	"./ca": 322,
	"./ca.js": 322,
	"./cs": 323,
	"./cs.js": 323,
	"./cv": 324,
	"./cv.js": 324,
	"./cy": 325,
	"./cy.js": 325,
	"./da": 326,
	"./da.js": 326,
	"./de": 327,
	"./de-at": 328,
	"./de-at.js": 328,
	"./de-ch": 329,
	"./de-ch.js": 329,
	"./de.js": 327,
	"./dv": 330,
	"./dv.js": 330,
	"./el": 331,
	"./el.js": 331,
	"./en-au": 332,
	"./en-au.js": 332,
	"./en-ca": 333,
	"./en-ca.js": 333,
	"./en-gb": 334,
	"./en-gb.js": 334,
	"./en-ie": 335,
	"./en-ie.js": 335,
	"./en-nz": 336,
	"./en-nz.js": 336,
	"./eo": 337,
	"./eo.js": 337,
	"./es": 338,
	"./es-do": 339,
	"./es-do.js": 339,
	"./es.js": 338,
	"./et": 340,
	"./et.js": 340,
	"./eu": 341,
	"./eu.js": 341,
	"./fa": 342,
	"./fa.js": 342,
	"./fi": 343,
	"./fi.js": 343,
	"./fo": 344,
	"./fo.js": 344,
	"./fr": 345,
	"./fr-ca": 346,
	"./fr-ca.js": 346,
	"./fr-ch": 347,
	"./fr-ch.js": 347,
	"./fr.js": 345,
	"./fy": 348,
	"./fy.js": 348,
	"./gd": 349,
	"./gd.js": 349,
	"./gl": 350,
	"./gl.js": 350,
	"./gom-latn": 351,
	"./gom-latn.js": 351,
	"./he": 352,
	"./he.js": 352,
	"./hi": 353,
	"./hi.js": 353,
	"./hr": 354,
	"./hr.js": 354,
	"./hu": 355,
	"./hu.js": 355,
	"./hy-am": 356,
	"./hy-am.js": 356,
	"./id": 357,
	"./id.js": 357,
	"./is": 358,
	"./is.js": 358,
	"./it": 359,
	"./it.js": 359,
	"./ja": 360,
	"./ja.js": 360,
	"./jv": 361,
	"./jv.js": 361,
	"./ka": 362,
	"./ka.js": 362,
	"./kk": 363,
	"./kk.js": 363,
	"./km": 364,
	"./km.js": 364,
	"./kn": 365,
	"./kn.js": 365,
	"./ko": 366,
	"./ko.js": 366,
	"./ky": 367,
	"./ky.js": 367,
	"./lb": 368,
	"./lb.js": 368,
	"./lo": 369,
	"./lo.js": 369,
	"./lt": 370,
	"./lt.js": 370,
	"./lv": 371,
	"./lv.js": 371,
	"./me": 372,
	"./me.js": 372,
	"./mi": 373,
	"./mi.js": 373,
	"./mk": 374,
	"./mk.js": 374,
	"./ml": 375,
	"./ml.js": 375,
	"./mr": 376,
	"./mr.js": 376,
	"./ms": 377,
	"./ms-my": 378,
	"./ms-my.js": 378,
	"./ms.js": 377,
	"./my": 379,
	"./my.js": 379,
	"./nb": 380,
	"./nb.js": 380,
	"./ne": 381,
	"./ne.js": 381,
	"./nl": 382,
	"./nl-be": 383,
	"./nl-be.js": 383,
	"./nl.js": 382,
	"./nn": 384,
	"./nn.js": 384,
	"./pa-in": 385,
	"./pa-in.js": 385,
	"./pl": 386,
	"./pl.js": 386,
	"./pt": 387,
	"./pt-br": 388,
	"./pt-br.js": 388,
	"./pt.js": 387,
	"./ro": 389,
	"./ro.js": 389,
	"./ru": 390,
	"./ru.js": 390,
	"./sd": 391,
	"./sd.js": 391,
	"./se": 392,
	"./se.js": 392,
	"./si": 393,
	"./si.js": 393,
	"./sk": 394,
	"./sk.js": 394,
	"./sl": 395,
	"./sl.js": 395,
	"./sq": 396,
	"./sq.js": 396,
	"./sr": 397,
	"./sr-cyrl": 398,
	"./sr-cyrl.js": 398,
	"./sr.js": 397,
	"./ss": 399,
	"./ss.js": 399,
	"./sv": 400,
	"./sv.js": 400,
	"./sw": 401,
	"./sw.js": 401,
	"./ta": 402,
	"./ta.js": 402,
	"./te": 403,
	"./te.js": 403,
	"./tet": 404,
	"./tet.js": 404,
	"./th": 405,
	"./th.js": 405,
	"./tl-ph": 406,
	"./tl-ph.js": 406,
	"./tlh": 407,
	"./tlh.js": 407,
	"./tr": 408,
	"./tr.js": 408,
	"./tzl": 409,
	"./tzl.js": 409,
	"./tzm": 410,
	"./tzm-latn": 411,
	"./tzm-latn.js": 411,
	"./tzm.js": 410,
	"./uk": 412,
	"./uk.js": 412,
	"./ur": 413,
	"./ur.js": 413,
	"./uz": 414,
	"./uz-latn": 415,
	"./uz-latn.js": 415,
	"./uz.js": 414,
	"./vi": 416,
	"./vi.js": 416,
	"./x-pseudo": 417,
	"./x-pseudo.js": 417,
	"./yo": 418,
	"./yo.js": 418,
	"./zh-cn": 419,
	"./zh-cn.js": 419,
	"./zh-hk": 420,
	"./zh-hk.js": 420,
	"./zh-tw": 421,
	"./zh-tw.js": 421
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
webpackContext.id = 595;

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'https://shoppy-123456789.herokuapp.com/api/1/',
    env: 'local',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(181);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        var helper = new __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__["a" /* JwtHelperService */]();
        var myRawToken = localStorage.getItem('app.token');
        var isExpired = helper.isTokenExpired(myRawToken);
        if (isExpired) {
            localStorage.removeItem('app.user');
            localStorage.removeItem('app.token');
        }
    }
    MyApp.prototype.closeMenu = function () {
        console.log('closeMenu');
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\app\app.html"*/'<ion-menu id="filtermenu" [content]="mycontent" side="right" type="overlay" enabled="false">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Filter\n\n        <br><small> (1000 items)</small></ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Categories\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>Keyboard (22)</ion-label>\n\n        <ion-checkbox [(ngModel)]="frees"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Wearables (2)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free1"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Computer Accessory (6)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free2"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Component (10)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free3"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Mouse & Pad (3)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free4"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Laptops (100)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free5"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Shipping Option\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>Free Shipping</ion-label>\n\n        <ion-checkbox [(ngModel)]="free"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>LBC Express</ion-label>\n\n        <ion-checkbox [(ngModel)]="lbc"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>JRS Express</ion-label>\n\n        <ion-checkbox [(ngModel)]="jrs"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Service\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>Wholesale</ion-label>\n\n        <ion-checkbox [(ngModel)]="whole"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>With Discount</ion-label>\n\n        <ion-checkbox [(ngModel)]="discount"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Lowest Price</ion-label>\n\n        <ion-checkbox [(ngModel)]="lowprice"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Condition\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>New</ion-label>\n\n        <ion-checkbox [(ngModel)]="new"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Used</ion-label>\n\n        <ion-checkbox [(ngModel)]="used"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Price Range\n\n      </ion-item-divider>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-input type="text" value="" placeholder="MIN"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-input type="text" value="" placeholder="MAX"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-buttons right>\n\n      <button ion-button outline small>\n\n        Reset\n\n      </button>\n\n      <button ion-button small (click)="closeMenu()">\n\n        Apply\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the MorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border no-line>\n\n  <ion-navbar color="richblue">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Settings\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="richblue">\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of mores" (click)="itemSelected(item)">\n\n      <ion-icon color="primary" ios="{{item.icon}}" md="{{item.icon}}" item-start></ion-icon>\n\n      {{ item.title }}\n\n      <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline" item-end></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_emojis__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'emoji-picker',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\components\emoji-picker\emoji-picker.html"*/'<div class="emoji-picker">\n\n  <div class="emoji-items">\n\n    <ion-slides pager>\n\n\n\n      <ion-slide *ngFor="let items of emojiArr">\n\n        <span class="emoji-item"\n\n              (click)="setValue(item)"\n\n              *ngFor="let item of items">\n\n          {{item}}\n\n        </span>\n\n      </ion-slide>\n\n\n\n    </ion-slides>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\components\emoji-picker\emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_service_emojis__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the RelativeTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RelativeTimePipe = (function () {
    function RelativeTimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default()(new Date(value), { addSuffix: true });
    };
    RelativeTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'relativeTime',
        })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesServiceProvider = (function () {
    function CategoriesServiceProvider(restangular) {
        this.restangular = restangular;
    }
    CategoriesServiceProvider.prototype.getAllCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('category').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    CategoriesServiceProvider.prototype.getAllSubCategories = function (categoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('category/' + categoryId + '/subcategory').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    CategoriesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"]])
    ], CategoriesServiceProvider);
    return CategoriesServiceProvider;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_categories__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchresultPage = (function () {
    function SearchresultPage(app, navCtrl, navParams, menuCtrl, zone, categories) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.zone = zone;
        this.categories = categories;
        this.items = {};
        this.showList = false;
        this.isList = true;
        this.showHeader = false;
        this.categoriesArr = [];
        this.searches = [];
        this.mode = 'popular';
        this.items = navParams.get('item');
        this.type = navParams.get('type');
        this.showHeader = false;
        this.showList = false;
    }
    SearchresultPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    SearchresultPage.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
        var ctrl = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.myCarousel').slick({
            dots: false,
            centerMode: false,
            infinite: false,
            slidesToShow: 3
        });
        this.content.ionScroll.subscribe(function ($event) {
            // console.log('$event.scrollTop: ', $event.scrollTop);
            if ($event.scrollTop >= 530) {
                ctrl.zone.run(function () {
                    ctrl.showHeader = true;
                });
                ctrl.content.resize();
            }
            else {
                ctrl.zone.run(function () {
                    ctrl.showHeader = false;
                });
                ctrl.content.resize();
            }
        });
    };
    SearchresultPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SearchresultPage');
        this.searches = [
            "macbook pro",
            "macbook pro case",
            "macbook pro laptops",
            "macbook pro 13",
            "macbook pro 15",
            "macbook pro retina",
            "macbook pro charger",
            "macbook pro 2016",
            "macbook pro cover",
            "macbook pro sleeve",
            "macbook pro 2012",
            "macbook pro cable",
            "macbook pro 2017",
        ];
        if (this.type == 'category') {
            this.categories.getAllSubCategories(this.items.categoryId).then(function (data) {
                if (data && data.success) {
                    _this.categoriesArr = data.result;
                    console.log('this.categoriesArr: ', _this.categoriesArr);
                    if (_this.categoriesArr) {
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('.myCategories').slick({
                            dots: false,
                            centerMode: false,
                            infinite: false,
                            slidesToShow: 4
                        });
                    }
                }
            });
        }
    };
    SearchresultPage.prototype.onCancel = function (ev) {
        this.showList = false;
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.myCarousel').slick({
            dots: false,
            centerMode: false,
            infinite: false,
            slidesToShow: 3
        });
        this.content.resize();
    };
    SearchresultPage.prototype.checkBlur = function () {
        // this.showList = false;
    };
    SearchresultPage.prototype.checkFocus = function () {
        this.showList = true;
        this.content.resize();
    };
    SearchresultPage.prototype.viewFilters = function () {
        console.log('viewFilters');
        this.menuCtrl.enable(true, 'filtermenu');
        this.menuCtrl.toggle('right');
    };
    SearchresultPage.prototype.gotoDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_details_details__["b" /* DetailsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SearchresultPage.prototype, "content", void 0);
    SearchresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-searchresult',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\searchresult\searchresult.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="true" (ionBlur)="checkBlur()" (ionFocus)="checkFocus()" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n    <ion-buttons end *ngIf="!showList">\n\n      <button ion-button clear (click)="viewFilters()">\n\n        <ion-icon ios="ios-funnel-outline" md="ios-funnel-outline"></ion-icon>\n\n        &nbsp; Filter\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar *ngIf="showHeader">\n\n    <ion-segment [(ngModel)]="mode" mode="md">\n\n      <ion-segment-button value="popular">\n\n        Popular\n\n      </ion-segment-button>\n\n      <ion-segment-button value="latest">\n\n        Latest\n\n      </ion-segment-button>\n\n      <ion-segment-button value="top">\n\n        Top Sales\n\n      </ion-segment-button>\n\n      <ion-segment-button value="price">\n\n        Price\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf="showList">\n\n    <ion-item *ngFor="let item of searches" (click)="gotoSearch()">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="!showList">\n\n    <div>\n\n      <ion-slides pager>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb1.png">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb2.png">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb1.png">\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <ion-list>\n\n      <ion-list-header class="mt-10">\n\n        OFFICIAL SHOPS\n\n      </ion-list-header>\n\n      <div class="myCarousel">\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/adidas.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/chanel.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/ktm.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/panasonic.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/puma.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/zara.png">\n\n        </div>\n\n      </div>\n\n      <ion-list-header class="mt-10">\n\n        Categories\n\n      </ion-list-header>\n\n      <ion-slides slidesPerView="4" spaceBetween="-10" padding-top padding-bottom>\n\n        <ion-slide *ngFor="let item of categoriesArr">\n\n          <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n          <p>\n\n            <small>{{item.name}}</small>\n\n          </p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <!-- need a empty slide to avoid last item to be inaccessible -->\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-list>\n\n    <ion-segment [(ngModel)]="mode" mode="md">\n\n      <ion-segment-button value="popular">\n\n        Popular\n\n      </ion-segment-button>\n\n      <ion-segment-button value="latest">\n\n        Latest\n\n      </ion-segment-button>\n\n      <ion-segment-button value="top">\n\n        Top Sales\n\n      </ion-segment-button>\n\n      <ion-segment-button value="price">\n\n        Price\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/1.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Air Jordan 1 Banned</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/2.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Nike Kobe 11 BHM</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/1.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Air Jordan 1 Banned</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/2.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Nike Kobe 11 BHM</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/1.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Air Jordan 1 Banned</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/2.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Nike Kobe 11 BHM</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\searchresult\searchresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_5__providers_service_categories__["a" /* CategoriesServiceProvider */]])
    ], SearchresultPage);
    return SearchresultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sign up</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon ios="ios-close-outline" md="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Basic Information\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Firstname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Lastname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="email" placeholder="Email"></ion-input>\n\n    </ion-item>\n\n    <ion-list-header>\n\n      Account\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Username"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Confirm Password"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block>Register</button>\n\n    <button ion-button clear color="secondary">\n\n      Sign up with Email\n\n    </button>\n\n    <button ion-button clear color="primary">\n\n      Sign up with Facebook\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[431]);
//# sourceMappingURL=main.js.map