webpackJsonp([40],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_searchresult_searchresult__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_categories__ = __webpack_require__(97);
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
        this.category = {};
        this.subcategory = {};
        this.categoriesArr = [];
        this.isProduct = false;
        if (this.navParams.get('isProduct')) {
            this.isProduct = this.navParams.get('isProduct');
            this.callback = this.navParams.get('callback');
        }
        console.log('isProduct: ', this.isProduct);
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
    CategoriesPage.prototype.viewCategory = function (item, type, $event) {
        var _this = this;
        if (!this.isProduct) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_searchresult_searchresult__["a" /* SearchresultPage */], {
                type: type,
                item: item
            });
        }
        else if (this.isProduct && type === 'category') {
            this.category = item;
            if (item.subcategory && item.subcategory.length < 1) {
                this.subcategory = {};
                this.callback({
                    category: this.category,
                    subcategory: this.subcategory
                }).then(function () { _this.navCtrl.pop(); });
            }
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](this.categoriesArr, function (row) {
                if (item.categoryId == row.categoryId) {
                    row.opened = !row.opened;
                }
            });
            $event.stopPropagation();
        }
        else if (this.isProduct && type === 'subcategory') {
            this.subcategory = item;
            this.callback({
                category: this.category,
                subcategory: this.subcategory
            }).then(function () { _this.navCtrl.pop(); });
        }
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
            selector: 'page-categories',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\categories\categories.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Categories</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n		<ion-refresher-content></ion-refresher-content>\n	</ion-refresher>\n	<ion-list>\n		<div *ngFor="let item of categoriesArr">\n			<ion-item (click)="viewCategory(item,\'category\',$event)">\n				<ion-thumbnail item-start>\n					<img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n				</ion-thumbnail>\n				<h2>{{item.name}}</h2>\n				<button ion-button clear item-end>\n					<ion-icon name="ios-arrow-down-outline" *ngIf="!item.opened" (click)="viewSubcategory(item,$event)"></ion-icon>\n					<ion-icon name="ios-arrow-up-outline" *ngIf="item.opened" (click)="viewSubcategory(item,$event)"></ion-icon>\n				</button>\n			</ion-item>\n			<div *ngIf="item.opened">\n				<button ion-item *ngFor="let row of item.subcategory" (click)="viewCategory(row,\'subcategory\',$event)">\n					<ion-avatar item-start>\n						<img [src]="row.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n					</ion-avatar>\n					<h2>{{row.name}}</h2>\n				</button>\n			</div>\n		</div>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_categories__["a" /* CategoriesServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_slick_carousel_slick_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_shopprofile_shopprofile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_categories__ = __webpack_require__(97);
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
    SearchresultPage.prototype.viewShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_shopprofile_shopprofile__["b" /* ShopprofilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SearchresultPage.prototype, "content", void 0);
    SearchresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-searchresult',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\searchresult\searchresult.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="true" (ionBlur)="checkBlur()" (ionFocus)="checkFocus()" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n    <ion-buttons end *ngIf="!showList">\n\n      <button ion-button clear (click)="viewFilters()">\n\n        <ion-icon ios="ios-funnel-outline" md="ios-funnel-outline"></ion-icon>\n\n        &nbsp; Filter\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar *ngIf="showHeader">\n\n    <ion-segment [(ngModel)]="mode" mode="md">\n\n      <ion-segment-button value="popular">\n\n        Popular\n\n      </ion-segment-button>\n\n      <ion-segment-button value="latest">\n\n        Latest\n\n      </ion-segment-button>\n\n      <ion-segment-button value="top">\n\n        Top Sales\n\n      </ion-segment-button>\n\n      <ion-segment-button value="price">\n\n        Price\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf="showList">\n\n    <ion-item *ngFor="let item of searches" (click)="gotoSearch()">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="!showList">\n\n    <div>\n\n      <ion-slides pager>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb1.png">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb2.png">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="./assets/imgs/thumb1.png">\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <ion-list>\n\n      <ion-list-header class="mt-10">\n\n        OFFICIAL SHOPS\n\n      </ion-list-header>\n\n      <div class="myCarousel">\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/adidas.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/chanel.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/ktm.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/panasonic.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/puma.png">\n\n        </div>\n\n        <div class="shops">\n\n          <img src="./assets/imgs/brands/zara.png">\n\n        </div>\n\n      </div>\n\n      <ion-list-header class="mt-10">\n\n        Categories\n\n      </ion-list-header>\n\n      <ion-slides slidesPerView="4" spaceBetween="-10" padding-top padding-bottom *ngIf="categoriesArr.length >0">\n\n        <ion-slide *ngFor="let item of categoriesArr">\n\n          <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n          <p>\n\n            <small>{{item.name}}</small>\n\n          </p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <!-- need a empty slide to avoid last item to be inaccessible -->\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <div text-center center *ngIf="categoriesArr.length < 1" style="background:#fff;">\n\n        <small>No Categories</small>\n\n      </div>\n\n    </ion-list>\n\n    <ion-segment [(ngModel)]="mode" mode="md">\n\n      <ion-segment-button value="popular">\n\n        Popular\n\n      </ion-segment-button>\n\n      <ion-segment-button value="latest">\n\n        Latest\n\n      </ion-segment-button>\n\n      <ion-segment-button value="top">\n\n        Top Sales\n\n      </ion-segment-button>\n\n      <ion-segment-button value="price">\n\n        Price\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/1.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Air Jordan 1 Banned</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/2.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Nike Kobe 11 BHM</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/1.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Air Jordan 1 Banned</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/2.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Nike Kobe 11 BHM</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/1.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Air Jordan 1 Banned</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div class="myCard" (click)="gotoDetails()">\n\n            <img src="./assets/imgs/product/2.jpg" />\n\n            <div class="pl-10 pr-10">\n\n              <div class="card-title">Nike Kobe 11 BHM</div>\n\n              <ion-row>\n\n                <ion-col class="pl-0">\n\n                  <div class="price">P 1500.00</div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div class="rating">\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                    <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\searchresult\searchresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_6__providers_service_categories__["a" /* CategoriesServiceProvider */]])
    ], SearchresultPage);
    return SearchresultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_brands__ = __webpack_require__(157);
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
        this.brand = {};
        this.brandsArr = [];
        this.isProduct = false;
        if (this.navParams.get('isProduct')) {
            this.isProduct = this.navParams.get('isProduct');
            this.callback = this.navParams.get('callback');
        }
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
        var _this = this;
        console.log('viewBrands');
        this.brand = item;
        if (!this.isProduct) {
        }
        else {
            this.callback(this.brand).then(function () { _this.navCtrl.pop(); });
        }
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

/***/ 141:
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(50);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(50);
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
    }
    ServiceProvider.prototype.getAllCountries = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('country').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    ServiceProvider.prototype.getRestCountries = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl('https://restcountries.eu/rest/v2/');
            }).all('all').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    ServiceProvider.prototype.getHomeBanners = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('mobile/banner').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    ServiceProvider.prototype.getAllShippingCouriers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('shipping').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(50);
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


var ProductsServiceProvider = (function () {
    function ProductsServiceProvider(restangular) {
        this.restangular = restangular;
    }
    ProductsServiceProvider.prototype.getAllProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('products').customGET("", params).subscribe(callbackResponse, errorResponse);
        });
    };
    ProductsServiceProvider.prototype.saveProduct = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.withConfig(function (config) {
                config.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('app.token') });
            }).all('products').customPOST(data).subscribe(callbackResponse, errorResponse);
        });
    };
    ProductsServiceProvider.prototype.saveProductImage = function (productId, data) {
        var formData = new FormData();
        formData.append('image', data.image);
        return this.restangular.withConfig(function (config) {
            config.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('app.token') });
        }).all('products/' + productId + '/image').customPUT(formData, '', undefined, {
            'Content-Type': undefined
        }).then(function (res) {
            return res;
        }, function (err) {
            return err.data;
        });
    };
    ProductsServiceProvider.prototype.saveProductVariants = function (productId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.withConfig(function (config) {
                config.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('app.token') });
            }).all('products/' + productId + '/variation').customPOST(data).subscribe(callbackResponse, errorResponse);
        });
    };
    ProductsServiceProvider.prototype.saveProductWholesale = function (productId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.withConfig(function (config) {
                config.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('app.token') });
            }).all('products/' + productId + '/wholesale').customPOST(data).subscribe(callbackResponse, errorResponse);
        });
    };
    ProductsServiceProvider.prototype.saveProductShipping = function (productId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.withConfig(function (config) {
                config.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('app.token') });
            }).all('products/' + productId + '/shipping').customPOST(data).subscribe(callbackResponse, errorResponse);
        });
    };
    ProductsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"]])
    ], ProductsServiceProvider);
    return ProductsServiceProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_myaddress_myaddress__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_userprofile_userprofile__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mybankcards_mybankcards__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(81);
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
    function AccountsettingsPage(navCtrl, navParams, modalCtrl, actionSheetCtrl, loadingCtrl, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.socket = socket;
    }
    AccountsettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsettingsPage');
    };
    AccountsettingsPage.prototype.viewChat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    AccountsettingsPage.prototype.viewMyAddressess = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_myaddress_myaddress__["a" /* MyaddressPage */]);
    };
    AccountsettingsPage.prototype.viewProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_userprofile_userprofile__["a" /* UserprofilePage */]);
    };
    AccountsettingsPage.prototype.viewBankCards = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_mybankcards_mybankcards__["a" /* MybankcardsPage */]);
    };
    AccountsettingsPage.prototype.viewAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */]);
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
                        _this.socket.disconnect();
                        loader.onDidDismiss(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */], null, { animate: true, direction: 'back' });
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
            selector: 'page-accountsettings',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\accountsettings\accountsettings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Account Settings</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">My Account</ion-item-divider>\n\n    <button ion-item (click)="viewProfile()">My Profile</button>\n\n    <button ion-item (click)="viewMyAddressess()">My Address</button>\n\n    <button ion-item (click)="viewBankCards()">Bank Accounts/Cards</button>\n\n    <button ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/shopping-cart.png">\n\n      </ion-avatar>\n\n      <h2>Country</h2>\n\n      <small>Philippines is your country</small>\n\n    </button>\n\n    <button ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="./assets/imgs/shopping-cart.png">\n\n      </ion-avatar>\n\n      <h2>Currency</h2>\n\n      <small>Philippine Peso is your currency</small>\n\n    </button>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">Settings</ion-item-divider>\n\n    <button ion-item>Chat Settings</button>\n\n    <button ion-item>Notification Settings</button>\n\n    <button ion-item>Privacy Settings</button>\n\n    <button ion-item>Blocked Users</button>\n\n    <button ion-item>\n\n      Language\n\n      <ion-note item-end>\n\n        English\n\n      </ion-note>\n\n    </button>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">Support</ion-item-divider>\n\n    <button ion-item>Help Centre</button>\n\n    <button ion-item>Policies</button>\n\n    <button ion-item (click)="viewAbout()">About us</button>\n\n    <button ion-item>Request for Account Deletion</button>\n\n  </ion-item-group>\n\n  <div padding>\n\n    <button ion-button block color="danger" (click)="logout()">Logout</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\accountsettings\accountsettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
    ], AccountsettingsPage);
    return AccountsettingsPage;
}());

//# sourceMappingURL=accountsettings.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_myaddress_entry_myaddress_entry__ = __webpack_require__(187);
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

/***/ 187:
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

/***/ 188:
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MybankcardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_mybankcards_entry_mybankcards_entry__ = __webpack_require__(190);
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

/***/ 190:
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

/***/ 191:
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

/***/ 192:
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

/***/ 193:
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

