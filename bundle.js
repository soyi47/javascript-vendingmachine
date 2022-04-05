/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/es/view/HeaderView.js":
/*!***********************************!*\
  !*** ./src/es/view/HeaderView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/es/view/template/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ "./src/es/utils/auth.ts");
/* harmony import */ var _state_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/User */ "./src/es/state/User.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HeaderView = /*#__PURE__*/function () {
  function HeaderView() {
    _classCallCheck(this, HeaderView);

    _defineProperty(this, "$container", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('header'));

    _defineProperty(this, "$title", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.title', this.$container));

    _defineProperty(this, "$goMainButton", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#go-main-button', this.$container));

    _defineProperty(this, "$userArea", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.user-area', this.$container));

    _defineProperty(this, "$loginButton", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#login-button', this.$userArea));

    _defineProperty(this, "$nav", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.nav', this.$container));

    this.$userArea.addEventListener('click', this.onClickUserArea);
  }

  _createClass(HeaderView, [{
    key: "updateOnPageChange",
    value: function updateOnPageChange(page) {
      this.updateTitle(page);
      this.updateMenuButton(page);
    }
  }, {
    key: "onClickUserArea",
    value: function onClickUserArea(event) {
      if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'LI') return;

      if (event.target.name === 'thumbnail-button') {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#member-menu', this.$userArea).classList.toggle('hidden');
      }

      if (event.target.id === 'logout-button') {
        (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.logout)();
      }
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(page) {
      switch (page) {
        case 'login':
          this.$title.innerText = '로그인';
          break;

        case 'signUp':
          this.$title.innerText = '회원가입';
          break;

        case 'updateMyInfo':
          this.$title.innerText = '회원 정보 수정';
          break;

        default:
          this.$title.innerText = '🍿 자판기 🍿';
      }
    }
  }, {
    key: "updateMenuButton",
    value: function updateMenuButton(page) {
      this.updateUserArea();

      if (_state_User__WEBPACK_IMPORTED_MODULE_3__["default"].isMember && page !== 'updateMyInfo') {
        this.showNavigationMenu();
        this.updateNavigationSelectedMenu(page);
      } else {
        this.hideNavigationMenu();
      }

      switch (page) {
        case 'login':
        case 'signUp':
        case 'updateMyInfo':
          this.showGoMainButton();
          this.hideUserArea();
          break;

        default:
          this.hideGoMainButton();
          this.showUserArea();
      }
    }
  }, {
    key: "updateUserArea",
    value: function updateUserArea() {
      if (_state_User__WEBPACK_IMPORTED_MODULE_3__["default"].isMember) {
        this.$userArea.innerHTML = _template__WEBPACK_IMPORTED_MODULE_0__["default"].userAreaContentForMember(_state_User__WEBPACK_IMPORTED_MODULE_3__["default"].name);
      } else {
        this.$userArea.innerHTML = _template__WEBPACK_IMPORTED_MODULE_0__["default"].userAreaContentForNonMember;
      }
    }
  }, {
    key: "showUserArea",
    value: function showUserArea() {
      if (this.$userArea.classList.contains('hidden')) {
        this.$userArea.classList.remove('hidden');
      }
    }
  }, {
    key: "hideUserArea",
    value: function hideUserArea() {
      if (!this.$userArea.classList.contains('hidden')) {
        this.$userArea.classList.add('hidden');
      }
    }
  }, {
    key: "showGoMainButton",
    value: function showGoMainButton() {
      if (this.$goMainButton.classList.contains('hidden')) {
        this.$goMainButton.classList.remove('hidden');
      }
    }
  }, {
    key: "hideGoMainButton",
    value: function hideGoMainButton() {
      if (!this.$goMainButton.classList.contains('hidden')) {
        this.$goMainButton.classList.add('hidden');
      }
    }
  }, {
    key: "showNavigationMenu",
    value: function showNavigationMenu() {
      if (this.$nav.classList.contains('hidden')) {
        this.$nav.classList.remove('hidden');
      }
    }
  }, {
    key: "hideNavigationMenu",
    value: function hideNavigationMenu() {
      if (!this.$nav.classList.contains('hidden')) {
        this.$nav.classList.add('hidden');
      }
    }
  }, {
    key: "updateNavigationSelectedMenu",
    value: function updateNavigationSelectedMenu(page) {
      var _$, _$2;

      (_$ = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.selected', this.$nav)) === null || _$ === void 0 ? void 0 : _$.classList.remove('selected');
      (_$2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)(".nav-menu[data-page*=\"".concat(page, "\"]"))) === null || _$2 === void 0 ? void 0 : _$2.classList.add('selected');
    }
  }]);

  return HeaderView;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new HeaderView());

/***/ }),

/***/ "./src/es/view/LoginPageView.js":
/*!**************************************!*\
  !*** ./src/es/view/LoginPageView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/page */ "./src/es/view/template/page.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ "./src/es/utils/auth.ts");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var LoginPageView = /*#__PURE__*/_createClass(function LoginPageView() {
  var _this = this;

  _classCallCheck(this, LoginPageView);

  _defineProperty(this, "loadPage", function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.main').innerHTML = _template_page__WEBPACK_IMPORTED_MODULE_0__["default"].loginPage;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#login-form').addEventListener('submit', _this.onSubmitLoginForm);
  });

  _defineProperty(this, "onSubmitLoginForm", function (event) {
    event.preventDefault();
    var loginInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInnerInputValues)(event.target);
    (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.login)(loginInfo);
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginPageView());

/***/ }),

/***/ "./src/es/view/ProductManagementPageView.js":
/*!**************************************************!*\
  !*** ./src/es/view/ProductManagementPageView.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/page */ "./src/es/view/template/page.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./src/es/view/template/index.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator */ "./src/es/validator.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/es/constants/index.ts");
/* harmony import */ var _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manager/ProductManagementPageManager */ "./src/es/manager/ProductManagementPageManager.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ProductManagementPageView = /*#__PURE__*/function () {
  function ProductManagementPageView() {
    var _this = this;

    _classCallCheck(this, ProductManagementPageView);

    _defineProperty(this, "renderMethodList", void 0);

    _defineProperty(this, "$addFormSection", void 0);

    _defineProperty(this, "$addForm", void 0);

    _defineProperty(this, "$tableSection", void 0);

    _defineProperty(this, "$table", void 0);

    _defineProperty(this, "isTableUpdating", void 0);

    _defineProperty(this, "loadPage", function () {
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.$)('main').innerHTML = _template_page__WEBPACK_IMPORTED_MODULE_0__["default"].productManagementPage;

      _this.setDOM();

      _this.render({
        state: _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__["default"].getState(),
        changeStates: Object.keys(_this.renderMethodList)
      });

      _this.setEvents();
    });

    _defineProperty(this, "render", function (_ref) {
      var state = _ref.state,
          changeStates = _ref.changeStates;
      var renderMethods = changeStates.reduce(function (previous, stateKey) {
        _this.renderMethodList[stateKey].forEach(function (renderMethod) {
          return previous.add(renderMethod);
        });

        return previous;
      }, new Set());
      renderMethods.forEach(function (renderMethod) {
        return renderMethod(state);
      });
    });

    _defineProperty(this, "onSubmitAddProductForm", function (event) {
      event.preventDefault();
      var product = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInnerInputValues)(event.target);

      try {
        (0,_validator__WEBPACK_IMPORTED_MODULE_2__.validateProduct)(product);
      } catch (error) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(error.message);
        return;
      }

      _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__["default"].addOrUpdateProduct(product);
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.clearInnerInputValues)(event.target);
    });

    _defineProperty(this, "onClickTableInnerButton", function (event) {
      if (event.target.type !== 'button') return;

      switch (event.target.name) {
        case 'product-update':
          _this.onClickUpdateButton(event);

          break;

        case 'product-delete':
          _this.onClickDeleteButton(event);

          break;

        case 'product-update-confirm':
          _this.onClickUpdateConfirmButton(event);

          break;

        case 'product-update-cancel':
          _this.onClickUpdateCancelButton(event);

          break;

        default:
          break;
      }
    });

    _defineProperty(this, "drawProductList", function (_ref2) {
      var products = _ref2.products;
      var productItem = _template__WEBPACK_IMPORTED_MODULE_1__["default"].productTableRows(products);
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.$)('tbody', _this.$table).innerHTML = productItem;
    });

    _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__["default"].addSubscriber(this.render);
    this.setRenderMethodList();
    this.isTableUpdating = false;
  }

  _createClass(ProductManagementPageView, [{
    key: "setDOM",
    value: function setDOM() {
      this.$addFormSection = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.$)('#add-product-form-section');
      this.$addForm = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.$)('#add-product-form', this.$addFormSection);
      this.$tableSection = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.$)('#product-table-section');
      this.$table = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.$)('#product-table', this.$tableSection);
    }
  }, {
    key: "setRenderMethodList",
    value: function setRenderMethodList() {
      this.renderMethodList = {
        products: [this.drawProductList]
      };
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.$addForm.addEventListener('submit', this.onSubmitAddProductForm);
      this.$table.addEventListener('click', this.onClickTableInnerButton);
    }
  }, {
    key: "onClickUpdateButton",
    value: function onClickUpdateButton(_ref3) {
      var $target = _ref3.target;

      if (this.isTableUpdating) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_4__.GUIDE_MESSAGE.ONE_PRODUCT_UPDATE_AT_ONCE);
        return;
      }

      this.isTableUpdating = !this.isTableUpdating;
      var $tableRow = $target.closest('tr');
      if (!$tableRow) return;
      var productIndex = $tableRow.dataset.primaryKey;

      var _ProductManagementPag = _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__["default"].getState(),
          products = _ProductManagementPag.products;

      $tableRow.innerHTML = _template__WEBPACK_IMPORTED_MODULE_1__["default"].productTableRowUpdate(products[productIndex]);
    }
  }, {
    key: "onClickUpdateConfirmButton",
    value: function onClickUpdateConfirmButton(_ref4) {
      var $target = _ref4.target;
      var $tableRow = $target.closest('tr');
      if (!$tableRow) return;
      var productIndex = $tableRow.dataset.primaryKey;
      var product = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getInnerInputValues)($tableRow);

      try {
        (0,_validator__WEBPACK_IMPORTED_MODULE_2__.validateProduct)(product);
      } catch (error) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(error.message);
        return;
      }

      _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__["default"].updateProduct(productIndex, product);
      this.isTableUpdating = !this.isTableUpdating;
    }
  }, {
    key: "onClickUpdateCancelButton",
    value: function onClickUpdateCancelButton(_ref5) {
      var $target = _ref5.target;
      var $tableRow = $target.closest('tr');
      if (!$tableRow) return;
      var productIndex = $tableRow.dataset.primaryKey;

      var _ProductManagementPag2 = _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__["default"].getState(),
          products = _ProductManagementPag2.products;

      $tableRow.innerHTML = _template__WEBPACK_IMPORTED_MODULE_1__["default"].productTableRowInners(products[productIndex]);
      this.isTableUpdating = !this.isTableUpdating;
    }
  }, {
    key: "onClickDeleteButton",
    value: function onClickDeleteButton(_ref6) {
      var $target = _ref6.target;
      if (!confirm(_constants__WEBPACK_IMPORTED_MODULE_4__.GUIDE_MESSAGE.PRODUCT_DELETE_CONFIRM)) return;
      var $tableRow = $target.closest('tr');
      if (!$tableRow) return;
      var productIndex = $tableRow.dataset.primaryKey;
      _manager_ProductManagementPageManager__WEBPACK_IMPORTED_MODULE_5__["default"].removeProductByIndex(productIndex);
    }
  }]);

  return ProductManagementPageView;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductManagementPageView());

