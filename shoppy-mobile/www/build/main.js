webpackJsonp([28],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myaddress_myaddress__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_userprofile_userprofile__ = __webpack_require__(155);
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
    function AccountsettingsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
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
    AccountsettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accountsettings',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/accountsettings/accountsettings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Account Settings</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item-group>\n    <ion-item-divider color="light">My Account</ion-item-divider>\n    <button ion-item (click)="viewProfile()">My Profile</button>\n    <button ion-item (click)="viewMyAddressess()">My Address</button>\n    <button ion-item (click)="viewBankCards()">Bank Accounts/Cards</button>\n  </ion-item-group>\n  <ion-item-group>\n    <ion-item-divider color="light">Settings</ion-item-divider>\n    <button ion-item>Chat Settings</button>\n    <button ion-item>Notification Settings</button>\n    <button ion-item>Privacy Settings</button>\n    <button ion-item>Blocked Users</button>\n    <button ion-item>Language</button>\n  </ion-item-group>\n  <ion-item-group>\n    <ion-item-divider color="light">Support</ion-item-divider>\n    <button ion-item>Help Centre</button>\n    <button ion-item>Policies</button>\n    <button ion-item (click)="viewAbout()">About us</button>\n    <button ion-item>Request for Account Deletion</button>\n  </ion-item-group>\n  <div padding>\n    <button ion-button block color="danger">Logout</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/accountsettings/accountsettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AccountsettingsPage);
    return AccountsettingsPage;
}());

//# sourceMappingURL=accountsettings.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myaddress_entry_myaddress_entry__ = __webpack_require__(154);
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
            selector: 'page-myaddress',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaddress/myaddress.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Addressess</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Address 1\n    </ion-card-header>\n    <ion-card-content>\n      <p>(+63)9394049310</p>\n      <p>4th Flr. Pioneer House Bldg. A. Mabini-Velez St.</p>\n      <p>Brgy. 14 Pob. Cagayan De Oro City</p>\n      <p>Mindanao, Misamis Oriental 9000</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Address 2\n    </ion-card-header>\n    <ion-card-content>\n      <p>(+63)9394049310</p>\n      <p>Ground Flr. 47 Hayes St.</p>\n      <p>Brgy. 1 Pob. Cagayan De Oro City</p>\n      <p>Mindanao, Misamis Oriental 9000</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <button ion-item detail-none (click)="addNewAddress()">\n      Add New Address\n      <ion-icon name="add" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaddress/myaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], MyaddressPage);
    return MyaddressPage;
}());

//# sourceMappingURL=myaddress.js.map

/***/ }),

/***/ 154:
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
            selector: 'page-myaddress-entry',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaddress-entry/myaddress-entry.html"*/'<!--\n  Generated template for the MyaddressEntryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>New Address</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n  	<ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Phone Number</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>State</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Suburb</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>City</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Postal Code</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Detailed Address</ion-label>\n      <textarea placeholder="Set Detailed Address"></textarea>\n    </ion-item>\n  </ion-list>\n  <ion-list padding-top>\n    <ion-item>\n      <ion-label> Set As Default Address</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label> Set As Pickup Address</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label> Set As Return Address</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block>SUBMIT</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaddress-entry/myaddress-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MyaddressEntryPage);
    return MyaddressEntryPage;
}());

//# sourceMappingURL=myaddress-entry.js.map

/***/ }),

/***/ 155:
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
    }
    UserprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserprofilePage');
    };
    UserprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userprofile',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/userprofile/userprofile.html"*/'<ion-header transparent>\n  <ion-navbar transparent>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons right>\n      <button ion-button clear>\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}">\n  </div>\n  <div id="content">\n    <div id="profile-info">\n      <img id="profile-image" src="./assets/imgs/user.png">\n    </div>\n    <ion-list>\n      <button ion-item detail-none>\n        <ion-label>Username</ion-label>\n        <ion-note item-end>myusername</ion-note>\n      </button>\n      <button ion-item>\n        Change Password\n      </button>\n    </ion-list>\n    <ion-list padding-top>\n      <ion-item detail-none>\n        <ion-label>Gaming</ion-label>\n        <ion-select [(ngModel)]="gaming">\n          <ion-option value="nes">Male</ion-option>\n          <ion-option value="n64">Female</ion-option>\n        </ion-select>\n      </ion-item>\n      <button ion-item>\n        Birthday\n      </button>\n      <button ion-item>\n        Phone\n        <ion-note item-end>*********24</ion-note>\n      </button>\n      <button ion-item>\n        Email\n        <ion-note item-end>ph*********@yopmail.com</ion-note>\n      </button>\n      <button ion-item>\n        Social Media Accounts\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/userprofile/userprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UserprofilePage);
    return UserprofilePage;
}());