/***/ 194:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(83);
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
        this.showSignUp = true;
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.showSignUp = true;
        }
        else {
            this.showSignUp = false;
        }
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
    };
    FeedPage.prototype.ionViewWillEnter = function () {
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.showSignUp = true;
        }
        else {
            this.showSignUp = false;
        }
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
    FeedPage.prototype.openSignUp = function () {
        // TODO: Check for authentication
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */]);
        modal.present();
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\feed\feed.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Feed</ion-title>\n\n    <ion-buttons end *ngIf="!showList">\n\n      <button ion-button icon-only (click)="viewCart()">\n\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-list *ngIf="showSignUp">\n\n  <ion-item color="secondary">\n\n    <div item-start>\n\n      <small>New to Shoppy? <br> Sign up today to personalise your home feed <br>and get some awesome welcome vouchers</small>\n\n    </div>\n\n    <button ion-button outline item-end color="light" (click)="openSignUp()">Sign Up</button>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_multi_image_upload_multi_image_upload__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_product_wholesale_entry_product_wholesale_entry__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_variation_entry_product_variation_entry__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_packaging_entry_product_packaging_entry__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_shipping_entry_product_shipping_entry__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_brands_brands__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_service_products__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductEntryPage = (function () {
    function ProductEntryPage(navCtrl, navParams, modalCtrl, viewCtrl, products, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.products = products;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.product = {};
        this.getProductCategory = function (data) {
            var ctrl = _this;
            console.log('data: ', data);
            return new Promise(function (resolve, reject) {
                ctrl.product.category = data;
                if (data.category) {
                    ctrl.product.categoryId = data.category.categoryId;
                }
                if (data.subcategory) {
                    ctrl.product.subcategoryId = data.subcategory.subcategoryId;
                }
                resolve();
            });
        };
        this.getProductBrand = function (data) {
            var ctrl = _this;
            console.log('data: ', data);
            return new Promise(function (resolve, reject) {
                ctrl.product.brand = data;
                ctrl.product.brandId = data.brandId;
                resolve();
            });
        };
        this.getWholeSaleData = function (data) {
            console.log('data: ', data);
            var ctrl = _this;
            return new Promise(function (resolve, reject) {
                ctrl.product.wholesale = data;
                resolve();
            });
        };
        this.getVariationData = function (data) {
            console.log('data: ', data);
            var ctrl = _this;
            return new Promise(function (resolve, reject) {
                ctrl.product.variations = data;
                resolve();
            });
        };
        this.getPackagingData = function (data) {
            var ctrl = _this;
            return new Promise(function (resolve, reject) {
                ctrl.product.package = data;
                ctrl.product.length = data.length;
                ctrl.product.width = data.width;
                ctrl.product.height = data.height;
                resolve();
            });
        };
        this.getShippingData = function (data) {
            console.log('data: ', data);
            var ctrl = _this;
            return new Promise(function (resolve, reject) {
                ctrl.product.shipping = data;
                resolve();
            });
        };
        this.product.wholesale = [];
        this.product.variations = [];
        this.product.shipping = [];
        this.product.package = {};
        this.product.condition = 'new';
    }
    ProductEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductEntryPage');
    };
    ProductEntryPage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    ProductEntryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProductEntryPage.prototype.openWholeSale = function () {
        console.log('openWholeSale');
        if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](this.product.price)) {
            var toast = this.toastCtrl.create({
                message: 'Please provide Product price',
                duration: 2000
            });
            toast.present();
            return;
        }
        ;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_product_wholesale_entry_product_wholesale_entry__["a" /* ProductWholesaleEntryPage */], {
            price: this.product.price,
            wholesaleArr: this.product.wholesale,
            callback: this.getWholeSaleData
        });
    };
    ProductEntryPage.prototype.openVariation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_product_variation_entry_product_variation_entry__["a" /* ProductVariationEntryPage */], {
            variantsArr: this.product.variations,
            callback: this.getVariationData
        });
    };
    ProductEntryPage.prototype.openPackaging = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_product_packaging_entry_product_packaging_entry__["a" /* ProductPackagingEntryPage */], {
            callback: this.getPackagingData,
            package: this.product.package,
        });
    };
    ProductEntryPage.prototype.openShippingRate = function () {
        if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](this.product.weight)) {
            var toast = this.toastCtrl.create({
                message: 'Please provide Product weight',
                duration: 2000
            });
            toast.present();
            return;
        }
        ;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_product_shipping_entry_product_shipping_entry__["a" /* ProductShippingEntryPage */], {
            callback: this.getShippingData,
            shippingArr: this.product.shipping
        });
    };
    ProductEntryPage.prototype.openCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__["a" /* CategoriesPage */], {
            isProduct: true,
            callback: this.getProductCategory
        });
    };
    ProductEntryPage.prototype.openBrands = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_brands_brands__["a" /* BrandsPage */], {
            isProduct: true,
            callback: this.getProductBrand
        });
    };
    ProductEntryPage.prototype.saveProduct = function () {
        var _this = this;
        console.log('product: ', this.product);
        var loading = this.loadingCtrl.create({
            content: 'Saving...'
        });
        loading.present();
        var productId;
        __WEBPACK_IMPORTED_MODULE_4_async__["waterfall"]([
            function (callback) {
                _this.products.saveProduct(_this.product).then(function (data) {
                    if (data && data.success) {
                        productId = data.result.productId;
                        console.log('products: ', data.msg);
                        callback();
                    }
                }, function (error) {
                    console.log('saveProduct error: ', error);
                    loading.dismiss();
                    return;
                });
            },
            function (callback) {
                // VARIATIONS
                __WEBPACK_IMPORTED_MODULE_4_async__["eachSeries"](_this.product.variations, function (item, cb) {
                    _this.products.saveProductVariants(productId, item).then(function (data) {
                        if (data && data.success) {
                            console.log('variants: ', data.msg);
                            cb();
                        }
                    }, function (error) {
                        console.log('saveProductVariants error: ', error);
                        loading.dismiss();
                        return;
                    });
                }, function () {
                    callback();
                });
            },
            function (callback) {
                // WHOLESALE
                __WEBPACK_IMPORTED_MODULE_4_async__["eachSeries"](_this.product.wholesale, function (item, cb) {
                    _this.products.saveProductWholesale(productId, item).then(function (data) {
                        if (data && data.success) {
                            console.log('wholesale: ', data.msg);
                            cb();
                        }
                    }, function (error) {
                        console.log('saveProductWholesale error: ', error);
                        loading.dismiss();
                        return;
                    });
                }, function () {
                    callback();
                });
            },
            function (callback) {
                // SHIPPING
                __WEBPACK_IMPORTED_MODULE_4_async__["eachSeries"](_this.product.shipping, function (item, cb) {
                    _this.products.saveProductShipping(productId, item).then(function (data) {
                        if (data && data.success) {
                            console.log('shipping: ', data.msg);
                            cb();
                        }
                    }, function (error) {
                        console.log('saveProductShipping error: ', error);
                        loading.dismiss();
                        return;
                    });
                }, function () {
                    callback();
                });
            }
        ], function () {
            loading.dismiss();
            _this.viewCtrl.dismiss('save');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUploadComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUploadComponent */])
    ], ProductEntryPage.prototype, "multiImageUpload", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductEntryPage.prototype, "myInput", void 0);
    ProductEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-entry',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\product-entry\product-entry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  	<ion-buttons left>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon ios="ios-arrow-back-outline" md="ios-arrow-back-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Add Product</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="saveProduct()">\n\n        <ion-icon ios="ios-checkmark-outline" md="ios-checkmark-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <multi-image-upload></multi-image-upload>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Product Name" [(ngModel)]="product.name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <textarea #myInput id="myInput" rows="1" maxLength="500" (keyup)="resize()" placeholder="Product Description" [(ngModel)]="product.desc"></textarea>\n\n    </ion-item>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n    <ion-item tappable (click)="openCategory()">\n\n      <ion-icon name="ios-list-outline" item-start></ion-icon>\n\n      Category\n\n      <ion-note item-end *ngIf="!product.category?.subcategory"><small>Set Category</small></ion-note>\n\n      <div item-end *ngIf="product.category">\n\n        <ion-label color="primary" *ngIf="product.category?.category">\n\n          <small>{{product.category?.category?.name}}</small>\n\n        </ion-label>\n\n        <ion-label color="primary" *ngIf="product.category?.subcategory">\n\n          <small>{{product.category?.subcategory?.name}}</small>\n\n        </ion-label>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item tappable (click)="openBrands()">\n\n      <ion-icon name="ios-list-outline" item-start></ion-icon>\n\n      <h2>Brand</h2>\n\n      <div item-end *ngIf="!product.brand">\n\n        <small>Set Brand</small>\n\n      </div>\n\n      <div item-end *ngIf="product.brand">\n\n        <ion-label color="primary">\n\n          <small>{{product.brand?.name}}</small>\n\n        </ion-label>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n    <ion-item>\n\n      <ion-icon name="ios-pricetag-outline" item-start></ion-icon>\n\n      <ion-label>Price</ion-label>\n\n      <div item-end>\n\n        <ion-input type="text" text-right placeholder="Set Price" [(ngModel)]="product.price"></ion-input>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-albums-outline" item-start></ion-icon>\n\n      <ion-label>Stock</ion-label>\n\n      <div item-end>\n\n        <ion-input type="text" text-right placeholder="Set Stock" [(ngModel)]="product.stock"></ion-input>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-speedometer-outline" item-start></ion-icon>\n\n      <ion-label>Weight</ion-label>\n\n      <div item-end>\n\n        <ion-input type="text" text-right placeholder="Set Weight" [(ngModel)]="product.weight"></ion-input>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-information-circle-outline" item-start></ion-icon>\n\n      <ion-label>Condition</ion-label>\n\n      <ion-select [(ngModel)]="product.condition">\n\n        <ion-option value="new">New</ion-option>\n\n        <ion-option value="used">Used(like new)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n    <ion-item tappable (click)="openVariation()">\n\n      <ion-icon name="ios-add-circle-outline" item-start></ion-icon>\n\n      Variations\n\n      <ion-note item-end *ngIf="product.variations && product.variations.length < 1">\n\n        <small>Set color,size</small>\n\n      </ion-note>\n\n      <div item-end *ngIf="product.variations && product.variations.length > 0">\n\n        <ion-label color="primary">\n\n          <small>{{product.variations.length}}</small>\n\n        </ion-label>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n    <ion-item tappable (click)="openWholeSale()">\n\n      <ion-icon name="ios-cube-outline" item-start></ion-icon>\n\n      Wholesale\n\n      <ion-note item-end *ngIf="product.wholesale && product.wholesale.length < 1">\n\n        <small>Set quantity,price</small>\n\n      </ion-note>\n\n      <div item-end *ngIf="product.wholesale && product.wholesale.length > 0">\n\n        <ion-label color="primary">\n\n          <small>{{product.wholesale.length}}</small>\n\n        </ion-label>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item-divider color="light">\n\n      <small>Wholesale price is only available when all variations <br>are of the same price</small>\n\n    </ion-item-divider>\n\n    <ion-item tappable (click)="openPackaging()">\n\n      <ion-icon name="ios-expand-outline" item-start></ion-icon>\n\n      Packaging Size\n\n      <ion-note item-end *ngIf="!product.package.width">\n\n        <small>Set size</small>\n\n      </ion-note>\n\n      <div item-end *ngIf="product.package.width">\n\n        <ion-label color="primary">\n\n          <small>{{product.package.width}} x {{product.package.length}} x {{product.package.height}}</small>\n\n        </ion-label>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item tappable (click)="openShippingRate()">\n\n      <ion-icon name="ios-cash-outline" item-start></ion-icon>\n\n      Shipping Fee\n\n      <ion-note item-end *ngIf="product.shipping && product.shipping.length < 1">\n\n        <small>Set shipping settings</small>\n\n      </ion-note>\n\n      <div item-end *ngIf="product.shipping && product.shipping.length > 0">\n\n        <ion-label color="primary">\n\n          <small>{{product.shipping.length}}</small>\n\n        </ion-label>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-calendar-outline" item-start></ion-icon>\n\n      <ion-label>Pre-Order</ion-label>\n\n      <ion-toggle mode="md" [(ngModel)]="product.isPreOrder"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item-divider color="light">\n\n      <small>You have to ship out product within 3 days <br>(excluding public holidays and courier service non-working days). <br>Switch on Pre-Order tag if you need more time to ship</small>\n\n    </ion-item-divider>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\product-entry\product-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_11__providers_service_products__["a" /* ProductsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ProductEntryPage);
    return ProductEntryPage;
}());

