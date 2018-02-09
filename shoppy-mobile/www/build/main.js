webpackJsonp([1],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(53);
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
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, DataFactory, loadingCtrl, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DataFactory = DataFactory;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.item = {};
        this.favorites = [];
        this.isAdded = false;
        this.showGraph = false;
        this.actions = '/1day';
        this.price_data = [];
        this.price_labels = [];
        this.marketcap_data = [];
        this.marketcap_labels = [];
        this.volume_data = [];
        this.volume_labels = [];
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
        this.item = this.navParams.get('crypto');
        storage.get('favorites').then(function (val) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](val)) {
                _this.favorites = val;
                var res = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](_this.favorites, { id: _this.item.id });
                if (res) {
                    _this.isAdded = true;
                }
            }
        });
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.DataFactory.getTickerById(this.item.id).then(function (data) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data) && data.length > 0) {
                data = data[0];
                data.daily_volume_usd = data['24h_volume_usd'];
                data.img = './assets/icon/' + data.symbol + '.png';
                _this.item = data;
            }
        }, function (error) {
            // loading.dismiss();
        }).then(function () {
            loading.dismiss();
        });
        this.DataFactory.getChartData(this.actions, this.item.symbol).then(function (data) {
            console.log('data: ', data);
            var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                _this.showGraph = true;
                if (data.price && data.price.length > 0) {
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.price, function (value) {
                        _this.price_data.push(value[1]);
                        _this.price_labels.push(datePipe.transform(value[0], 'medium'));
                    });
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.volume, function (value) {
                        _this.volume_data.push(value[1]);
                        _this.volume_labels.push(datePipe.transform(value[0], 'medium'));
                    });
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.market_cap, function (value) {
                        _this.marketcap_data.push(value[1]);
                        _this.marketcap_labels.push(datePipe.transform(value[0], 'medium'));
                    });
                }
            }
        });
    };
    DetailsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.DataFactory.getTickerById(this.item.id).then(function (data) {
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data) && data.length > 0) {
                data = data[0];
                data.daily_volume_usd = data['24h_volume_usd'];
                data.img = './assets/icon/' + data.symbol + '.png';
                _this.item = data;
            }
        }, function (error) {
        }).then(function () {
            _this.DataFactory.getChartData(_this.actions, _this.item.symbol).then(function (data) {
                var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                    _this.showGraph = true;
                    _this.price_data = [];
                    _this.price_labels = [];
                    _this.volume_data = [];
                    _this.volume_labels = [];
                    _this.marketcap_data = [];
                    _this.marketcap_labels = [];
                    if (data.price && data.price.length > 0) {
                        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.price, function (value) {
                            _this.price_data.push(value[1]);
                            _this.price_labels.push(datePipe.transform(value[0], 'medium'));
                        });
                        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.volume, function (value) {
                            _this.volume_data.push(value[1]);
                            _this.volume_labels.push(datePipe.transform(value[0], 'medium'));
                        });
                        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.market_cap, function (value) {
                            _this.marketcap_data.push(value[1]);
                            _this.marketcap_labels.push(datePipe.transform(value[0], 'medium'));
                        });
                    }
                }
            });
            refresher.complete();
        });
    };
    DetailsPage.prototype.addToFav = function (item) {
        console.log('addToFav: ', item);
        var res = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.favorites, { id: item.id });
        if (res) {
            this.favorites = __WEBPACK_IMPORTED_MODULE_3_lodash__["reject"](this.favorites, { id: item.id });
            this.storage.set('favorites', this.favorites);
            this.isAdded = false;
            var alert_1 = this.alertCtrl.create({
                title: 'Favorites',
                subTitle: 'Cryptocurrency remove on favorites!',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        this.favorites.push({
            id: item.id
        });
        this.storage.set('favorites', this.favorites);
        this.isAdded = true;
        var alert = this.alertCtrl.create({
            title: 'Favorites',
            subTitle: 'Cryptocurrency added as favorites!',
            buttons: ['OK']
        });
        alert.present();
    };
    DetailsPage.prototype.segmentChanged = function (ev) {
        var _this = this;
        console.log('val: ', ev.value);
        var val = ev.value;
        this.DataFactory.getChartData(val, this.item.symbol).then(function (data) {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](data)) {
                _this.showGraph = true;
                _this.price_data = [];
                _this.price_labels = [];
                _this.volume_data = [];
                _this.volume_labels = [];
                _this.marketcap_data = [];
                _this.marketcap_labels = [];
                if (data.price && data.price.length > 0) {
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.price, function (value) {
                        _this.price_data.push(value[1]);
                        _this.price_labels.push(datePipe.transform(value[0], 'medium'));
                    });
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.volume, function (value) {
                        _this.volume_data.push(value[1]);
                        _this.volume_labels.push(datePipe.transform(value[0], 'medium'));
                    });
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](data.market_cap, function (value) {
                        _this.marketcap_data.push(value[1]);
                        _this.marketcap_labels.push(datePipe.transform(value[0], 'medium'));
                    });
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], DetailsPage.prototype, "lineCanvas", void 0);
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <ion-title>\n      Analytics\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addToFav(item)">\n        <ion-icon ios="ios-heart-outline" md="ios-heart-outline" color="danger" *ngIf="!isAdded"></ion-icon>\n        <ion-icon ios="ios-heart" md="ios-heart" color="danger" *ngIf="isAdded"></ion-icon>\n      </button>\n      <button ion-button icon-only>\n        <ion-icon ios="md-open" md="md-open"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class="info">\n    <div text-center>\n      <!-- <img [src]="item.img" onError="this.src=\'./assets/imgs/ionic.png\'"> -->\n      <img src="https://files.coinmarketcap.com/static/img/coins/64x64/{{item.id}}.png" onError="this.src=\'./assets/imgs/ionic.png\'">\n    </div>\n    <div class="card-title">{{item.name}}</div>\n    <div class="card-subtitle">{{item.symbol}}</div>\n    <ion-row>\n      <ion-col class="borderleft">\n        <h4>Change 1h</h4>\n        <p>\n          <strong class="secondary" *ngIf="item.percent_change_1h > 0">{{item.percent_change_1h}} %</strong>\n          <strong class="danger" *ngIf="item.percent_change_1h < 0">{{item.percent_change_1h}} %</strong>\n        </p>\n      </ion-col>\n      <ion-col class="borderleft">\n        <h4>Change 24h</h4>\n        <p>\n          <strong class="secondary" *ngIf="item.percent_change_24h > 0">{{item.percent_change_24h}} %</strong>\n          <strong class="danger" *ngIf="item.percent_change_24h < 0">{{item.percent_change_24h}} %</strong>\n        </p>\n      </ion-col>\n      <ion-col center text-center>\n        <h4>Change 7d</h4>\n        <p>\n          <strong class="secondary" *ngIf="item.percent_change_7d > 0">{{item.percent_change_7d}} %</strong>\n          <strong class="danger" *ngIf="item.percent_change_7d < 0">{{item.percent_change_7d}} %</strong>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-item no-lines *ngIf="item.market_cap_usd !== null">\n    <h2>Market Cap</h2>\n    <ion-note item-end>\n      <span>{{item.market_cap_usd | currency:\'USD\'}}</span>\n    </ion-note>\n  </ion-item>\n  <ion-item no-lines *ngIf="item.daily_volume_usd !== null">\n    <h2>Volume (24h)</h2>\n    <ion-note item-end>\n      <span>{{item.daily_volume_usd | currency:\'USD\'}}</span>\n    </ion-note>\n  </ion-item>\n  <ion-item no-lines *ngIf="item.available_supply !== null">\n    <h2>Circulating Supply</h2>\n    <ion-note item-end>\n      <span>{{item.available_supply}} {{item.symbol}}</span>\n    </ion-note>\n  </ion-item>\n  <ion-item no-lines *ngIf="item.max_supply !== null">\n    <h2>Max Supply</h2>\n    <ion-note item-end><span>{{item.max_supply}} {{item.symbol}}</span></ion-note>\n  </ion-item>\n  <ion-list-header color="aquahaze" *ngIf="showGraph">\n    More Information\n  </ion-list-header>\n  <ion-toolbar padding *ngIf="showGraph">\n    <ion-segment [(ngModel)]="actions" color="richblue" (ionChange)="segmentChanged($event)" mode="md">\n      <ion-segment-button value="/1day">\n        1D\n      </ion-segment-button>\n      <ion-segment-button value="/7day">\n        1W\n      </ion-segment-button>\n      <ion-segment-button value="/30day">\n        1M\n      </ion-segment-button>\n      <ion-segment-button value="/90day">\n        3M\n      </ion-segment-button>\n      <ion-segment-button value="/180day">\n        6M\n      </ion-segment-button>\n      <ion-segment-button value="">\n        All\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <ion-card *ngIf="showGraph">\n    <ion-card-header>\n      Price\n    </ion-card-header>\n    <ion-card-content>\n      <canvas baseChart [data]="price_data" [labels]="price_labels" [options]="lineChartOptions" [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType"></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf="showGraph">\n    <ion-card-header>\n      Market Cap\n    </ion-card-header>\n    <ion-card-content>\n      <canvas baseChart [data]="marketcap_data" [labels]="marketcap_labels" [options]="lineChartOptions" [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf="showGraph">\n    <ion-card-header>\n      Volume\n    </ion-card-header>\n    <ion-card-content>\n      <canvas baseChart [data]="volume_data" [labels]="volume_labels" [options]="lineChartOptions" [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tabs/tabs.module": [
		576,
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
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 386:
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(150);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/'<ion-header no-border no-line>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Shoppy\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only>\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar (input)="getItems($event)" showCancelButton="true"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div padding>\n    <ion-slides pager>\n      <ion-slide>\n        <img src="./assets/imgs/thumb1.png">\n      </ion-slide>\n      <ion-slide>\n        <img src="./assets/imgs/thumb1.png">\n      </ion-slide>\n      <ion-slide>\n        <img src="./assets/imgs/thumb1.png">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <ion-list>\n    <ion-list-header>\n      Popular Products\n    </ion-list-header>\n    <div padding>\n      <ion-slides pager>\n        <ion-slide>\n          <img src="./assets/imgs/thumb1.png">\n        </ion-slide>\n        <ion-slide>\n          <img src="./assets/imgs/thumb1.png">\n        </ion-slide>\n        <ion-slide>\n          <img src="./assets/imgs/thumb1.png">\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Categories\n      <div class="pull-right">\n          See more ...\n      </div>\n    </ion-list-header>\n    <div padding>\n      <ion-slides>\n        <ion-slide>\n          <ion-row>\n              <ion-col width="33">\n                <img src="./assets/imgs/polo.png">\n                <p><small>Men\'s apparel</small></p>\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/jeans.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/sneakers.png">\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col width="33">\n                <img src="./assets/imgs/dress.png">\n                <p><small>Women\'s apparel</small></p>\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/skirt.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/bag.png">\n              </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n              <ion-col width="33">\n                <img src="./assets/imgs/polo.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/jeans.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/sneakers.png">\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col width="33">\n                <img src="./assets/imgs/polo.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/jeans.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/sneakers.png">\n              </ion-col>\n          </ion-row>\n        </ion-slide>\n        <ion-slide>\n          <ion-row>\n              <ion-col width="33">\n                <img src="./assets/imgs/polo.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/jeans.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/sneakers.png">\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col width="33">\n                <img src="./assets/imgs/polo.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/jeans.png">\n              </ion-col>\n              <ion-col width="33">\n                  <img src="./assets/imgs/sneakers.png">\n              </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(419);