/***/ }),

/***/ "./src/es/view/ProductPurchasePageView.js":
/*!************************************************!*\
  !*** ./src/es/view/ProductPurchasePageView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/es/view/template/index.js");
/* harmony import */ var _template_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/page */ "./src/es/view/template/page.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ "./src/es/validator.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/es/constants/index.ts");
/* harmony import */ var _manager_ProductPurchasePageManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manager/ProductPurchasePageManager */ "./src/es/manager/ProductPurchasePageManager.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ProductPurchasePageView = /*#__PURE__*/function () {
  function ProductPurchasePageView() {
    var _this = this;

    _classCallCheck(this, ProductPurchasePageView);

    _defineProperty(this, "renderMethodList", void 0);

    _defineProperty(this, "$customerChargeForm", void 0);

    _defineProperty(this, "$productTableSection", void 0);

    _defineProperty(this, "$productTable", void 0);

    _defineProperty(this, "loadPage", function () {
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('main').innerHTML = _template_page__WEBPACK_IMPORTED_MODULE_1__["default"].productPurchasePage;

      _this.setDOM();

      _this.render({
        state: _objectSpread({}, _manager_ProductPurchasePageManager__WEBPACK_IMPORTED_MODULE_5__["default"].getState()),
        changeStates: Object.keys(_this.renderMethodList)
      });

      _this.setEvents();
    });

    _defineProperty(this, "onSubmitCustomerChargeForm", function (event) {
      event.preventDefault();

      var _getInnerInputValues = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getInnerInputValues)(event.target),
          customerCharge = _getInnerInputValues.customerCharge;

      try {
        (0,_validator__WEBPACK_IMPORTED_MODULE_3__.validateCustomerChargeToAdd)(customerCharge);
      } catch (err) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(err.message);
        return;
      }

      _manager_ProductPurchasePageManager__WEBPACK_IMPORTED_MODULE_5__["default"].addCustomerCharge(customerCharge);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clearInnerInputValues)(event.target);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_4__.GUIDE_MESSAGE.CUSTOMER_CHARGE_SUCCESS);
    });

    _defineProperty(this, "onClickTableInnerButton", function (event) {
      if (event.target.type !== 'button') return;

      if (event.target.name === 'product-purchase') {
        _this.onClickPurchaseButton(event);
      }
    });

    _defineProperty(this, "onClickPurchaseButton", function (event) {
      var $tableRow = event.target.closest('tr');
      if (!$tableRow) return;
      var productIndex = $tableRow.dataset.primaryKey;
      var productName = '';

      try {
        productName = _manager_ProductPurchasePageManager__WEBPACK_IMPORTED_MODULE_5__["default"].purchaseProductByIndex(productIndex);
      } catch (err) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(err.message);
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_4__.GUIDE_MESSAGE.PURCHASE_SUCCESS(productName));
    });

    _defineProperty(this, "onClickReturnChangeButton", function () {
      var coinsToBeReturned = _manager_ProductPurchasePageManager__WEBPACK_IMPORTED_MODULE_5__["default"].returnChanges();

      _this.updateChangeTable({
        ReturnedCoins: coinsToBeReturned
      });

      if (_manager_ProductPurchasePageManager__WEBPACK_IMPORTED_MODULE_5__["default"].getState().customerChargeAmount > 0) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_4__.GUIDE_MESSAGE.RETURN_INSUFFICIENT_CHANGES);
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_4__.GUIDE_MESSAGE.RETURN_CHANGES_SUCCESS);
    });

    _defineProperty(this, "render", function (_ref) {
      var state = _ref.state,
          changeStates = _ref.changeStates;
      var renderMethods = changeStates.reduce(function (previous, stateKey) {
        _this.renderMethodList[stateKey].forEach(function (renderMethod) {
          return previous.add(renderMethod);
        });

        return previous;
      }, new Set());
      renderMethods.forEach(function (renderMethod) {
        return renderMethod(state);
      });
    });

    _defineProperty(this, "updateTotalCustomerCharge", function (_ref2) {
      var customerChargeAmount = _ref2.customerChargeAmount;
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#total-customer-charge').innerText = "".concat(customerChargeAmount.toLocaleString(), "\uC6D0");
    });

    _defineProperty(this, "updateProductList", function (_ref3) {
      var products = _ref3.products;
      var productItem = _template__WEBPACK_IMPORTED_MODULE_0__["default"].productPurchaseTableRows(products);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('tbody', _this.$productTable).innerHTML = productItem;
    });

    _defineProperty(this, "updateChangeTable", function (_ref4) {
      var ReturnedCoins = _ref4.ReturnedCoins;
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('tbody', _this.$changeTable).innerHTML = _template__WEBPACK_IMPORTED_MODULE_0__["default"].coinTableRows(ReturnedCoins);
    });

    _manager_ProductPurchasePageManager__WEBPACK_IMPORTED_MODULE_5__["default"].addSubscriber(this.render);
    this.setRenderMethodList();
  }

  _createClass(ProductPurchasePageView, [{
    key: "setDOM",
    value: function setDOM() {
      this.$customerChargeForm = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#customer-charge-form');
      this.$productTableSection = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#product-table-section');
      this.$productTable = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#product-table', this.$productTableSection);
      this.$changeTableSection = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#change-table-section');
      this.$changeTable = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#change-table', this.$changeTableSection);
      this.$returnChangeButton = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#return-change-button', this.$changeTableSection);
    }
  }, {
    key: "setRenderMethodList",
    value: function setRenderMethodList() {
      this.renderMethodList = {
        products: [this.updateProductList],
        vendingMachineChargeCoins: [],
        customerChargeAmount: [this.updateTotalCustomerCharge]
      };
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.$customerChargeForm.addEventListener('submit', this.onSubmitCustomerChargeForm);
      this.$productTable.addEventListener('click', this.onClickTableInnerButton);
      this.$returnChangeButton.addEventListener('click', this.onClickReturnChangeButton);
    }
  }]);

  return ProductPurchasePageView;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductPurchasePageView());

/***/ }),