//# sourceMappingURL=userprofile.js.map

/***/ }),

/***/ 156:
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
            selector: 'page-forgot',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/forgot/forgot.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Phone Number/ Email</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p>\n    Please enter your registered email address or phone number\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Email/Phone No." [(ngModel)]="email"></ion-input>\n    </ion-item>\n  </ion-list>\n   <button ion-button block (click)="continue()">Continue</button>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_authentication__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_forgot_forgot__ = __webpack_require__(156);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_authentication__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myrating_myrating__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_accountsettings_accountsettings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mywallet_mywallet__ = __webpack_require__(646);
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
        // this.navCtrl.push(ShoppingcartPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    MyprofilePage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    MyprofilePage.prototype.viewAccountSettings = function () {
        // this.navCtrl.push(AccountsettingsPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */]);
    };
    MyprofilePage.prototype.viewMyRating = function () {
        // this.navCtrl.push(MyratingPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_myrating_myrating__["a" /* MyratingPage */]);
    };
    MyprofilePage.prototype.viewMyWallet = function () {
        // this.navCtrl.push(MywalletPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__pages_mywallet_mywallet__["a" /* MywalletPage */]);
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myprofile/myprofile.html"*/'<ion-header transparent>\n  <ion-navbar transparent>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="viewAccountSettings()">\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>&nbsp;</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="viewCart()">\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}">\n    <button class="button1" ion-button small color="primary" (click)="openSignUp()">Sign up</button>\n    <button class="button2" ion-button small outline color="light" (click)="openLogin()">Login</button>\n  </div>\n  <div id="content">\n    <div id="profile-info">\n      <img id="profile-image" src="./assets/imgs/user.png">\n      <h4 id="profile-name">{{this.user.firstname}} {{this.user.lastname}}</h4>\n    </div>\n    <ion-segment [(ngModel)]="mode" mode="md">\n      <ion-segment-button value="buyer">\n        Buyer\n      </ion-segment-button>\n      <ion-segment-button value="seller">\n        Seller\n      </ion-segment-button>\n    </ion-segment>\n    <ion-list>\n      <div [ngSwitch]="mode">\n        <button ion-item *ngSwitchCase="\'buyer\'">\n          <ion-icon name="list-box" item-start></ion-icon>\n          My Purchases\n        </button>\n        <button ion-item *ngSwitchCase="\'seller\'">\n          <ion-icon name="card" item-start></ion-icon>\n          My Sales\n        </button>\n        <button ion-item *ngSwitchCase="\'buyer\'">\n          <ion-icon name="heart-outline" item-start></ion-icon>\n          My Likes\n        </button>\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyRating()">\n          <ion-icon name="star-outline" item-start></ion-icon>\n          My Ratings\n        </button>\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyWallet()">\n          <ion-icon name="cash" item-start></ion-icon>\n          My Wallet\n        </button>\n        <button ion-item *ngSwitchCase="\'seller\'">\n          <ion-icon name="card" item-start></ion-icon>\n          My Income\n        </button>\n        <button ion-item *ngSwitchCase="\'seller\'">\n          <ion-icon name="plane" item-start></ion-icon>\n          My Shipping\n        </button>\n        <button ion-item *ngSwitchCase="\'seller\'">\n          <ion-icon name="star-outline" item-start></ion-icon>\n          Shop Ratings\n        </button>\n        <button ion-item *ngSwitchCase="\'seller\'">\n          <ion-icon name="stats" item-start></ion-icon>\n          My Performance\n        </button>\n        <button ion-item *ngSwitchCase="\'seller\'">\n          <ion-icon name="build" item-start></ion-icon>\n          Seller Assistant\n        </button>\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewAccountSettings()">\n          <ion-icon name="contact" item-start></ion-icon>\n          My Account\n        </button>\n        <button ion-item>\n          <ion-icon name="help-circle" item-start></ion-icon>\n          Help Centre\n        </button>\n        <ion-item-divider color="light" *ngSwitchCase="\'seller\'">&nbsp;</ion-item-divider>\n        <button ion-item *ngSwitchCase="\'seller\'">\n          <ion-icon name="home" item-start></ion-icon>\n          View My Shop\n        </button>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myprofile/myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _d || Object])
    ], MyprofilePage);
    return MyprofilePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 159:
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
            selector: 'page-signup',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sign up</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon ios="ios-close-outline" md="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Basic Information\n    </ion-list-header>\n    <ion-item>\n      <ion-input type="text" placeholder="Firstname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="Lastname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="email" placeholder="Email"></ion-input>\n    </ion-item>\n    <ion-list-header>\n      Account\n    </ion-list-header>\n    <ion-item>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Confirm Password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block>Register</button>\n  </div>\n</ion-content>\n<ion-footer no-border>\n  <ion-row padding-left padding-right>\n    <ion-col col-6>\n      <button ion-button block color="secondary">\n        <div>\n          <ion-icon ios="ios-mail-outline" md="ios-mail-outline"></ion-icon>\n          <br>\n          <label>Sign up with Email</label>\n        </div>\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button block color="primary">\n        <div>\n          <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n          <br>\n          <label>Sign up with Facebook</label>\n        </div>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 160:
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
            selector: 'page-myrating',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myrating/myrating.html"*/'<!--\n  Generated template for the MyratingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>My Rating</ion-title>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="pet" mode="md">\n    <ion-segment-button value="shop">\n      Shop Rating\n    </ion-segment-button>\n    <ion-segment-button value="buyer">\n      Buyer Rating\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button block>All (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">5 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">4 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">3 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">2 Star (1)</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block color="light">1 Star (1)</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>Cher</h2>\n      <p>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n      </p>\n      <p>Thank you. Till next transaction. :)</p>\n      <ion-item no-border class="productinfo">\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/2.jpg">\n        </ion-thumbnail>\n        <h2>Kyrie 2</h2>\n      </ion-item>\n      <small>02/03/2018 14:32</small>\n      <button ion-button outline item-end>Reply</button>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>John Doe</h2>\n      <p>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n        <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n      </p>\n      <p>Thank you. Item Shipped Immediately, Till next transaction. :)</p>\n      <ion-item no-border class="productinfo">\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/3.jpg">\n        </ion-thumbnail>\n        <h2>Kobe 11</h2>\n      </ion-item>\n      <small>02/03/2018 14:32</small>\n      <button ion-button outline item-end>Reply</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myrating/myrating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MyratingPage);
    return MyratingPage;
}());