//# sourceMappingURL=product-entry.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWholesaleEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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
 * Generated class for the ProductWholesaleEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductWholesaleEntryPage = (function () {
    function ProductWholesaleEntryPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.wholesaleArr = [];
        this.demoArr = [];
        this.item = {};
        this.callback = this.navParams.get('callback');
        this.price = this.navParams.get('price');
        if (this.navParams.get('wholesaleArr')) {
            this.wholesaleArr = this.navParams.get('wholesaleArr');
        }
    }
    ProductWholesaleEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductWholesaleEntryPage');
    };
    ProductWholesaleEntryPage.prototype.addWholeSale = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.item.minAmt)) {
            var toast = this.toastCtrl.create({
                message: 'Please enter min order!',
                duration: 1000
            });
            toast.present();
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.item.maxAmt)) {
            var toast = this.toastCtrl.create({
                message: 'Please enter max order!',
                duration: 1000
            });
            toast.present();
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.item.price)) {
            var toast = this.toastCtrl.create({
                message: 'Please enter price!',
                duration: 1000
            });
            toast.present();
            return;
        }
        this.wholesaleArr.push(this.item);
        this.item = {
            minAmt: "",
            maxAmt: "",
            price: ""
        };
        this.content.scrollToBottom();
        console.log('this.wholesaleArr: ', this.wholesaleArr);
    };
    ProductWholesaleEntryPage.prototype.saveWholeSale = function () {
        var _this = this;
        if (this.item.minAmt) {
            this.wholesaleArr.push(this.item);
        }
        this.callback(this.wholesaleArr).then(function () { _this.navCtrl.pop(); });
    };
    ProductWholesaleEntryPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProductWholesaleEntryPage.prototype, "content", void 0);
    ProductWholesaleEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-wholesale-entry',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\product-wholesale-entry\product-wholesale-entry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Wholesale</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button clear (click)="saveWholeSale()">\n\n        SAVE\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider color="light" text-center>\n\n      <small>Original price: {{price}}</small>\n\n    </ion-item-divider>\n\n    <div *ngIf="wholesaleArr && wholesaleArr.length">\n\n      <ion-row *ngFor="let row of wholesaleArr">\n\n        <ion-col col-4>\n\n          <ion-item>\n\n            <ion-label stacked>Min Order</ion-label>\n\n            <ion-input type="text" value="" placeholder="0" [(ngModel)]="row.minAmt"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-item>\n\n            <ion-label stacked>Max Order</ion-label>\n\n            <ion-input type="text" value="" placeholder="0" [(ngModel)]="row.maxAmt"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-item>\n\n            <ion-label stacked>Unit Price</ion-label>\n\n            <ion-input type="text" value="" placeholder="0.00" [(ngModel)]="row.price"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <ion-item-divider color="light" *ngIf="wholesaleArr && wholesaleArr.length">\n\n    </ion-item-divider>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <ion-label stacked>Min Order</ion-label>\n\n          <ion-input type="text" value="" placeholder="0" [(ngModel)]="item.minAmt"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <ion-label stacked>Max Order</ion-label>\n\n          <ion-input type="text" value="" placeholder="0" [(ngModel)]="item.maxAmt"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <ion-label stacked>Unit Price</ion-label>\n\n          <ion-input type="text" value="" placeholder="0.00" [(ngModel)]="item.price"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <button ion-button full (click)="addWholeSale()">Add Price Tier</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\product-wholesale-entry\product-wholesale-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ProductWholesaleEntryPage);
    return ProductWholesaleEntryPage;
}());

//# sourceMappingURL=product-wholesale-entry.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductVariationEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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
 * Generated class for the ProductVariationEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductVariationEntryPage = (function () {
    function ProductVariationEntryPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.variantsArr = [];
        this.item = {};
        this.callback = this.navParams.get('callback');
        if (this.navParams.get('variantsArr')) {
            this.variantsArr = this.navParams.get('variantsArr');
        }
    }
    ProductVariationEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductVariationEntryPage');
    };
    ProductVariationEntryPage.prototype.addVariants = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.item.name)) {
            var toast = this.toastCtrl.create({
                message: 'Please enter variant name!',
                duration: 1000
            });
            toast.present();
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.item.price)) {
            var toast = this.toastCtrl.create({
                message: 'Please enter price!',
                duration: 1000
            });
            toast.present();
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.item.stock)) {
            var toast = this.toastCtrl.create({
                message: 'Please enter stock amount!',
                duration: 1000
            });
            toast.present();
            return;
        }
        this.variantsArr.push(this.item);
        this.item = {
            name: "",
            price: "",
            stock: ""
        };
        this.content.scrollToBottom();
        console.log('this.variantsArr: ', this.variantsArr);
    };
    ProductVariationEntryPage.prototype.removeVariant = function (index) {
        this.variantsArr.splice(index, 1);
    };
    ProductVariationEntryPage.prototype.saveProduct = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.item.name)) {
            this.variantsArr.push(this.item);
        }
        this.callback(this.variantsArr).then(function () { _this.navCtrl.pop(); });
    };
    ProductVariationEntryPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProductVariationEntryPage.prototype, "content", void 0);
    ProductVariationEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-variation-entry',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\product-variation-entry\product-variation-entry.html"*/'<!--\n\n  Generated template for the ProductVariationEntryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Variations</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button clear (click)="saveProduct()">\n\n        SAVE\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <div *ngIf="variantsArr && variantsArr.length">\n\n      <ion-item-group *ngFor="let row of variantsArr; let $index = index;">\n\n        <ion-item-divider color="light">\n\n          <button ion-button outline item-end color="danger" (click)="removeVariant($index)">Remove</button>\n\n        </ion-item-divider>\n\n        <ion-item>\n\n          <ion-icon name="ios-list-outline" item-start></ion-icon>\n\n          <ion-label stacked>Type</ion-label>\n\n          <ion-input type="text" value="" placeholder="White S/Red S.." [(ngModel)]="row.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="ios-pricetag-outline" item-start></ion-icon>\n\n          <ion-label stacked>Price</ion-label>\n\n          <ion-input type="text" value="" placeholder="0.00" [(ngModel)]="row.price"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="ios-albums-outline" item-start></ion-icon>\n\n          <ion-label stacked>Stock</ion-label>\n\n          <ion-input type="text" value="" placeholder="1" [(ngModel)]="row.stock"></ion-input>\n\n        </ion-item>\n\n      </ion-item-group>\n\n    </div>\n\n    <ion-item-divider color="light" *ngIf="variantsArr && variantsArr.length">\n\n    </ion-item-divider>\n\n    <ion-item-group>\n\n      <ion-item>\n\n        <ion-icon name="ios-list-outline" item-start></ion-icon>\n\n        <ion-label stacked>Type</ion-label>\n\n        <ion-input type="text" value="" placeholder="White S/Red S.." [(ngModel)]="item.name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-pricetag-outline" item-start></ion-icon>\n\n        <ion-label stacked>Price</ion-label>\n\n        <ion-input type="text" value="" placeholder="0.00" [(ngModel)]="item.price"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="ios-albums-outline" item-start></ion-icon>\n\n        <ion-label stacked>Stock</ion-label>\n\n        <ion-input type="text" value="" placeholder="1" [(ngModel)]="item.stock"></ion-input>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    <div padding>\n\n      <button ion-button full (click)="addVariants()">Add Variants</button>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\product-variation-entry\product-variation-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ProductVariationEntryPage);
    return ProductVariationEntryPage;
}());

//# sourceMappingURL=product-variation-entry.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPackagingEntryPage; });
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
 * Generated class for the ProductPackagingEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductPackagingEntryPage = (function () {
    function ProductPackagingEntryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.package = {};
        this.callback = this.navParams.get('callback');
        if (this.navParams.get('package')) {
            this.package = this.navParams.get('package');
        }
        else {
            this.package = {
                width: 0,
                length: 0,
                height: 0
            };
        }
    }
    ProductPackagingEntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPackagingEntryPage');
    };
    ProductPackagingEntryPage.prototype.saveProduct = function () {
        var _this = this;
        this.callback(this.package).then(function () { _this.navCtrl.pop(); });
    };
    ProductPackagingEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-packaging-entry',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\product-packaging-entry\product-packaging-entry.html"*/'<!--\n\n  Generated template for the ProductPackagingEntryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Packaging Size</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button clear (click)="saveProduct()">\n\n        SAVE\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="myCard">\n\n    <div padding text-center>\n\n      <img src="./assets/imgs/box.svg" />\n\n    </div>\n\n    <ion-card-content>\n\n      <p>\n\n        Please use packaging size, not product size.\n\n      </p>\n\n      <p>Inaccurate size may result in failed pickup or additional shipping fee.</p>\n\n    </ion-card-content>\n\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Width (in cm)</ion-label>\n\n      <ion-input type="text" value="" text-right placeholder="0" [(ngModel)]="package.width"></ion-input>\n\n      <ion-note item-end>cm</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Length (in cm)</ion-label>\n\n      <ion-input type="text" value="" text-right placeholder="0" [(ngModel)]="package.length"></ion-input>\n\n      <ion-note item-end>cm</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Height (in cmd)</ion-label>\n\n      <ion-input type="text" value="" text-right placeholder="0" [(ngModel)]="package.height"></ion-input>\n\n      <ion-note item-end>cm</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\product-packaging-entry\product-packaging-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ProductPackagingEntryPage);
    return ProductPackagingEntryPage;
}());

//# sourceMappingURL=product-packaging-entry.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductShippingEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductShippingEntryPage = (function () {
    function ProductShippingEntryPage(navCtrl, navParams, services) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.shippingArr = [];
        this.selectedArr = [];
        if (this.navParams.get('shippingArr')) {
            this.selectedArr = this.navParams.get('shippingArr');
            this.callback = this.navParams.get('callback');
        }
    }
    ProductShippingEntryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProductShippingEntryPage');
        this.services.getAllShippingCouriers().then(function (data) {
            if (data && data.success) {
                console.log('data: ', data);
                _this.shippingArr = data.result;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](_this.shippingArr, function (row) {
                    row.enable = false;
                    row.isCover = false;
                });
            }
        }, function (error) {
            console.log('error: ', error);
        });
    };
    ProductShippingEntryPage.prototype.saveProduct = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](this.shippingArr, function (row) {
            if (row.enable) {
                _this.selectedArr.push(row);
            }
        });
        this.callback(this.selectedArr).then(function () { _this.navCtrl.pop(); });
    };
    ProductShippingEntryPage.prototype.doRefresh = function (ev) {
        var _this = this;
        this.services.getAllShippingCouriers().then(function (data) {
            if (data && data.success) {
                _this.shippingArr = data.result;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](_this.shippingArr, function (row) {
                    row.enable = false;
                    row.isCover = false;
                });
                ev.complete();
            }
        }, function (error) {
            console.log('error: ', error);
            ev.complete();
        });
    };
    ProductShippingEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-shipping-entry',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\product-shipping-entry\product-shipping-entry.html"*/'<!--\n\n  Generated template for the ProductShippingEntryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Product Shipping Settings</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button clear (click)="saveProduct()">\n\n        SAVE\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-item-group *ngFor="let item of shippingArr">\n\n      <ion-item-divider color="light">\n\n        <ion-label color="primary">{{item.name}}</ion-label>\n\n        <ion-toggle [(ngModel)]="item.enable"></ion-toggle>\n\n      </ion-item-divider>\n\n      <ion-item *ngIf="item.enable">\n\n        <ion-label>Shipping Fee</ion-label>\n\n        <ion-input type="text" text-right [(ngModel)]="item.shippingfee" placeholder="0.00"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="item.enable">\n\n        <ion-label>I will cover the shipping fee</ion-label>\n\n        <ion-toggle color="secondary" mode="md" [(ngModel)]="item.isCover"></ion-toggle>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    <ion-item-divider color="light" text-wrap class="mt-10">\n\n      <small>For the Shipping Fee subsidy programme, the subsidised fee will be reflected on the product details page</small>\n\n    </ion-item-divider>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\product-shipping-entry\product-shipping-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], ProductShippingEntryPage);
    return ProductShippingEntryPage;
}());