/***/ "./src/es/view/SignUpPageView.js":
/*!***************************************!*\
  !*** ./src/es/view/SignUpPageView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/page */ "./src/es/view/template/page.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ "./src/es/utils/auth.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ "./src/es/validator.ts");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SignUpPageView = /*#__PURE__*/_createClass(function SignUpPageView() {
  var _this = this;

  _classCallCheck(this, SignUpPageView);

  _defineProperty(this, "loadPage", function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.main').innerHTML = _template_page__WEBPACK_IMPORTED_MODULE_0__["default"].signUpPage;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#signup-form').addEventListener('submit', _this.onSubmitSignUpForm);
  });

  _defineProperty(this, "onSubmitSignUpForm", function (event) {
    event.preventDefault();

    var _getInnerInputValues = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInnerInputValues)(event.target),
        email = _getInnerInputValues.email,
        name = _getInnerInputValues.name,
        password = _getInnerInputValues.password,
        passwordConfirm = _getInnerInputValues.passwordConfirm;

    try {
      (0,_validator__WEBPACK_IMPORTED_MODULE_3__.validateUserInfo)({
        email: email,
        name: name,
        password: password,
        passwordConfirm: passwordConfirm
      });
    } catch (err) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.showSnackBar)(err.message);
      return;
    }

    (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.signUp)({
      email: email,
      name: name,
      password: password
    });
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SignUpPageView());

/***/ }),

/***/ "./src/es/view/UpdateMyInfoPageView.js":
/*!*********************************************!*\
  !*** ./src/es/view/UpdateMyInfoPageView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/page */ "./src/es/view/template/page.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ "./src/es/utils/auth.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ "./src/es/validator.ts");
/* harmony import */ var _state_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/User */ "./src/es/state/User.ts");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var UpdateMyInfoPageView = /*#__PURE__*/_createClass(function UpdateMyInfoPageView() {
  var _this = this;

  _classCallCheck(this, UpdateMyInfoPageView);

  _defineProperty(this, "loadPage", function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('.main').innerHTML = _template_page__WEBPACK_IMPORTED_MODULE_0__["default"].updateMyInfoPage({
      email: _state_User__WEBPACK_IMPORTED_MODULE_4__["default"].email,
      name: _state_User__WEBPACK_IMPORTED_MODULE_4__["default"].name
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.$)('#update-my-info-form').addEventListener('submit', _this.onSubmitUpdateMyInfoForm);
  });

  _defineProperty(this, "onSubmitUpdateMyInfoForm", function (event) {
    event.preventDefault();

    var _getInnerInputValues = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInnerInputValues)(event.target),
        email = _getInnerInputValues.email,
        name = _getInnerInputValues.name,
        password = _getInnerInputValues.password,
        passwordConfirm = _getInnerInputValues.passwordConfirm;

    try {
      (0,_validator__WEBPACK_IMPORTED_MODULE_3__.validateUserInfo)({
        email: email,
        name: name,
        password: password,
        passwordConfirm: passwordConfirm
      });
    } catch (err) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.showSnackBar)(err.message);
      return;
    }

    (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.updateUserInfo)({
      email: email,
      name: name,
      password: password
    });
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UpdateMyInfoPageView());

/***/ }),

/***/ "./src/es/view/VendingMachineChargeManagementPageView.js":
/*!***************************************************************!*\
  !*** ./src/es/view/VendingMachineChargeManagementPageView.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/page */ "./src/es/view/template/page.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./src/es/view/template/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ "./src/es/validator.ts");
/* harmony import */ var _manager_VendingMachineChargeManagementPageManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager/VendingMachineChargeManagementPageManager */ "./src/es/manager/VendingMachineChargeManagementPageManager.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var VendingMachineChargeManagementPageView = /*#__PURE__*/function () {
  function VendingMachineChargeManagementPageView() {
    var _this = this;

    _classCallCheck(this, VendingMachineChargeManagementPageView);

    _defineProperty(this, "renderMethodList", void 0);

    _defineProperty(this, "$vendingMachineChargeForm", void 0);

    _defineProperty(this, "$vendingMachineChargeCoinTable", void 0);

    _defineProperty(this, "loadPage", function () {
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('main').innerHTML = _template_page__WEBPACK_IMPORTED_MODULE_0__["default"].vendingMachineChargeManagementPage;

      _this.setDOM();

      _this.render({
        state: _manager_VendingMachineChargeManagementPageManager__WEBPACK_IMPORTED_MODULE_4__["default"].getState(),
        changeStates: Object.keys(_this.renderMethodList)
      });

      _this.setEvents();
    });

    _defineProperty(this, "render", function (_ref) {
      var state = _ref.state,
          changeStates = _ref.changeStates;
      var renderMethods = changeStates.reduce(function (previous, stateKey) {
        _this.renderMethodList[stateKey].forEach(function (renderMethod) {
          return previous.add(renderMethod);
        });

        return previous;
      }, new Set());
      renderMethods.forEach(function (renderMethod) {
        return renderMethod(state);
      });
    });

    _defineProperty(this, "updateTotalVendingMachineCharge", function () {
      var totalAmount = _manager_VendingMachineChargeManagementPageManager__WEBPACK_IMPORTED_MODULE_4__["default"].getTotalAmount();
      _this.$totalVendingMachineCharge.innerText = "".concat(totalAmount.toLocaleString(), "\uC6D0");
    });

    _defineProperty(this, "updateVendingMachineChargeCoinTable", function (_ref2) {
      var coins = _ref2.coins;
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('tbody', _this.$vendingMachineChargeTable).innerHTML = _template__WEBPACK_IMPORTED_MODULE_1__["default"].coinTableRows(coins);
    });

    _manager_VendingMachineChargeManagementPageManager__WEBPACK_IMPORTED_MODULE_4__["default"].addSubscriber(this.render);
    this.setRenderMethodList();
  }

  _createClass(VendingMachineChargeManagementPageView, [{
    key: "setDOM",
    value: function setDOM() {
      this.$vendingMachineChargeForm = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#vendingmachine-charge-form');
      this.$vendingMachineChargeCoinTable = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#holding-amount-table');
      this.$vendingMachineChargeTable = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#vendingmachine-charge-table');
      this.$totalVendingMachineCharge = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('#total-vendingmachine-charge');
    }
  }, {
    key: "setRenderMethodList",
    value: function setRenderMethodList() {
      this.renderMethodList = {
        coins: [this.updateTotalVendingMachineCharge, this.updateVendingMachineChargeCoinTable]
      };
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.$vendingMachineChargeForm.addEventListener('submit', this.onSubmitVendingMachineChargeForm);
    }
  }, {
    key: "onSubmitVendingMachineChargeForm",
    value: function onSubmitVendingMachineChargeForm(event) {
      event.preventDefault();
      var $vendingMachineChargeInput = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.$)('input', event.target);
      var totalAmount = _manager_VendingMachineChargeManagementPageManager__WEBPACK_IMPORTED_MODULE_4__["default"].getTotalAmount();

      try {
        (0,_validator__WEBPACK_IMPORTED_MODULE_3__.validateHoldingAmountToAdd)(Number($vendingMachineChargeInput.value), totalAmount);
      } catch (error) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showSnackBar)(error.message);
        return;
      }

      _manager_VendingMachineChargeManagementPageManager__WEBPACK_IMPORTED_MODULE_4__["default"].addCharge($vendingMachineChargeInput.value);
      $vendingMachineChargeInput.value = '';
    }
  }]);

  return VendingMachineChargeManagementPageView;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new VendingMachineChargeManagementPageView());

/***/ }),