//# sourceMappingURL=myrating.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
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
            selector: 'page-notification',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item>\n      <ion-icon name="pricetag" item-start></ion-icon>\n      <h2>Promotions</h2>\n      <ion-badge item-end>26</ion-badge> \n    </button>\n    <button ion-item>\n      <ion-icon name="cash" item-start></ion-icon>\n      <h2>Wallet Updates</h2>\n    </button>\n    <button ion-item>\n      <ion-icon name="notifications" item-start></ion-icon>\n      <h2>App Updates</h2>\n      <ion-badge item-end>2</ion-badge> \n    </button>\n    <ion-item-group>\n      <ion-item-divider color="light">Order Updates</ion-item-divider>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-thumbnail>\n        <h2>Rate Products</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-thumbnail>\n        <h2>Shipped Out</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-thumbnail>\n        <h2>Shipped Out</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-thumbnail>\n        <h2>Cancellation Request Accepted</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="./assets/imgs/product/1.jpg">\n        </ion-thumbnail>\n        <h2>Payment Confirm</h2>\n        <p>Hayao Miyazaki • 1988</p>\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductratingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_details_details__ = __webpack_require__(81);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProductratingsPage);
    return ProductratingsPage;
}());

//# sourceMappingURL=productratings.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopprofilePage; });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ShopprofilePage);
    return ShopprofilePage;
}());

//# sourceMappingURL=shopprofile.js.map

/***/ }),

