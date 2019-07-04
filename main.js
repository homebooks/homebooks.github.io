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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'search', component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__["ListingComponent"], pathMatch: 'full' },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], pathMatch: 'full' }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homebooks container\">\n  <app-header></app-header>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: black; }\n\n.homebooks {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n\nmain {\n  flex: 1;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9Ib21lYm9va3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQUE7O0FBS2Y7RUFDSSxhQUFhO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNJLE9BQU07RUFDTixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgY29sb3I6YmxhY2s7XG59XG5kaXZ7XG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCByZWQ7XG59XG4uaG9tZWJvb2tze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxubWFpbntcbiAgICBmbGV4OjE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"

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
        this.title = 'Homebooks';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _modals_bookListModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/bookListModal */ "./src/app/modals/bookListModal.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _modals_bookListModal__WEBPACK_IMPORTED_MODULE_10__["NgbdModalContent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_9__["ListingComponent"],
                _modals_bookListModal__WEBPACK_IMPORTED_MODULE_10__["NgbdModalContent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row cart_container\">\n  <div class=\"col\">\n    <div class=\"row title_container\">\n      <p class=\"title\">YOUR CART</p>\n    </div>\n    <div class=\"row\" *ngIf=\"empty\">\n      Cart is empty.\n    </div>\n    <div class=\"row titles\" *ngIf=\"!empty\">\n      <div class=\"col-6\">\n          <p class=\"listing_title\">Items in your cart</p>\n      </div>\n      <div class=\"col-3\">\n          <p class=\"pricing_title\">Price</p>\n      </div>\n    </div>\n    <div class=\"row listing\" *ngFor=\"let class of data.cartObject;let i = index; \"  >\n      <div class=\"col\" *ngIf=\"!empty\">\n        <p class=\"class_name\">{{ data.classlist[class.activeClass].class }}</p>\n        <div class=\"row book_listing\" *ngFor=\"let book of class.books;let j = index;\">\n          <div class=\"col-6 book_title\">\n            {{ book.title }}\n          </div>\n          <div class=\"col-3 book_price\">\n            ₹{{ book.price }}\n          </div>\n          <div class=\"col-3 book_remove\">\n            <button class=\"remove_book\" (click)=\"removeItem(i,j)\">Remove</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row total_container \" *ngIf=\"!empty\">\n      <div class=\"col-3 offset-9\">\n        <div class=\"row\">\n          Total\n        </div>\n        <div class=\"row\">\n          ₹{{total_price}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart_container .title_container .title {\n  width: 100%;\n  text-align: center;\n  font-family: Arvo;\n  font-size: 40px; }\n\n.cart_container .listing .class_name {\n  font-family: arvo;\n  font-size: 20px;\n  text-decoration: underline;\n  margin-bottom: 20px;\n  margin-top: 20px; }\n\n.cart_container .listing .book_listing {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.cart_container .listing .book_listing .book_remove .remove_book {\n    background: red;\n    color: white;\n    border-radius: 16px;\n    border: none; }\n\n.cart_container .total_container {\n  border-top: 2px solid black;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9Ib21lYm9va3Mvc3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxXQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFjLEVBQUE7O0FBTjFCO0VBbUJZLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUF2QjVCO0VBMEJZLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBM0I5QjtJQW9Db0IsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBOztBQXZDaEM7RUE4Q1EsMkJBQTBCO0VBQzFCLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydF9jb250YWluZXJ7XG4gICAgLnRpdGxlX2NvbnRhaW5lcntcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcnZvO1xuICAgICAgICAgICAgZm9udC1zaXplOjQwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlc3tcbiAgICAgICAgLmxpc3RpbmdfdGl0bGV7XG5cbiAgICAgICAgfVxuICAgICAgICAucHJpY2luZ190aXRsZXtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC5saXN0aW5ne1xuICAgICAgICAuY2xhc3NfbmFtZXtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcnZvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYm9va19saXN0aW5ne1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgICAgICAgICAgLmJvb2tfdGl0bGV7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib29rX3ByaWNle1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9va19yZW1vdmV7XG4gICAgICAgICAgICAgICAgLnJlbW92ZV9ib29re1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLnRvdGFsX2NvbnRhaW5lcntcbiAgICAgICAgYm9yZGVyLXRvcDoycHggc29saWQgYmxhY2s7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



var CartComponent = /** @class */ (function () {
    function CartComponent(data) {
        this.data = data;
        this.total_price = 0;
        this.empty = true;
        console.log(this.data.cartObject);
    }
    CartComponent.prototype.ngOnInit = function () {
        this.calculate_total();
    };
    CartComponent.prototype.calculate_total = function () {
        var _this = this;
        this.total_price = 0;
        this.data.cartObject.forEach(function (classe) {
            classe.books.forEach(function (book) {
                _this.total_price += book.price;
            });
        });
        if (this.data.cartObject.length === 0)
            this.empty = true;
        else
            this.empty = false;
    };
    CartComponent.prototype.removeItem = function (i, j) {
        console.log('remove this ');
        console.log(this.data.cartObject[i]);
        console.log(this.data.cartObject[i].books[j]);
        console.log('splicing');
        this.data.cartObject[i].books.splice(j, 1);
        console.warn(this.data.cartObject[i].books);
        console.log(this.data.cartObject[i].books.length, this.data.cartObject);
        if (this.data.cartObject[i].books.length === 0)
            this.data.cartObject.splice(i, 1);
        this.calculate_total();
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row footer\">\n  <div class=\"col-7\">\n    <div class=\"row\">\n      <div class=\"col\">ABOUT US</div>\n      <div class=\"col\">OUR POLICIES</div>\n      <div class=\"col\">HOW TO ORDER</div>\n      <div class=\"col\">CONTACT US</div>\n    </div>\n  </div>\n  <div class=\"col-2 offset-3\">\n    <div class=\"row icons\">\n      <div class=\"col\">\n        <img class=\"icon linkedin\" src=\"assets/social/ic_linkedin.png\" />\n      </div>\n      <div class=\"col\">\n        <img class=\"icon instagram\" src=\"assets/social/ic_insta.png\" />\n      </div>\n      <div class=\"col\">\n        <img class=\"icon twitter\" src=\"assets/social/ic_twitter.png\" />\n      </div>\n      <div class=\"col\">\n          <img class=\"icon facebook\" src=\"assets/social/ic_fb.png\" />\n      </div>\n      \n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  border-top: 1px solid black;\n  padding-top: 5px;\n  font-family: RobC;\n  font-size: 16px;\n  padding-bottom: 10px; }\n  .footer .icons .col {\n    margin: 0;\n    padding: 0; }\n  .footer .icons .icon {\n    width: 25px;\n    height: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9Ib21lYm9va3Mvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTBCO0VBQzFCLGdCQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWM7RUFDZCxvQkFBb0IsRUFBQTtFQUx4QjtJQVFZLFNBQVE7SUFDUixVQUFTLEVBQUE7RUFUckI7SUFZWSxXQUFVO0lBQ1YsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JDO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC5pY29uc3tcbiAgICAgICAgLmNvbHtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB9XG4gICAgICAgIC5pY29ue1xuICAgICAgICAgICAgd2lkdGg6MjVweDtcbiAgICAgICAgICAgIGhlaWdodDoyNXB4O1xuICAgICAgICAgICAgLy8gYm9yZGVyOjFweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center align-items-center header\">\n  <div class=\"col-3\">\n    <img class=\"logo\" src=\"../../assets/logo.svg\">\n  </div>\n  <div class=\"col-4 offset-5\">\n    <div class=\"row\">\n      <div class=\"col subs\">\n        <a href=\"\" routerLink=\"/\" [routerLinkActive]=\"['is-active']\">Buy Books</a>\n      </div>\n      <div class=\"col subs\">\n          <a href=\"\">Profile</a>\n      </div>\n      <div class=\"col subs\">\n          <button class=\"cart\" routerLink=\"/cart\">Cart({{data.cartObject.length}})</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  margin-top: 10px; }\n\n.logo {\n  max-height: 100px; }\n\n.cart {\n  background-color: #4E62EB;\n  color: white;\n  border-radius: 30px;\n  width: 100%;\n  height: 35px;\n  font-family: Rob; }\n\na {\n  color: #D1D5F9;\n  font-family: Rob; }\n\n.is-active {\n  text-decoration: underline;\n  color: #556BEB; }\n\n.subs {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9Ib21lYm9va3Mvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSx5QkFBeUI7RUFDekIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVztFQUNYLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSwwQkFBMEI7RUFDMUIsY0FBYSxFQUFBOztBQUVqQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG59XG4ubG9nb3tcbiAgICBtYXgtaGVpZ2h0OjEwMHB4O1xufVxuLmNhcnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRFNjJFQjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MzVweDtcbiAgICBmb250LWZhbWlseTogUm9iO1xuXG59XG5he1xuICAgIGNvbG9yOiNEMUQ1Rjk7XG4gICAgZm9udC1mYW1pbHk6IFJvYjtcbn1cbi5pcy1hY3RpdmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6IzU1NkJFQjtcbn1cbi5zdWJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        this.data = data;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home row align-items-center justify-content-center\">\n  <img class=\"bg_left\" src=\"../../assets/image_left.png\">\n  <img class=\"bg_right\" src=\"../../assets/image_right.png\">\n  <div class=\"col-10 content\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"row\">\n          <p class=\"find_text\">FIND ALL THE BOOKS YOU NEED!</p>\n        </div>\n        <div class=\"row\">\n          <input class=\"search_box\" type=\"text\" placeholder=\"Lucknow\">\n          <button class=\"locate_me\" (click)=\"getLocation()\">\n            <img class=\"gps\"  src=\"assets/location.svg\" >Locate me </button>\n        </div>\n        <div class=\"row\">\n          <div class=\"selectWrapper\">\n            <select class=\"school_list\" name=\"\" id=\"\">\n                <option [value]=\"school\" *ngFor=\"let school of schools\">{{ school }}</option>\n                \n            </select>\n          </div>\n        </div>\n        <div class=\"row\">\n          <button class=\"find_c\" (click)=\"findBooks()\">Find the Curriculum</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  height: 80vh; }\n  .home .content .find_text {\n    font-size: 50px;\n    font-family: Arvo; }\n  .home .content .search_box {\n    border: 1px solid grey;\n    border-right: none;\n    color: #5067eb;\n    border-radius: 35px 0px 0px 35px;\n    height: 50px;\n    width: 60%;\n    font-family: RobC;\n    font-size: 16px;\n    text-align: center; }\n  .home .content .search_box::-webkit-input-placeholder {\n      color: #5067eb; }\n  .home .content .search_box::-moz-placeholder {\n      color: #5067eb; }\n  .home .content .search_box::-ms-input-placeholder {\n      color: #5067eb; }\n  .home .content .search_box::placeholder {\n      color: #5067eb; }\n  .home .content .locate_me {\n    width: 40%;\n    font-family: RobC;\n    font-size: 16px;\n    color: #5067eb;\n    background: transparent;\n    border-radius: 0px 35px 35px 0px;\n    border: 1px solid grey; }\n  .home .content .locate_me .gps {\n      width: 30px;\n      height: 30px;\n      padding: 5px; }\n  .home .content .selectWrapper {\n    font-family: RobC;\n    font-size: 16px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    width: 100%;\n    height: 50px;\n    border: 1px solid grey;\n    border-radius: 35px;\n    display: inline-block;\n    overflow: hidden; }\n  .home .content .selectWrapper .school_list {\n      width: 101%;\n      height: 50px;\n      border-radius: 35px;\n      background: #fff;\n      outline: none; }\n  .home .content .find_c {\n    font-family: RobC;\n    font-size: 16px;\n    color: white;\n    width: 100%;\n    height: 50px;\n    border-radius: 35px;\n    border: none;\n    background-image: linear-gradient(to right, #5067eb 0%, #3934ef 100%); }\n  .home .content .find_c:hover {\n      background-position: right center; }\n  .bg_left {\n  position: fixed;\n  left: 0;\n  height: 60%;\n  bottom: 8vh;\n  z-index: -1; }\n  .bg_right {\n  position: fixed;\n  right: 0;\n  top: 0;\n  max-width: 60%;\n  max-height: 80%;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9Ib21lYm9va3Mvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFXLEVBQUE7RUFGZjtJQU1ZLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQVA3QjtJQVVZLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYTtJQUNiLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFsQjlCO01Bb0JnQixjQUFhLEVBQUE7RUFwQjdCO01Bb0JnQixjQUFhLEVBQUE7RUFwQjdCO01Bb0JnQixjQUFhLEVBQUE7RUFwQjdCO01Bb0JnQixjQUFhLEVBQUE7RUFwQjdCO0lBd0JZLFVBQVU7SUFDVixpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLGNBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLHNCQUFzQixFQUFBO0VBOUJsQztNQWdDZ0IsV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZLEVBQUE7RUFsQzVCO0lBc0NZLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2QsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQWtCO0lBQ2xCLHFCQUFvQjtJQUNwQixnQkFBZSxFQUFBO0VBL0MzQjtNQWtEZ0IsV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLGFBQVksRUFBQTtFQXRENUI7SUEwRFksaUJBQWdCO0lBQ2hCLGVBQWM7SUFDZCxZQUFXO0lBQ1gsV0FBVTtJQUNWLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLHFFQUFzRSxFQUFBO0VBakVsRjtNQW1FZ0IsaUNBQWlDLEVBQUE7RUFLakQ7RUFDSSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFVO0VBQ1YsV0FBVyxFQUFBO0VBRWY7RUFDSSxlQUFlO0VBQ2YsUUFBTztFQUNQLE1BQUs7RUFDTCxjQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xuICAgIC8vIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICAgIGhlaWdodDo4MHZoO1xuICAgIC5jb250ZW50e1xuICAgICAgICAvLyBib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAuZmluZF90ZXh0e1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFydm87XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaF9ib3h7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgY29sb3I6IzUwNjdlYjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHggMHB4IDBweCAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OlJvYkM7XG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVye1xuICAgICAgICAgICAgICAgIGNvbG9yOiM1MDY3ZWI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxvY2F0ZV9tZXtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTpSb2JDO1xuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgICAgICBjb2xvcjojNTA2N2ViO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMzVweCAzNXB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgICAuZ3Bze1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdFdyYXBwZXJ7XG4gICAgICAgICAgICBmb250LWZhbWlseTpSb2JDO1xuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjM1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICBcbiAgICAgICAgICAgIC5zY2hvb2xfbGlzdHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAxJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmluZF9je1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6Um9iQztcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjM1cHg7XG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzUwNjdlYiAwJSwgICMzOTM0ZWYgMTAwJSk7XG4gICAgICAgICAgICAmOmhvdmVyIHsgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmJnX2xlZnR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYm90dG9tOjh2aDtcbiAgICB6LWluZGV4OiAtMTtcbn1cbi5iZ19yaWdodHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6MDtcbiAgICB0b3A6MDtcbiAgICBtYXgtd2lkdGg6NjAlO1xuICAgIG1heC1oZWlnaHQ6IDgwJTtcbiAgICB6LWluZGV4OiAtMTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, router) {
        this.data = data;
        this.router = router;
        this.schools = this.data.school;
        console.log(this.schools);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getLocation = function () {
        // if (navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition(this.showLocation);
        // } else {
        //   console.log("Geolocation is not supported by this browser.")
        // }
    };
    HomeComponent.prototype.showLocation = function (position) {
        console.log(position);
    };
    HomeComponent.prototype.findBooks = function () {
        this.router.navigate(['/search']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-12\">\n    <div class=\"row click-to-home-container\">\n      <a href=\"\" class=\"click-to-home\" routerLink=\"/\"> << Press Here to search another school</a>\n    </div>\n    <div class=\"row school-info-container\">\n      <div class=\"col-4\">\n        <!-- logo -->\n        <img class=\"school_logo\" src=\"../../assets/electronlogo.jpg\"/>\n      </div>\n      <div class=\"col-8 carousel\">\n        <!-- slider -->\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src=\"../../assets/slides/1.jpg\" alt=\"First slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" src=\"../../assets/slides/2.jpg\" alt=\"Second slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" src=\"../../assets/slides/3.jpg\" alt=\"Third slide\">\n            </div>\n          </div>\n          <!-- <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"listing-language row align-items-center justify-content-center\">\n      <div class=\"col-4 bg\">\n        <button [ngClass]=\"{'active_english':active_language==='english'}\" (click)=\"changeMediumE()\">English Medium</button>\n        <button [ngClass]=\"{'active_hindi':active_language==='hindi'}\" (click)=\"changeMediumH()\">Hindi Medium</button>\n      </div>\n      \n\n    </div>\n    <div class=\"listing-container row\">\n      <div class=\"list-item-parent col-4\" *ngFor=\"let class of classes\">\n       <div class=\"row list-item\">\n          <div class=\" listing-title\">\n              <p>{{ data.classlist[class].class }}</p>\n            </div>\n            <div class=\" listing-book-count\">\n              <p>{{ data.classlist[class].books.length }} books</p>\n            </div>\n            <div class=\" listing-price\">\n              ₹{{ pricelist[class] }}\n            </div>\n            <div class=\" listing-actions\">\n              <a href=\"javascript:void(0)\" (click)=\"openModal(class,'see')\">SEE BOOKS+</a>\n              <button (click)=\"openModal(class,'buy')\">BUY</button>\n            </div>\n       </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/listing/listing.component.scss":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".click-to-home-container {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column; }\n\n.school-info-container {\n  max-height: 300px; }\n\n.school-info-container .school_logo {\n    width: 165px;\n    height: 165px;\n    max-width: 100%;\n    height: auto;\n    border-radius: 50%; }\n\n.school-info-container .carousel {\n    height: auto; }\n\n.school-info-container .carousel .carousel-inner {\n      border-radius: 15px; }\n\n.school-info-container .carousel .carousel-inner .carousel-item {\n        max-height: 165px; }\n\n.listing-language {\n  margin-top: 20px; }\n\n.listing-language .bg {\n    background: #F0F4FF;\n    border-radius: 25px;\n    padding: 0; }\n\n.listing-language .bg button {\n      width: 50%;\n      border: none;\n      background-color: #F0F4FF;\n      border-radius: 25px;\n      color: black;\n      height: 35px; }\n\n.listing-language .bg .active_english {\n      background-color: #3B39EF;\n      color: white; }\n\n.listing-language .bg .active_hindi {\n      background-color: #3B39EF;\n      color: white; }\n\n.listing-container {\n  justify-content: center; }\n\n.listing-container .list-item-parent {\n    padding: 30px; }\n\n.listing-container .list-item-parent .list-item {\n      min-height: 110px;\n      background: #F0F4FF;\n      border-radius: 20px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n\n.listing-container .list-item-parent .list-item .listing-title {\n        margin-top: 30px; }\n\n.listing-container .list-item-parent .list-item .listing-title p {\n          margin: 0;\n          font-size: 25px; }\n\n.listing-container .list-item-parent .list-item .listing-book-count {\n        color: grey; }\n\n.listing-container .list-item-parent .list-item .listing-book-count p {\n          margin: 0;\n          font-size: 12px; }\n\n.listing-container .list-item-parent .list-item .listing-price {\n        font-size: 24px; }\n\n.listing-container .list-item-parent .list-item .listing-actions {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        justify-content: space-between;\n        margin-bottom: -20px; }\n\n.listing-container .list-item-parent .list-item .listing-actions a {\n          margin-left: 30px;\n          font-size: 12px; }\n\n.listing-container .list-item-parent .list-item .listing-actions button {\n          margin-top: -8px;\n          margin-right: 30px;\n          border: none;\n          background-color: #3B39EF;\n          border-radius: 25px;\n          width: 90px;\n          color: white;\n          height: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9Ib21lYm9va3Mvc3JjL2FwcC9saXN0aW5nL2xpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGlCQUFpQixFQUFBOztBQURyQjtJQUlRLFlBQVc7SUFDWCxhQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0IsRUFBQTs7QUFSMUI7SUFXUSxZQUFXLEVBQUE7O0FBWG5CO01BYVksbUJBQWtCLEVBQUE7O0FBYjlCO1FBZWdCLGlCQUFnQixFQUFBOztBQUtoQztFQUNJLGdCQUFlLEVBQUE7O0FBRG5CO0lBR1EsbUJBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFTLEVBQUE7O0FBTGpCO01BT1ksVUFBUztNQUNULFlBQVk7TUFDWix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixZQUFZLEVBQUE7O0FBWnhCO01BZVkseUJBQXlCO01BQ3pCLFlBQVcsRUFBQTs7QUFoQnZCO01BbUJZLHlCQUF5QjtNQUN6QixZQUFXLEVBQUE7O0FBSXZCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRDNCO0lBR1EsYUFBWSxFQUFBOztBQUhwQjtNQU1ZLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLHVCQUF1QixFQUFBOztBQVpuQztRQWNnQixnQkFBZSxFQUFBOztBQWQvQjtVQWdCb0IsU0FBUTtVQUNSLGVBQWMsRUFBQTs7QUFqQmxDO1FBc0JnQixXQUFVLEVBQUE7O0FBdEIxQjtVQXdCb0IsU0FBUTtVQUNSLGVBQWMsRUFBQTs7QUF6QmxDO1FBNkJnQixlQUFjLEVBQUE7O0FBN0I5QjtRQWlDZ0IsYUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFVO1FBQ1YsOEJBQThCO1FBQzlCLG9CQUFvQixFQUFBOztBQXJDcEM7VUF1Q29CLGlCQUFnQjtVQUNoQixlQUFjLEVBQUE7O0FBeENsQztVQTJDb0IsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1oseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQixXQUFXO1VBQ1gsWUFBWTtVQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpc3RpbmcvbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGljay10by1ob21lLWNvbnRhaW5lcntcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNjaG9vbC1pbmZvLWNvbnRhaW5lcntcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAuc2Nob29sX2xvZ297XG4gICAgICAgIC8vIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICAgICAgICB3aWR0aDoxNjVweDtcbiAgICAgICAgaGVpZ2h0OjE2NXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICAuY2Fyb3VzZWx7XG4gICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAuY2Fyb3VzZWwtaW5uZXJ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgICAgICAuY2Fyb3VzZWwtaXRlbXtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjE2NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmxpc3RpbmctbGFuZ3VhZ2V7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIC5iZ3tcbiAgICAgICAgYmFja2dyb3VuZDojRjBGNEZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEY0RkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmVfZW5nbGlzaHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjM5RUY7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlX2hpbmRpe1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNCMzlFRjtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuLmxpc3RpbmctY29udGFpbmVye1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5saXN0LWl0ZW0tcGFyZW50e1xuICAgICAgICBwYWRkaW5nOjMwcHg7XG4gICAgICAgIC5saXN0LWl0ZW17XG4gICAgICAgICAgICAvLyBib3JkZXI6MXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0YwRjRGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIC5saXN0aW5nLXRpdGxle1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MzBweDtcbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdGluZy1ib29rLWNvdW50e1xuICAgICAgICAgICAgICAgIGNvbG9yOmdyZXk7XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0aW5nLXByaWNle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3RpbmctYWN0aW9uc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDozMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNCMzlFRjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modals_bookListModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/bookListModal */ "./src/app/modals/bookListModal.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





var ListingComponent = /** @class */ (function () {
    function ListingComponent(modalService, data) {
        this.modalService = modalService;
        this.data = data;
        this.active_language = 'english';
        this.classes = [];
        this.pricelist = {};
        this.updateClassesBasedOnMedium();
    }
    ListingComponent.prototype.ngOnInit = function () {
    };
    ListingComponent.prototype.changeMediumE = function () {
        this.active_language = 'english';
        this.updateClassesBasedOnMedium();
    };
    ListingComponent.prototype.changeMediumH = function () {
        this.active_language = 'hindi';
        this.updateClassesBasedOnMedium();
    };
    ListingComponent.prototype.updateClassesBasedOnMedium = function () {
        var _this = this;
        this.classes = this.data.medium[this.active_language];
        this.classes.forEach(function (classname) {
            console.log(classname, _this.data.classlist[classname]);
            var price = 0;
            _this.data.classlist[classname].books.forEach(function (book) {
                console.log(_this.data.booklist[book].price);
                price += _this.data.booklist[book].price;
            });
            console.warn(price);
            _this.pricelist[classname] = price;
        });
    };
    ListingComponent.prototype.openModal = function (grade, where) {
        console.log('open modal', grade);
        var modalRef = this.modalService.open(_modals_bookListModal__WEBPACK_IMPORTED_MODULE_3__["NgbdModalContent"], {
            centered: true,
            windowClass: 'book_list_modal',
            size: 'lg',
        });
        modalRef.componentInstance.name = grade;
        this.data.all = where === 'buy' ? true : false;
        this.data.activeClass = grade;
    };
    ListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.scss */ "./src/app/listing/listing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/modals/bookListModal.html":
/*!*******************************************!*\
  !*** ./src/app/modals/bookListModal.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ modalName }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"book_list\">\n      <div class=\"book\" *ngFor=\"let book of booklist; let i = index\">\n        <div class=\"upper_half\">\n          <img class=\"book_image\" [src]=\"book.image\" onerror=\"this.onerror=null;this.src='../../assets/bookdemo.jpeg'\">\n          <p class=\"title\">{{book.title}}</p>\n          <p class=\"subject\">{{book.subject}}</p>\n        </div>\n        <div class=\"lower_half\">\n          <p class=\"book_price\"> ₹{{book.price}}</p>\n            <a href=\"javascript:void(0)\" (click)=\"toggleSelection(i)\">\n              <div *ngIf=\"book.selected\" class=\"selected_item select_button\">Selected</div>\n              <div *ngIf=\"!book.selected\" class=\"unselected_item select_button\">Select</div>\n            </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <p>{{ totalSelected }} out of {{ booklist.length }} selected, Current Total ₹{{totalPrice}}  </p>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"addToCart()\">Add to Cart</button>\n  </div>"

/***/ }),

/***/ "./src/app/modals/bookListModal.scss":
/*!*******************************************!*\
  !*** ./src/app/modals/bookListModal.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body .book_list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow: scroll;\n  max-height: 50vh; }\n  .modal-body .book_list .book {\n    margin: 20px;\n    min-width: 150px;\n    background: #F0F4FF;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 5px; }\n  .modal-body .book_list .book .upper_half {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin-top: 5px; }\n  .modal-body .book_list .book .upper_half .book_image {\n        border-radius: 20px;\n        width: 120px;\n        height: 120px; }\n  .modal-body .book_list .book .lower_half .book_price {\n      text-align: center; }\n  .modal-body .book_list .book .lower_half a {\n      text-decoration: none; }\n  .modal-body .book_list .book .lower_half a:hover {\n        text-decoration: none; }\n  .modal-body .book_list .book .lower_half a .select_button {\n        background: grey;\n        width: 100px;\n        height: 30px;\n        color: white;\n        border-radius: 20px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center; }\n  .modal-body .book_list .book .lower_half a .selected_item {\n        background: #4f63eb;\n        color: white; }\n  .modal-footer {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n  padding: 0px;\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtoaWxtYXRoZXcvQ29kZS9Ib21lYm9va3Mvc3JjL2FwcC9tb2RhbHMvYm9va0xpc3RNb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBR1EsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTtFQVR2QjtJQVlZLFlBQVc7SUFDWCxnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVcsRUFBQTtFQXBCdkI7TUFzQmdCLGFBQVk7TUFDWixzQkFBc0I7TUFDdEIsbUJBQWtCO01BQ2xCLHVCQUF1QjtNQUN2QixlQUFjLEVBQUE7RUExQjlCO1FBNEJvQixtQkFBa0I7UUFDbEIsWUFBVztRQUNYLGFBQVksRUFBQTtFQTlCaEM7TUEwQ29CLGtCQUFrQixFQUFBO0VBMUN0QztNQTZDb0IscUJBQXFCLEVBQUE7RUE3Q3pDO1FBK0N3QixxQkFBcUIsRUFBQTtFQS9DN0M7UUFrRHdCLGdCQUFlO1FBQ2YsWUFBVztRQUNYLFlBQVc7UUFDWCxZQUFXO1FBQ1gsbUJBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFBO0VBMUQvQztRQWdFd0IsbUJBQW1CO1FBQ25CLFlBQVcsRUFBQTtFQVduQztFQUNJLGFBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixZQUFXO0VBQ1gsaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvYm9va0xpc3RNb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlcntcbiAgICAubW9kYWwtdGl0bGV7XG5cbiAgICB9XG59XG4gICAgLm1vZGFsLWJvZHl7XG4gICAgICAgIC5ib29rX2xpc3R7XG4gICAgICAgICAgICAvLyBib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6NTB2aDtcbiAgICAgICAgICAgIC5ib29re1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjoxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDoxNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNGMEY0RkY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICAgICAgICAudXBwZXJfaGFsZntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVweDtcbiAgICAgICAgICAgICAgICAgICAgLmJvb2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGl0bGV7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViamVjdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjoxcHggc29saWQgcmVkO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvd2VyX2hhbGZ7XG4gICAgICAgICAgICAgICAgICAgIC5ib29rX3ByaWNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RfYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6Z3JleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudW5zZWxlY3RlZF9pdGVte1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWRfaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGY2M2ViO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94e1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1vZGFsLWZvb3RlcntcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modals/bookListModal.ts":
/*!*****************************************!*\
  !*** ./src/app/modals/bookListModal.ts ***!
  \*****************************************/
/*! exports provided: NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal, data) {
        this.activeModal = activeModal;
        this.data = data;
        this.selection = false;
        this.currentClass = null;
        this.booklist = [];
        this.totalSelected = 0;
        this.totalPrice = 0;
        this.modalName = ' class';
    }
    NgbdModalContent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // console.log(this.data.activeClass)
        this.currentClass = this.data.activeClass;
        this.modalName = this.data.classlist[this.data.activeClass].class;
        // console.warn(this.modalName, this.data.classlist[this.data.activeClass])
        this.data.classlist[this.currentClass].books.forEach(function (book) {
            var temp = _this.data.booklist[book];
            temp.selected = _this.data.all;
            if (_this.data.all) {
                _this.totalPrice += temp.price;
                _this.totalSelected += 1;
            }
            else {
                _this.totalPrice = 0;
                _this.totalSelected = 0;
            }
            _this.booklist.push(_this.data.booklist[book]);
        });
        // console.log(this.booklist)
    };
    NgbdModalContent.prototype.toggleSelection = function (i) {
        var tc = 0;
        var tcost = 0;
        this.booklist[i].selected = !this.booklist[i].selected;
        this.booklist.forEach(function (book) {
            if (book.selected) {
                tc += 1;
                tcost += book.price;
            }
        });
        this.totalSelected = tc;
        this.totalPrice = tcost;
    };
    NgbdModalContent.prototype.addToCart = function () {
        var cartObj = {
            activeClass: this.data.activeClass,
            books: this.booklist.filter(function (book) { return book.selected; }),
        };
        this.data.cartObject.push(cartObj);
        console.log(cartObj);
        this.activeModal.dismiss('cart');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-content',
            template: __webpack_require__(/*! ./bookListModal.html */ "./src/app/modals/bookListModal.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./bookListModal.scss */ "./src/app/modals/bookListModal.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.all = true;
        this.activeClass = null;
        this.cartObject = [];
        this.school = [
            'Demo School 1',
            'Demo school 2',
            'Demo school 3'
        ];
        this.medium = {
            english: ['c_01', 'c_02', 'c_03', 'c_04', 'c_05', 'c_06', 'c_07', 'c_08', 'c_09', 'c_10', 'c_11'],
            hindi: ['c_12', 'c_13', 'c_14', 'c_15', 'c_16', 'c_17', 'c_18', 'c_19', 'c_20', 'c_21', 'c_22',]
        };
        this.classlist = {
            c_01: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05'],
                class: 'Kindergarten'
            },
            c_02: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_06'],
                class: 'Class I'
            },
            c_03: {
                books: ['b_01', 'b_02', 'b_03', 'b_05', 'b_06'],
                class: 'Class II'
            },
            c_04: {
                books: ['b_01', 'b_02', 'b_04', 'b_05', 'b_06'],
                class: 'Class III'
            },
            c_05: {
                books: ['b_01', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class IV'
            },
            c_06: {
                books: ['b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class V'
            },
            c_07: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class VI'
            },
            c_08: {
                books: ['b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class VII'
            },
            c_09: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class VIII'
            },
            c_10: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class IX'
            },
            c_11: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class X'
            },
            c_12: {
                books: ['b_01', 'b_02', 'b_03'],
                class: 'Kindergarten'
            },
            c_13: {
                books: ['b_01', 'b_02', 'b_05', 'b_06'],
                class: 'Class I'
            },
            c_14: {
                books: ['b_01', 'b_02', 'b_04', 'b_05', 'b_06'],
                class: 'Class II'
            },
            c_15: {
                books: ['b_01', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class III'
            },
            c_16: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class IV'
            },
            c_17: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class V'
            },
            c_18: {
                books: ['b_01', 'b_05', 'b_06'],
                class: 'Class VI'
            },
            c_19: {
                books: ['b_01', 'b_02', 'b_05', 'b_06'],
                class: 'Class VII'
            },
            c_20: {
                books: ['b_04', 'b_05', 'b_06'],
                class: 'Class VIII'
            },
            c_21: {
                books: ['b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class IX'
            },
            c_22: {
                books: ['b_01', 'b_02', 'b_03', 'b_04', 'b_05', 'b_06'],
                class: 'Class X'
            }
        };
        // Kindergarten Art & Craft, Kindergarten English Assignment, Kindergarten English Work Book, Kindergarten English Practice Book, Kindergarten Maths Assignment, Kindergarten Maths Work Book, Kindergarten Maths Practice Book, Kindergarten Environmental Studies Assign., Kindergarten Environmental Studies W.B., Kindergarten Hindi Work Book, Kindergarten Hindi Practice Book, Kindergarten Rhymes and Story Book, Kindergarten Bal Geet and Story
        this.booklist = {
            b_01: {
                title: 'Art & Craft',
                subject: 'Arts',
                price: 149,
                image: 'https://www.easypeasyandfun.com/wp-content/uploads/2017/12/Tons-of-Art-and-Craft-Ideas-for-Kids-to-Make.jpg',
                author: 'Nikhil ...',
                medium: 'english',
                class: 'c_01',
            },
            b_02: {
                title: 'English Assignment',
                subject: 'English',
                price: 390,
                image: 'https://www.easypeasyandfun.com/wp-content/uploads/2017/12/Tons-of-Art-and-Craft-Ideas-for-Kids-to-Make.jpg',
                author: 'Nikhil Mathew',
                medium: 'english',
                class: 'c_01',
            },
            b_03: {
                title: 'English Work Book',
                subject: 'Mathematics',
                price: 125,
                image: '',
                author: 'Nikhil Mathew',
                medium: 'english',
                class: 'c_01',
            },
            b_04: {
                title: 'Maths',
                subject: 'Maths',
                price: 250,
                image: '',
                author: 'Nikhil Mathew',
                medium: 'hindi',
                class: 'c_01',
            },
            b_05: {
                title: 'EVS',
                subject: 'evs',
                price: 310,
                image: '',
                author: 'Nikhil Mathew',
                medium: 'hindi',
                class: 'c_01',
            },
            b_06: {
                title: 'mathematics',
                subject: 'Maths',
                price: 790,
                image: '',
                author: 'Nikhil Mathew',
                medium: 'hindi',
                class: 'c_01',
            },
        };
        try {
            this.cartObject = JSON.parse(localStorage.getItem('cart'));
            if (!Array.isArray(this.cartObject))
                this.cartObject = [];
        }
        catch (e) {
            this.cartObject = [];
            console.log(e);
        }
        console.log('cart', this.cartObject);
        this.changes();
    }
    DataService.prototype.changes = function () {
        var _this = this;
        setInterval(function () {
            var storage = localStorage.getItem('cart');
            var current = JSON.stringify(_this.cartObject);
            if (storage !== current) {
                localStorage.setItem('cart', current);
            }
        }, 2000);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
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

module.exports = __webpack_require__(/*! /Users/nikhilmathew/Code/Homebooks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map