/***/ "./src/es/view/template/index.js":
/*!***************************************!*\
  !*** ./src/es/view/template/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/es/constants/index.ts");

var template = {
  userAreaContentForMember: function userAreaContentForMember(name) {
    return "\n    <button type=\"button\" id=\"user-thumbnail-button\" name=\"thumbnail-button\" class=\"thumbnail-button\">".concat(name[0], "</button>\n    <ul id=\"member-menu\" class=\"hidden\">\n      <li data-page=\"updateMyInfo\">\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</li>\n      <li id=\"logout-button\">\uB85C\uADF8\uC544\uC6C3</li>\n    </ul>\n  ");
  },
  userAreaContentForNonMember: '<button id="login-button" class="button" data-page="login">로그인</button>',
  productTableRowInners: function productTableRowInners(_ref) {
    var name = _ref.name,
        price = _ref.price,
        quantity = _ref.quantity;
    return "\n    <td>".concat(name, "</td>\n    <td>").concat(price.toLocaleString(), "</td>\n    <td>").concat(quantity, "</td>\n    <td>\n      <div class=\"button-group\">\n        <button class=\"button product-update-button\" name=\"product-update\" type=\"button\">\uC218\uC815</button>\n        <button class=\"button product-delete-button\" name=\"product-delete\" type=\"button\">\uC0AD\uC81C</button>\n      </div>\n    </td>\n  ");
  },
  productTableRows: function productTableRows(products) {
    return products.map(function (_ref2, index) {
      var name = _ref2.name,
          price = _ref2.price,
          quantity = _ref2.quantity;
      return "\n        <tr data-primary-key=\"".concat(index, "\">\n          ").concat(template.productTableRowInners({
        name: name,
        price: price,
        quantity: quantity
      }), "\n        </tr>");
    }).join('');
  },
  productTableRowUpdate: function productTableRowUpdate(_ref3) {
    var name = _ref3.name,
        price = _ref3.price,
        quantity = _ref3.quantity;
    return "\n    <td><input type=\"text\" name=\"name\" placeholder=\"\uC0C1\uD488\uBA85\" value=\"".concat(name, "\"></td>\n    <td><input type=\"number\" name=\"price\" placeholder=\"\uAC00\uACA9\" value=\"").concat(price, "\"></td>\n    <td><input type=\"number\" name=\"quantity\" placeholder=\"\uC218\uB7C9\" value=\"").concat(quantity, "\"></td>\n    <td>\n      <div class=\"button-group\">\n        <button class=\"button product-update-confirm-button\" name=\"product-update-confirm\" type=\"button\">\uD655\uC778</button>\n        <button class=\"button product-update-cancel-button\" name=\"product-update-cancel\" type=\"button\">\uCDE8\uC18C</button>\n      </div>\n    </td>\n  ");
  },
  productPurchaseTableRowInners: function productPurchaseTableRowInners(_ref4) {
    var name = _ref4.name,
        price = _ref4.price,
        quantity = _ref4.quantity;
    return "\n    <td>".concat(name, "</td>\n    <td>").concat(price.toLocaleString(), "</td>\n    <td>").concat(quantity, "</td>\n    <td>\n      <button class=\"button product-purchase-button\" name=\"product-purchase\" type=\"button\">\uAD6C\uB9E4</button>\n    </td>\n  ");
  },
  productPurchaseTableRows: function productPurchaseTableRows(products) {
    return products.map(function (_ref5, index) {
      var name = _ref5.name,
          price = _ref5.price,
          quantity = _ref5.quantity;
      return "\n      <tr data-primary-key=\"".concat(index, "\">\n        ").concat(template.productPurchaseTableRowInners({
        name: name,
        price: price,
        quantity: quantity
      }), "\n      </tr>");
    }).join('');
  },
  coinTableRows: function coinTableRows(coins) {
    return coins.map(function (coin, index) {
      return "\n        <tr>\n          <td>".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.COIN_TYPE[index], "\uC6D0</td>\n          <td>").concat(coin.toLocaleString(), "\uAC1C</td>\n        </tr>");
    }).join('');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);

/***/ }),

/***/ "./src/es/view/template/page.js":
/*!**************************************!*\
  !*** ./src/es/view/template/page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pageTemplate = {
  loginPage: "\n    <section class=\"user-information-form-section\">\n        <form id=\"login-form\" >\n            <label>\uC774\uBA54\uC77C<br>\n                <input type=\"email\" name=\"email\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n            </label>\n            <label>\uBE44\uBC00\uBC88\uD638<br>\n                <input type=\"password\" name=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n            </label>\n            <button class=\"button accent\">\uD655\uC778</button>\n        </form>\n        <label>\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?<button class=\"text-button\" data-page=\"signUp\">\uD68C\uC6D0\uAC00\uC785</button></label>\n    </section>\n  ",
  signUpPage: "\n    <section class=\"user-information-form-section\">\n        <form id=\"signup-form\" >\n            <label>\uC774\uBA54\uC77C<br>\n                <input type=\"email\" name=\"email\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n            </label>\n            <label>\uC774\uB984<br>\n                <input type=\"text\" name=\"name\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n            </label>\n            <label>\uBE44\uBC00\uBC88\uD638<br>\n                <p class=\"input-guide\">\uB300\uBB38\uC790 \uC54C\uD30C\uBCB3, \uC18C\uBB38\uC790 \uC54C\uD30C\uBCB3, \uC22B\uC790\uB97C \uAC01\uAC01 1\uC790 \uC774\uC0C1 \uD3EC\uD568\uD558\uB294 \uC804\uCCB4 8\uC790 \uC774\uC0C1\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.</p>\n                <input type=\"password\" name=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n            </label>\n            <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778<br>\n                <input type=\"password\" name=\"passwordConfirm\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n            </label>\n            <button class=\"button accent\">\uD655\uC778</button>\n        </form>\n    </section>\n  ",
  updateMyInfoPage: function updateMyInfoPage(_ref) {
    var email = _ref.email,
        name = _ref.name;
    return "\n    <section class=\"user-information-form-section\">\n      <form id=\"update-my-info-form\" >\n          <label>\uC774\uBA54\uC77C<br>\n              <input type=\"email\" name=\"email\" value=".concat(email, " disabled>\n          </label>\n          <label>\uC774\uB984<br>\n              <input type=\"text\" name=\"name\" value=").concat(name, " placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n          </label>\n          <label>\uBE44\uBC00\uBC88\uD638<br>\n              <p class=\"input-guide\">\uB300\uBB38\uC790 \uC54C\uD30C\uBCB3, \uC18C\uBB38\uC790 \uC54C\uD30C\uBCB3, \uC22B\uC790\uB97C \uAC01\uAC01 1\uC790 \uC774\uC0C1 \uD3EC\uD568\uD558\uB294 \uC804\uCCB4 8\uC790 \uC774\uC0C1\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.</p>\n              <input type=\"password\" name=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n          </label>\n          <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778<br>\n              <input type=\"password\" name=\"passwordConfirm\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\">\n          </label>\n          <button class=\"button accent\">\uD655\uC778</button>\n      </form>\n    </section>\n  ");
  },
  productManagementPage: "\n    <section id=\"add-product-form-section\" class=\"form-section\">\n      <form id=\"add-product-form\">\n          <label form=\"add-product-form\">\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n          <table id=\"add-product-table\" class=\"table\">\n                <thead>\n                    <tr>\n                        <th width=\"24%\">\uC0C1\uD488\uBA85</th>\n                        <th width=\"24%\">\uAC00\uACA9</th>\n                        <th width=\"24%\">\uC218\uB7C9</th>\n                        <th width=\"18%\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><input type=\"text\" name=\"name\" placeholder=\"\uC0C1\uD488\uBA85\" form=\"add-product-form\" required></td>\n                        <td><input type=\"number\" name=\"price\" placeholder=\"\uAC00\uACA9\" form=\"add-product-form\" required></td>\n                        <td><input type=\"number\" name=\"quantity\" placeholder=\"\uC218\uB7C9\" form=\"add-product-form\" required></td>\n                        <td><button id=\"add-product-submit-button\" class=\"button accent\">\uCD94\uAC00</button></td>\n                    </tr>\n                </tbody>\n            </table>\n      </form>\n    </section>\n    <section id=\"product-table-section\" class=\"table-section\">\n      <table id=\"product-table\" class=\"table\">\n          <caption>\uC0C1\uD488 \uD604\uD669</caption>\n          <thead>\n              <tr>\n                  <th width=\"22%\">\uC0C1\uD488\uBA85</th>\n                  <th width=\"22%\">\uAC00\uACA9</th>\n                  <th width=\"22%\">\uC218\uB7C9</th>\n                  <th width=\"34%\"></th>\n              </tr>\n          </thead>\n          <tbody>\n          </tbody>\n      </table>\n    </section>\n  ",
  vendingMachineChargeManagementPage: "\n    <section id=\"vendingmachine-charge-form-section\" class=\"form-section\">\n      <form id=\"vendingmachine-charge-form\">\n          <label form=\"vendingmachine-charge-form\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694</label>\n          <div class=\"vendingmachine-charge-wrap\">\n              <input type=\"number\" name=\"vendingmachine-charge\" placeholder=\"\uAE08\uC561\" form=\"vendingmachine-charge-form\" required>\n              <button id=\"vendingmachine-charge-submit-button\" class=\"button accent\">\uCD94\uAC00</button>\n          </div>\n      </form>\n      <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span id=\"total-vendingmachine-charge\">0\uC6D0</span></p>\n    </section>\n    <section id=\"vendingmachine-charge-table-section\" class=\"table-section\">\n      <table id=\"vendingmachine-charge-table\" class=\"table\">\n          <caption>\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804</caption>\n          <thead>\n              <tr><th>\uB3D9\uC804</th><th>\uAC1C\uC218</th></tr>\n          </thead>\n          <tbody>\n              <tr><td>500\uC6D0</td><td>0\uAC1C</td></tr>\n              <tr><td>100\uC6D0</td><td>0\uAC1C</td></tr>\n              <tr><td>50\uC6D0</td><td>0\uAC1C</td></tr>\n              <tr><td>10\uC6D0</td><td>0\uAC1C</td></tr>\n          </tbody>\n      </table>\n    </section>\n  ",
  productPurchasePage: "\n    <section id=\"customer-charge-form-section\" class=\"form-section\">\n      <form id=\"customer-charge-form\">\n          <label form=\"customer-charge-form\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694</label>\n          <div class=\"customer-charge-wrap\">\n              <input type=\"number\" name=\"customerCharge\" placeholder=\"\uAE08\uC561\" form=\"customer-charge-form\" required>\n              <button id=\"customer-charge-submit-button\" class=\"button accent\">\uD22C\uC785</button>\n          </div>\n      </form>\n      <p>\uD22C\uC785\uD55C \uAE08\uC561: <span id=\"total-customer-charge\">0\uC6D0</span></p>\n    </section>\n    <section id=\"product-table-section\" class=\"table-section\">\n      <table id=\"product-table\" class=\"table\">\n          <caption>\uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669</caption>\n          <thead>\n              <tr>\n                  <th width=\"25%\">\uC0C1\uD488\uBA85</th>\n                  <th width=\"25%\">\uAC00\uACA9</th>\n                  <th width=\"25%\">\uC218\uB7C9</th>\n                  <th width=\"35%\">\uAD6C\uB9E4</th>\n              </tr>\n          </thead>\n          <tbody></tbody>\n      </table>\n      </section>\n      <section id=\"change-table-section\" class=\"table-section\">\n      <table id=\"change-table\" class=\"table\">\n          <caption>\uC794\uB3C8 \uBC18\uD658</caption>\n          <thead>\n              <tr><th>\uB3D9\uC804</th><th>\uAC1C\uC218</th></tr>\n          </thead>\n          <tbody>\n              <tr><td>500\uC6D0</td><td>0\uAC1C</td></tr>\n              <tr><td>100\uC6D0</td><td>0\uAC1C</td></tr>\n              <tr><td>50\uC6D0</td><td>0\uAC1C</td></tr>\n              <tr><td>10\uC6D0</td><td>0\uAC1C</td></tr>\n          </tbody>\n      </table>\n      <button id=\"return-change-button\" class=\"button\">\uBC18\uD658</button>\n    </section>\n  "
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageTemplate);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/es/constants/index.ts":
/*!***********************************!*\
  !*** ./src/es/constants/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COIN_TYPE": () => (/* binding */ COIN_TYPE),
