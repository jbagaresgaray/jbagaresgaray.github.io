webpackJsonp([25],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-forgot',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/forgot/forgot.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Phone Number/ Email</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p>\n    Please enter your registered email address or phone number\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Email/Phone No." [(ngModel)]="email"></ion-input>\n    </ion-item>\n  </ion-list>\n   <button ion-button block (click)="continue()">Continue</button>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_authentication__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_forgot_forgot__ = __webpack_require__(152);
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
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
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
                }, 300);
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
            selector: 'page-login',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon ios="ios-close-outline" md="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Username" [(ngModel)]="user.username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="login()">Login</button>\n    <button ion-button block clear (click)="forgot()">Forgot?</button>\n  </div>\n</ion-content>\n<ion-footer no-border>\n  <ion-row padding-left padding-right>\n    <button ion-button block color="secondary" icon-left>\n      <ion-icon ios="ios-mail-outline" md="ios-mail-outline"></ion-icon>\n      Login with SMS\n    </button>\n  </ion-row>\n  <ion-row padding-left padding-right>\n    <button ion-button block color="primary" icon-left>\n      <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n      Login with Facebook\n    </button>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_authentication__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myrating_myrating__ = __webpack_require__(156);
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
    function MyprofilePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.imageUrl = 'assets/imgs/bg.png';
        this.user = {};
    }
    MyprofilePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter MyprofilePage');
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        console.log('this.user: ', this.user);
    };
    MyprofilePage.prototype.openLogin = function () {
        var _this = this;
        // TODO: Check for authentication
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
        modal.present();
        modal.onDidDismiss(function (resp) {
            if (resp === 'login') {
                var t = _this.navCtrl.parent;
                t.select(0);
                console.log('this.navCtrl.parent: ', _this.navCtrl.parent.user);
            }
        });
    };
    MyprofilePage.prototype.openSignUp = function () {
        // TODO: Check for authentication
        console.log('openSignUp');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__["a" /* SignupPage */]);
        modal.present();
    };
    MyprofilePage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    MyprofilePage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    MyprofilePage.prototype.viewAccountSettings = function () {
    };
    MyprofilePage.prototype.viewMyRating = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_myrating_myrating__["a" /* MyratingPage */]);
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myprofile/myprofile.html"*/'<ion-header transparent>\n  <ion-navbar transparent>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="viewAccountSettings()">\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>&nbsp;</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}">\n    <button class="button1" ion-button small color="primary" (click)="openSignUp()">Sign up</button>\n    <button class="button2" ion-button small outline color="light" (click)="openLogin()">Login</button>\n  </div>\n  <div id="content">\n    <div id="profile-info">\n      <img id="profile-image" src="./assets/imgs/user.png">\n      <h3 id="profile-name">{{this.user.firstname}} {{this.user.lastname}}</h3>\n    </div>\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="list-box" item-start></ion-icon>\n        My Purchases\n        <ion-note item-end>View Purchase History</ion-note>\n      </button>\n      <button ion-item>\n        <ion-icon name="heart-outline" item-start></ion-icon>\n        My Likes\n        <ion-note item-end>See items I like</ion-note>\n      </button>\n      <button ion-item (click)="viewMyRating()">\n        <ion-icon name="star-outline" item-start></ion-icon>\n        My Ratings\n        <ion-note item-end>View my rating</ion-note>\n      </button>\n      <button ion-item>\n        <ion-icon name="cash" item-start></ion-icon>\n        My Wallet\n        <ion-note item-end>View my wallet</ion-note>\n      </button>\n      <button ion-item>\n        <ion-icon name="contact" item-start></ion-icon>\n        My Account\n        <ion-note item-end>View my account</ion-note>\n      </button>\n      <button ion-item>\n        <ion-icon name="help-circle" item-start></ion-icon>\n        Help Centre\n        <ion-note item-end>View help</ion-note>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myprofile/myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-signup',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sign up</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon ios="ios-close-outline" md="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Basic Information\n    </ion-list-header>\n    <ion-item>\n      <ion-input type="text" placeholder="Firstname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="Lastname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="email" placeholder="Email"></ion-input>\n    </ion-item>\n    <ion-list-header>\n      Account\n    </ion-list-header>\n    <ion-item>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Confirm Password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block>Register</button>\n  </div>\n</ion-content>\n<ion-footer no-border>\n  <ion-row padding-left padding-right>\n    <ion-col col-6>\n      <button ion-button block color="secondary">\n        <div>\n          <ion-icon ios="ios-mail-outline" md="ios-mail-outline"></ion-icon>\n          <br>\n          <label>Sign up with Email</label>\n        </div>\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button block color="primary">\n        <div>\n          <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n          <br>\n          <label>Sign up with Facebook</label>\n        </div>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyratingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-myrating',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myrating/myrating.html"*/'<!--\n  Generated template for the MyratingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>My Rating</ion-title>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="pet" mode="md">\n    <ion-segment-button value="shop">\n      Shop Rating\n    </ion-segment-button>\n    <ion-segment-button value="buyer">\n      Buyer Rating\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button block>All (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">5 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">4 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">3 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">2 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">1 Star (1)</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>Cher</h2>\n      <p>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n      </p>\n      <p>Thank you. Till next transaction. :)</p>\n      <ion-item no-border class="productinfo">\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/2.jpg">\n        </ion-thumbnail>\n        <h2>Kyrie 2</h2>\n      </ion-item>\n      <small>02/03/2018 14:32</small>\n      <button ion-button outline item-end>Reply</button>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>John Doe</h2>\n      <p>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n      </p>\n      <p>Thank you. Item Shipped Immediately, Till next transaction. :)</p>\n      <ion-item no-border class="productinfo">\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/3.jpg">\n        </ion-thumbnail>\n        <h2>Kobe 11</h2>\n      </ion-item>\n      <small>02/03/2018 14:32</small>\n      <button ion-button outline item-end>Reply</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myrating/myrating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MyratingPage);
    return MyratingPage;
}());