/***/ 164:
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
    }
    ProductcommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductcommentPage');
    };
    ProductcommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-productcomment',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productcomment/productcomment.html"*/'<ion-header no-border no-line>\n    <ion-navbar>\n        <ion-title>\n            Comments\n        </ion-title>\n        <ion-buttons end>\n            <img src="./assets/imgs/product/1.jpg">\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/productcomment/productcomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProductcommentPage);
    return ProductcommentPage;
}());

//# sourceMappingURL=productcomment.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorites_favorites__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myprofile_myprofile__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__ = __webpack_require__(161);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/tabs/tabs.html"*/'<ion-tabs no-border>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="ios-paper-outline"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Sell" tabIcon="ios-camera-outline"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Notifications" tabBadge="2" tabIcon="ios-notifications-outline"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Me" tabIcon="ios-contact-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountsettings/accountsettings.module": [
		616,
		60
	],
	"../pages/chat/chat.module": [
		618,
		59
	],
	"../pages/chatdetail/chatdetail.module": [
		617,
		27
	],
	"../pages/confirmation/confirmation.module": [
		620,
		26
	],
	"../pages/deliveryaddress/deliveryaddress.module": [
		619,
		25
	],
	"../pages/forgot/forgot.module": [
		621,
		24
	],
	"../pages/login/login.module": [
		622,
		23
	],
	"../pages/makepayment/makepayment.module": [
		623,
		22
	],
	"../pages/myaccount/myaccount.module": [
		624,
		21
	],
	"../pages/myaddress-entry/myaddress-entry.module": [
		626,
		20
	],
	"../pages/myaddress/myaddress.module": [
		625,
		19
	],
	"../pages/mybankcards-entry/mybankcards-entry.module": [
		647,
		2
	],
	"../pages/mybankcards/mybankcards.module": [
		627,
		1
	],
	"../pages/myprofile/myprofile.module": [
		628,
		18
	],
	"../pages/myrating/myrating.module": [
		629,
		17
	],
	"../pages/mywallet/mywallet.module": [
		645,
		0
	],
	"../pages/notification/notification.module": [
		630,
		16
	],
	"../pages/orderdetails/orderdetails.module": [
		631,
		15
	],
	"../pages/paymentmethod/paymentmethod.module": [
		633,
		14
	],
	"../pages/paymentoption/paymentoption.module": [
		632,
		13
	],
	"../pages/productcomment/productcomment.module": [
		635,
		12
	],
	"../pages/productratings/productratings.module": [
		634,
		11
	],
	"../pages/search/search.module": [
		637,
		10
	],
	"../pages/searchresult/searchresult.module": [
		636,
		9
	],
	"../pages/shippingoption/shippingoption.module": [
		638,
		8
	],
	"../pages/shoppingcart/shoppingcart.module": [
		639,
		7
	],
	"../pages/shopprofile/shopprofile.module": [
		640,
		6
	],
	"../pages/signup/signup.module": [
		641,
		5
	],
	"../pages/tabs/tabs.module": [
		642,
		4
	],
	"../pages/userprofile/userprofile.module": [
		643,
		3
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
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(225);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(229);
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

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_shoppingcart_shoppingcart__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(46);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 248:
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
            selector: 'page-about',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>About </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(81);
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
            selector: 'page-favorites',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/favorites/favorites.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sell</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item>\n      <ion-icon name="camera" item-start></ion-icon>\n      <h2>Camera</h2>\n      <p>Upload image with camera</p>\n    </button>\n    <button ion-item>\n      <ion-icon name="images" item-start></ion-icon>\n      <h2>Photos</h2>\n      <p>Upload image from album gallery</p>\n    </button>\n    <button ion-item>\n      <ion-icon name="add" item-start></ion-icon>\n      <h2>Add Product</h2>\n      <p>Add product directly without image</p>\n    </button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 409:
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

/***/ 410:
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
            selector: 'page-deliveryaddress',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/deliveryaddress/deliveryaddress.html"*/'<!--\n  Generated template for the DeliveryaddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>deliveryaddress</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/deliveryaddress/deliveryaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DeliveryaddressPage);
    return DeliveryaddressPage;
}());

//# sourceMappingURL=deliveryaddress.js.map

/***/ }),