/* harmony export */   "VENDING_MACHINE_CONDITION": () => (/* binding */ VENDING_MACHINE_CONDITION),
/* harmony export */   "USER_INFO_CONDITION": () => (/* binding */ USER_INFO_CONDITION),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "GUIDE_MESSAGE": () => (/* binding */ GUIDE_MESSAGE)
/* harmony export */ });
var COIN_TYPE = [500, 100, 50, 10].sort(function (a, b) { return b - a; });
var VENDING_MACHINE_CONDITION = {
    MONEY_UNIT: 10,
    MIN_PRODUCT_NAME_LENGTH: 1,
    MAX_PRODUCT_NAME_LENGTH: 10,
    MIN_PRODUCT_PRICE: 100,
    MAX_PRODUCT_PRICE: 10000,
    MIN_PRODUCT_QUANTITY: 1,
    MAX_PRODUCT_QUANTITY: 20,
    MAX_HOLDING_AMOUNT: 100000,
    MAX_CUSTOMER_CHARGE_TO_ADD: 10000
};
var USER_INFO_CONDITION = {
    MIN_NAME_LENGTH: 2,
    MAX_NAME_LENGTH: 6,
    PASSWORD_REGEXP: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
};
var ERROR_MESSAGE = {
    PRODUCT_NAME_REQUIRED: '상품명을 입력해주세요.',
    PRODUCT_NAME_LENGTH: "\uC0C1\uD488\uBA85\uC740 ".concat(VENDING_MACHINE_CONDITION.MIN_PRODUCT_NAME_LENGTH, "\uC790\uC5D0\uC11C ").concat(VENDING_MACHINE_CONDITION.MAX_PRODUCT_NAME_LENGTH, "\uC790\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    PRODUCT_PRICE_ONLY_NUMBER: '상품 가격은 숫자만 입력할 수 있습니다.',
    PRODUCT_PRICE_WRONG_RANGE: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(VENDING_MACHINE_CONDITION.MIN_PRODUCT_PRICE, "\uC6D0\uC5D0\uC11C ").concat(VENDING_MACHINE_CONDITION.MAX_PRODUCT_PRICE, "\uC6D0\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    PRODUCT_PRICE_WRONG_UNIT: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(VENDING_MACHINE_CONDITION.MONEY_UNIT, "\uC6D0 \uB2E8\uC704\uB85C \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    PRODUCT_QUANTITY_ONLY_NUMBER: '상품 수량은 숫자만 입력할 수 있습니다.',
    PRODUCT_QUANTITY_WRONG_RANGE: "\uC0C1\uD488 \uC218\uB7C9\uC740 ".concat(VENDING_MACHINE_CONDITION.MIN_PRODUCT_QUANTITY, "\uAC1C\uC5D0\uC11C \uCD5C\uB300 ").concat(VENDING_MACHINE_CONDITION.MAX_PRODUCT_QUANTITY, "\uAC1C\uAE4C\uC9C0\uB9CC \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    HOLDING_AMOUNT_ONLY_NUMBER: '추가할 보유 금액은 숫자만 입력할 수 있습니다.',
    HOLDING_AMOUNT_WRONG_UNIT: "\uCD94\uAC00\uD560 \uC790\uD310\uAE30 \uBCF4\uC720 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_CONDITION.MONEY_UNIT, "\uC6D0 \uB2E8\uC704\uB85C \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    HOLDING_AMOUNT_WRONG_LIMIT: "\uC790\uD310\uAE30 \uBCF4\uC720 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_CONDITION.MAX_HOLDING_AMOUNT, "\uC6D0\uAE4C\uC9C0 \uCDA9\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    CUSTOMER_CHARGE_ONLY_NUMBER: '상품 구매 금액은 숫자만 입력할 수 있습니다.',
    CUSTOMER_CHARGE_WRONG_UNIT: "\uC0C1\uD488 \uAD6C\uB9E4 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_CONDITION.MONEY_UNIT, "\uC6D0 \uB2E8\uC704\uB85C \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    CUSTOMER_CHARGE_WRONG_LIMIT: "\uC0C1\uD488 \uAD6C\uB9E4 \uAE08\uC561\uC740 \uD55C \uBC88\uC5D0 ".concat(VENDING_MACHINE_CONDITION.MAX_CUSTOMER_CHARGE_TO_ADD, "\uC6D0\uAE4C\uC9C0 \uCDA9\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    USER_NAME_LENGTH: "\uC774\uB984\uC740 ".concat(USER_INFO_CONDITION.MIN_NAME_LENGTH, "\uC790\uC5D0\uC11C ").concat(USER_INFO_CONDITION.MAX_NAME_LENGTH, "\uC790\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
    PASSWORD_CONFIRM: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
    PASSWORD_CONDITION: '비밀번호는 숫자, 소문자 알파벳, 대문자 알파벳 각각 1자 이상을 포함하여 전체 8자 이상이어야 합니다.',
    FAIL_TO_READ_AUTH_INFO: '저장된 Auth 정보를 불러오는데 실패했습니다.'
};
var GUIDE_MESSAGE = {
    PRODUCT_UPDATE_CONFIRM: '이미 존재하는 상품입니다.\n기존 상품 목록에서 덮어씌우시겠습니까?',
    ONE_PRODUCT_UPDATE_AT_ONCE: '한 번에 하나의 상품만 수정 가능합니다.',
    PRODUCT_DELETE_CONFIRM: '정말 해당 상품을 삭제하시겠습니까?',
    CUSTOMER_CHARGE_SUCCESS: '상품 구매 금액 충전 성공! 😆',
    PURCHASE_SUCCESS: function (productName) { return "".concat(productName, " \uAD6C\uC785 \uC131\uACF5! \uD83D\uDE06"); },
    INSUFFICIENT_CHARGE_TO_PURCHASE: '돈이 부족해요! 😥',
    RETURN_CHANGES_SUCCESS: '잔돈 반환 성공! 😆',
    RETURN_INSUFFICIENT_CHANGES: '미안해요. 잔돈이 부족해서 다 돌려줄 수가 없어요. 😥',
    SIGNUP_SUCCESS: '회원가입 성공! 😄',
    SIGNUP_EMAIL_ALREADY_EXISTS: '이미 가입한 이메일입니다.',
    LOGIN_SUCCESS: '로그인 성공! 😄',
    LOGIN_CANNOT_FIND_USER: '등록되지 않은 이메일입니다.',
    LOGIN_INCORRECT_PASSWORD: '잘못된 비밀번호입니다.',
    UPDATE_USER_INFO_SUCCESS: '회원 정보 업데이트 성공! 😄'
};



/***/ }),

/***/ "./src/es/manager/ProductManagementPageManager.ts":
/*!********************************************************!*\
  !*** ./src/es/manager/ProductManagementPageManager.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/es/constants/index.ts");
/* harmony import */ var _state_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/Products */ "./src/es/state/Products.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var ProductManagementPageManager = /** @class */ (function () {
    function ProductManagementPageManager() {
        this.subscribers = [];
    }
    ProductManagementPageManager.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    ProductManagementPageManager.prototype.setState = function (newState) {
        var changeStates = Object.keys(newState);
        var state = __assign(__assign({}, this.getState()), newState);
        if (changeStates.includes('products'))
            _state_Products__WEBPACK_IMPORTED_MODULE_1__["default"].setProducts(newState.products);
        this.subscribers.forEach(function (renderMethod) { return renderMethod({ state: state, changeStates: changeStates }); });
    };
    ProductManagementPageManager.prototype.getState = function () {
        return {
            products: _state_Products__WEBPACK_IMPORTED_MODULE_1__["default"].products
        };
    };
    ProductManagementPageManager.prototype.addProduct = function (product) {
        this.setState({
            products: __spreadArray(__spreadArray([], _state_Products__WEBPACK_IMPORTED_MODULE_1__["default"].products, true), [product], false)
        });
    };
    ProductManagementPageManager.prototype.updateProduct = function (index, product) {
        var updateProducts = __spreadArray([], _state_Products__WEBPACK_IMPORTED_MODULE_1__["default"].products, true);
        updateProducts.splice(index, 1, product);
        this.setState({
            products: updateProducts
        });
    };
    ProductManagementPageManager.prototype.removeProductByIndex = function (index) {
        var updateProducts = __spreadArray([], _state_Products__WEBPACK_IMPORTED_MODULE_1__["default"].products, true);
        updateProducts.splice(index, 1);
        this.setState({
            products: updateProducts
        });
    };
    ProductManagementPageManager.prototype.findProductIndexByName = function (name) {
        return _state_Products__WEBPACK_IMPORTED_MODULE_1__["default"].products.findIndex(function (product) { return product.name === name; });
    };
    ProductManagementPageManager.prototype.addOrUpdateProduct = function (product) {
        var productIndex = this.findProductIndexByName(product.name);
        if (productIndex === -1) {
            this.addProduct(product);
            return;
        }
        if (confirm(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.PRODUCT_UPDATE_CONFIRM)) {
            this.updateProduct(productIndex, product);
        }
    };
    return ProductManagementPageManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductManagementPageManager());


/***/ }),