//# sourceMappingURL=myrating.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductratingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_details_details__ = __webpack_require__(79);
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
    ProductratingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-productratings',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productratings/productratings.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Product Rating\n        </ion-title>\n        <ion-buttons end>\n            <img src="./assets/imgs/product/1.jpg">\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productratings/productratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProductratingsPage);
    return ProductratingsPage;
}());

//# sourceMappingURL=productratings.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the ShopprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopprofilePage = (function () {
    function ShopprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopprofilePage');
    };
    ShopprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shopprofile',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shopprofile/shopprofile.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Shop Profile\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only><ion-icon ios="ios-funnel-outline" md="ios-funnel-outline"></ion-icon></button>\n            <button ion-button icon-only><ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shopprofile/shopprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ShopprofilePage);
    return ShopprofilePage;
}());

//# sourceMappingURL=shopprofile.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductcommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProductcommentPage);
    return ProductcommentPage;
}());

//# sourceMappingURL=productcomment.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorites_favorites__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myprofile_myprofile__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__ = __webpack_require__(157);
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
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__pages_myprofile_myprofile__["a" /* MyprofilePage */];
        this.user = {};
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
        /*if (localStorage.getItem('app.user')) {
          this.navCtrl.setRoot(TabsPage, { opentab: 1 });
        }*/
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/tabs/tabs.html"*/'<ion-tabs no-border>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="ios-paper-outline"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Sell" tabIcon="ios-camera-outline"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Notifications" tabIcon="ios-notifications-outline"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Me" tabIcon="ios-contact-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountsettings/accountsettings.module": [
		598,
		24
	],
	"../pages/chat/chat.module": [
		599,
		23
	],
	"../pages/chatdetail/chatdetail.module": [
		600,
		22
	],
	"../pages/confirmation/confirmation.module": [
		602,
		21
	],
	"../pages/deliveryaddress/deliveryaddress.module": [
		601,
		20
	],
	"../pages/forgot/forgot.module": [
		603,
		19
	],
	"../pages/login/login.module": [
		604,
		18
	],
	"../pages/makepayment/makepayment.module": [
		606,
		17
	],
	"../pages/myaccount/myaccount.module": [
		605,
		16
	],
	"../pages/myprofile/myprofile.module": [
		607,
		15
	],
	"../pages/myrating/myrating.module": [
		608,
		14
	],
	"../pages/notification/notification.module": [
		609,
		13
	],
	"../pages/orderdetails/orderdetails.module": [
		610,
		12
	],
	"../pages/paymentmethod/paymentmethod.module": [
		611,
		11
	],
	"../pages/paymentoption/paymentoption.module": [
		612,
		10
	],
	"../pages/productcomment/productcomment.module": [
		614,
		9
	],
	"../pages/productratings/productratings.module": [
		613,
		8
	],
	"../pages/search/search.module": [
		616,
		7
	],
	"../pages/searchresult/searchresult.module": [
		615,
		6
	],
	"../pages/shippingoption/shippingoption.module": [
		618,
		5
	],
	"../pages/shoppingcart/shoppingcart.module": [
		620,
		4
	],
	"../pages/shopprofile/shopprofile.module": [
		617,
		3
	],
	"../pages/signup/signup.module": [
		619,
		2
	],
	"../pages/tabs/tabs.module": [
		621,
		1
	],
	"../pages/userprofile/userprofile.module": [
		622,
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
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(116);
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

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(86);
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
    function HomePage(app, navCtrl, loadingCtrl, storage, alertCtrl, modalCtrl) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
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
        /* this.navCtrl.push(DetailsPage, {
            crypto: item
        }); */
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_details_details__["b" /* DetailsPage */], {
            crypto: item
        });
    };
    HomePage.prototype.addToFav = function (item) {
    };
    HomePage.prototype.segmentChanged = function (ev) {
    };
    HomePage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    HomePage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-searchbar (input)="getItems($event)" showCancelButton="false"></ion-searchbar>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n            <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div>\n        <ion-slides pager>\n            <ion-slide>\n                <img src="./assets/imgs/thumb1.png">\n            </ion-slide>\n            <ion-slide>\n                <img src="./assets/imgs/thumb2.png">\n            </ion-slide>\n            <ion-slide>\n                <img src="./assets/imgs/thumb1.png">\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <ion-list>\n        <ion-list-header>\n            Popular Products\n            <div class="pull-right">\n                See more ...\n            </div>\n        </ion-list-header>\n        <div padding>\n            <ion-slides>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/1.jpg" />\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/2.jpg" />\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/3.jpg" />\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/1.jpg" />\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/2.jpg" />\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                        <ion-col width="25">\n                            <div class="myCard" (click)="gotoDetails()">\n                                <img src="./assets/imgs/product/3.jpg" />\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            FLASH DEALS\n            <div class="pull-right">\n                See all deals\n            </div>\n        </ion-list-header>\n        <div padding>\n        </div>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            OFFICIAL SHOPS\n            <div class="pull-right">\n                See more ...\n            </div>\n        </ion-list-header>\n        <div padding>\n            <ion-slides>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/adidas.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/chanel.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/ktm.png">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/panasonic.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/puma.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/zara.png">\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/adidas.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/chanel.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/ktm.png">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/panasonic.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/puma.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/zara.png">\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/adidas.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/chanel.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/ktm.png">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/panasonic.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/puma.png">\n                        </ion-col>\n                        <ion-col width="33" class="shops">\n                            <img src="./assets/imgs/brands/zara.png">\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>\n            Categories\n        </ion-list-header>\n        <div padding>\n            <ion-slides class="categories">\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/polo.png">\n                            <p><small>Men\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/jeans.png">\n                            <p><small>Jeans</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/sneakers.png">\n                            <p><small>Sneakers</small></p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/dress.png">\n                            <p><small>Women\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/skirt.png">\n                            <p><small>Skirts</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/bag.png">\n                            <p><small>Bag</small></p>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/polo.png">\n                            <p><small>Men\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/jeans.png">\n                            <p><small>Jeans</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/sneakers.png">\n                            <p><small>Sneakers</small></p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/dress.png">\n                            <p><small>Women\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/skirt.png">\n                            <p><small>Skirts</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/bag.png">\n                            <p><small>Bag</small></p>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n                <ion-slide>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/polo.png">\n                            <p><small>Men\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/jeans.png">\n                            <p><small>Jeans</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/sneakers.png">\n                            <p><small>Sneakers</small></p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/dress.png">\n                            <p><small>Women\'s apparel</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/skirt.png">\n                            <p><small>Skirts</small></p>\n                        </ion-col>\n                        <ion-col width="33">\n                            <img src="./assets/imgs/bag.png">\n                            <p><small>Bag</small></p>\n                        </ion-col>\n                    </ion-row>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(241);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(116);
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