__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */].getPluginRef = function () { return "cordova.plugin.http"; };

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_details_details__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_http__ = __webpack_require__(88);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__["a" /* FavoritesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                }, {
                    links: [
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
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__["a" /* FavoritesPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(386);
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

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 270,
	"./af.js": 270,
	"./ar": 271,
	"./ar-dz": 272,
	"./ar-dz.js": 272,
	"./ar-kw": 273,
	"./ar-kw.js": 273,
	"./ar-ly": 274,
	"./ar-ly.js": 274,
	"./ar-ma": 275,
	"./ar-ma.js": 275,
	"./ar-sa": 276,
	"./ar-sa.js": 276,
	"./ar-tn": 277,
	"./ar-tn.js": 277,
	"./ar.js": 271,
	"./az": 278,
	"./az.js": 278,
	"./be": 279,
	"./be.js": 279,
	"./bg": 280,
	"./bg.js": 280,
	"./bn": 281,
	"./bn.js": 281,
	"./bo": 282,
	"./bo.js": 282,
	"./br": 283,
	"./br.js": 283,
	"./bs": 284,
	"./bs.js": 284,
	"./ca": 285,
	"./ca.js": 285,
	"./cs": 286,
	"./cs.js": 286,
	"./cv": 287,
	"./cv.js": 287,
	"./cy": 288,
	"./cy.js": 288,
	"./da": 289,
	"./da.js": 289,
	"./de": 290,
	"./de-at": 291,
	"./de-at.js": 291,
	"./de-ch": 292,
	"./de-ch.js": 292,
	"./de.js": 290,
	"./dv": 293,
	"./dv.js": 293,
	"./el": 294,
	"./el.js": 294,
	"./en-au": 295,
	"./en-au.js": 295,
	"./en-ca": 296,
	"./en-ca.js": 296,
	"./en-gb": 297,
	"./en-gb.js": 297,
	"./en-ie": 298,
	"./en-ie.js": 298,
	"./en-nz": 299,
	"./en-nz.js": 299,
	"./eo": 300,
	"./eo.js": 300,
	"./es": 301,
	"./es-do": 302,
	"./es-do.js": 302,
	"./es.js": 301,
	"./et": 303,
	"./et.js": 303,
	"./eu": 304,
	"./eu.js": 304,
	"./fa": 305,
	"./fa.js": 305,
	"./fi": 306,
	"./fi.js": 306,
	"./fo": 307,
	"./fo.js": 307,
	"./fr": 308,
	"./fr-ca": 309,
	"./fr-ca.js": 309,
	"./fr-ch": 310,
	"./fr-ch.js": 310,
	"./fr.js": 308,
	"./fy": 311,
	"./fy.js": 311,
	"./gd": 312,
	"./gd.js": 312,
	"./gl": 313,
	"./gl.js": 313,
	"./gom-latn": 314,
	"./gom-latn.js": 314,
	"./he": 315,
	"./he.js": 315,
	"./hi": 316,
	"./hi.js": 316,
	"./hr": 317,
	"./hr.js": 317,
	"./hu": 318,
	"./hu.js": 318,
	"./hy-am": 319,
	"./hy-am.js": 319,
	"./id": 320,
	"./id.js": 320,
	"./is": 321,
	"./is.js": 321,
	"./it": 322,
	"./it.js": 322,
	"./ja": 323,
	"./ja.js": 323,
	"./jv": 324,
	"./jv.js": 324,
	"./ka": 325,
	"./ka.js": 325,
	"./kk": 326,
	"./kk.js": 326,
	"./km": 327,
	"./km.js": 327,
	"./kn": 328,
	"./kn.js": 328,
	"./ko": 329,
	"./ko.js": 329,
	"./ky": 330,
	"./ky.js": 330,
	"./lb": 331,
	"./lb.js": 331,
	"./lo": 332,
	"./lo.js": 332,
	"./lt": 333,
	"./lt.js": 333,
	"./lv": 334,
	"./lv.js": 334,
	"./me": 335,
	"./me.js": 335,
	"./mi": 336,
	"./mi.js": 336,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 338,
	"./ml.js": 338,
	"./mr": 339,
	"./mr.js": 339,
	"./ms": 340,
	"./ms-my": 341,
	"./ms-my.js": 341,
	"./ms.js": 340,
	"./my": 342,
	"./my.js": 342,
	"./nb": 343,
	"./nb.js": 343,
	"./ne": 344,
	"./ne.js": 344,
	"./nl": 345,
	"./nl-be": 346,
	"./nl-be.js": 346,
	"./nl.js": 345,
	"./nn": 347,
	"./nn.js": 347,
	"./pa-in": 348,
	"./pa-in.js": 348,
	"./pl": 349,
	"./pl.js": 349,
	"./pt": 350,
	"./pt-br": 351,
	"./pt-br.js": 351,
	"./pt.js": 350,
	"./ro": 352,
	"./ro.js": 352,
	"./ru": 353,
	"./ru.js": 353,
	"./sd": 354,
	"./sd.js": 354,
	"./se": 355,
	"./se.js": 355,
	"./si": 356,
	"./si.js": 356,
	"./sk": 357,
	"./sk.js": 357,
	"./sl": 358,
	"./sl.js": 358,
	"./sq": 359,
	"./sq.js": 359,
	"./sr": 360,
	"./sr-cyrl": 361,
	"./sr-cyrl.js": 361,
	"./sr.js": 360,
	"./ss": 362,
	"./ss.js": 362,
	"./sv": 363,
	"./sv.js": 363,
	"./sw": 364,
	"./sw.js": 364,
	"./ta": 365,
	"./ta.js": 365,
	"./te": 366,
	"./te.js": 366,
	"./tet": 367,
	"./tet.js": 367,
	"./th": 368,
	"./th.js": 368,
	"./tl-ph": 369,
	"./tl-ph.js": 369,
	"./tlh": 370,
	"./tlh.js": 370,
	"./tr": 371,
	"./tr.js": 371,
	"./tzl": 372,
	"./tzl.js": 372,
	"./tzm": 373,
	"./tzm-latn": 374,
	"./tzm-latn.js": 374,
	"./tzm.js": 373,
	"./uk": 375,
	"./uk.js": 375,
	"./ur": 376,
	"./ur.js": 376,
	"./uz": 377,
	"./uz-latn": 378,
	"./uz-latn.js": 378,
	"./uz.js": 377,
	"./vi": 379,
	"./vi.js": 379,
	"./x-pseudo": 380,
	"./x-pseudo.js": 380,
	"./yo": 381,
	"./yo.js": 381,
	"./zh-cn": 382,
	"./zh-cn.js": 382,
	"./zh-hk": 383,
	"./zh-hk.js": 383,
	"./zh-tw": 384,
	"./zh-tw.js": 384
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
webpackContext.id = 545;

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(53);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pages = [];
        this.mode = 'buying';
        this.buyerArr = [];
        this.sellerArr = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.buyerArr = [
            { title: 'My Likes', desc: '8 items', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'heart-outline', color: 'secondary' },
            { title: 'My Rating', desc: 'View my rating', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'star-outline', color: 'secondary' },
            { title: 'My Account', desc: 'View my account', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'contact', color: 'secondary' },
            { title: 'Help Centre', desc: 'View help', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'help-circle', color: 'secondary' },
        ];
        this.sellerArr = [
            { title: 'My Income', desc: 'View my income', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'card', color: 'secondary' },
            { title: 'My Shipping', desc: 'View my shipping', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'car', color: 'secondary' },
            { title: 'Shop Rating', desc: 'View shop rating', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'star-outline', color: 'secondary' },
            { title: 'My Performance', desc: 'My Performance', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'stats', color: 'secondary' },
            { title: 'Help Centre', desc: 'View help', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'help-circle', color: 'secondary' },
        ];
        /*this.pages = [
          { title: 'Market Cap', component: HomePage, icon: 'stats', color: 'secondary' },
          { title: 'Favorites', component: FavoritesPage, icon: 'heart', color: 'danger' },
          { title: 'Settings', component: SettingsPage, icon: 'settings', color: 'calm' },
          { title: 'About', component: AboutPage, icon: 'information-circle', color: 'calm' }
        ];*/
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/app/app.html"*/'<ion-menu [content]="content" persistent="true">\n  <ion-header no-border no-line>\n    <ion-buttons end>\n      <button ion-button icon-only clear>\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-header>\n  <ion-content class="navmenu">\n    <ion-item class="item-avatar" detail-none no-lines>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/user.png">\n      </ion-avatar>\n      <h2>John Doe</h2>\n    </ion-item>\n    <div padding>\n      <ion-segment [(ngModel)]="mode" mode="md">\n        <ion-segment-button value="buying">\n          Buying\n        </ion-segment-button>\n        <ion-segment-button value="selling">\n          Selling\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <ion-list no-lines>\n       <div *ngIf="mode === \'buying\'">\n      <ion-item menuClose *ngFor="let p of buyerArr" (click)="openPage(p)" detail-none>\n        <ion-icon name="{{p.icon}}" item-left color="{{p.color}}"></ion-icon>\n        {{p.title}}\n        <ion-note item-end>\n            {{p.desc}}\n        </ion-note>\n      </ion-item>\n      </div> \n      <div *ngIf="mode === \'selling\'">\n      <ion-item menuClose *ngFor="let p of sellerArr" (click)="openPage(p)" detail-none>\n        <ion-icon name="{{p.icon}}" item-left color="{{p.color}}"></ion-icon>\n        {{p.title}}\n        <ion-note item-end>\n            {{p.desc}}\n        </ion-note>\n      </ion-item>\n      </div>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/shoppy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(53);
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

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_details_details__ = __webpack_require__(150);
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

/***/ })

},[391]);
//# sourceMappingURL=main.js.map