/***/ 411:
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
            selector: 'page-confirmation',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/confirmation/confirmation.html"*/'<!--\n  Generated template for the ConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>confirmation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/confirmation/confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ConfirmationPage);
    return ConfirmationPage;
}());

//# sourceMappingURL=confirmation.js.map

/***/ }),

/***/ 412:
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
            selector: 'page-makepayment',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/makepayment/makepayment.html"*/'<!--\n  Generated template for the MakepaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>makepayment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/makepayment/makepayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MakepaymentPage);
    return MakepaymentPage;
}());

//# sourceMappingURL=makepayment.js.map

/***/ }),

/***/ 413:
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
            selector: 'page-myaccount',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaccount/myaccount.html"*/'<!--\n  Generated template for the MyaccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myaccount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/myaccount/myaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ }),

/***/ 414:
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
            selector: 'page-orderdetails',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/orderdetails/orderdetails.html"*/'<!--\n  Generated template for the OrderdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>orderdetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/orderdetails/orderdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OrderdetailsPage);
    return OrderdetailsPage;
}());

//# sourceMappingURL=orderdetails.js.map

/***/ }),

/***/ 415:
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
            selector: 'page-paymentoption',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentoption/paymentoption.html"*/'<!--\n  Generated template for the PaymentoptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>paymentoption</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentoption/paymentoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PaymentoptionPage);
    return PaymentoptionPage;
}());

//# sourceMappingURL=paymentoption.js.map

/***/ }),

/***/ 416:
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
            selector: 'page-paymentmethod',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentmethod/paymentmethod.html"*/'<!--\n  Generated template for the PaymentmethodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>paymentmethod</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/paymentmethod/paymentmethod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PaymentmethodPage);
    return PaymentmethodPage;
}());

//# sourceMappingURL=paymentmethod.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SearchresultPage);
    return SearchresultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 419:
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
            selector: 'page-shippingoption',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shippingoption/shippingoption.html"*/'<!--\n  Generated template for the ShippingoptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>shippingoption</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shippingoption/shippingoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ShippingoptionPage);
    return ShippingoptionPage;
}());

//# sourceMappingURL=shippingoption.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(448);