var ServiceProvider = (function () {
    function ServiceProvider(restangular) {
        this.restangular = restangular;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(79);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_details_details__["b" /* DetailsPage */], {
            crypto: item
        });
    };
    FavoritesPage.prototype.getItems = function (ev) {
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/favorites/favorites.html"*/'<ion-header no-border no-line>\n  <ion-navbar color="richblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Crypto Watcher\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar color="richblue">\n    <ion-searchbar (input)="getItems($event)" showCancelButton="true"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="richblue">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor="let item of tickerArr">\n    <ion-item (click)="gotoDetails(item)">\n      <ion-avatar item-start>\n        <!-- <img [src]="item.img" onError="this.src=\'./assets/imgs/ionic.png\'"> -->\n        <img src="https://files.coinmarketcap.com/static/img/coins/64x64/{{item.id}}.png" onError="this.src=\'./assets/imgs/ionic.png\'">\n      </ion-avatar>\n      <h2>{{item.name}} <small>({{item.symbol}})</small></h2>\n      <p> <strong>{{item.price_usd | currency:\'USD\'}}</strong></p>\n      <ion-note item-end color="secondary" *ngIf="item.percent_change_24h > 0">\n        <strong>{{item.percent_change_24h}} %</strong>\n      </ion-note>\n      <ion-note item-end color="danger" *ngIf="item.percent_change_24h < 0">\n        <strong>{{item.percent_change_24h}} %</strong>\n      </ion-note>\n      <ion-icon ios="md-arrow-round-up" md="md-arrow-round-up" item-end color="secondary" *ngIf="item.percent_change_24h > 0"></ion-icon>\n      <ion-icon ios="md-arrow-round-down" md="md-arrow-round-down" item-end color="danger" *ngIf="item.percent_change_24h < 0"></ion-icon>\n    </ion-item>\n    <!-- <img src="./assets/imgs/advance-card-map-mario.png"> -->\n    <canvas baseChart [data]="item.price_data" [labels]="item.price_labels" [options]="lineChartOptions" [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType"></canvas>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], FavoritesPage);
    return FavoritesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the AccountsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsettingsPage = (function () {
    function AccountsettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountsettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsettingsPage');
    };
    AccountsettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accountsettings',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/accountsettings/accountsettings.html"*/'<!--\n  Generated template for the AccountsettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>accountsettings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/accountsettings/accountsettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AccountsettingsPage);
    return AccountsettingsPage;
}());

//# sourceMappingURL=accountsettings.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DeliveryaddressPage);
    return DeliveryaddressPage;
}());