//# sourceMappingURL=product-shipping-entry.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myrating_myrating__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_accountsettings_accountsettings__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mywallet_mywallet__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mypurchases_mypurchases__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mylikes_mylikes__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_service_users__ = __webpack_require__(79);
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
    function MyprofilePage(app, navCtrl, navParams, modalCtrl, alertCtrl, loadingCtrl, users, socket, events) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.users = users;
        this.socket = socket;
        this.events = events;
        this.imageUrl = 'assets/imgs/bg.jpg';
        this.user = {};
        this.mode = 'buyer';
        this.showProfile = false;
        this.isSeller = false;
        this.isApplyAsSeller = false;
        console.log('ionViewCanEnter constructor');
        this.getCurrentUser();
        this.events.subscribe('approve-seller', function () {
            console.log('approve-seller');
            _this.isSeller = false;
        });
    }
    MyprofilePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter MyprofilePage');
        this.getCurrentUser();
    };
    MyprofilePage.prototype.getCurrentUser = function () {
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.showProfile = true;
            if (this.user.isSeller) {
                this.isSeller = true;
            }
            else {
                this.isSeller = false;
            }
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user.sellerApprovalCode)) {
                this.isApplyAsSeller = true;
            }
            else {
                this.isApplyAsSeller = false;
            }
            if (!this.socket.ioSocket.connected) {
                this.socket.connect();
                this.socket.emit('create-room', this.user.uuid);
            }
            else {
                this.socket.emit('create-room', this.user.uuid);
            }
        }
        else {
            this.showProfile = false;
        }
    };
    MyprofilePage.prototype.doRefresh = function (ev) {
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.users.getCurrentUser().then(function (data) {
                if (data && data.success) {
                    localStorage.setItem('app.user', JSON.stringify(data.result));
                }
                ev.complete();
            }, function (error) {
                console.log('error: ', error);
                ev.complete();
            });
        }
        else {
            ev.complete();
        }
    };
    MyprofilePage.prototype.openLogin = function () {
        var _this = this;
        // TODO: Check for authentication
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
        modal.onDidDismiss(function (res) {
            if (res == 'login') {
                _this.getCurrentUser();
            }
        });
        modal.present();
    };
    MyprofilePage.prototype.openSignUp = function () {
        // TODO: Check for authentication
        console.log('openSignUp');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */]);
        modal.present();
    };
    MyprofilePage.prototype.viewCart = function () {
        // TODO: Check if Authenticated
        // this.navCtrl.push(ShoppingcartPage);
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    MyprofilePage.prototype.viewChat = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    MyprofilePage.prototype.viewAccountSettings = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        // this.navCtrl.push(AccountsettingsPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */]);
    };
    MyprofilePage.prototype.viewMyRating = function (mode) {
        // this.navCtrl.push(MyratingPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_myrating_myrating__["a" /* MyratingPage */], {
            mode: mode
        });
    };
    MyprofilePage.prototype.viewMyPurchases = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.openLogin();
            return;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__pages_mypurchases_mypurchases__["a" /* MypurchasesPage */]);
    };
    MyprofilePage.prototype.viewMyWallet = function () {
        // this.navCtrl.push(MywalletPage);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__pages_mywallet_mywallet__["a" /* MywalletPage */]);
    };
    MyprofilePage.prototype.viewMyLikes = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__pages_mylikes_mylikes__["a" /* MylikesPage */]);
    };
    MyprofilePage.prototype.viewAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */]);
    };
    MyprofilePage.prototype.applyAsSeller = function () {
        var ctrl = this;
        function applySeller() {
            var loader = ctrl.loadingCtrl.create();
            loader.present();
            ctrl.users.applyAsSeller().then(function (data) {
                if (data && data.success) {
                    loader.dismiss();
                    var alert_1 = ctrl.alertCtrl.create({
                        title: 'Success!',
                        subTitle: data.msg,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else if (data && !data.success) {
                    loader.dismiss();
                    var alert_2 = ctrl.alertCtrl.create({
                        title: 'Warning!',
                        subTitle: data.msg,
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (error) {
                loader.dismiss();
                console.log('error: ', error);
            });
        }
        var confirm = this.alertCtrl.create({
            title: 'Apply as a Seller?',
            message: 'Applying as a seller will you give you an opportunity to sell your preloved items and other stuffs you no longer used. Otherwise you can sell brand new items.',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        applySeller();
                    }
                }
            ]
        });
        confirm.present();
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myprofile',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\myprofile\myprofile.html"*/'<ion-header transparent>\n\n  <ion-navbar transparent>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewAccountSettings()">\n\n        <ion-icon ios="ios-settings-outline" md="ios-settings-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>&nbsp;</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="viewCart()">\n\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + imageUrl +\')\'}" *ngIf="showProfile">\n\n  </div>\n\n  <div id="content" *ngIf="showProfile">\n\n    <div id="profile-info">\n\n      <img id="profile-image" src="./assets/imgs/user.png">\n\n      <h4 id="profile-name">{{this.user.firstname}} {{this.user.lastname}}</h4>\n\n    </div>\n\n    <ion-segment [(ngModel)]="mode" mode="md">\n\n      <ion-segment-button value="buyer">\n\n        Buyer\n\n      </ion-segment-button>\n\n      <ion-segment-button value="seller">\n\n        Seller\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n    <ion-list>\n\n      <div [ngSwitch]="mode">\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyPurchases()">\n\n          <ion-icon name="list-box" item-start></ion-icon>\n\n          My Purchases\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyLikes()">\n\n          <ion-icon name="heart-outline" item-start></ion-icon>\n\n          My Likes\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyRating(\'buyer\')">\n\n          <ion-icon name="star-outline" item-start></ion-icon>\n\n          My Ratings\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewMyWallet()">\n\n          <ion-icon name="cash" item-start></ion-icon>\n\n          My Wallet\n\n        </button>\n\n        <button ion-item *ngSwitchCase="\'buyer\'" (click)="viewAccountSettings()">\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n          My Account\n\n        </button>\n\n        <div *ngIf="!isSeller">\n\n          <ion-item color="secondary" *ngSwitchCase="\'seller\'">\n\n            <div item-start>\n\n              <small>To sell some products and cool items <br> Apply as a seller <br>and get some awesome welcome vouchers</small>\n\n            </div>\n\n            <button ion-button outline item-end color="light" (click)="applyAsSeller()" [disabled]="isApplyAsSeller">Apply Now</button>\n\n          </ion-item>\n\n        </div>\n\n        <div *ngIf="isSeller">\n\n          <button ion-item *ngSwitchCase="\'seller\'">\n\n            <ion-icon name="card" item-start></ion-icon>\n\n            My Sales\n\n          </button>\n\n          <button ion-item *ngSwitchCase="\'seller\'">\n\n            <ion-icon name="card" item-start></ion-icon>\n\n            My Income\n\n          </button>\n\n          <button ion-item *ngSwitchCase="\'seller\'">\n\n            <ion-icon name="plane" item-start></ion-icon>\n\n            My Shipping\n\n          </button>\n\n          <button ion-item *ngSwitchCase="\'seller\'" (click)="viewMyRating(\'shop\')">\n\n            <ion-icon name="star-outline" item-start></ion-icon>\n\n            Shop Ratings\n\n          </button>\n\n          <button ion-item *ngSwitchCase="\'seller\'">\n\n            <ion-icon name="stats" item-start></ion-icon>\n\n            My Performance\n\n          </button>\n\n          <button ion-item *ngSwitchCase="\'seller\'">\n\n            <ion-icon name="build" item-start></ion-icon>\n\n            Seller Assistant\n\n          </button>\n\n        </div>\n\n        <button ion-item>\n\n          <ion-icon name="help-circle" item-start></ion-icon>\n\n          Help Centre\n\n        </button>\n\n        <div *ngIf="isSeller">\n\n          <ion-item-divider color="light" *ngSwitchCase="\'seller\'">&nbsp;</ion-item-divider>\n\n          <button ion-item *ngSwitchCase="\'seller\'">\n\n            <ion-icon name="home" item-start></ion-icon>\n\n            View My Shop\n\n          </button>\n\n        </div>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n  <ion-list *ngIf="!showProfile">\n\n    <button ion-item (click)="openLogin()">\n\n      <ion-icon name="ios-key-outline" item-start></ion-icon>\n\n      <h2>Login</h2>\n\n    </button>\n\n    <button ion-item (click)="openSignUp()">\n\n      <ion-icon name="ios-person-add-outline" item-start></ion-icon>\n\n      <h2>Sign Up</h2>\n\n    </button>\n\n    <ion-item-divider color="light"></ion-item-divider>\n\n    <button ion-item (click)="openLogin()">\n\n      <ion-icon name="ios-cart-outline" item-start></ion-icon>\n\n      <h2>My Purchases</h2>\n\n    </button>\n\n    <button ion-item (click)="openLogin()">\n\n      <ion-icon name="heart-outline" item-start></ion-icon>\n\n      <h2>My Likes</h2>\n\n    </button>\n\n    <ion-item-divider color="light">A</ion-item-divider>\n\n    <button ion-item (click)="viewAbout()">\n\n      <ion-icon name="ios-information-circle-outline" item-start></ion-icon>\n\n      About Us\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="ios-document-outline" item-start></ion-icon>\n\n      Policies\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="ios-help-circle-outline" item-start></ion-icon>\n\n      Help Centre\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_14__providers_service_users__["a" /* UsersServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 202:
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
        this.pet = navParams.get('mode');
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

/***/ 203:
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypurchasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_makepayment_makepayment__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chatdetail_chatdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_orderdetails_orderdetails__ = __webpack_require__(206);
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
    MypurchasesPage.prototype.payNow = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
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
    MypurchasesPage.prototype.orderReceived = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], MypurchasesPage.prototype, "slider", void 0);
    MypurchasesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mypurchases',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\mypurchases\mypurchases.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Purchases</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)" mode="md">\n\n      <ion-segment-button value="pay">\n\n        To Pay\n\n      </ion-segment-button>\n\n      <ion-segment-button value="ship">\n\n        To Ship\n\n      </ion-segment-button>\n\n      <ion-segment-button value="receive">\n\n        To Receive\n\n      </ion-segment-button>\n\n      <ion-segment-button value="completed">\n\n        Completed\n\n      </ion-segment-button>\n\n      <ion-segment-button value="cancelled">\n\n        Cancelled\n\n      </ion-segment-button>\n\n      <ion-segment-button value="return">\n\n        Return/Refund\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-slides #mySlider (ionSlideDidChange)="onSlideChanged($event)">\n\n    <ion-slide id="pay">\n\n      <ion-list>\n\n        <ion-item-group (click)="viewOrderDetails()">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              To Pay\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>Pay by 03/24/2018 with Online Banking</small>\n\n            </ion-note>\n\n            <button ion-button color="danger" item-end (click)="payNow($event)">Pay Now</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide id="ship">\n\n      <ion-list>\n\n        <ion-item-group (click)="viewOrderDetails()">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              To Ship\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>Products will be shipped out <br> by 03/24/2018</small>\n\n            </ion-note>\n\n            <button ion-button color="danger" item-end (click)="contactSeller($event)">Contact Seller</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide id="receive">\n\n      <ion-list>\n\n        <ion-item-group (click)="viewOrderDetails()">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              To Receive\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <ion-icon name="cube"></ion-icon>\n\n              <small>Item Shipped by LBC Express </small>\n\n            </ion-note>\n\n            <ion-note item-end>\n\n              <small>03/24/2018: 04:43</small>\n\n            </ion-note>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>Received products by <br> 03/24/2018</small>\n\n            </ion-note>\n\n            <button ion-button color="danger" item-end (click)="orderReceived($event)">Order Received</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide id="completed">\n\n      <ion-list>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Completed\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>No rating received</small>\n\n            </ion-note>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Rated\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <button ion-button color="danger" item-start>View Shop Rating</button>\n\n            <button ion-button color="danger" item-end>View Buyer Rating</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Rated\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <ion-note item-start>\n\n              <small>No rating received</small>\n\n            </ion-note>\n\n            <button ion-button color="danger" item-end>View Shop Rating</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n        <ion-item-group (click)="viewOrderDetails()" class="mt-10">\n\n          <ion-list-header>\n\n            <ion-avatar item-start>\n\n              <img src="./assets/imgs/user.png">\n\n            </ion-avatar>\n\n            <h2>Nike Store</h2>\n\n            <div item-end style="color: #FF6500;">\n\n              Rated\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-item class="cart-item" item-content>\n\n            <ion-thumbnail item-start>\n\n              <img src="./assets/imgs/product/1.jpg">\n\n            </ion-thumbnail>\n\n            <h4>Air Jordan 1 Breds sadasdadsadadad</h4>\n\n            <small>Variation: Breds</small>\n\n            <p item-end>\n\n              <small>x 1</small>\n\n              <br>\n\n              <small>Php 1500</small>\n\n            </p>\n\n          </ion-item>\n\n          <ion-list-header>\n\n            <ion-note item-start>1 item</ion-note>\n\n            <div item-end>\n\n              Total Payment: <span class="price">Php 1500</span>\n\n            </div>\n\n          </ion-list-header>\n\n          <ion-list-header>\n\n            <button ion-button color="danger" item-end>View Buyer Rating</button>\n\n          </ion-list-header>\n\n        </ion-item-group>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide id="cancelled">\n\n      <h1>Cancelled</h1>\n\n    </ion-slide>\n\n    <ion-slide id="return">\n\n      <h1>Return/Refund</h1>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\mypurchases\mypurchases.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], MypurchasesPage);
    return MypurchasesPage;
}());

//# sourceMappingURL=mypurchases.js.map

/***/ }),

/***/ 205:
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

/***/ 206:
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylikesPage; });
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