__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */].getPluginRef = function () { return "cordova.plugin.http"; };

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatdetail_chatdetail__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_confirmation_confirmation__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_deliveryaddress_deliveryaddress__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_details_details__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_makepayment_makepayment__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_myaccount_myaccount__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_myprofile_myprofile__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_myrating_myrating__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_myaddress_myaddress__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_myaddress_entry_myaddress_entry__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_orderdetails_orderdetails__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_paymentmethod_paymentmethod__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_paymentoption_paymentoption__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_productcomment_productcomment__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_productratings_productratings__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_search_search__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_searchresult_searchresult__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_settings_settings__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_shippingoption_shippingoption__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_shoppingcart_shoppingcart__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_shopprofile_shopprofile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_signup_signup__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_forgot_forgot__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_userprofile_userprofile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_notification_notification__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_accountsettings_accountsettings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_emoji_picker_emoji_picker__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pipes_relative_time_relative_time__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_service_authentication__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_service_emojis__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_service_chat__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_http__ = __webpack_require__(179);
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
                __WEBPACK_IMPORTED_MODULE_27__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_shopprofile_shopprofile__["a" /* ShopprofilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_myaddress_myaddress__["a" /* MyaddressPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myaddress_entry_myaddress_entry__["a" /* MyaddressEntryPage */],
                __WEBPACK_IMPORTED_MODULE_43__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */], __WEBPACK_IMPORTED_MODULE_44__pipes_relative_time_relative_time__["a" /* RelativeTimePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/accountsettings/accountsettings.module#AccountsettingsPageModule', name: 'AccountsettingsPage', segment: 'accountsettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatdetail/chatdetail.module#ChatdetailPageModule', name: 'ChatdetailPage', segment: 'chatdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliveryaddress/deliveryaddress.module#DeliveryaddressPageModule', name: 'DeliveryaddressPage', segment: 'deliveryaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/makepayment/makepayment.module#MakepaymentPageModule', name: 'MakepaymentPage', segment: 'makepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaddress/myaddress.module#MyaddressPageModule', name: 'MyaddressPage', segment: 'myaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaddress-entry/myaddress-entry.module#MyaddressEntryPageModule', name: 'MyaddressEntryPage', segment: 'myaddress-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mybankcards/mybankcards.module#MybankcardsPageModule', name: 'MybankcardsPage', segment: 'mybankcards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrating/myrating.module#MyratingPageModule', name: 'MyratingPage', segment: 'myrating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentoption/paymentoption.module#PaymentoptionPageModule', name: 'PaymentoptionPage', segment: 'paymentoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentmethod/paymentmethod.module#PaymentmethodPageModule', name: 'PaymentmethodPage', segment: 'paymentmethod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productratings/productratings.module#ProductratingsPageModule', name: 'ProductratingsPage', segment: 'productratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productcomment/productcomment.module#ProductcommentPageModule', name: 'ProductcommentPage', segment: 'productcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchresult/searchresult.module#SearchresultPageModule', name: 'SearchresultPage', segment: 'searchresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_27__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_shopprofile_shopprofile__["a" /* ShopprofilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_myaddress_myaddress__["a" /* MyaddressPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myaddress_entry_myaddress_entry__["a" /* MyaddressEntryPage */],
                __WEBPACK_IMPORTED_MODULE_43__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_45__providers_service_authentication__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_service_emojis__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_service_chat__["a" /* ChatService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chatdetail_chatdetail__ = __webpack_require__(88);
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
            selector: 'page-chat',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <ion-title>\n      Chats\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon ios="ios-close-circle-outline" md="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar (input)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n  <ion-segment [(ngModel)]="pet" mode="md">\n    <ion-segment-button value="all">\n      All\n    </ion-segment-button>\n    <ion-segment-button value="unread">\n      Unread\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-item-sliding *ngFor="let user of contactsArr">\n    <ion-item (click)="gotoDetail(user)">\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>{{user.name}}</h2>\n      <p>{{user.email}}</p>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="dark" (click)="unread()">\n        <ion-icon name="create"></ion-icon>\n        Mark as unread\n      </button>\n      <button ion-button color="danger" (click)="delete()">\n        <ion-icon name="trash"></ion-icon>\n        Delete\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 292,
	"./af.js": 292,
	"./ar": 293,
	"./ar-dz": 294,
	"./ar-dz.js": 294,
	"./ar-kw": 295,
	"./ar-kw.js": 295,
	"./ar-ly": 296,
	"./ar-ly.js": 296,
	"./ar-ma": 297,
	"./ar-ma.js": 297,
	"./ar-sa": 298,
	"./ar-sa.js": 298,
	"./ar-tn": 299,
	"./ar-tn.js": 299,
	"./ar.js": 293,
	"./az": 300,
	"./az.js": 300,
	"./be": 301,
	"./be.js": 301,
	"./bg": 302,
	"./bg.js": 302,
	"./bn": 303,
	"./bn.js": 303,
	"./bo": 304,
	"./bo.js": 304,
	"./br": 305,
	"./br.js": 305,
	"./bs": 306,
	"./bs.js": 306,
	"./ca": 307,
	"./ca.js": 307,
	"./cs": 308,
	"./cs.js": 308,
	"./cv": 309,
	"./cv.js": 309,
	"./cy": 310,
	"./cy.js": 310,
	"./da": 311,
	"./da.js": 311,
	"./de": 312,
	"./de-at": 313,
	"./de-at.js": 313,
	"./de-ch": 314,
	"./de-ch.js": 314,
	"./de.js": 312,
	"./dv": 315,
	"./dv.js": 315,
	"./el": 316,
	"./el.js": 316,
	"./en-au": 317,
	"./en-au.js": 317,
	"./en-ca": 318,
	"./en-ca.js": 318,
	"./en-gb": 319,
	"./en-gb.js": 319,
	"./en-ie": 320,
	"./en-ie.js": 320,
	"./en-nz": 321,
	"./en-nz.js": 321,
	"./eo": 322,
	"./eo.js": 322,
	"./es": 323,
	"./es-do": 324,
	"./es-do.js": 324,
	"./es.js": 323,
	"./et": 325,
	"./et.js": 325,
	"./eu": 326,
	"./eu.js": 326,
	"./fa": 327,
	"./fa.js": 327,
	"./fi": 328,
	"./fi.js": 328,
	"./fo": 329,
	"./fo.js": 329,
	"./fr": 330,
	"./fr-ca": 331,
	"./fr-ca.js": 331,
	"./fr-ch": 332,
	"./fr-ch.js": 332,
	"./fr.js": 330,
	"./fy": 333,
	"./fy.js": 333,
	"./gd": 334,
	"./gd.js": 334,
	"./gl": 335,
	"./gl.js": 335,
	"./gom-latn": 336,
	"./gom-latn.js": 336,
	"./he": 337,
	"./he.js": 337,
	"./hi": 338,
	"./hi.js": 338,
	"./hr": 339,
	"./hr.js": 339,
	"./hu": 340,
	"./hu.js": 340,
	"./hy-am": 341,
	"./hy-am.js": 341,
	"./id": 342,
	"./id.js": 342,
	"./is": 343,
	"./is.js": 343,
	"./it": 344,
	"./it.js": 344,
	"./ja": 345,
	"./ja.js": 345,
	"./jv": 346,
	"./jv.js": 346,
	"./ka": 347,
	"./ka.js": 347,
	"./kk": 348,
	"./kk.js": 348,
	"./km": 349,
	"./km.js": 349,
	"./kn": 350,
	"./kn.js": 350,
	"./ko": 351,
	"./ko.js": 351,
	"./ky": 352,
	"./ky.js": 352,
	"./lb": 353,
	"./lb.js": 353,
	"./lo": 354,
	"./lo.js": 354,
	"./lt": 355,
	"./lt.js": 355,
	"./lv": 356,
	"./lv.js": 356,
	"./me": 357,
	"./me.js": 357,
	"./mi": 358,
	"./mi.js": 358,
	"./mk": 359,
	"./mk.js": 359,
	"./ml": 360,
	"./ml.js": 360,
	"./mr": 361,
	"./mr.js": 361,
	"./ms": 362,
	"./ms-my": 363,
	"./ms-my.js": 363,
	"./ms.js": 362,
	"./my": 364,
	"./my.js": 364,
	"./nb": 365,
	"./nb.js": 365,
	"./ne": 366,
	"./ne.js": 366,
	"./nl": 367,
	"./nl-be": 368,
	"./nl-be.js": 368,
	"./nl.js": 367,
	"./nn": 369,
	"./nn.js": 369,
	"./pa-in": 370,
	"./pa-in.js": 370,
	"./pl": 371,
	"./pl.js": 371,
	"./pt": 372,
	"./pt-br": 373,
	"./pt-br.js": 373,
	"./pt.js": 372,
	"./ro": 374,
	"./ro.js": 374,
	"./ru": 375,
	"./ru.js": 375,
	"./sd": 376,
	"./sd.js": 376,
	"./se": 377,
	"./se.js": 377,
	"./si": 378,
	"./si.js": 378,
	"./sk": 379,
	"./sk.js": 379,
	"./sl": 380,
	"./sl.js": 380,
	"./sq": 381,
	"./sq.js": 381,
	"./sr": 382,
	"./sr-cyrl": 383,
	"./sr-cyrl.js": 383,
	"./sr.js": 382,
	"./ss": 384,
	"./ss.js": 384,
	"./sv": 385,
	"./sv.js": 385,
	"./sw": 386,
	"./sw.js": 386,
	"./ta": 387,
	"./ta.js": 387,
	"./te": 388,
	"./te.js": 388,
	"./tet": 389,
	"./tet.js": 389,
	"./th": 390,
	"./th.js": 390,
	"./tl-ph": 391,
	"./tl-ph.js": 391,
	"./tlh": 392,
	"./tlh.js": 392,
	"./tr": 393,
	"./tr.js": 393,
	"./tzl": 394,
	"./tzl.js": 394,
	"./tzm": 395,
	"./tzm-latn": 396,
	"./tzm-latn.js": 396,
	"./tzm.js": 395,
	"./uk": 397,
	"./uk.js": 397,
	"./ur": 398,
	"./ur.js": 398,
	"./uz": 399,
	"./uz-latn": 400,
	"./uz-latn.js": 400,
	"./uz.js": 399,
	"./vi": 401,
	"./vi.js": 401,
	"./x-pseudo": 402,
	"./x-pseudo.js": 402,
	"./yo": 403,
	"./yo.js": 403,
	"./zh-cn": 404,
	"./zh-cn.js": 404,
	"./zh-hk": 405,
	"./zh-hk.js": 405,
	"./zh-tw": 406,
	"./zh-tw.js": 406
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
webpackContext.id = 580;

/***/ }),