//# sourceMappingURL=deliveryaddress.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfirmationPage);
    return ConfirmationPage;
}());

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakepaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MakepaymentPage);
    return MakepaymentPage;
}());

//# sourceMappingURL=makepayment.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OrderdetailsPage);
    return OrderdetailsPage;
}());

//# sourceMappingURL=orderdetails.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentmethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PaymentmethodPage);
    return PaymentmethodPage;
}());

//# sourceMappingURL=paymentmethod.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PaymentoptionPage);
    return PaymentoptionPage;
}());

//# sourceMappingURL=paymentoption.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchresultPage);
    return SearchresultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-shippingoption',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shippingoption/shippingoption.html"*/'<!--\n  Generated template for the ShippingoptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>shippingoption</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shippingoption/shippingoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ShippingoptionPage);
    return ShippingoptionPage;
}());

//# sourceMappingURL=shippingoption.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
    }
    UserprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserprofilePage');
    };
    UserprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userprofile',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/userprofile/userprofile.html"*/'<!--\n  Generated template for the UserprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>userprofile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/userprofile/userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserprofilePage);
    return UserprofilePage;
}());

//# sourceMappingURL=userprofile.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(444);


__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */].getPluginRef = function () { return "cordova.plugin.http"; };

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatdetail_chatdetail__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_confirmation_confirmation__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_deliveryaddress_deliveryaddress__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_details_details__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_makepayment_makepayment__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_myaccount_myaccount__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_myprofile_myprofile__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_myrating_myrating__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_orderdetails_orderdetails__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_paymentmethod_paymentmethod__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_paymentoption_paymentoption__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_productcomment_productcomment__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_productratings_productratings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_search_search__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_searchresult_searchresult__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_settings_settings__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_shippingoption_shippingoption__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_shopprofile_shopprofile__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_signup_signup__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_forgot_forgot__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_userprofile_userprofile__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_notification_notification__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_accountsettings_accountsettings__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_service_authentication__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_status_bar__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_splash_screen__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_http__ = __webpack_require__(175);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_14__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], __WEBPACK_IMPORTED_MODULE_14__pages_chatdetail_chatdetail__["a" /* ChatDetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_details_details__["b" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_17__pages_details_details__["a" /* DetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shopprofile_shopprofile__["a" /* ShopprofilePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_forgot_forgot__["a" /* ForgotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/accountsettings/accountsettings.module#AccountsettingsPageModule', name: 'AccountsettingsPage', segment: 'accountsettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatdetail/chatdetail.module#ChatdetailPageModule', name: 'ChatdetailPage', segment: 'chatdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliveryaddress/deliveryaddress.module#DeliveryaddressPageModule', name: 'DeliveryaddressPage', segment: 'deliveryaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/makepayment/makepayment.module#MakepaymentPageModule', name: 'MakepaymentPage', segment: 'makepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrating/myrating.module#MyratingPageModule', name: 'MyratingPage', segment: 'myrating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentmethod/paymentmethod.module#PaymentmethodPageModule', name: 'PaymentmethodPage', segment: 'paymentmethod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentoption/paymentoption.module#PaymentoptionPageModule', name: 'PaymentoptionPage', segment: 'paymentoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productratings/productratings.module#ProductratingsPageModule', name: 'ProductratingsPage', segment: 'productratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productcomment/productcomment.module#ProductcommentPageModule', name: 'ProductcommentPage', segment: 'productcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchresult/searchresult.module#SearchresultPageModule', name: 'SearchresultPage', segment: 'searchresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopprofile/shopprofile.module#ShopprofilePageModule', name: 'ShopprofilePage', segment: 'shopprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shippingoption/shippingoption.module#ShippingoptionPageModule', name: 'ShippingoptionPage', segment: 'shippingoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shoppingcart/shoppingcart.module#ShoppingcartPageModule', name: 'ShoppingcartPage', segment: 'shoppingcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__["RestangularModule"].forRoot(RestangularConfigFactory),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_14__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], __WEBPACK_IMPORTED_MODULE_14__pages_chatdetail_chatdetail__["a" /* ChatDetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_details_details__["b" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_17__pages_details_details__["a" /* DetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shopprofile_shopprofile__["a" /* ShopprofilePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_forgot_forgot__["a" /* ForgotPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_41__providers_service_authentication__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 287,
	"./af.js": 287,
	"./ar": 288,
	"./ar-dz": 289,
	"./ar-dz.js": 289,
	"./ar-kw": 290,
	"./ar-kw.js": 290,
	"./ar-ly": 291,
	"./ar-ly.js": 291,
	"./ar-ma": 292,
	"./ar-ma.js": 292,
	"./ar-sa": 293,
	"./ar-sa.js": 293,
	"./ar-tn": 294,
	"./ar-tn.js": 294,
	"./ar.js": 288,
	"./az": 295,
	"./az.js": 295,
	"./be": 296,
	"./be.js": 296,
	"./bg": 297,
	"./bg.js": 297,
	"./bn": 298,
	"./bn.js": 298,
	"./bo": 299,
	"./bo.js": 299,
	"./br": 300,
	"./br.js": 300,
	"./bs": 301,
	"./bs.js": 301,
	"./ca": 302,
	"./ca.js": 302,
	"./cs": 303,
	"./cs.js": 303,
	"./cv": 304,
	"./cv.js": 304,
	"./cy": 305,
	"./cy.js": 305,
	"./da": 306,
	"./da.js": 306,
	"./de": 307,
	"./de-at": 308,
	"./de-at.js": 308,
	"./de-ch": 309,
	"./de-ch.js": 309,
	"./de.js": 307,
	"./dv": 310,
	"./dv.js": 310,
	"./el": 311,
	"./el.js": 311,
	"./en-au": 312,
	"./en-au.js": 312,
	"./en-ca": 313,
	"./en-ca.js": 313,
	"./en-gb": 314,
	"./en-gb.js": 314,
	"./en-ie": 315,
	"./en-ie.js": 315,
	"./en-nz": 316,
	"./en-nz.js": 316,
	"./eo": 317,
	"./eo.js": 317,
	"./es": 318,
	"./es-do": 319,
	"./es-do.js": 319,
	"./es.js": 318,
	"./et": 320,
	"./et.js": 320,
	"./eu": 321,
	"./eu.js": 321,
	"./fa": 322,
	"./fa.js": 322,
	"./fi": 323,
	"./fi.js": 323,
	"./fo": 324,
	"./fo.js": 324,
	"./fr": 325,
	"./fr-ca": 326,
	"./fr-ca.js": 326,
	"./fr-ch": 327,
	"./fr-ch.js": 327,
	"./fr.js": 325,
	"./fy": 328,
	"./fy.js": 328,
	"./gd": 329,
	"./gd.js": 329,
	"./gl": 330,
	"./gl.js": 330,
	"./gom-latn": 331,
	"./gom-latn.js": 331,
	"./he": 332,
	"./he.js": 332,
	"./hi": 333,
	"./hi.js": 333,
	"./hr": 334,
	"./hr.js": 334,
	"./hu": 335,
	"./hu.js": 335,
	"./hy-am": 336,
	"./hy-am.js": 336,
	"./id": 337,
	"./id.js": 337,
	"./is": 338,
	"./is.js": 338,
	"./it": 339,
	"./it.js": 339,
	"./ja": 340,
	"./ja.js": 340,
	"./jv": 341,
	"./jv.js": 341,
	"./ka": 342,
	"./ka.js": 342,
	"./kk": 343,
	"./kk.js": 343,
	"./km": 344,
	"./km.js": 344,
	"./kn": 345,
	"./kn.js": 345,
	"./ko": 346,
	"./ko.js": 346,
	"./ky": 347,
	"./ky.js": 347,
	"./lb": 348,
	"./lb.js": 348,
	"./lo": 349,
	"./lo.js": 349,
	"./lt": 350,
	"./lt.js": 350,
	"./lv": 351,
	"./lv.js": 351,
	"./me": 352,
	"./me.js": 352,
	"./mi": 353,
	"./mi.js": 353,
	"./mk": 354,
	"./mk.js": 354,
	"./ml": 355,
	"./ml.js": 355,
	"./mr": 356,
	"./mr.js": 356,
	"./ms": 357,
	"./ms-my": 358,
	"./ms-my.js": 358,
	"./ms.js": 357,
	"./my": 359,
	"./my.js": 359,
	"./nb": 360,
	"./nb.js": 360,
	"./ne": 361,
	"./ne.js": 361,
	"./nl": 362,
	"./nl-be": 363,
	"./nl-be.js": 363,
	"./nl.js": 362,
	"./nn": 364,
	"./nn.js": 364,
	"./pa-in": 365,
	"./pa-in.js": 365,
	"./pl": 366,
	"./pl.js": 366,
	"./pt": 367,
	"./pt-br": 368,
	"./pt-br.js": 368,
	"./pt.js": 367,
	"./ro": 369,
	"./ro.js": 369,
	"./ru": 370,
	"./ru.js": 370,
	"./sd": 371,
	"./sd.js": 371,
	"./se": 372,
	"./se.js": 372,
	"./si": 373,
	"./si.js": 373,
	"./sk": 374,
	"./sk.js": 374,
	"./sl": 375,
	"./sl.js": 375,
	"./sq": 376,
	"./sq.js": 376,
	"./sr": 377,
	"./sr-cyrl": 378,
	"./sr-cyrl.js": 378,
	"./sr.js": 377,
	"./ss": 379,
	"./ss.js": 379,
	"./sv": 380,
	"./sv.js": 380,
	"./sw": 381,
	"./sw.js": 381,
	"./ta": 382,
	"./ta.js": 382,
	"./te": 383,
	"./te.js": 383,
	"./tet": 384,
	"./tet.js": 384,
	"./th": 385,
	"./th.js": 385,
	"./tl-ph": 386,
	"./tl-ph.js": 386,
	"./tlh": 387,
	"./tlh.js": 387,
	"./tr": 388,
	"./tr.js": 388,
	"./tzl": 389,
	"./tzl.js": 389,
	"./tzm": 390,
	"./tzm-latn": 391,
	"./tzm-latn.js": 391,
	"./tzm.js": 390,
	"./uk": 392,
	"./uk.js": 392,
	"./ur": 393,
	"./ur.js": 393,
	"./uz": 394,
	"./uz-latn": 395,
	"./uz-latn.js": 395,
	"./uz.js": 394,
	"./vi": 396,
	"./vi.js": 396,
	"./x-pseudo": 397,
	"./x-pseudo.js": 397,
	"./yo": 398,
	"./yo.js": 398,
	"./zh-cn": 399,
	"./zh-cn.js": 399,
	"./zh-hk": 400,
	"./zh-hk.js": 400,
	"./zh-tw": 401,
	"./zh-tw.js": 401
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
webpackContext.id = 573;

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'http://localhost:3000/api/1/',
    env: 'local',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(161);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-shoppingcart',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/'<ion-header no-border no-line>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Shopping Cart\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="myCard" *ngIf="cartArr.length < 1">\n    <div padding text-center>\n    	<img src="./assets/imgs/shopping-cart.svg" />\n    </div>\n    <ion-card-content>\n      <p text-center>\n        <button ion-button color="secondary" (click)="back()">Go Shopping Now</button>\n      </p>\n    </ion-card-content>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ShoppingcartPage);
    return ShoppingcartPage;
}());

//# sourceMappingURL=shoppingcart.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chatdetail_chatdetail__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_productratings_productratings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shopprofile_shopprofile__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productcomment_productcomment__ = __webpack_require__(160);
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
    function DetailPopoverPage(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    DetailPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DetailPopoverPage.prototype.viewChat = function () {
        // TODO: Check if Authenticated
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */]);
        this.viewCtrl.dismiss();
    };
    DetailPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <ion-item (click)=\"viewChat()\"><ion-icon ios=\"ios-chatbubbles-outline\" md=\"ios-chatbubbles-outline\" item-start></ion-icon>Chat Now</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon ios=\"ios-share-outline\" md=\"ios-share-outline\" item-start></ion-icon>Share</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon ios=\"ios-home-outline\" md=\"ios-home-outline\" item-start></ion-icon>Back to Home</ion-item>\n      <ion-item (click)=\"close()\"><ion-icon ios=\"ios-information-circle-outline\" md=\"ios-information-circle-outline\" item-start></ion-icon>Report this product</ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], DetailPopoverPage);
    return DetailPopoverPage;
}());