var MylikesPage = (function () {
    function MylikesPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    MylikesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MylikesPage');
    };
    MylikesPage.prototype.gotoDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_details_details__["b" /* DetailsPage */]);
    };
    MylikesPage.prototype.doRefresh = function (ev) {
        setTimeout(function () {
            ev.complete();
        }, 2000);
    };
    MylikesPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Unlike product?',
            buttons: [
                {
                    text: 'Unlike',
                    role: 'destructive',
                    handler: function () {
                        console.log('Unlike clicked');
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
    MylikesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mylikes',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\mylikes\mylikes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Likes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <div class="myCard" (click)="gotoDetails()" (press)="presentActionSheet()">\n\n          <img src="./assets/imgs/product/1.jpg" />\n\n          <div class="pl-10 pr-10">\n\n            <div class="card-title">Air Jordan 1 Banned</div>\n\n            <ion-row>\n\n              <ion-col class="pl-0">\n\n                <div class="price">P 1500.00</div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n          <ion-row>\n\n            <ion-col>\n\n              <div class="rating">\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="myCard" (click)="gotoDetails()" (press)="presentActionSheet()">\n\n          <img src="./assets/imgs/product/2.jpg" />\n\n          <div class="pl-10 pr-10">\n\n            <div class="card-title">Nike Kobe 11 BHM</div>\n\n            <ion-row>\n\n              <ion-col class="pl-0">\n\n                <div class="price">P 1500.00</div>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="myCard" (click)="gotoDetails()" (press)="presentActionSheet()">\n\n          <img src="./assets/imgs/product/1.jpg" />\n\n          <div class="pl-10 pr-10">\n\n            <div class="card-title">Air Jordan 1 Banned</div>\n\n            <ion-row>\n\n              <ion-col class="pl-0">\n\n                <div class="price">P 1500.00</div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n          <ion-row>\n\n            <ion-col>\n\n              <div class="rating">\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="myCard" (click)="gotoDetails()" (press)="presentActionSheet()">\n\n          <img src="./assets/imgs/product/2.jpg" />\n\n          <div class="pl-10 pr-10">\n\n            <div class="card-title">Nike Kobe 11 BHM</div>\n\n            <ion-row>\n\n              <ion-col class="pl-0">\n\n                <div class="price">P 1500.00</div>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="myCard" (click)="gotoDetails()" (press)="presentActionSheet()">\n\n          <img src="./assets/imgs/product/1.jpg" />\n\n          <div class="pl-10 pr-10">\n\n            <div class="card-title">Air Jordan 1 Banned</div>\n\n            <ion-row>\n\n              <ion-col class="pl-0">\n\n                <div class="price">P 1500.00</div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n          <ion-row>\n\n            <ion-col>\n\n              <div class="rating">\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="myCard" (click)="gotoDetails()" >\n\n          <img src="./assets/imgs/product/2.jpg" />\n\n          <div class="pl-10 pr-10">\n\n            <div class="card-title">Nike Kobe 11 BHM</div>\n\n            <ion-row>\n\n              <ion-col class="pl-0">\n\n                <div class="price">P 1500.00</div>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                <div class="rating">\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>\n\n                  <ion-icon ios="ios-star" md="ios-star"></ion-icon>(14)\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\mylikes\mylikes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], MylikesPage);
    return MylikesPage;
}());

//# sourceMappingURL=mylikes.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__ = __webpack_require__(83);
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
            selector: 'page-notification',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="myCard" *ngIf="!mapTabEnabled">\n\n    <div padding text-center>\n\n      <img src="./assets/imgs/ring.svg" />\n\n    </div>\n\n    <ion-card-content>\n\n      <p text-center>\n\n        <button ion-button block (click)="openLogin()">Login</button>\n\n        <button ion-button block clear (click)="openSignUp()">Sign Up</button>\n\n      </p>\n\n    </ion-card-content>\n\n  </div>\n\n  <ion-list *ngIf="mapTabEnabled">\n\n    <button ion-item>\n\n      <ion-icon name="pricetag" item-start></ion-icon>\n\n      <h2>Promotions</h2>\n\n      <ion-badge item-end>26</ion-badge> \n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      <h2>Seller Updates</h2>\n\n      <ion-badge item-end>26</ion-badge> \n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="cash" item-start></ion-icon>\n\n      <h2>Wallet Updates</h2>\n\n    </button>\n\n    <button ion-item>\n\n      <ion-icon name="notifications" item-start></ion-icon>\n\n      <h2>App Updates</h2>\n\n      <ion-badge item-end>2</ion-badge> \n\n    </button>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">Order Updates</ion-item-divider>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Rate Products</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Shipped Out</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Shipped Out</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Cancellation Request Accepted</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="./assets/imgs/product/1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Payment Confirm</h2>\n\n        <p>Hayao Miyazaki • 1988</p>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 221:
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
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountsettings/accountsettings.module": [
		702,
		39
	],
	"../pages/brands/brands.module": [
		703,
		38
	],
	"../pages/categories/categories.module": [
		704,
		37
	],
	"../pages/chat/chat.module": [
		705,
		36
	],
	"../pages/chatdetail/chatdetail.module": [
		712,
		35
	],
	"../pages/confirmation/confirmation.module": [
		719,
		34
	],
	"../pages/deliveryaddress/deliveryaddress.module": [
		706,
		33
	],
	"../pages/feed/feed.module": [
		707,
		32
	],
	"../pages/forgot/forgot.module": [
		708,
		31
	],
	"../pages/login/login.module": [
		709,
		30
	],
	"../pages/makepayment/makepayment.module": [
		710,
		29
	],
	"../pages/myaccount/myaccount.module": [
		711,
		28
	],
	"../pages/myaddress-entry/myaddress-entry.module": [
		713,
		27
	],
	"../pages/myaddress/myaddress.module": [
		714,
		26
	],
	"../pages/mybankcards-entry/mybankcards-entry.module": [
		722,
		25
	],
	"../pages/mybankcards/mybankcards.module": [
		715,
		24
	],
	"../pages/mylikes/mylikes.module": [
		716,
		23
	],
	"../pages/myprofile/myprofile.module": [
		717,
		22
	],
	"../pages/mypurchases/mypurchases.module": [
		718,
		21
	],
	"../pages/myrating/myrating.module": [
		720,
		20
	],
	"../pages/mywallet/mywallet.module": [
		721,
		19
	],
	"../pages/notification/notification.module": [
		723,
		18
	],
	"../pages/orderdetails/orderdetails.module": [
		733,
		17
	],
	"../pages/paymentmethod/paymentmethod.module": [
		725,
		16
	],
	"../pages/paymentoption/paymentoption.module": [
		724,
		15
	],
	"../pages/product-entry/product-entry.module": [
		726,
		14
	],
	"../pages/product-packaging-entry/product-packaging-entry.module": [
		727,
		13
	],
	"../pages/product-shipping-entry/product-shipping-entry.module": [
		729,
		12
	],
	"../pages/product-variation-entry/product-variation-entry.module": [
		728,
		11
	],
	"../pages/product-wholesale-entry/product-wholesale-entry.module": [
		730,
		10
	],
	"../pages/productcomment/productcomment.module": [
		731,
		9
	],
	"../pages/productratings/productratings.module": [
		732,
		8
	],
	"../pages/search/search.module": [
		734,
		7
	],
	"../pages/searchresult/searchresult.module": [
		735,
		6
	],
	"../pages/shippingoption/shippingoption.module": [
		741,
		5
	],
	"../pages/shoppingcart/shoppingcart.module": [
		736,
		4
	],
	"../pages/shopprofile/shopprofile.module": [
		737,
		3
	],
	"../pages/signup/signup.module": [
		738,
		2
	],
	"../pages/tabs/tabs.module": [
		740,
		1
	],
	"../pages/userprofile/userprofile.module": [
		739,
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
webpackAsyncContext.id = 267;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(140);
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_search__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_brands_brands__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_searchresult_searchresult__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_shopprofile_shopprofile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_service_categories__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_service_brands__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_service_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_service_products__ = __webpack_require__(159);
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
    function HomePage(app, navCtrl, loadingCtrl, storage, alertCtrl, modalCtrl, categories, brands, socket, services, products) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.categories = categories;
        this.brands = brands;
        this.socket = socket;
        this.services = services;
        this.products = products;
        this.tickerArr = [];
        this.tickerArrCopy = [];
        this.items = [];
        this.favorites = [];
        this.categoriesArr = [];
        this.brandsArr = [];
        this.bannersArr = [];
        this.productsArr = [];
        this.actions = 'top';
        this.global = {};
        this.user = {};
        this.showList = false;
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        console.log('this.user: ', this.user);
        if (this.user) {
            this.socket.connect();
            this.socket.emit('create-room', this.user.uuid);
        }
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
        }, function (error) {
            console.log('category error: ', error);
        });
        this.brands.getAllBrands().then(function (data) {
            console.log('brands: ', data);
            if (data && data.success) {
                _this.brandsArr = data.result;
            }
        }, function (error) {
            console.log('brands error: ', error);
        });
        this.services.getHomeBanners().then(function (data) {
            console.log('banners: ', data);
            if (data && data.success) {
                _this.bannersArr = data.result;
            }
        }, function (error) {
            console.log('banners error: ', error);
        });
        this.products.getAllProducts().then(function (data) {
            if (data && data.success) {
                console.log('products: ', data);
                _this.productsArr = data.result;
            }
        }, function (error) {
            console.log('products error: ', error);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_async__["parallel"]([
            function (callback) {
                _this.categories.getAllCategories().then(function (data) {
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
                    if (data && data.success) {
                        _this.brandsArr = data.result;
                        callback();
                    }
                }, function (error) {
                    callback();
                });
            },
            function (callback) {
                _this.services.getHomeBanners().then(function (data) {
                    console.log('banners: ', data);
                    if (data && data.success) {
                        _this.bannersArr = data.result;
                        callback();
                    }
                }, function (error) {
                    callback();
                });
            },
            function (callback) {
                _this.products.getAllProducts().then(function (data) {
                    if (data && data.success) {
                        console.log('products: ', data);
                        _this.productsArr = data.result;
                        callback();
                    }
                }, function (error) {
                    console.log('products error: ', error);
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
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_details_details__["b" /* DetailsPage */], {
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
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            return;
        }
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */]);
    };
    HomePage.prototype.viewChat = function () {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            var modal_1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]);
            modal_1.present();
            return;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */]);
        modal.present();
    };
    HomePage.prototype.viewCategories = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.viewBrands = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_11__pages_brands_brands__["a" /* BrandsPage */]);
    };
    HomePage.prototype.viewResults = function (item, type) {
        console.log('item: ', item);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_13__pages_searchresult_searchresult__["a" /* SearchresultPage */], {
            type: type,
            item: item
        });
    };
    HomePage.prototype.viewShop = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_14__pages_shopprofile_shopprofile__["b" /* ShopprofilePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\home\home.html"*/'<ion-header no-border no-line>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-searchbar (input)="getItems($event)" (ionBlur)="checkBlur()" (ionFocus)="checkFocus()" (ionCancel)="onCancel()" showCancelButton="true"></ion-searchbar>\n\n    <ion-buttons end *ngIf="!showList">\n\n      <button ion-button icon-only (click)="viewCart()">\n\n        <ion-icon ios="ios-cart-outline" md="ios-cart-outline"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="viewChat()">\n\n        <ion-icon ios="ios-chatbubbles-outline" md="ios-chatbubbles-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf="showList">\n\n    <ion-item *ngFor="let item of items" (click)="gotoSearch()">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="!showList">\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n    <div>\n\n      <ion-slides pager loop="true" autoplay="3000" *ngIf="bannersArr && bannersArr.length">\n\n        <ion-slide *ngFor="let item of bannersArr">\n\n          <img [src]="item.img_path" onError="this.src=\'./assets/imgs/banner_def.png\'">\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Categories\n\n        <div class="pull-right" (click)="viewCategories()">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-grid class="categories">\n\n          <ion-row>\n\n            <ion-col col-4 text-center *ngFor="let item of categoriesArr | slice:0:9" (click)="viewResults(item,\'category\')">\n\n              <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n              <p>\n\n                <small>{{item.name}}</small>\n\n              </p>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Brands\n\n        <div class="pull-right" (click)="viewBrands()">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col width="33" class="shops" *ngFor="let item of brandsArr  | slice:0:3">\n\n              <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col width="33" class="shops" *ngFor="let item of brandsArr  | slice:3:6">\n\n              <img [src]="item.img_path" onError="this.src=\'./assets/imgs/polo.png\'">\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        OFFICIAL SHOPS\n\n        <div class="pull-right">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/adidas.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/chanel.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/ktm.png">\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/panasonic.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/puma.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/zara.png">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/adidas.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/chanel.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/ktm.png">\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/panasonic.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/puma.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/zara.png">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/adidas.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/chanel.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/ktm.png">\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/panasonic.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/puma.png">\n\n              </ion-col>\n\n              <ion-col width="33" class="shops" (click)="viewShop()">\n\n                <img src="./assets/imgs/brands/zara.png">\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        FLASH DEALS\n\n        <div class="pull-right">\n\n          See all deals\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Popular Products\n\n        <div class="pull-right">\n\n          See more ...\n\n        </div>\n\n      </ion-list-header>\n\n      <div padding>\n\n        <ion-slides>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/1.jpg" />\n\n                  <div class="card-title">Air Jordan 1 Banned</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/2.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BHM</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/3.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BLUE</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <ion-row>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/1.jpg" />\n\n                  <div class="card-title">Air Jordan 1 Banned</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/2.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BHM</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n              <ion-col width="25">\n\n                <div class="myCard" (click)="gotoDetails()">\n\n                  <img src="./assets/imgs/product/3.jpg" />\n\n                  <div class="card-title">Nike Kobe 11 BLUE</div>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div class="price">P 1500.00</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_15__providers_service_categories__["a" /* CategoriesServiceProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_service_brands__["a" /* BrandsServiceProvider */], __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_17__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_service_products__["a" /* ProductsServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(50);
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

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_product_entry_product_entry__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_users__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(162);
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
    function FavoritesPage(navCtrl, navParams, loadingCtrl, alertCtrl, users, events, camera, platform, toastCtrl, filePath, file, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.users = users;
        this.events = events;
        this.camera = camera;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.filePath = filePath;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.isSeller = false;
        this.isApplyAsSeller = false;
        this.getCurrentUser();
        this.events.subscribe('approve-seller', function () {
            console.log('approve-seller');
            _this.getCurrentUser();
        });
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
    };
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.getCurrentUser();
    };
    FavoritesPage.prototype.getCurrentUser = function () {
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            if (this.user.isSeller) {
                this.isSeller = true;
            }
            else {
                this.isSeller = false;
            }
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user.sellerApprovalCode)) {
                this.isApplyAsSeller = true;
            }
            else {
                this.isApplyAsSeller = false;
            }
        }
        else {
            this.isSeller = false;
        }
    };
    FavoritesPage.prototype.applyAsSeller = function () {
        var ctrl = this;
        function applySeller() {
            var loader = ctrl.loadingCtrl.create();
            loader.present();
            ctrl.users.applyAsSeller().then(function (data) {
                if (data && data.success) {
                    loader.dismiss();
                    var alert_1 = ctrl.alertCtrl.create({
                        title: 'Success!',
                        subTitle: data.msg,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else if (data && !data.success) {
                    loader.dismiss();
                    var alert_2 = ctrl.alertCtrl.create({
                        title: 'Warning!',
                        subTitle: data.msg,
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (error) {
                loader.dismiss();
                console.log('error: ', error);
            });
        }
        var confirm = this.alertCtrl.create({
            title: 'Apply as a Seller?',
            message: 'Applying as a seller will you give you an opportunity to sell your preloved items and other stuffs you no longer used. Otherwise you can sell brand new items.',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        applySeller();
                    }
                }
            ]
        });
        confirm.present();
    };
    FavoritesPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    FavoritesPage.prototype.isBase64 = function (str) {
        try {
            return window.btoa(atob(str)) == str;
        }
        catch (err) {
            return false;
        }
    };
    FavoritesPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            if (this.isBase64(img)) {
                return 'data:image/png;base64,' + img;
            }
            else {
                if (this.platform.is('ios')) {
                    var path = cordova.file.dataDirectory + img;
                    path = path.replace(/^file:\/\//, '');
                    return path;
                }
                else {
                    return cordova.file.dataDirectory + img;
                }
            }
        }
    };
    FavoritesPage.prototype.pathForImage2 = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    FavoritesPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        var path = cordova.file.dataDirectory;
        this.file.copyFile(namePath, currentName, path, newFileName).then(function (success) {
            _this.picImage = newFileName;
            console.log('this.pathForImage: ', _this.pathForImage(_this.picImage));
            console.log('this.pathForImage2: ', _this.pathForImage2(_this.picImage));
        }, function (error) {
            console.log('error: ', error);
            _this.presentToast('Error while storing file.');
        });
    };
    FavoritesPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    FavoritesPage.prototype.showCameraAlert = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            encodingType: 0,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        if (this.platform.is('cordova')) {
            this.camera.getPicture(options).then(function (imageData) {
                _this.filename = _this.createFileName();
                // this.picImage = imageData;
                console.log('imageData: ', imageData);
                if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                    console.log('android: ');
                    _this.filePath.resolveNativePath(imageData).then(function (filePath) {
                        console.log('filePath: ', filePath);
                        var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        console.log('correctPath: ', correctPath);
                        var currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
                        console.log('currentName: ', currentName);
                        _this.copyFileToLocalDir(correctPath, currentName, _this.filename);
                    });
                }
                else {
                    var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
                    var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
                    _this.copyFileToLocalDir(correctPath, currentName, _this.filename);
                }
            }, function (err) {
                console.log('Error: ', err);
            });
        }
        else {
            console.log('No cordova found');
        }
    };
    FavoritesPage.prototype.openCamera = function () {
        this.showCameraAlert(this.camera.PictureSourceType.CAMERA);
    };
    FavoritesPage.prototype.openAlbum = function () {
        this.showCameraAlert(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    FavoritesPage.prototype.addProduct = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_product_entry_product_entry__["a" /* ProductEntryPage */]);
        modal.onDidDismiss(function (resp) {
            if (resp == 'save') {
                var t = _this.navCtrl.parent;
                t.select(4);
            }
        });
        modal.present();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\favorites\favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sell</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="myCard" *ngIf="!isSeller">\n\n    <div padding text-center>\n\n      <img src="./assets/imgs/recommended.svg" />\n\n    </div>\n\n    <ion-card-content>\n\n      <p text-center>To sell some products and cool items <br> Apply as a seller <br>and get some awesome welcome vouchers</p>\n\n      <br>\n\n      <p text-center>\n\n        <button ion-button block (click)="applyAsSeller()" [disabled]="isApplyAsSeller">Apply As Seller</button>\n\n      </p>\n\n    </ion-card-content>\n\n  </div>\n\n  <ion-list *ngIf="isSeller">\n\n    <button ion-item>\n\n      <ion-icon name="camera" item-start></ion-icon>\n\n      <h2>Camera</h2>\n\n      <p>Upload image with camera</p>\n\n    </button>\n\n    <button ion-item (click)="openAlbum()">\n\n      <ion-icon name="images" item-start></ion-icon>\n\n      <h2>Photos</h2>\n\n      <p>Upload image from album gallery</p>\n\n    </button>\n\n    <button ion-item (click)="addProduct()">\n\n      <ion-icon name="add" item-start></ion-icon>\n\n      <h2>Add Product</h2>\n\n      <p>Add product directly without image</p>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_users__["a" /* UsersServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiImageUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MultiImageUploadComponent = (function () {
    function MultiImageUploadComponent(sanitization, actionSheetCtrl, camera, file, alertCtrl, toastCtrl) {
        this.sanitization = sanitization;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.serverUrl = "http://jquery-file-upload.appspot.com/";
        this.isUploading = false;
        this.uploadingProgress = {};
        this.uploadingHandler = {};
        this.images = [];
        this.util = (function (_this) {
            return {
                removeFromArray: function (array, item) {
                    var index = array.indexOf(item);
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                },
                confirm: function (text, title, yes, no) {
                    if (title === void 0) { title = ''; }
                    if (yes === void 0) { yes = "Yes"; }
                    if (no === void 0) { no = "No"; }
                    return new Promise(function (resolve) {
                        _this.alertCtrl.create({
                            title: title,
                            message: text,
                            buttons: [
                                {
                                    text: no,
                                    role: 'cancel',
                                    handler: function () {
                                        resolve(false);
                                    }
                                },
                                {
                                    text: yes,
                                    handler: function () {
                                        resolve(true);
                                    }
                                }
                            ]
                        }).present();
                    });
                },
                trustImages: function () {
                    _this.imagesValue = _this.images.map(function (val) {
                        return {
                            url: val,
                            sanitized: _this.sanitization.bypassSecurityTrustStyle("url(" + val + ")")
                        };
                    });
                },
                showToast: function (text) {
                    _this.toastCtrl.create({
                        message: text,
                        duration: 5000,
                        position: 'bottom'
                    }).present();
                }
            };
        })(this);
    }
    MultiImageUploadComponent.prototype.uploadImages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isUploading = true;
            Promise.all(_this.images.map(function (image) {
                return _this.uploadImage(image);
            }))
                .then(resolve)
                .catch(function (reason) {
                _this.isUploading = false;
                _this.uploadingProgress = {};
                _this.uploadingHandler = {};
                reject(reason);
            });
        });
    };
    MultiImageUploadComponent.prototype.abort = function () {
        if (!this.isUploading)
            return;
        this.isUploading = false;
        for (var key in this.uploadingHandler) {
            this.uploadingHandler[key].abort();
        }
    };
    // ======================================================================
    MultiImageUploadComponent.prototype.removeImage = function (image) {
        var _this = this;
        if (this.isUploading)
            return;
        this.util.confirm("Are you sure to remove it?").then(function (value) {
            if (value) {
                _this.util.removeFromArray(_this.imagesValue, image);
                _this.util.removeFromArray(_this.images, image.url);
            }
        });
    };
    MultiImageUploadComponent.prototype.showAddImage = function () {
        var _this = this;
        if (!window['cordova']) {
            var input_1 = document.createElement('input');
            input_1.type = 'file';
            input_1.accept = "image/x-png,image/gif,image/jpeg";
            input_1.click();
            input_1.onchange = function () {
                var blob = window.URL.createObjectURL(input_1.files[0]);
                _this.images.push(blob);
                _this.util.trustImages();
            };
        }
        else {
            new Promise(function (resolve, reject) {
                var actionSheet = _this.actionSheetCtrl.create({
                    title: 'Add a photo',
                    buttons: [
                        {
                            text: 'From photo library',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                        },
                        {
                            text: 'From camera',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.CAMERA);
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                reject();
                            }
                        }
                    ]
                });
                actionSheet.present();
            }).then(function (sourceType) {
                if (!window['cordova'])
                    return;
                var options = {
                    quality: 100,
                    sourceType: sourceType,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };
                _this.camera.getPicture(options).then(function (imagePath) {
                    _this.images.push(imagePath);
                    _this.util.trustImages();
                });
            }).catch(function () {
            });
        }
    };
    MultiImageUploadComponent.prototype.uploadImage = function (targetPath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.uploadingProgress[targetPath] = 0;
            if (window['cordova']) {
                var options = {
                    fileKey: "files[]",
                    fileName: targetPath,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                };
                var fileTransfer = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["b" /* FileTransferObject */]();
                _this.uploadingHandler[targetPath] = fileTransfer;
                fileTransfer.upload(targetPath, _this.serverUrl, options).then(function (data) {
                    resolve(JSON.parse(data.response));
                }).catch(function () {
                    askRetry();
                });
                fileTransfer.onProgress(function (event2) {
                    _this.uploadingProgress[targetPath] = event2.loaded * 100 / event2.total;
                });
            }
            else {
                var xhr_1 = new XMLHttpRequest();
                xhr_1.open('GET', targetPath, true);
                xhr_1.responseType = 'blob';
                xhr_1.onload = function (e) {
                    if (xhr_1['status'] != 200) {
                        _this.util.showToast("Your browser doesn't support blob API");
                        console.error(e, xhr_1);
                        askRetry();
                    }
                    else {
                        var blob = xhr_1['response'];
                        var formData = new FormData(), xhr2_1 = new XMLHttpRequest();
                        formData.append('files[]', blob);
                        _this.uploadingHandler[targetPath] = xhr2_1;
                        xhr2_1.onreadystatechange = function () {
                            if (xhr2_1.readyState === 4) {
                                if (xhr2_1.status === 200)
                                    resolve(JSON.parse(xhr2_1.response));
                                else
                                    askRetry();
                            }
                        };
                        xhr2_1.upload.onprogress = function (event) {
                            _this.uploadingProgress[targetPath] = event.loaded * 100 / event.total;
                        };
                        xhr2_1.open('POST', _this.serverUrl, true);
                        xhr2_1.send(formData);
                    }
                };
                xhr_1.send();
            }
            var askRetry = function () {
                // might have been aborted
                if (!_this.isUploading)
                    return reject(null);
                _this.util.confirm('Do you wish to retry?', 'Upload failed').then(function (res) {
                    if (!res) {
                        _this.isUploading = false;
                        for (var key in _this.uploadingHandler) {
                            _this.uploadingHandler[key].abort();
                        }
                        return reject(null);
                    }
                    else {
                        if (!_this.isUploading)
                            return reject(null);
                        _this.uploadImage(targetPath).then(resolve, reject);
                    }
                });
            };
        });
    };
    MultiImageUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'multi-image-upload',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\components\multi-image-upload\multi-image-upload.html"*/'<div>\n\n  <div class="images-wrapper">\n\n    <div class="image-wrapper" *ngFor="let image of imagesValue">\n\n      <ion-icon class="remove-image" name="close" *ngIf="!isUploading" (click)="removeImage(image)"></ion-icon>\n\n      <div class="image" [style.background-image]="image.sanitized">\n\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n\n             [class.uploading]="isUploading" alt=""/>\n\n        <ion-spinner *ngIf="isUploading && uploadingProgress[image.url]<100"></ion-spinner>\n\n\n\n        <ion-icon name="checkmark" *ngIf="isUploading && uploadingProgress[image.url]==100"></ion-icon>\n\n        <div *ngIf="isUploading" class="progress-bar">\n\n          <div class="progress" [style.width]="(uploadingProgress[image.url]||0)+\'%\'"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="image-wrapper add-image-btn" *ngIf="!isUploading" (click)="showAddImage()">\n\n      <div class="image">\n\n        <ion-icon name="add"></ion-icon>\n\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt=""/>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\components\multi-image-upload\multi-image-upload.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ToastController */]])
    ], MultiImageUploadComponent);
    return MultiImageUploadComponent;
}());