/***/ 598:
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

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(165);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 600:
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
            selector: 'page-settings',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/settings/settings.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border no-line>\n  <ion-navbar color="richblue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="richblue">\n  <ion-list>\n    <button ion-item *ngFor="let item of mores" (click)="itemSelected(item)">\n      <ion-icon color="primary" ios="{{item.icon}}" md="{{item.icon}}" item-start></ion-icon>\n      {{ item.title }}\n      <ion-icon ios="ios-arrow-forward-outline" md="ios-arrow-forward-outline" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_emojis__ = __webpack_require__(409);
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
            selector: 'emoji-picker',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/components/emoji-picker/emoji-picker.html"*/'<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/components/emoji-picker/emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_service_emojis__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(603);
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

/***/ 646:
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
            selector: 'page-mywallet',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/mywallet/mywallet.html"*/'<!--\n  Generated template for the MywalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>My Wallet</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-list>\n	<ion-item>\n		<div text-center>\n			<small>Wallet Ballance</small>\n			<h1 class="balance">Php 0.00</h1>\n		</div>\n	</ion-item>\n	<ion-item>\n		<ion-grid>\n			<ion-row>\n				<ion-col col-6>\n					<div text-center class="withdrawal">\n						<ion-icon name="cash"></ion-icon>\n						<br>\n						<label>WITHDRAWAL</label>\n					</div>\n				</ion-col>\n				<ion-col col-6>\n					<div text-center class="transaction">\n						<ion-icon name="copy"></ion-icon>\n						<br>\n						<label>TRANSACTIONS</label>\n					</div>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/mywallet/mywallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MywalletPage);
    return MywalletPage;
}());