/***/ "./src/es/manager/ProductPurchasePageManager.ts":
/*!******************************************************!*\
  !*** ./src/es/manager/ProductPurchasePageManager.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/es/constants/index.ts");
/* harmony import */ var _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/CustomerCharge */ "./src/es/state/CustomerCharge.ts");
/* harmony import */ var _state_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/Products */ "./src/es/state/Products.ts");
/* harmony import */ var _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/VendingMachineCharge */ "./src/es/state/VendingMachineCharge.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var ProductPurchasePageManager = /** @class */ (function () {
    function ProductPurchasePageManager() {
        this.subscribers = [];
    }
    ProductPurchasePageManager.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    ProductPurchasePageManager.prototype.setState = function (newState) {
        var changeStates = Object.keys(newState);
        var state = __assign(__assign({}, this.getState()), newState);
        if (changeStates.includes('products'))
            _state_Products__WEBPACK_IMPORTED_MODULE_2__["default"].setProducts(newState.products);
        if (changeStates.includes('vendingMachineChargeCoins'))
            _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__["default"].setCoins(newState.vendingMachineChargeCoins);
        if (changeStates.includes('customerChargeAmount'))
            _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].setAmount(newState.customerChargeAmount);
        this.subscribers.forEach(function (renderMethod) { return renderMethod({ state: state, changeStates: changeStates }); });
    };
    ProductPurchasePageManager.prototype.getState = function () {
        return {
            products: _state_Products__WEBPACK_IMPORTED_MODULE_2__["default"].products,
            vendingMachineChargeCoins: _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__["default"].coins,
            customerChargeAmount: _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].amount
        };
    };
    ProductPurchasePageManager.prototype.addCustomerCharge = function (chargeToAdd) {
        var updatedCharge = _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].amount + chargeToAdd;
        this.setState({
            customerChargeAmount: updatedCharge
        });
    };
    ProductPurchasePageManager.prototype.subtractCustomerCharge = function (chargeToSubtract) {
        if (_state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].amount < chargeToSubtract) {
            throw new Error('Insufficient customer customerCharge!');
        }
        var updatedCharge = _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].amount - chargeToSubtract;
        this.setState({
            customerChargeAmount: updatedCharge
        });
    };
    ProductPurchasePageManager.prototype.purchaseProductByIndex = function (index) {
        var _a = _state_Products__WEBPACK_IMPORTED_MODULE_2__["default"].products[index], name = _a.name, price = _a.price;
        if (price > _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].amount) {
            throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.INSUFFICIENT_CHARGE_TO_PURCHASE);
        }
        this.subtractCustomerCharge(price);
        this.takeOutProductByIndex(index);
        return name;
    };
    ProductPurchasePageManager.prototype.takeOutProductByIndex = function (index, count) {
        if (count === void 0) { count = 1; }
        var updatedProduct = _state_Products__WEBPACK_IMPORTED_MODULE_2__["default"].products[index];
        updatedProduct.quantity -= count;
        var updatedProducts = __spreadArray([], _state_Products__WEBPACK_IMPORTED_MODULE_2__["default"].products, true);
        updatedProducts.splice(index, 1, updatedProduct);
        this.setState({
            products: updatedProducts
        });
    };
    ProductPurchasePageManager.prototype.subtractVendingMachineChargeCoins = function (coinsToBeReturned) {
        var subtractedCoins = _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__["default"].coins.map(function (coin, index) { return coin - coinsToBeReturned[index]; });
        this.setState({
            vendingMachineChargeCoins: subtractedCoins
        });
    };
    ProductPurchasePageManager.prototype.calculateCoinsToBeReturned = function () {
        if (_state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__["default"].getTotalAmount() <= _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].amount) {
            return _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__["default"].coins;
        }
        var coinsToBeReturned = [0, 0, 0, 0];
        var leftCharge = _state_CustomerCharge__WEBPACK_IMPORTED_MODULE_1__["default"].amount;
        _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_TYPE.forEach(function (coin, index) {
            var maxQuantity = Math.floor(leftCharge / coin);
            var returnQuantity = maxQuantity > _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__["default"].coins[index]
                ? _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_3__["default"].coins[index] : maxQuantity;
            coinsToBeReturned[index] = returnQuantity;
            leftCharge -= returnQuantity * coin;
        });
        return coinsToBeReturned;
    };
    ProductPurchasePageManager.prototype.returnChanges = function () {
        var coinsToBeReturned = this.calculateCoinsToBeReturned();
        var amountToBeReturned = coinsToBeReturned.reduce(function (previous, coin, index) { return (previous += _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_TYPE[index] * coin); }, 0);
        this.subtractCustomerCharge(amountToBeReturned);
        this.subtractVendingMachineChargeCoins(coinsToBeReturned);
        return coinsToBeReturned;
    };
    return ProductPurchasePageManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductPurchasePageManager());


/***/ }),

/***/ "./src/es/manager/VendingMachineChargeManagementPageManager.ts":
/*!*********************************************************************!*\
  !*** ./src/es/manager/VendingMachineChargeManagementPageManager.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/es/constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/es/utils/index.ts");
/* harmony import */ var _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/VendingMachineCharge */ "./src/es/state/VendingMachineCharge.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var VendingMachineChargeManagementPageManager = /** @class */ (function () {
    function VendingMachineChargeManagementPageManager() {
        this.subscribers = [];
    }
    VendingMachineChargeManagementPageManager.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    VendingMachineChargeManagementPageManager.prototype.setState = function (newState) {
        var changeStates = Object.keys(newState);
        var state = __assign(__assign({}, this.getState()), newState);
        if (changeStates.includes('coins'))
            _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_2__["default"].setCoins(newState.coins);
        this.subscribers.forEach(function (renderMethod) { return renderMethod({ state: state, changeStates: changeStates }); });
    };
    VendingMachineChargeManagementPageManager.prototype.getState = function () {
        return {
            coins: _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_2__["default"].coins
        };
    };
    VendingMachineChargeManagementPageManager.prototype.getTotalAmount = function () {
        return _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_2__["default"].getTotalAmount();
    };
    VendingMachineChargeManagementPageManager.prototype.getMaxCoinIndex = function (baseAmount) {
        return _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_TYPE.findIndex(function (coin) { return baseAmount >= coin; });
    };
    VendingMachineChargeManagementPageManager.prototype.getRandomCoinsFromAmount = function (amount) {
        var leftAmount = amount;
        var returnCoins = [0, 0, 0, 0];
        while (leftAmount > 0) {
            var coinIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(this.getMaxCoinIndex(leftAmount), _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_TYPE.length - 1);
            var randomCoin = _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_TYPE[coinIndex];
            returnCoins[coinIndex] += 1;
            leftAmount -= randomCoin;
        }
        return returnCoins;
    };
    VendingMachineChargeManagementPageManager.prototype.addCharge = function (amount) {
        var coinsToAdd = this.getRandomCoinsFromAmount(amount);
        var totalCoins = _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_2__["default"].coins.map(function (value, index) { return value + coinsToAdd[index]; });
        this.setState({
            coins: totalCoins
        });
    };
    VendingMachineChargeManagementPageManager.prototype.subtractCoins = function (coinsToBeReturned) {
        var subtractedCoins = _state_VendingMachineCharge__WEBPACK_IMPORTED_MODULE_2__["default"].coins.map(function (coin, index) { return coin - coinsToBeReturned[index]; });
        this.setState({
            coins: subtractedCoins
        });
    };
    return VendingMachineChargeManagementPageManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new VendingMachineChargeManagementPageManager());