//# sourceMappingURL=multi-image-upload.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chatdetail_chatdetail__ = __webpack_require__(64);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 468:
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

/***/ 469:
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

/***/ 470:
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

/***/ 471:
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

/***/ 472:
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

/***/ 473:
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

/***/ 474:
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

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(502);


__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */].getPluginRef = function () { return "cordova.plugin.http"; };

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chatdetail_chatdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_productratings_productratings__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shopprofile_shopprofile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_productcomment_productcomment__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(54);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RestangularConfigFactory */
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_restangular_dist_esm_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth0_angular_jwt__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chatdetail_chatdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_confirmation_confirmation__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_deliveryaddress_deliveryaddress__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_favorites_favorites__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_makepayment_makepayment__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_myaccount_myaccount__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_myprofile_myprofile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_myrating_myrating__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_myaddress_myaddress__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_myaddress_entry_myaddress_entry__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_mybankcards_mybankcards__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_mybankcards_entry_mybankcards_entry__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_mywallet_mywallet__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_mypurchases_mypurchases__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_mylikes_mylikes__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_orderdetails_orderdetails__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_paymentmethod_paymentmethod__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_paymentoption_paymentoption__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_productcomment_productcomment__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_productratings_productratings__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_product_entry_product_entry__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_product_wholesale_entry_product_wholesale_entry__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_product_variation_entry_product_variation_entry__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_product_packaging_entry_product_packaging_entry__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_product_shipping_entry_product_shipping_entry__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_search_search__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_searchresult_searchresult__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_settings_settings__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_shippingoption_shippingoption__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_shoppingcart_shoppingcart__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_shopprofile_shopprofile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_signup_signup__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_forgot_forgot__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_userprofile_userprofile__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_notification_notification__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_accountsettings_accountsettings__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_feed_feed__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_categories_categories__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_brands_brands__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_emoji_picker_emoji_picker__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_multi_image_upload_multi_image_upload__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pipes_relative_time_relative_time__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_service_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_service_authentication__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_service_emojis__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_service_chat__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_service_categories__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__providers_service_brands__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_service_users__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_service_products__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_status_bar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__ionic_native_splash_screen__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ionic_native_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_file_path__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ionic_native_file__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_file_transfer__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































































