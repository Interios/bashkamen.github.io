(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-auth-auth-module"],{

/***/ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js ***!
  \*****************************************************************/
/*! exports provided: AngularSvgIconModule, SVG_ICON_REGISTRY_PROVIDER_FACTORY, SERVER_URL, SvgIconRegistryService, SVG_ICON_REGISTRY_PROVIDER, SvgIconComponent, SvgLoader, SvgHttpLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSvgIconModule", function() { return AngularSvgIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_ICON_REGISTRY_PROVIDER_FACTORY", function() { return SVG_ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconRegistryService", function() { return SvgIconRegistryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_ICON_REGISTRY_PROVIDER", function() { return SVG_ICON_REGISTRY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgLoader", function() { return SvgLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgHttpLoader", function() { return SvgHttpLoader; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
SvgLoader = /** @class */ (function () {
    function SvgLoader() {
    }
    return SvgLoader;
}());
var SvgHttpLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(SvgHttpLoader, _super);
    function SvgHttpLoader(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    SvgHttpLoader.prototype.getSvg = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url, { responseType: 'text' });
    };
    SvgHttpLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"] }
    ];
    /** @nocollapse */
    SvgHttpLoader.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    return SvgHttpLoader;
}(SvgLoader));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SERVER_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('SERVER_URL');
var SvgIconRegistryService = /** @class */ (function () {
    function SvgIconRegistryService(loader, platformId, serverUrl, _document) {
        this.loader = loader;
        this.platformId = platformId;
        this.serverUrl = serverUrl;
        this._document = _document;
        this.iconsByUrl = new Map();
        this.iconsLoadingByUrl = new Map();
        this.document = this._document;
    }
    /** Add a SVG to the registry by passing a name and the SVG. */
    /**
     * Add a SVG to the registry by passing a name and the SVG.
     * @param {?} name
     * @param {?} data
     * @return {?}
     */
    SvgIconRegistryService.prototype.addSvg = /**
     * Add a SVG to the registry by passing a name and the SVG.
     * @param {?} name
     * @param {?} data
     * @return {?}
     */
    function (name, data) {
        if (!this.iconsByUrl.has(name)) {
            /** @type {?} */
            var div = this.document.createElement('DIV');
            div.innerHTML = data;
            /** @type {?} */
            var svg = (/** @type {?} */ (div.querySelector('svg')));
            this.iconsByUrl.set(name, svg);
        }
    };
    /** Load a SVG to the registry from a URL. */
    /**
     * Load a SVG to the registry from a URL.
     * @param {?} url
     * @param {?=} name
     * @return {?}
     */
    SvgIconRegistryService.prototype.loadSvg = /**
     * Load a SVG to the registry from a URL.
     * @param {?} url
     * @param {?=} name
     * @return {?}
     */
    function (url, name) {
        var _this = this;
        if (name === void 0) { name = url; }
        // not sure if there should be a possibility to use name for server usage
        // so overriding it for now if provided
        // maybe should separate functionality for url and name use-cases
        if (this.serverUrl && url.match(/^(http(s)?):/) === null) {
            url = this.serverUrl + url;
            name = url;
        }
        if (this.iconsByUrl.has(name)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.iconsByUrl.get(name));
        }
        else if (this.iconsLoadingByUrl.has(name)) {
            return this.iconsLoadingByUrl.get(name);
        }
        /** @type {?} */
        var o = (/** @type {?} */ (this.loader.getSvg(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            /** @type {?} */
            var div = _this.document.createElement('DIV');
            div.innerHTML = svg;
            return (/** @type {?} */ (div.querySelector('svg')));
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) { return _this.iconsByUrl.set(name, svg); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])((/**
         * @return {?}
         */
        function () { return _this.iconsLoadingByUrl.delete(name); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])())));
        this.iconsLoadingByUrl.set(name, o);
        return o;
    };
    /** Get loaded SVG from registry by name. (also works by url because of blended map) */
    /**
     * Get loaded SVG from registry by name. (also works by url because of blended map)
     * @param {?} name
     * @return {?}
     */
    SvgIconRegistryService.prototype.getSvgByName = /**
     * Get loaded SVG from registry by name. (also works by url because of blended map)
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.iconsByUrl.has(name)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.iconsByUrl.get(name));
        }
        else if (this.iconsLoadingByUrl.has(name)) {
            return this.iconsLoadingByUrl.get(name);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])("No svg with name '" + name + "' has been loaded");
    };
    /** Remove a SVG from the registry by URL (or name). */
    /**
     * Remove a SVG from the registry by URL (or name).
     * @param {?} url
     * @return {?}
     */
    SvgIconRegistryService.prototype.unloadSvg = /**
     * Remove a SVG from the registry by URL (or name).
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.iconsByUrl.has(url)) {
            this.iconsByUrl.delete(url);
        }
    };
    SvgIconRegistryService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"] }
    ];
    /** @nocollapse */
    SvgIconRegistryService.ctorParameters = function () { return [
        { type: SvgLoader },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [SERVER_URL,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    return SvgIconRegistryService;
}());
/**
 * @param {?} parentRegistry
 * @param {?} loader
 * @param {?} platformId
 * @param {?=} serverUrl
 * @param {?=} document
 * @return {?}
 */
function SVG_ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, loader, platformId, serverUrl, document) {
    return parentRegistry || new SvgIconRegistryService(loader, platformId, serverUrl, document);
}
/** @type {?} */
var SVG_ICON_REGISTRY_PROVIDER = {
    provide: SvgIconRegistryService,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_5__["SkipSelf"](), SvgIconRegistryService], SvgLoader, [(/** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]))],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), (/** @type {?} */ (SERVER_URL))], [new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))]
    ],
    useFactory: SVG_ICON_REGISTRY_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SvgIconComponent = /** @class */ (function () {
    function SvgIconComponent(element, differs, renderer, iconReg, cdr) {
        this.element = element;
        this.differs = differs;
        this.renderer = renderer;
        this.iconReg = iconReg;
        this.cdr = cdr;
        this.stretch = false;
        this.applyCss = false;
    }
    Object.defineProperty(SvgIconComponent.prototype, "svgStyle", {
        // Adapted from ngStyle
        set: 
        // Adapted from ngStyle
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._svgStyle = v;
            if (!this.differ && v) {
                this.differ = this.differs.find(v).create();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SvgIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    SvgIconComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    SvgIconComponent.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        if (changeRecord['src'] || changeRecord['name']) {
            if (this.svg) {
                this.destroy();
            }
            this.init();
        }
        if (changeRecord['stretch']) {
            this.stylize();
        }
    };
    /**
     * @return {?}
     */
    SvgIconComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.svg && this.differ) {
            /** @type {?} */
            var changes = this.differ.diff(this._svgStyle);
            if (changes) {
                this.applyChanges(changes);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    SvgIconComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.name) {
            this.icnSub = this.iconReg.getSvgByName(this.name).subscribe(this.initSvg.bind(this));
            return;
        }
        this.icnSub = this.iconReg.loadSvg(this.src).subscribe(this.initSvg.bind(this));
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    SvgIconComponent.prototype.initSvg = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this.setSvg(svg);
        this.resetDiffer();
    };
    /**
     * @private
     * @return {?}
     */
    SvgIconComponent.prototype.destroy = /**
     * @private
     * @return {?}
     */
    function () {
        this.svg = undefined;
        this.differ = undefined;
        if (this.icnSub) {
            this.icnSub.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    SvgIconComponent.prototype.resetDiffer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._svgStyle && !this.differ) {
            this.differ = this.differs.find(this._svgStyle).create();
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    SvgIconComponent.prototype.setSvg = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (svg) {
            this.svg = svg;
            /** @type {?} */
            var icon = (/** @type {?} */ (svg.cloneNode(true)));
            /** @type {?} */
            var elem = this.element.nativeElement;
            if (this.applyCss) {
                this.copyNgContentAttribute(elem, icon);
            }
            elem.innerHTML = '';
            this.renderer.appendChild(elem, icon);
            this.stylize();
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @param {?} hostElem
     * @param {?} icon
     * @return {?}
     */
    SvgIconComponent.prototype.copyNgContentAttribute = /**
     * @private
     * @param {?} hostElem
     * @param {?} icon
     * @return {?}
     */
    function (hostElem, icon) {
        /** @type {?} */
        var attributes = (/** @type {?} */ (hostElem.attributes));
        /** @type {?} */
        var len = attributes.length;
        for (var i = 0; i < len; i += 1) {
            /** @type {?} */
            var attribute = attributes.item(i);
            if (attribute.name.startsWith('_ngcontent')) {
                this.setNgContentAttribute(icon, attribute.name);
                break;
            }
        }
    };
    /**
     * @private
     * @param {?} parent
     * @param {?} attributeName
     * @return {?}
     */
    SvgIconComponent.prototype.setNgContentAttribute = /**
     * @private
     * @param {?} parent
     * @param {?} attributeName
     * @return {?}
     */
    function (parent, attributeName) {
        this.renderer.setAttribute(parent, attributeName, '');
        /** @type {?} */
        var len = parent.childNodes.length;
        for (var i = 0; i < len; i += 1) {
            /** @type {?} */
            var child = parent.childNodes[i];
            if (child instanceof Element) {
                this.setNgContentAttribute(child, attributeName);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    SvgIconComponent.prototype.stylize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.svg) {
            /** @type {?} */
            var svg = this.element.nativeElement.firstChild;
            if (this.stretch === true) {
                this.renderer.setAttribute(svg, 'preserveAspectRatio', 'none');
            }
            else if (this.stretch === false) {
                this.renderer.removeAttribute(svg, 'preserveAspectRatio');
            }
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    SvgIconComponent.prototype.applyChanges = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        changes.forEachRemovedItem((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { return _this.setStyle(record.key, null); }));
        changes.forEachAddedItem((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { return _this.setStyle(record.key, record.currentValue); }));
        changes.forEachChangedItem((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { return _this.setStyle(record.key, record.currentValue); }));
    };
    /**
     * @private
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    SvgIconComponent.prototype.setStyle = /**
     * @private
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    function (nameAndUnit, value) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__read"])(nameAndUnit.split('.'), 2), name = _a[0], unit = _a[1];
        value = value !== null && unit ? "" + value + unit : value;
        /** @type {?} */
        var svg = this.element.nativeElement.firstChild;
        if (value !== null) {
            this.renderer.setStyle(svg, name, (/** @type {?} */ (value)));
        }
        else {
            this.renderer.removeStyle(svg, name);
        }
    };
    SvgIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'svg-icon',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    SvgIconComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: SvgIconRegistryService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }
    ]; };
    SvgIconComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        stretch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        applyCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        svgStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
    return SvgIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularSvgIconModule = /** @class */ (function () {
    function AngularSvgIconModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AngularSvgIconModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: AngularSvgIconModule,
            providers: [
                config.loader || { provide: SvgLoader, useClass: SvgHttpLoader },
                SVG_ICON_REGISTRY_PROVIDER
            ]
        };
    };
    AngularSvgIconModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ],
                    declarations: [SvgIconComponent],
                    providers: [SVG_ICON_REGISTRY_PROVIDER, { provide: SvgLoader, useClass: SvgHttpLoader }],
                    exports: [SvgIconComponent]
                },] }
    ];
    return AngularSvgIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-svg-icon.js.map