/***/ }),

/***/ "./src/es/routes.ts":
/*!**************************!*\
  !*** ./src/es/routes.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initRouteEvent": () => (/* binding */ initRouteEvent),
/* harmony export */   "loadMainPage": () => (/* binding */ loadMainPage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/es/utils/index.ts");
/* harmony import */ var _view_HeaderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/HeaderView */ "./src/es/view/HeaderView.js");
/* harmony import */ var _view_LoginPageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/LoginPageView */ "./src/es/view/LoginPageView.js");
/* harmony import */ var _view_SignUpPageView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/SignUpPageView */ "./src/es/view/SignUpPageView.js");
/* harmony import */ var _view_UpdateMyInfoPageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/UpdateMyInfoPageView */ "./src/es/view/UpdateMyInfoPageView.js");
/* harmony import */ var _view_ProductManagementPageView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/ProductManagementPageView */ "./src/es/view/ProductManagementPageView.js");
/* harmony import */ var _view_VendingMachineChargeManagementPageView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/VendingMachineChargeManagementPageView */ "./src/es/view/VendingMachineChargeManagementPageView.js");
/* harmony import */ var _view_ProductPurchasePageView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/ProductPurchasePageView */ "./src/es/view/ProductPurchasePageView.js");








var mainPage = 'productPurchase';
var path = location.pathname.slice(0, -1);
var loadPageMethods = {
    login: _view_LoginPageView__WEBPACK_IMPORTED_MODULE_2__["default"].loadPage,
    signUp: _view_SignUpPageView__WEBPACK_IMPORTED_MODULE_3__["default"].loadPage,
    updateMyInfo: _view_UpdateMyInfoPageView__WEBPACK_IMPORTED_MODULE_4__["default"].loadPage,
    productManagement: _view_ProductManagementPageView__WEBPACK_IMPORTED_MODULE_5__["default"].loadPage,
    vendingMachineChargeManagement: _view_VendingMachineChargeManagementPageView__WEBPACK_IMPORTED_MODULE_6__["default"].loadPage,
    productPurchase: _view_ProductPurchasePageView__WEBPACK_IMPORTED_MODULE_7__["default"].loadPage
};
function loadPage(page) {
    _view_HeaderView__WEBPACK_IMPORTED_MODULE_1__["default"].updateOnPageChange(page);
    loadPageMethods[page]();
    var paramsObject = { page: page };
    var params = new URLSearchParams(paramsObject);
    history.pushState(paramsObject, '', "".concat(path, "?").concat(params.toString()));
}
var loadMainPage = function () {
    loadPage(mainPage);
};
function initRouteEvent() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#app').addEventListener('click', function (event) {
        var page = event.target.dataset.page;
        if (!page)
            return;
        if (page === 'main') {
            loadMainPage();
            return;
        }
        loadPage(page);
    });
}



/***/ }),

/***/ "./src/es/state/CustomerCharge.ts":
/*!****************************************!*\
  !*** ./src/es/state/CustomerCharge.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CustomerCharge = /** @class */ (function () {
    function CustomerCharge() {
        this.amount = 0;
    }
    CustomerCharge.prototype.setAmount = function (amount) { this.amount = amount; };
    return CustomerCharge;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CustomerCharge());


/***/ }),

/***/ "./src/es/state/Products.ts":
/*!**********************************!*\
  !*** ./src/es/state/Products.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Products = /** @class */ (function () {
    function Products() {
        this.products = [];
    }
    Products.prototype.setProducts = function (products) {
        this.products = products;
    };
    return Products;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Products());


/***/ }),

/***/ "./src/es/state/User.ts":
/*!******************************!*\
  !*** ./src/es/state/User.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var User = /** @class */ (function () {
    function User() {
        this.initialize();
    }
    User.prototype.initialize = function () {
        this.isMember = false;
        this.id = null;
        this.email = null;
        this.name = null;
    };
    User.prototype.setUser = function (_a) {
        var id = _a.id, email = _a.email, name = _a.name;
        this.isMember = true;
        this.id = id;
        this.email = email;
        this.name = name;
    };
    return User;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new User());


/***/ }),

/***/ "./src/es/state/VendingMachineCharge.ts":
/*!**********************************************!*\
  !*** ./src/es/state/VendingMachineCharge.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/es/constants/index.ts");

var VendingMachineCharge = /** @class */ (function () {
    function VendingMachineCharge() {
        this.coins = [0, 0, 0, 0];
    }
    VendingMachineCharge.prototype.setCoins = function (coins) {
        this.coins = coins;
    };
    VendingMachineCharge.prototype.getTotalAmount = function () {
        return this.coins.reduce(function (previous, coin, index) { return (previous += _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_TYPE[index] * coin); }, 0);
    };
    return VendingMachineCharge;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new VendingMachineCharge());


/***/ }),

/***/ "./src/es/utils/auth.ts":
/*!******************************!*\
  !*** ./src/es/utils/auth.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUp": () => (/* binding */ signUp),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "requestUserInfo": () => (/* binding */ requestUserInfo),
/* harmony export */   "updateUserInfo": () => (/* binding */ updateUserInfo),
/* harmony export */   "getSavedAuthInfo": () => (/* binding */ getSavedAuthInfo)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/es/constants/index.ts");
/* harmony import */ var _state_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/User */ "./src/es/state/User.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./src/es/routes.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/es/utils/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var devURL = 'http://localhost:3000/';
var deployURL = 'https://soyi47-auth-server.herokuapp.com/';
var currentAuthServer = deployURL;
var signUpURL = "".concat(currentAuthServer, "signup/");
var loginURL = "".concat(currentAuthServer, "login/");
var userInfoURL = function (id) { return "".concat(currentAuthServer, "600/users/").concat(id); };
function signUp(signUpInfo) {
    var _this = this;
    fetch(signUpURL, {
        method: 'POST',
        body: JSON.stringify(signUpInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!res.ok) return [3 /*break*/, 2];
                    return [4 /*yield*/, res.text()];
                case 1:
                    message = _a.sent();
                    throw new Error(message.slice(1, -1));
                case 2: return [2 /*return*/, res.json()];
            }
        });
    }); })
        .then(function (response) {
        var _a = response.user, id = _a.id, email = _a.email, name = _a.name;
        var userAuth = {
            accessToken: response.accessToken,
            id: id,
            expiration: Date.now() + 1000 * 60 * 60
        };
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
        _state_User__WEBPACK_IMPORTED_MODULE_1__["default"].setUser({ id: id, email: email, name: name });
        (0,_routes__WEBPACK_IMPORTED_MODULE_2__.loadMainPage)();
        (0,_index__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.SIGNUP_SUCCESS);
    })["catch"](function (err) {
        if (err.message === 'Email already exists') {
            (0,_index__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.SIGNUP_EMAIL_ALREADY_EXISTS);
        }
    });
}
function login(loginInfo) {
    var _this = this;
    fetch(loginURL, {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!res.ok) return [3 /*break*/, 2];
                    return [4 /*yield*/, res.text()];
                case 1:
                    message = _a.sent();
                    throw new Error(message.slice(1, -1));
                case 2: return [2 /*return*/, res.json()];
            }
        });
    }); })
        .then(function (response) {
        var _a = response.user, id = _a.id, email = _a.email, name = _a.name;
        var userAuth = {
            accessToken: response.accessToken,
            id: id,
            expiration: Date.now() + 1000 * 60 * 60
        };
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
        _state_User__WEBPACK_IMPORTED_MODULE_1__["default"].setUser({ id: id, email: email, name: name });
        (0,_routes__WEBPACK_IMPORTED_MODULE_2__.loadMainPage)();
        (0,_index__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.LOGIN_SUCCESS);
    })["catch"](function (err) {
        switch (err.message) {
            case 'Cannot find user':
                (0,_index__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.LOGIN_CANNOT_FIND_USER);
                break;
            case 'Incorrect password':
                (0,_index__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.LOGIN_INCORRECT_PASSWORD);
                break;
            default:
                break;
        }
    });
}
var logout = function () {
    localStorage.removeItem('userAuth');
    _state_User__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
    (0,_routes__WEBPACK_IMPORTED_MODULE_2__.loadMainPage)();
};
function requestUserInfo(userAuth) {
    var _this = this;
    var id = userAuth.id;
    var accessToken = "Bearer ".concat(userAuth.accessToken);
    return fetch(userInfoURL(id), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken
        }
    })
        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!res.ok) return [3 /*break*/, 2];
                    return [4 /*yield*/, res.text()];
                case 1:
                    message = _a.sent();
                    throw new Error(message.slice(1, -1));
                case 2: return [2 /*return*/, res.json()];
            }
        });
    }); })
        .then(function (response) {
        var email = response.email, name = response.name;
        _state_User__WEBPACK_IMPORTED_MODULE_1__["default"].setUser({ id: id, email: email, name: name });
    })["catch"](function (error) { return console.error('에러', error.message); });
}
function updateUserInfo(newUserInfo) {
    var _this = this;
    var userAuth = JSON.parse(localStorage.getItem('userAuth'));
    if (!userAuth)
        return;
    var id = userAuth.id;
    var accessToken = "Bearer ".concat(userAuth.accessToken);
    fetch(userInfoURL(id), {
        method: 'PUT',
        body: JSON.stringify(newUserInfo),
        headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken
        }
    })
        .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!res.ok) return [3 /*break*/, 2];
                    return [4 /*yield*/, res.text()];
                case 1:
                    message = _a.sent();
                    throw new Error(message.slice(1, -1));
                case 2: return [2 /*return*/, res.json()];
            }
        });
    }); })
        .then(function (response) {
        var email = response.email, name = response.name;
        _state_User__WEBPACK_IMPORTED_MODULE_1__["default"].setUser({ id: id, email: email, name: name });
        (0,_routes__WEBPACK_IMPORTED_MODULE_2__.loadMainPage)();
        (0,_index__WEBPACK_IMPORTED_MODULE_3__.showSnackBar)(_constants__WEBPACK_IMPORTED_MODULE_0__.GUIDE_MESSAGE.UPDATE_USER_INFO_SUCCESS);
    })["catch"](function (error) { return console.error('에러', error.message); });
}
function getSavedAuthInfo() {
    var emptyAuthInfo = { accessToken: '', id: -1, expiration: -1 };
    var userAuth;
    try {
        userAuth = JSON.parse(localStorage.getItem('userAuth')) || emptyAuthInfo;
    }
    catch (err) {
        console.error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.FAIL_TO_READ_AUTH_INFO);
        return emptyAuthInfo;
    }
    if (userAuth.expiration < Date.now()) {
        localStorage.removeItem('userAuth');
        return emptyAuthInfo;
    }
    return userAuth;
}