//# sourceMappingURL=mywallet.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(46);
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
    ShoppingcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shoppingcart',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/'<ion-header no-border no-line>\n  <ion-navbar hideBackButton="true">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Shopping Cart\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewChat()">\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="myCard" *ngIf="cartArr.length < 1">\n    <div padding text-center>\n    	<img src="./assets/imgs/shopping-cart.svg" />\n    </div>\n    <ion-card-content>\n      <p text-center>\n        <button ion-button color="secondary" (click)="back()">Go Shopping Now</button>\n      </p>\n    </ion-card-content>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/shoppingcart/shoppingcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ShoppingcartPage);
    return ShoppingcartPage;
}());

//# sourceMappingURL=shoppingcart.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chatdetail_chatdetail__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_productratings_productratings__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_shopprofile_shopprofile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_productcomment_productcomment__ = __webpack_require__(164);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_chat__ = __webpack_require__(224);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatdetailPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* TextInput */])
    ], ChatdetailPage.prototype, "messageInput", void 0);
    ChatdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatdetail',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chatdetail/chatdetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{user.name}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="more($event)">\n        <ion-icon ios="ios-more-outline" md="ios-more-outline"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="message-wrap">\n\n        <div *ngFor="let msg of msgList" class="message" [class.left]=" msg.userId === toUser.id " [class.right]=" msg.userId === userinfo.id ">\n            <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n            <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n            <div class="msg-detail">\n                <div class="msg-info">\n                    <p>\n                        {{msg.userName}} &nbsp; &nbsp; &nbsp; {{msg.time | relativeTime}}\n                    </p>\n                </div>\n                <div class="msg-content">\n                    <span class="triangle"></span>\n                    <p class="line-breaker ">{{msg.message}}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</ion-content>\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n    <ion-grid class="input-wrap">\n        <ion-row>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n                    <ion-icon name="md-happy"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-8>\n                <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (ionFocus)="onFocus()">\n                </ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n                    <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <emoji-picker *ngIf="showEmojiPicker" name="fieldEmoji" ngDefaultControl [(ngModel)]="editorMsg"></emoji-picker>\n</ion-footer>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/chatdetail/chatdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_chat__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ChatdetailPage);
    return ChatdetailPage;
}());

//# sourceMappingURL=chatdetail.js.map

/***/ })

},[420]);
//# sourceMappingURL=main.js.map