var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, loadingCtrl, storage, alertCtrl, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
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
    DetailsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(DetailPopoverPage);
        popover.present({
            ev: myEvent
        });
    };
    DetailsPage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
        modal.present();
    };
    DetailsPage.prototype.viewProductRating = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_productratings_productratings__["a" /* ProductratingsPage */]);
    };
    DetailsPage.prototype.viewShopProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_shopprofile_shopprofile__["a" /* ShopprofilePage */]);
    };
    DetailsPage.prototype.viewProductComment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_productcomment_productcomment__["a" /* ProductcommentPage */]);
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Air Jordan 1 Banned\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n            <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class="info">\n        <div text-center>\n            <ion-slides pager>\n                <ion-slide>\n                    <img src="./assets/imgs/product/1.jpg">\n                </ion-slide>\n                <ion-slide>\n                    <img src="./assets/imgs/product/1.jpg">\n                </ion-slide>\n                <ion-slide>\n                    <img src="./assets/imgs/product/1.jpg">\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="card-title">Air Jordan 1 Banned</div>\n        <ion-row>\n            <ion-col>\n                <span class="price">P 1500.00</span>\n                <br>\n                <span class="rating">\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n          5/5 (14)</span>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10">\n        <div class="shipping_info">\n            <ion-row>\n                <ion-col col-2>\n                    <img src="./assets/imgs/ship.png">\n                </ion-col>\n                <ion-col col-10>\n                    <span>30% off shipping with min. order of P250.00, 100% off shipping with min. order of P500.00</span>\n                </ion-col>\n            </ion-row>\n            <ion-row padding>\n                <ion-col col-2>\n                    <img src="./assets/imgs/ship1.png">\n                </ion-col>\n                <ion-col col-10>\n                    <p>Shipping to: </p>\n                    <p>Cost: </p>\n                </ion-col>\n            </ion-row>\n            <ion-row padding-left padding-right>\n                <ion-col col-5>\n                    <button ion-button icon-left outline block>\n            <ion-icon name="heart-outline"></ion-icon>\n            Like\n          </button>\n                </ion-col>\n                <ion-col col-5>\n                    <button ion-button icon-left outline block (click)="viewProductComment()">\n            <ion-icon ios="ios-chatboxes-outline" md="md-chatboxes-outline"></ion-icon>\n            Comment\n          </button>\n                </ion-col>\n                <ion-col col-2>\n                    <button ion-button icon-only outline>\n            <ion-icon ios="ios-share-outline" md="md-share-outline"></ion-icon>\n          </button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n    <div class="info mt-10">\n        <ion-item no-lines>\n            <ion-avatar item-start>\n                <img src="./assets/imgs/user.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n            <p>Active 1 day ago</p>\n            <button ion-button outline item-end>View Shop</button>\n        </ion-item>\n        <ion-row padding-left padding-right padding-top>\n            <ion-col text-center class="borderleft">\n                <ion-icon ios="ios-home-outline" md="ios-home-outline"></ion-icon>\n                <span class="highlight">156</span>\n                <div class="blblbl">Products</div>\n            </ion-col>\n            <ion-col text-center class="borderleft">\n                <ion-icon ios="ios-star-outline" md="ios-star-outline"></ion-icon>\n                <span class="highlight">5.80</span>\n                <div class="blblbl">Rating</div>\n            </ion-col>\n            <ion-col text-center>\n                <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n                <span class="highlight">65%</span>\n                <div class="blblbl">Chat Response</div>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10 tbldetails">\n        <ion-item no-lines class="details">\n            <h2>Product Detail</h2>\n            <p>Air Jordan 1 Banned from Nike Air Shoes</p>\n            <ion-note item-end>\n                <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                56 days\n            </ion-note>\n        </ion-item>\n        <ion-row padding-top>\n            <ion-col text-left col-4>\n                Categories\n            </ion-col>\n            <ion-col text-left col-8>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Brand\n            </ion-col>\n            <ion-col text-left col-8 class="withdetails">\n                no brand\n                <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Origin\n            </ion-col>\n            <ion-col text-left col-8>\n                Imported\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Material\n            </ion-col>\n            <ion-col text-left col-8>\n                Rubber\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10 tbldetails">\n        <ion-row padding-top>\n            <ion-col text-left col-4>\n                Condition\n            </ion-col>\n            <ion-col text-left col-8>\n                New\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Variations\n            </ion-col>\n            <ion-col text-left col-8 class="withdetails">\n                no brand\n                <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline"></ion-icon>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Stock\n            </ion-col>\n            <ion-col text-left col-8>\n                Imported\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-left col-4>\n                Ships From\n            </ion-col>\n            <ion-col text-left col-8>\n                Zone 2 Luis Hambre St. Poblaction, Naawan Misamis Oriental, 9023\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="info mt-10">\n        <ion-item no-lines>\n            <h2>Product Ratings</h2>\n            <span class="rating">\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        5/5 (14)</span>\n            <button ion-button clear item-end (click)="viewProductRating()">See All\n        <ion-icon ios="ios-arrow-forward-outline" md="md-arrow-forward-outline"></ion-icon>\n      </button>\n        </ion-item>\n    </div>\n    <ion-list>\n        <ion-list-header>\n            FROM THE SAME SHOP\n            <div class="pull-right">\n                See all\n            </div>\n        </ion-list-header>\n        <ion-slides>\n            <ion-slide>\n                <ion-row>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/1.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                            <ion-row>\n                                <ion-col>\n                                    <div class="rating">\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/2.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/3.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-slide>\n            <ion-slide>\n                <ion-row>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/1.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Air Jordan 1 Banned</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                            <ion-row>\n                                <ion-col>\n                                    <div class="rating">\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                        <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/2.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BHM</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                    <ion-col width="33">\n                        <div class="myCard" (click)="gotoDetails()">\n                            <img src="./assets/imgs/product/3.jpg" />\n                            <div class="pl-10 pr-10">\n                                <div class="card-title">Nike Kobe 11 BLUE</div>\n                                <ion-row>\n                                    <ion-col class="pl-0">\n                                        <div class="price">P 1500.00</div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <div class="rating">\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n                                            <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-slide>\n        </ion-slides>\n    </ion-list>\n</ion-content>\n<ion-footer no-border>\n    <ion-row>\n        <ion-col>\n            <button ion-button full color="secondary">\n                <div>\n                <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon><br>\n                <label>Add to Cart</label>\n                </div>\n            </button>\n        </ion-col>\n        <ion-col>\n            <button ion-button full color="danger">Buy Now</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chatdetail_chatdetail__ = __webpack_require__(87);
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
                "name": "Cassio Zen",
                "email": "cassiozen@gmail.com"
            },
            {
                "name": "Dan Abramov",
                "email": "gaearon@somewhere.com"
            },
            {
                "name": "Pete Hunt",
                "email": "floydophone@somewhere.com"
            },
            {
                "name": "Paul O’Shannessy",
                "email": "zpao@somewhere.com"
            },
            {
                "name": "Ryan Florence",
                "email": "rpflorence@somewhere.com"
            },
            {
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
            selector: 'page-chat',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <ion-title>\n      Chats\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon ios="ios-close-circle-outline" md="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar (input)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n  <ion-segment [(ngModel)]="pet" mode="md">\n    <ion-segment-button value="all">\n      All\n    </ion-segment-button>\n    <ion-segment-button value="unread">\n      Unread\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-item-sliding *ngFor="let user of contactsArr">\n    <ion-item (click)="gotoDetail(user)">\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>{{user.name}}</h2>\n      <p>{{user.email}}</p>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="dark" (click)="unread()">\n        <ion-icon name="create"></ion-icon>\n        Mark as unread\n      </button>\n      <button ion-button color="danger" (click)="delete()">\n        <ion-icon name="trash"></ion-icon>\n        Delete\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ChatDetailPopoverPage);
    return ChatDetailPopoverPage;
}());

var ChatdetailPage = (function () {
    function ChatdetailPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.user = {};
        this.user = navParams.get('user');
    }
    ChatdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatdetailPage');
    };
    ChatdetailPage.prototype.more = function (myEvent) {
        var popover = this.popoverCtrl.create(ChatDetailPopoverPage);
        popover.present({
            ev: myEvent
        });
    };
    ChatdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatdetail',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chatdetail/chatdetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{user.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="more($event)">\n        <ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n \n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chatdetail/chatdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], ChatdetailPage);
    return ChatdetailPage;
}());

//# sourceMappingURL=chatdetail.js.map

/***/ })

},[416]);
//# sourceMappingURL=main.js.map