/***/ }),

/***/ "./src/es/utils/index.ts":
/*!*******************************!*\
  !*** ./src/es/utils/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "isNumberInRange": () => (/* binding */ isNumberInRange),
/* harmony export */   "isStringLengthInRange": () => (/* binding */ isStringLengthInRange),
/* harmony export */   "isCorrectNumberUnit": () => (/* binding */ isCorrectNumberUnit),
/* harmony export */   "getInnerInputValues": () => (/* binding */ getInnerInputValues),
/* harmony export */   "clearInnerInputValues": () => (/* binding */ clearInnerInputValues),
/* harmony export */   "showSnackBar": () => (/* binding */ showSnackBar)
/* harmony export */ });
var $ = function (selector, node) {
    if (node === void 0) { node = document; }
    return node.querySelector(selector);
};
var $$ = function (selector, node) {
    if (node === void 0) { node = document; }
    return node.querySelectorAll(selector);
};
var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var isNumberInRange = function (value, min, max) {
    return value >= min && value <= max;
};
var isStringLengthInRange = function (value, min, max) {
    return value.length >= min && value.length <= max;
};
var isCorrectNumberUnit = function (value, unit) { return value % unit === 0; };
var getInnerInputValues = function ($target) {
    var $$inputs = Array.from($$('input', $target));
    return $$inputs.reduce(function (previous, inputElement) {
        previous[inputElement.name] = inputElement.type === 'number' ? Number(inputElement.value) : inputElement.value;
        return previous;
    }, {});
};
var clearInnerInputValues = function ($target) {
    var $$inputs = Array.from($$('input', $target));
    $$inputs.forEach(function ($input) { return ($input.value = ''); });
};
var showSnackBar = function (message) {
    var $snackBar = $('.snackbar');
    $snackBar.innerText = message;
    $snackBar.classList.toggle('show');
    setTimeout(function () {
        $snackBar.classList.toggle('show');
    }, 3000);
};


/***/ }),

/***/ "./src/es/validator.ts":
/*!*****************************!*\
  !*** ./src/es/validator.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateProduct": () => (/* binding */ validateProduct),
/* harmony export */   "validateHoldingAmountToAdd": () => (/* binding */ validateHoldingAmountToAdd),
/* harmony export */   "validateCustomerChargeToAdd": () => (/* binding */ validateCustomerChargeToAdd),
/* harmony export */   "validateUserInfo": () => (/* binding */ validateUserInfo)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/es/constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/es/utils/index.ts");


function validateProduct(product) {
    var name = product.name, price = product.price, quantity = product.quantity;
    var MIN_PRODUCT_NAME_LENGTH = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MIN_PRODUCT_NAME_LENGTH, MAX_PRODUCT_NAME_LENGTH = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MAX_PRODUCT_NAME_LENGTH, MIN_PRODUCT_PRICE = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MIN_PRODUCT_PRICE, MAX_PRODUCT_PRICE = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MAX_PRODUCT_PRICE, MONEY_UNIT = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MONEY_UNIT, MIN_PRODUCT_QUANTITY = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MIN_PRODUCT_QUANTITY, MAX_PRODUCT_QUANTITY = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MAX_PRODUCT_QUANTITY;
    if (name === '')
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_NAME_REQUIRED);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isStringLengthInRange)(name, MIN_PRODUCT_NAME_LENGTH, MAX_PRODUCT_NAME_LENGTH))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_NAME_LENGTH);
    if (!Number.isInteger(price))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_PRICE_ONLY_NUMBER);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberInRange)(price, MIN_PRODUCT_PRICE, MAX_PRODUCT_PRICE))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_PRICE_WRONG_RANGE);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isCorrectNumberUnit)(price, MONEY_UNIT))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_PRICE_WRONG_UNIT);
    if (!Number.isInteger(quantity))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_QUANTITY_ONLY_NUMBER);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberInRange)(quantity, MIN_PRODUCT_QUANTITY, MAX_PRODUCT_QUANTITY))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PRODUCT_QUANTITY_WRONG_RANGE);
}
function validateHoldingAmountToAdd(holdingAmountToAdd, totalAmount) {
    var MAX_HOLDING_AMOUNT = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MAX_HOLDING_AMOUNT, MONEY_UNIT = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MONEY_UNIT;
    if (!Number.isInteger(holdingAmountToAdd))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.HOLDING_AMOUNT_ONLY_NUMBER);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isCorrectNumberUnit)(holdingAmountToAdd, MONEY_UNIT))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.HOLDING_AMOUNT_WRONG_UNIT);
    if (holdingAmountToAdd + totalAmount > MAX_HOLDING_AMOUNT)
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.HOLDING_AMOUNT_WRONG_LIMIT);
}
function validateCustomerChargeToAdd(customerChargeToAdd) {
    var MAX_CUSTOMER_CHARGE_TO_ADD = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MAX_CUSTOMER_CHARGE_TO_ADD, MONEY_UNIT = _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_CONDITION.MONEY_UNIT;
    if (!Number.isInteger(customerChargeToAdd))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.CUSTOMER_CHARGE_ONLY_NUMBER);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isCorrectNumberUnit)(customerChargeToAdd, MONEY_UNIT))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.CUSTOMER_CHARGE_WRONG_UNIT);
    if (customerChargeToAdd > MAX_CUSTOMER_CHARGE_TO_ADD)
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.CUSTOMER_CHARGE_WRONG_LIMIT);
}
function validateUserInfo(userInfo) {
    var name = userInfo.name, password = userInfo.password, passwordConfirm = userInfo.passwordConfirm;
    var MIN_NAME_LENGTH = _constants__WEBPACK_IMPORTED_MODULE_0__.USER_INFO_CONDITION.MIN_NAME_LENGTH, MAX_NAME_LENGTH = _constants__WEBPACK_IMPORTED_MODULE_0__.USER_INFO_CONDITION.MAX_NAME_LENGTH;
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isStringLengthInRange)(name, MIN_NAME_LENGTH, MAX_NAME_LENGTH))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.USER_NAME_LENGTH);
    if (!_constants__WEBPACK_IMPORTED_MODULE_0__.USER_INFO_CONDITION.PASSWORD_REGEXP.test(password))
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PASSWORD_CONDITION);
    if (password !== passwordConfirm) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.PASSWORD_CONFIRM);
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/styles/index.scss");
/* harmony import */ var _es_utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es/utils/auth */ "./src/es/utils/auth.ts");
/* harmony import */ var _es_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./es/routes */ "./src/es/routes.ts");



var initialAuthInfo = (0,_es_utils_auth__WEBPACK_IMPORTED_MODULE_1__.getSavedAuthInfo)();
if (initialAuthInfo.accessToken) {
    (0,_es_utils_auth__WEBPACK_IMPORTED_MODULE_1__.requestUserInfo)(initialAuthInfo).then(function () { return (0,_es_routes__WEBPACK_IMPORTED_MODULE_2__.loadMainPage)(); });
}
else {
    (0,_es_routes__WEBPACK_IMPORTED_MODULE_2__.loadMainPage)();
}
(0,_es_routes__WEBPACK_IMPORTED_MODULE_2__.initRouteEvent)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map