function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].api_url);
    RestangularProvider.setPlainByDefault(true);
    RestangularProvider.setFullResponse(true);
}
function tokenGetter() {
    return localStorage.getItem('app.token');
}
var config = { url: __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].socket_url, options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_16__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], __WEBPACK_IMPORTED_MODULE_16__pages_chatdetail_chatdetail__["a" /* ChatDetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["b" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["a" /* DetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_mypurchases_mypurchases__["a" /* MypurchasesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_mylikes_mylikes__["a" /* MylikesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_44__pages_search_search__["b" /* SearchPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_shopprofile_shopprofile__["b" /* ShopprofilePage */], __WEBPACK_IMPORTED_MODULE_49__pages_shopprofile_shopprofile__["a" /* ShopProfilePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_myaddress_myaddress__["a" /* MyaddressPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_myaddress_entry_myaddress_entry__["a" /* MyaddressEntryPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mybankcards_mybankcards__["a" /* MybankcardsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mywallet_mywallet__["a" /* MywalletPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_mybankcards_entry_mybankcards_entry__["a" /* MybankcardsEntryPage */],
                __WEBPACK_IMPORTED_MODULE_58__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */], __WEBPACK_IMPORTED_MODULE_60__pipes_relative_time_relative_time__["a" /* RelativeTimePipe */], __WEBPACK_IMPORTED_MODULE_59__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_brands_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_product_entry_product_entry__["a" /* ProductEntryPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_product_wholesale_entry_product_wholesale_entry__["a" /* ProductWholesaleEntryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_product_variation_entry_product_variation_entry__["a" /* ProductVariationEntryPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_product_packaging_entry_product_packaging_entry__["a" /* ProductPackagingEntryPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_product_shipping_entry_product_shipping_entry__["a" /* ProductShippingEntryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios',
                }, {
                    links: [
                        { loadChildren: '../pages/accountsettings/accountsettings.module#AccountsettingsPageModule', name: 'AccountsettingsPage', segment: 'accountsettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brands/brands.module#BrandsPageModule', name: 'BrandsPage', segment: 'brands', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deliveryaddress/deliveryaddress.module#DeliveryaddressPageModule', name: 'DeliveryaddressPage', segment: 'deliveryaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/makepayment/makepayment.module#MakepaymentPageModule', name: 'MakepaymentPage', segment: 'makepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatdetail/chatdetail.module#ChatdetailPageModule', name: 'ChatdetailPage', segment: 'chatdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaddress-entry/myaddress-entry.module#MyaddressEntryPageModule', name: 'MyaddressEntryPage', segment: 'myaddress-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaddress/myaddress.module#MyaddressPageModule', name: 'MyaddressPage', segment: 'myaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mybankcards/mybankcards.module#MybankcardsPageModule', name: 'MybankcardsPage', segment: 'mybankcards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mylikes/mylikes.module#MylikesPageModule', name: 'MylikesPage', segment: 'mylikes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypurchases/mypurchases.module#MypurchasesPageModule', name: 'MypurchasesPage', segment: 'mypurchases', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmation/confirmation.module#ConfirmationPageModule', name: 'ConfirmationPage', segment: 'confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myrating/myrating.module#MyratingPageModule', name: 'MyratingPage', segment: 'myrating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mywallet/mywallet.module#MywalletPageModule', name: 'MywalletPage', segment: 'mywallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mybankcards-entry/mybankcards-entry.module#MybankcardsEntryPageModule', name: 'MybankcardsEntryPage', segment: 'mybankcards-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentoption/paymentoption.module#PaymentoptionPageModule', name: 'PaymentoptionPage', segment: 'paymentoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentmethod/paymentmethod.module#PaymentmethodPageModule', name: 'PaymentmethodPage', segment: 'paymentmethod', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-entry/product-entry.module#ProductEntryPageModule', name: 'ProductEntryPage', segment: 'product-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-packaging-entry/product-packaging-entry.module#ProductPackagingEntryPageModule', name: 'ProductPackagingEntryPage', segment: 'product-packaging-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-variation-entry/product-variation-entry.module#ProductVariationEntryPageModule', name: 'ProductVariationEntryPage', segment: 'product-variation-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-shipping-entry/product-shipping-entry.module#ProductShippingEntryPageModule', name: 'ProductShippingEntryPage', segment: 'product-shipping-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-wholesale-entry/product-wholesale-entry.module#ProductWholesaleEntryPageModule', name: 'ProductWholesaleEntryPage', segment: 'product-wholesale-entry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productcomment/productcomment.module#ProductcommentPageModule', name: 'ProductcommentPage', segment: 'productcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productratings/productratings.module#ProductratingsPageModule', name: 'ProductratingsPage', segment: 'productratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdetails/orderdetails.module#OrderdetailsPageModule', name: 'OrderdetailsPage', segment: 'orderdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchresult/searchresult.module#SearchresultPageModule', name: 'SearchresultPage', segment: 'searchresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shoppingcart/shoppingcart.module#ShoppingcartPageModule', name: 'ShoppingcartPage', segment: 'shoppingcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopprofile/shopprofile.module#ShopprofilePageModule', name: 'ShopprofilePage', segment: 'shopprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userprofile/userprofile.module#UserprofilePageModule', name: 'UserprofilePage', segment: 'userprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shippingoption/shippingoption.module#ShippingoptionPageModule', name: 'ShippingoptionPage', segment: 'shippingoption', priority: 'low', defaultHistory: [] }
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
                }),
                __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__["SocketIoModule"].forRoot(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_16__pages_chatdetail_chatdetail__["b" /* ChatdetailPage */], __WEBPACK_IMPORTED_MODULE_16__pages_chatdetail_chatdetail__["a" /* ChatDetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirmation_confirmation__["a" /* ConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_deliveryaddress_deliveryaddress__["a" /* DeliveryaddressPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["b" /* DetailsPage */], __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["a" /* DetailPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_makepayment_makepayment__["a" /* MakepaymentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_myaccount_myaccount__["a" /* MyaccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myrating_myrating__["a" /* MyratingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_mypurchases_mypurchases__["a" /* MypurchasesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_mylikes_mylikes__["a" /* MylikesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_orderdetails_orderdetails__["a" /* OrderdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_paymentmethod_paymentmethod__["a" /* PaymentmethodPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_paymentoption_paymentoption__["a" /* PaymentoptionPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_productcomment_productcomment__["a" /* ProductcommentPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_productratings_productratings__["a" /* ProductratingsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_search_search__["a" /* SearchPage */], __WEBPACK_IMPORTED_MODULE_44__pages_search_search__["b" /* SearchPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_shippingoption_shippingoption__["a" /* ShippingoptionPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_shoppingcart_shoppingcart__["a" /* ShoppingcartPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_shopprofile_shopprofile__["b" /* ShopprofilePage */], __WEBPACK_IMPORTED_MODULE_49__pages_shopprofile_shopprofile__["a" /* ShopProfilePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_userprofile_userprofile__["a" /* UserprofilePage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_accountsettings_accountsettings__["a" /* AccountsettingsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_myaddress_myaddress__["a" /* MyaddressPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_myaddress_entry_myaddress_entry__["a" /* MyaddressEntryPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_mybankcards_mybankcards__["a" /* MybankcardsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mywallet_mywallet__["a" /* MywalletPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_mybankcards_entry_mybankcards_entry__["a" /* MybankcardsEntryPage */],
                __WEBPACK_IMPORTED_MODULE_58__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */], __WEBPACK_IMPORTED_MODULE_59__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_55__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_brands_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_product_entry_product_entry__["a" /* ProductEntryPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_product_wholesale_entry_product_wholesale_entry__["a" /* ProductWholesaleEntryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_product_variation_entry_product_variation_entry__["a" /* ProductVariationEntryPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_product_packaging_entry_product_packaging_entry__["a" /* ProductPackagingEntryPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_product_shipping_entry_product_shipping_entry__["a" /* ProductShippingEntryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_70__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_71__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_73__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_74__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_75__ionic_native_file_transfer__["a" /* FileTransfer */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_61__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_62__providers_service_authentication__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_63__providers_service_emojis__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_64__providers_service_chat__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_65__providers_service_categories__["a" /* CategoriesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_66__providers_service_brands__["a" /* BrandsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_67__providers_service_users__["a" /* UsersServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_68__providers_service_products__["a" /* ProductsServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_authentication__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_forgot_forgot__ = __webpack_require__(193);
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
    function LoginPage(navCtrl, navParams, viewCtrl, auth, alertCtrl, loadingCtrl, events, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.socket = socket;
        this.user = {};
    }
    LoginPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.forgot = function () {
        console.log('forgot: ');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_forgot_forgot__["a" /* ForgotPage */]);
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
                _this.events.publish('app.login');
                _this.socket.connect();
                _this.socket.emit('create-room', _this.user.uuid);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_authentication__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_chat__ = __webpack_require__(281);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(31);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], ShoppingcartPage);
    return ShoppingcartPage;
}());