/***/ }),

/***/ "./src/app/components/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var _auth_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.router.module */ "./src/app/components/auth/auth.router.module.ts");
/* harmony import */ var src_app_services_auth___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/auth/ */ "./src/app/_services/auth/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ "./src/app/components/auth/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register */ "./src/app/components/auth/register/index.ts");
/* harmony import */ var src_app_services_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/session */ "./src/app/_services/session/index.ts");










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["AngularSvgIconModule"],
                _auth_router_module__WEBPACK_IMPORTED_MODULE_5__["AuthRouterModule"]
            ],
            providers: [
                src_app_services_auth___WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                src_app_services_session__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
            ],
            exports: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.router.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/auth/auth.router.module.ts ***!
  \*******************************************************/
/*! exports provided: AuthRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouterModule", function() { return AuthRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/components/auth/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "./src/app/components/auth/register/index.ts");





var routers = [
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] }
];
var AuthRouterModule = /** @class */ (function () {
    function AuthRouterModule() {
    }
    AuthRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routers)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRouterModule);
    return AuthRouterModule;
}());



/***/ }),

/***/ "./src/app/components/auth/login/index.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/login/index.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authorization\">\r\n    <header>\r\n        <div class=\"container\">\r\n            <div class=\"nav-menu\">\r\n                <svg-icon class=\"logo\" name=\"logo\" [svgStyle]></svg-icon>\r\n                <div class=\"flex-spacer\"></div>\r\n                <a class=\"btn-auth\" [routerLink]=\"['/register']\">Зарегистрироваться</a>\r\n                <a class=\"btn-auth\" [routerLink]=\"['/login']\">Войти</a>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <section class=\"authorization-body\">\r\n        <div class=\"container\">\r\n                <p>{{ authForm.value }}</p>\r\n                <p>{{ authForm.status }}</p>\r\n            <div class=\"authorization-title\">Вход</div>\r\n\r\n            <form [formGroup]=\"authForm\" novalidate class=\"authorization-form\">\r\n                <label>\r\n                    <span>Логин*</span>\r\n                    <input type=\"text\" formControlName=\"Login\" placeholder=\"Логин\" />\r\n                </label>\r\n                <label>\r\n                    <span>Пароль*</span>\r\n                    <input type=\"password\" formControlName=\"Password\" placeholder=\"Пароль\" />\r\n                </label>\r\n                <br>\r\n                <button class=\"btn-sign\" (click)=\"handleAuth()\">Войти</button>\r\n                <div class=\"space-height\">или</div>\r\n                <a [routerLink]= \"['/register']\" class=\"btn-signout\">Регистрация</a>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(iconReg, fb, auth) {
        this.iconReg = iconReg;
        this.fb = fb;
        this.auth = auth;
        this.iconReg.addSvg('logo', '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><defs><linearGradient id="a3" x1="-35.391%" y1="100%" y2="0%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#5460EA"></stop></linearGradient><linearGradient id="b3" x1="50%" x2="50%" y1="117.548%" y2="13.594%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="37.158%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="c3" x1="50%" x2="50%" y1="111.963%" y2="12.561%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="42.766%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="d3" x1="50%" x2="50%" y1="121.285%" y2="0%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="51.458%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="e3" x1="50%" x2="50%" y1="107.399%" y2="7.052%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="45.032%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect width="60" height="60" fill="#FFF" rx="30"></rect><g transform="translate(14 15)"><path fill="url(#a3)" d="M2.568 7.011h10.894V8.34H2.568z" transform="rotate(-42 8.014 7.676)"></path><path fill="url(#a3)" d="M11.649 7.18h8.925v1.329h-8.925z" transform="scale(-1 1) rotate(-39 0 53.342)"></path><path fill="url(#a3)" d="M18.908 5.804h10.894v1.329H18.908z" transform="rotate(-42 24.355 6.468)"></path><ellipse cx="3.064" cy="12.056" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="11.915" cy="4.746" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="19.404" cy="10.062" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="28.255" cy="2.753" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><path fill="url(#b3)" d="M3.404 19.033a3.404 3.404 0 0 1 3.405 3.404V29H0v-6.563a3.404 3.404 0 0 1 3.404-3.404z"></path><path fill="url(#c3)" d="M11.574 12.388a3.404 3.404 0 0 1 3.405 3.404V29H8.17V15.792a3.404 3.404 0 0 1 3.404-3.404z"></path><path fill="url(#d3)" d="M19.745 17.04a3.404 3.404 0 0 1 3.404 3.404V29H16.34v-8.556a3.404 3.404 0 0 1 3.405-3.405z"></path><path fill="url(#e3)" d="M27.915 9.73a3.404 3.404 0 0 1 3.404 3.404V29h-6.808V13.134a3.404 3.404 0 0 1 3.404-3.404z"></path></g></g></svg>');
        this.iconReg.loadSvg('logo');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.authForm = this.fb.group({
            Login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/([a-zA-Z0-9_-]{5})/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/([a-zA-Z0-9_-]{5})/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginComponent.prototype.handleAuth = function () {
        this.authForm.status == 'VALID' ?
            this.auth.login(this.authForm.value) : '';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["SvgIconRegistryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/register/index.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/register/index.ts ***!
  \***************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/components/auth/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authorization\">\r\n    <header>\r\n        <div class=\"container\">\r\n            <div class=\"nav-menu\">\r\n                <svg-icon class=\"logo\" name=\"logo\" [svgStyle]></svg-icon>\r\n                <div class=\"flex-spacer\"></div>\r\n                <a class=\"btn-auth\" [routerLink]=\"['/register']\">Зарегистрироваться</a>\r\n                <a class=\"btn-auth\" [routerLink]=\"['/login']\">Войти</a>\r\n            </div>\r\n        </div>\r\n    </header>\r\n    <section class=\"authorization-body\">\r\n        <div class=\"container\">\r\n            <p>{{ authForm.value }}</p>\r\n            <p>{{ authForm.status }}</p>\r\n            <div class=\"authorization-title\">Вход</div>\r\n            <form [formGroup]=\"authForm\" novalidate class=\"authorization-form\">\r\n                <label>\r\n                    <span>Логин*</span>\r\n                    <input type=\"text\" formControlName=\"Login\" placeholder=\"Логин\" />\r\n                </label>\r\n                <label>\r\n                    <span>Пароль*</span>\r\n                    <input type=\"password\" formControlName=\"Password\" placeholder=\"Пароль\" />\r\n                </label>\r\n                <br>\r\n                <button class=\"btn-sign\" (click)=\"handleAuth()\">Зарегистрировать</button>\r\n                <div class=\"space-height\">или</div>\r\n                <a [routerLink]=\"['/login']\" class=\"btn-signout\">Войти</a>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth/auth.service */ "./src/app/_services/auth/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(iconReg, fb, auth) {
        this.iconReg = iconReg;
        this.fb = fb;
        this.auth = auth;
        this.iconReg.addSvg('logo', '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><defs><linearGradient id="a3" x1="-35.391%" y1="100%" y2="0%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#5460EA"></stop></linearGradient><linearGradient id="b3" x1="50%" x2="50%" y1="117.548%" y2="13.594%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="37.158%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="c3" x1="50%" x2="50%" y1="111.963%" y2="12.561%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="42.766%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="d3" x1="50%" x2="50%" y1="121.285%" y2="0%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="51.458%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient><linearGradient id="e3" x1="50%" x2="50%" y1="107.399%" y2="7.052%"><stop offset="0%" stop-color="#4AE7E6" stop-opacity=".332"></stop><stop offset="45.032%" stop-color="#48D1E2"></stop><stop offset="100%" stop-color="#3F48C7" stop-opacity=".8"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect width="60" height="60" fill="#FFF" rx="30"></rect><g transform="translate(14 15)"><path fill="url(#a3)" d="M2.568 7.011h10.894V8.34H2.568z" transform="rotate(-42 8.014 7.676)"></path><path fill="url(#a3)" d="M11.649 7.18h8.925v1.329h-8.925z" transform="scale(-1 1) rotate(-39 0 53.342)"></path><path fill="url(#a3)" d="M18.908 5.804h10.894v1.329H18.908z" transform="rotate(-42 24.355 6.468)"></path><ellipse cx="3.064" cy="12.056" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="11.915" cy="4.746" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="19.404" cy="10.062" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><ellipse cx="28.255" cy="2.753" fill="url(#a3)" rx="2.383" ry="2.326"></ellipse><path fill="url(#b3)" d="M3.404 19.033a3.404 3.404 0 0 1 3.405 3.404V29H0v-6.563a3.404 3.404 0 0 1 3.404-3.404z"></path><path fill="url(#c3)" d="M11.574 12.388a3.404 3.404 0 0 1 3.405 3.404V29H8.17V15.792a3.404 3.404 0 0 1 3.404-3.404z"></path><path fill="url(#d3)" d="M19.745 17.04a3.404 3.404 0 0 1 3.404 3.404V29H16.34v-8.556a3.404 3.404 0 0 1 3.405-3.405z"></path><path fill="url(#e3)" d="M27.915 9.73a3.404 3.404 0 0 1 3.404 3.404V29h-6.808V13.134a3.404 3.404 0 0 1 3.404-3.404z"></path></g></g></svg>');
        this.iconReg.loadSvg('logo');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    RegisterComponent.prototype.createForm = function () {
        this.authForm = this.fb.group({
            Login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/([a-zA-Z0-9_-]{5})/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/([a-zA-Z0-9_-]{5})/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    RegisterComponent.prototype.handleAuth = function () {
        this.authForm.status == 'VALID' ?
            this.auth.registration(this.authForm.value) : '';
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/auth/register/register.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["SvgIconRegistryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-auth-auth-module.js.map