//# sourceMappingURL=shoppingcart.js.map

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 349,
	"./af.js": 349,
	"./ar": 350,
	"./ar-dz": 351,
	"./ar-dz.js": 351,
	"./ar-kw": 352,
	"./ar-kw.js": 352,
	"./ar-ly": 353,
	"./ar-ly.js": 353,
	"./ar-ma": 354,
	"./ar-ma.js": 354,
	"./ar-sa": 355,
	"./ar-sa.js": 355,
	"./ar-tn": 356,
	"./ar-tn.js": 356,
	"./ar.js": 350,
	"./az": 357,
	"./az.js": 357,
	"./be": 358,
	"./be.js": 358,
	"./bg": 359,
	"./bg.js": 359,
	"./bn": 360,
	"./bn.js": 360,
	"./bo": 361,
	"./bo.js": 361,
	"./br": 362,
	"./br.js": 362,
	"./bs": 363,
	"./bs.js": 363,
	"./ca": 364,
	"./ca.js": 364,
	"./cs": 365,
	"./cs.js": 365,
	"./cv": 366,
	"./cv.js": 366,
	"./cy": 367,
	"./cy.js": 367,
	"./da": 368,
	"./da.js": 368,
	"./de": 369,
	"./de-at": 370,
	"./de-at.js": 370,
	"./de-ch": 371,
	"./de-ch.js": 371,
	"./de.js": 369,
	"./dv": 372,
	"./dv.js": 372,
	"./el": 373,
	"./el.js": 373,
	"./en-au": 374,
	"./en-au.js": 374,
	"./en-ca": 375,
	"./en-ca.js": 375,
	"./en-gb": 376,
	"./en-gb.js": 376,
	"./en-ie": 377,
	"./en-ie.js": 377,
	"./en-nz": 378,
	"./en-nz.js": 378,
	"./eo": 379,
	"./eo.js": 379,
	"./es": 380,
	"./es-do": 381,
	"./es-do.js": 381,
	"./es.js": 380,
	"./et": 382,
	"./et.js": 382,
	"./eu": 383,
	"./eu.js": 383,
	"./fa": 384,
	"./fa.js": 384,
	"./fi": 385,
	"./fi.js": 385,
	"./fo": 386,
	"./fo.js": 386,
	"./fr": 387,
	"./fr-ca": 388,
	"./fr-ca.js": 388,
	"./fr-ch": 389,
	"./fr-ch.js": 389,
	"./fr.js": 387,
	"./fy": 390,
	"./fy.js": 390,
	"./gd": 391,
	"./gd.js": 391,
	"./gl": 392,
	"./gl.js": 392,
	"./gom-latn": 393,
	"./gom-latn.js": 393,
	"./he": 394,
	"./he.js": 394,
	"./hi": 395,
	"./hi.js": 395,
	"./hr": 396,
	"./hr.js": 396,
	"./hu": 397,
	"./hu.js": 397,
	"./hy-am": 398,
	"./hy-am.js": 398,
	"./id": 399,
	"./id.js": 399,
	"./is": 400,
	"./is.js": 400,
	"./it": 401,
	"./it.js": 401,
	"./ja": 402,
	"./ja.js": 402,
	"./jv": 403,
	"./jv.js": 403,
	"./ka": 404,
	"./ka.js": 404,
	"./kk": 405,
	"./kk.js": 405,
	"./km": 406,
	"./km.js": 406,
	"./kn": 407,
	"./kn.js": 407,
	"./ko": 408,
	"./ko.js": 408,
	"./ky": 409,
	"./ky.js": 409,
	"./lb": 410,
	"./lb.js": 410,
	"./lo": 411,
	"./lo.js": 411,
	"./lt": 412,
	"./lt.js": 412,
	"./lv": 413,
	"./lv.js": 413,
	"./me": 414,
	"./me.js": 414,
	"./mi": 415,
	"./mi.js": 415,
	"./mk": 416,
	"./mk.js": 416,
	"./ml": 417,
	"./ml.js": 417,
	"./mr": 418,
	"./mr.js": 418,
	"./ms": 419,
	"./ms-my": 420,
	"./ms-my.js": 420,
	"./ms.js": 419,
	"./my": 421,
	"./my.js": 421,
	"./nb": 422,
	"./nb.js": 422,
	"./ne": 423,
	"./ne.js": 423,
	"./nl": 424,
	"./nl-be": 425,
	"./nl-be.js": 425,
	"./nl.js": 424,
	"./nn": 426,
	"./nn.js": 426,
	"./pa-in": 427,
	"./pa-in.js": 427,
	"./pl": 428,
	"./pl.js": 428,
	"./pt": 429,
	"./pt-br": 430,
	"./pt-br.js": 430,
	"./pt.js": 429,
	"./ro": 431,
	"./ro.js": 431,
	"./ru": 432,
	"./ru.js": 432,
	"./sd": 433,
	"./sd.js": 433,
	"./se": 434,
	"./se.js": 434,
	"./si": 435,
	"./si.js": 435,
	"./sk": 436,
	"./sk.js": 436,
	"./sl": 437,
	"./sl.js": 437,
	"./sq": 438,
	"./sq.js": 438,
	"./sr": 439,
	"./sr-cyrl": 440,
	"./sr-cyrl.js": 440,
	"./sr.js": 439,
	"./ss": 441,
	"./ss.js": 441,
	"./sv": 442,
	"./sv.js": 442,
	"./sw": 443,
	"./sw.js": 443,
	"./ta": 444,
	"./ta.js": 444,
	"./te": 445,
	"./te.js": 445,
	"./tet": 446,
	"./tet.js": 446,
	"./th": 447,
	"./th.js": 447,
	"./tl-ph": 448,
	"./tl-ph.js": 448,
	"./tlh": 449,
	"./tlh.js": 449,
	"./tr": 450,
	"./tr.js": 450,
	"./tzl": 451,
	"./tzl.js": 451,
	"./tzm": 452,
	"./tzm-latn": 453,
	"./tzm-latn.js": 453,
	"./tzm.js": 452,
	"./uk": 454,
	"./uk.js": 454,
	"./ur": 455,
	"./ur.js": 455,
	"./uz": 456,
	"./uz-latn": 457,
	"./uz-latn.js": 457,
	"./uz.js": 456,
	"./vi": 458,
	"./vi.js": 458,
	"./x-pseudo": 459,
	"./x-pseudo.js": 459,
	"./yo": 460,
	"./yo.js": 460,
	"./zh-cn": 461,
	"./zh-cn.js": 461,
	"./zh-hk": 462,
	"./zh-hk.js": 462,
	"./zh-tw": 463,
	"./zh-tw.js": 463
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
webpackContext.id = 657;

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // socket_url: 'http://localhost:3000',
    // api_url: 'http://localhost:3000/api/1/',
    socket_url: 'https://shoppy-123456789.herokuapp.com',
    api_url: 'https://shoppy-123456789.herokuapp.com/api/1/',
    env: 'local',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_users__ = __webpack_require__(79);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl, socket, events, users) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.socket = socket;
        this.events = events;
        this.users = users;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
        this.user = {};
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
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (!__WEBPACK_IMPORTED_MODULE_6_lodash__["isEmpty"](this.user)) {
            if (!this.socket.ioSocket.connected) {
                this.socket.connect();
                this.socket.emit('create-room', this.user.uuid);
            }
            else {
                this.socket.emit('create-room', this.user.uuid);
            }
            this.socket.on('connect', function () {
                //Add user called nickname
                console.log('reconnect');
                _this.socket.emit('create-room', _this.user.uuid);
            });
            this.socket.on('approve-seller', function () {
                console.log('publish approve-seller');
                _this.users.getCurrentUser().then(function (data) {
                    if (data && data.success) {
                        localStorage.removeItem('app.user');
                        localStorage.setItem('app.user', JSON.stringify(data.result));
                        _this.events.publish('approve-seller');
                    }
                }, function (error) {
                    console.log('error: ', error);
                });
            });
        }
    }
    MyApp.prototype.closeMenu = function () {
        console.log('closeMenu');
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\app\app.html"*/'<ion-menu id="filtermenu" [content]="mycontent" side="right" type="overlay" enabled="false">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Filter\n\n        <br><small> (1000 items)</small></ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Categories\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>Keyboard (22)</ion-label>\n\n        <ion-checkbox [(ngModel)]="frees"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Wearables (2)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free1"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Computer Accessory (6)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free2"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Component (10)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free3"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Mouse & Pad (3)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free4"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Laptops (100)</ion-label>\n\n        <ion-checkbox [(ngModel)]="free5"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Shipping Option\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>Free Shipping</ion-label>\n\n        <ion-checkbox [(ngModel)]="free"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>LBC Express</ion-label>\n\n        <ion-checkbox [(ngModel)]="lbc"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>JRS Express</ion-label>\n\n        <ion-checkbox [(ngModel)]="jrs"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Service\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>Wholesale</ion-label>\n\n        <ion-checkbox [(ngModel)]="whole"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>With Discount</ion-label>\n\n        <ion-checkbox [(ngModel)]="discount"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Lowest Price</ion-label>\n\n        <ion-checkbox [(ngModel)]="lowprice"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Condition\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>New</ion-label>\n\n        <ion-checkbox [(ngModel)]="new"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Used</ion-label>\n\n        <ion-checkbox [(ngModel)]="used"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        Price Range\n\n      </ion-item-divider>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-input type="text" value="" placeholder="MIN"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-input type="text" value="" placeholder="MAX"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-buttons right>\n\n      <button ion-button outline small>\n\n        Reset\n\n      </button>\n\n      <button ion-button small (click)="closeMenu()">\n\n        Apply\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_8__providers_service_users__["a" /* UsersServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 686:
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

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_emojis__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
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

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(689);
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(50);
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


var UsersServiceProvider = (function () {
    function UsersServiceProvider(restangular) {
        this.restangular = restangular;
    }
    UsersServiceProvider.prototype.getCurrentUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('app.token') });
            }).all('users').customGET().subscribe(callbackResponse, errorResponse);
        });
    };
    UsersServiceProvider.prototype.signUpUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.all('register').customPOST(data).subscribe(callbackResponse, errorResponse);
        });
    };
    UsersServiceProvider.prototype.applyAsSeller = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callbackResponse = function (resp) {
                resolve(resp.data);
            };
            var errorResponse = function (error) {
                console.log('error: ', error);
                reject(error);
            };
            _this.restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('app.token') });
            }).all('users/apply').customPOST().subscribe(callbackResponse, errorResponse);
        });
    };
    UsersServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__["Restangular"]])
    ], UsersServiceProvider);
    return UsersServiceProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feed_feed__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favorites_favorites__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_myprofile_myprofile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__ = __webpack_require__(208);
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
    function TabsPage(navCtrl, navParams, app, modalCtrl, events, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.socket = socket;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__pages_feed_feed__["a" /* FeedPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__pages_favorites_favorites__["a" /* FavoritesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__pages_myprofile_myprofile__["a" /* MyprofilePage */];
        this.user = {};
        this.mapTabEnabled = true;
        this.notifCount = 0;
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.mapTabEnabled = false;
        }
        else {
            this.mapTabEnabled = true;
        }
        this.events.subscribe('app.login', function () {
            _this.mapTabEnabled = true;
        });
        this.events.subscribe('approve-seller', function () {
            console.log('approve-seller');
            _this.notifCount = _this.notifCount + 1;
        });
    }
    TabsPage.prototype.myMethod = function ($event) {
        this.user = JSON.parse(localStorage.getItem('app.user')) || {};
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.user)) {
            this.mapTabEnabled = false;
        }
        else {
            this.mapTabEnabled = true;
        }
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\tabs\tabs.html"*/'<ion-tabs no-border>\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="ios-paper-outline"></ion-tab>\n\n    <ion-tab [root]="tab3Root" [enabled]="mapTabEnabled" tabTitle="Sell" tabIcon="ios-camera-outline" (ionSelect)="myMethod($event)"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Notifications" [tabBadge]="notifCount > 0 ? notifCount : null" tabIcon="ios-notifications-outline" (ionSelect)="myMethod($event)"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="Me" tabIcon="ios-contact-outline" (ionSelect)="myMethod($event)"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopProfilePopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShopprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chatdetail_chatdetail__ = __webpack_require__(64);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_users__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, viewCtrl, users, toastCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.errArr = [];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.users.signUpUser(this.user).then(function (data) {
            if (data && data.success) {
                console.log('data: ', data);
                loading.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: data.msg,
                    buttons: ['OK']
                });
                alert_1.onDidDismiss(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */], null, { animate: true, direction: 'back' });
                });
                alert_1.present();
            }
            else {
                loading.dismiss();
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: data.msg,
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
        }, function (error) {
            loading.dismiss();
            console.log('error: ', error);
            var err = error.data;
            _this.errArr = err.result;
            setTimeout(function () {
                _this.errArr = [];
            }, 3000);
        });
    };
    SignupPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\xampp\htdocs\shoppy\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sign up</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon ios="ios-close-outline" md="ios-close-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list class="form">\n\n    <ion-list-header color="light">\n\n      Basic Information\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Firstname</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.firstname"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-line *ngIf="errArr.length >0">\n\n      <div *ngFor="let item of errArr">\n\n        <div class="has-error" *ngIf="item.param == \'firstname\'">\n\n          {{item.msg}}\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Lastname</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.lastname"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-line *ngIf="errArr.length >0">\n\n      <div *ngFor="let item of errArr">\n\n        <div class="has-error" *ngIf="item.param == \'lastname\'">\n\n          {{item.msg}}\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-line *ngIf="errArr.length >0">\n\n      <div *ngFor="let item of errArr">\n\n        <div class="has-error" *ngIf="item.param == \'email\'">\n\n          {{item.msg}}\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-list-header color="light">\n\n      Account\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Username</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.username"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-line *ngIf="errArr.length >0">\n\n      <div *ngFor="let item of errArr">\n\n        <div class="has-error" *ngIf="item.param == \'username\'">\n\n          {{item.msg}}\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-line *ngIf="errArr.length >0">\n\n      <div *ngFor="let item of errArr">\n\n        <div class="has-error" *ngIf="item.param == \'password\'">\n\n          {{item.msg}}\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Confirm Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.confirmpassword"></ion-input>\n\n    </ion-item>\n\n    <ion-item no-line *ngIf="errArr.length >0">\n\n      <div *ngFor="let item of errArr">\n\n        <div class="has-error" *ngIf="item.param == \'confirmpassword\'">\n\n          {{item.msg}}\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block (click)="save()">Register</button>\n\n    <div center text-center>\n\n      <button ion-button clear color="secondary">\n\n        Sign up with Email\n\n      </button>\n\n      <button ion-button clear color="primary">\n\n        Sign up with Facebook\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\shoppy\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_users__["a" /* UsersServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_restangular_dist_esm_src__ = __webpack_require__(50);
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

/***/ })

},[475]);
//# sourceMappingURL=main.js.map