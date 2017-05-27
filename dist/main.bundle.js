webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArhkamHorrorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArhkamHorrorService = (function () {
    function ArhkamHorrorService(_http) {
        this._http = _http;
        this.url = 'http://localhost:8081';
        this.api = this.url + "/api";
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__(this.url);
    }
    ArhkamHorrorService.prototype.get = function (type, parameters) {
        var _this = this;
        var extra = parameters || '';
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"](function (observer) {
            _this._http.get(_this.api + "/" + type + extra).map(function (res) { return res.json(); }).subscribe(function (data) { observer.next(data); });
        });
        return observable;
    };
    ArhkamHorrorService.prototype.getSocket = function (type) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"](function (observer) {
            _this.socket.on(type, function (data) { observer.next(data); });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ArhkamHorrorService.prototype.newHost = function (host) { this.socket.emit('new-host', host); };
    ArhkamHorrorService.prototype.play = function (id, deck) { this.socket.emit('join-host', { id: id, deck: deck }); };
    ArhkamHorrorService.prototype.updateHost = function (host) { this.socket.emit('update-host', host); };
    return ArhkamHorrorService;
}());
ArhkamHorrorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArhkamHorrorService);

var _a;
//# sourceMappingURL=ah.service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ah_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomepageComponent = (function () {
    function HomepageComponent(_http, _route, _injector, sAH) {
        var _this = this;
        this._http = _http;
        this._route = _route;
        this._injector = _injector;
        this.sAH = sAH;
        this.startGame = false;
        this.host = null;
        // ONLY CLIENT
        this.sCampaign = null;
        this.sDifficulty = null;
        this.character = { a: 0, d: 0, h: 0, r: 5, i: 0 };
        this.deck = null;
        this.stack = [];
        this.sdiscard = [];
        this.chaosbag = null;
        this.chaos = null;
        this.aCharge = [];
        this.assets = [];
        this.seeDiscard = false;
        this.seeEDiscard = false;
        this.sDeck = false;
        this.player = null;
        this.cc = [];
        this.sAH.get('campaigns').subscribe(function (data) { _this.campaigns = data; });
        this.sAH.get('difficulties').subscribe(function (data) { _this.difficulties = data; });
        this.sAH.get('characters').subscribe(function (data) { _this.characters = data; });
        this.sAH.getSocket('hosts').subscribe(function (data) {
            _this.hosts = data;
        });
        //TODO ALL CARDS
        // for (let o = 16; o <= 95; o++) { this.cc.push(`010${o}`); }
    }
    HomepageComponent.prototype.ngOnInit = function () { };
    HomepageComponent.prototype.ngOnDestroy = function () { };
    HomepageComponent.prototype.knuthShuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    HomepageComponent.prototype.fixUrl = function (id, event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.setAttribute('src', "https://arkhamdb.com/bundles/cards/" + id + ".jpg");
    };
    HomepageComponent.prototype.newHost = function () {
        if (this.sCampaign && this.sDifficulty) {
            this.sAH.newHost({ name: this.sCampaign, difficulty: this.sDifficulty, characters: [] });
        }
    };
    HomepageComponent.prototype.selectCampaign = function (data) { this.sCampaign = data.value; };
    HomepageComponent.prototype.selectDifficulty = function (data) { this.sDifficulty = data.value; };
    HomepageComponent.prototype.selectCharacter = function (data) {
        var _this = this;
        this.sAH.get('character', '?id=' + data.value).subscribe(function (data) { _this.deck = data; });
    };
    HomepageComponent.prototype.availableCharacters = function (characters) {
        return this.characters.slice(0).filter(function (x) { return !!!characters.find(function (c) { return (c && c.id === x.id); }); });
    };
    HomepageComponent.prototype.play = function (host) {
        var _this = this;
        if (this.deck) {
            this.startGame = true;
            this.sAH.play(host.id, this.deck);
            this.sAH.getSocket('host').subscribe(function (data) {
                if (host.id === data['id']) {
                    _this.host = data;
                }
            });
            this.chaosbag = host.chaos;
        }
    };
    HomepageComponent.prototype.spectator = function (host) {
        var _this = this;
        this.startGame = true;
        this.deck = null;
        this.host = host;
        this.sAH.getSocket('host').subscribe(function (data) {
            if (host.id === data['id']) {
                _this.host = data;
            }
        });
    };
    HomepageComponent.prototype.pickChaos = function () { this.chaos = this.knuthShuffle(this.chaosbag).slice(0).pop(); };
    HomepageComponent.prototype.newLocation = function () {
        if (this.host.campaign.location.length > 0) {
            this.host.locations.push({
                id: this.host.campaign.location.shift(),
                seal: true,
                indices: 0,
                cards: [],
                characters: []
            });
            this.sAH.updateHost(this.host);
        }
    };
    HomepageComponent.prototype.openSeal = function (index) {
        this.host.locations[index].seal = false;
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.newAgenda = function () {
        this.host.campaign.agenda_active = this.host.campaign.agenda.shift();
        this.host.dooms = 0;
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.newAct = function () {
        this.host.campaign.act_active = this.host.campaign.act.shift();
        this.host.clues = 0;
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.upDoom = function () {
        this.host.dooms++;
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.displayCharge = function (card) {
        var index = this.host.charges.findIndex(function (x) { return x.id === card; });
        return this.host.charges[index].charge;
    };
    HomepageComponent.prototype.charge = function (card) {
        var index = this.host.charges.findIndex(function (x) { return x.id === card; });
        this.host.charges[index].charge++;
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.drawEncounter = function () {
        var card = this.host.campaign.encounter.pop();
        this.host.encounters.push(card);
        this.host.charges.push({ id: card, charge: 0 });
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.discardEncounter = function (card) {
        var index = this.host.encounters.findIndex(function (x) { return x === card; });
        this.host.ediscard.push(this.host.encounters.splice(index, 1));
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.moveEncounter = function (data, card) {
        this.host.locations.forEach(function (location) {
            var index = location.cards.findIndex(function (x) { return x === card; });
            if (index >= 0) {
                location.cards.splice(index, 1);
            }
        });
        this.host.locations[data.value].cards.push(card);
        var index = this.host.encounters.findIndex(function (x) { return x === card; });
        if (index >= 0) {
            this.host.encounters.splice(index, 1);
        }
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.discardEncounterInLocation = function (card, i) {
        var index = this.host.locations[i].cards.findIndex(function (x) { return x === card; });
        this.host.ediscard.push(this.host.locations[i].cards.splice(index, 1));
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.moveCharacter = function (i) {
        var player = this.deck.id;
        this.host.locations.forEach(function (location) {
            var index = location.characters.findIndex(function (x) { return x === player; });
            if (index >= 0) {
                location.characters.splice(index, 1);
            }
        });
        this.host.locations[i].characters.push(player);
        this.sAH.updateHost(this.host);
    };
    HomepageComponent.prototype.upClue = function () {
        this.host.clues++;
        this.sAH.updateHost(this.host);
        //CHANGE HERE - Character in host ?
        this.character.i--;
    };
    HomepageComponent.prototype.upIndice = function (index) {
        this.host.locations[index].indices++;
        this.sAH.updateHost(this.host);
        this.character.i++;
    };
    // ONLY CLIENT
    HomepageComponent.prototype.seeDeck = function () {
        this.sDeck = !this.sDeck;
        if (!this.sDeck) {
            this.deck.stack = this.knuthShuffle(this.deck.stack);
        }
    };
    HomepageComponent.prototype.drawDeck = function () {
        var card = this.deck.stack.pop();
        this.stack.push(card);
        this.aCharge[card] = 0;
    };
    HomepageComponent.prototype.discard = function (card) {
        var index = this.stack.findIndex(function (x) { return x === card; });
        this.sdiscard.push(this.stack.splice(index, 1));
    };
    HomepageComponent.prototype.equip = function (card) {
        var index = this.stack.findIndex(function (x) { return x === card; });
        this.assets.push(this.stack.splice(index, 1));
    };
    HomepageComponent.prototype.discardAsset = function (card) {
        var index = this.assets.findIndex(function (x) { return x === card; });
        this.sdiscard.push(this.assets.splice(index, 1));
    };
    HomepageComponent.prototype.backStack = function (card) {
        var index = this.sdiscard.findIndex(function (x) { return x === card; });
        this.stack.push(this.sdiscard.splice(index, 1));
    };
    HomepageComponent.prototype.deckToStack = function (card) {
        var index = this.deck.stack.findIndex(function (x) { return x === card; });
        this.stack.push(this.deck.stack.splice(index, 1));
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ahlcg',
        template: __webpack_require__(429),
        styles: [__webpack_require__(140)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ah_service__["a" /* ArhkamHorrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ah_service__["a" /* ArhkamHorrorService */]) === "function" && _d || Object])
], HomepageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(64)();
// imports


// module
exports.push([module.i, ".right { float: right; }\n.left { float: left; }\n.dialog-header-image {\n  background-image: url('https://s-media-cache-ak0.pinimg.com/564x/47/e8/3f/47e83fe56637e3583a10cee138c45342.jpg');\n  background-size: cover;\n}\n.text-shadow { color:transparent; text-shadow:0 0 30px #000; }\n.card, .card-top, .card-bottom {\n  max-height:150px;\n  display:inline-block;\n  position: relative;\n  -webkit-transition: all 200ms ease-in;\n  -webkit-transform: scale(1);\n  -ms-transition: all 200ms ease-in;\n  -ms-transform: scale(1);\n  -moz-transition: all 200ms ease-in;\n  -moz-transform: scale(1);\n  transition: all 200ms ease-in;\n  transform: scale(1);\n}\n.card-top:hover\n{\n  z-index: 2;\n  -webkit-transition: all 500ms ease-in;\n  -webkit-transform: translate(0%, 100%) scale(3);\n  -ms-transition: all 500ms ease-in;\n  -ms-transform: translate(0%, 100%) scale(3);\n  -moz-transition: all 500ms ease-in;\n  -moz-transform: translate(0%, 100%) scale(3);\n  transition: all 500ms ease-in;\n  transform: translate(0%, 100%) scale(3);\n}\n.card-bottom:hover {\n  z-index: 2;\n  -webkit-transition: all 500ms ease-in;\n  -webkit-transform: translate(0%, -100%) scale(3);\n  -ms-transition: all 500ms ease-in;\n  -ms-transform: translate(0%, -100%) scale(3);\n  -moz-transition: all 500ms ease-in;\n  -moz-transform: translate(0%, -100%) scale(3);\n  transition: all 500ms ease-in;\n  transform: translate(0%, -100%) scale(3);\n}\n\n.app-content {\n  padding-top: 30px;\n}\n.app-content md-card, .mt-component-card {\n  margin: 20px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.app-sidenav {\n  padding: 10px;\n  min-width: 100px;\n  padding-top: 60px;\n}\n.app-content md-checkbox { margin: 10px; }\n.app-toolbar-filler { -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; }\n.app-toolbar-menu {\n  padding: 0 14px 0 14px;\n  color: white;\n}\n.app-icon-button {\n  box-shadow: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  -webkit-filter: none;\n          filter: none;\n  font-weight: normal;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  min-width: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none;\n}\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n}\n.app-input-icon { font-size: 16px; }\n.app-list {\n  border: 1px solid rgba(0,0,0,0.12);\n  width: 350px;\n  margin: 20px;\n}\n.app-progress { margin: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 320;


/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(348);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_http, _injector, _router) {
        this._http = _http;
        this._injector = _injector;
        this._router = _router;
        var state = null;
        _router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                // document.getElementById('pBar').style.display = "block";
            }
            // if(event instanceof RoutesRecognized) {}
            // if(event instanceof NavigationEnd) {}
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(428),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_pagination__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__homepage_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ah_service__ = __webpack_require__(115);
/* unused harmony export NewlinePipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var NewlinePipe = (function () {
    function NewlinePipe() {
    }
    NewlinePipe.prototype.transform = function (value, args) {
        return (value) ? value.replace(/(?:\r\n|\r|\n)/g, '<br />') : value;
    };
    return NewlinePipe;
}());
NewlinePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'newline' })
], NewlinePipe);

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__homepage_component__["a" /* HomepageComponent */],
            NewlinePipe
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_12_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */]
        ],
        entryComponents: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ah_service__["a" /* ArhkamHorrorService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homepage_component__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });

var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__homepage_component__["a" /* HomepageComponent */] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 144,
	"./af.js": 144,
	"./ar": 151,
	"./ar-dz": 145,
	"./ar-dz.js": 145,
	"./ar-kw": 146,
	"./ar-kw.js": 146,
	"./ar-ly": 147,
	"./ar-ly.js": 147,
	"./ar-ma": 148,
	"./ar-ma.js": 148,
	"./ar-sa": 149,
	"./ar-sa.js": 149,
	"./ar-tn": 150,
	"./ar-tn.js": 150,
	"./ar.js": 151,
	"./az": 152,
	"./az.js": 152,
	"./be": 153,
	"./be.js": 153,
	"./bg": 154,
	"./bg.js": 154,
	"./bn": 155,
	"./bn.js": 155,
	"./bo": 156,
	"./bo.js": 156,
	"./br": 157,
	"./br.js": 157,
	"./bs": 158,
	"./bs.js": 158,
	"./ca": 159,
	"./ca.js": 159,
	"./cs": 160,
	"./cs.js": 160,
	"./cv": 161,
	"./cv.js": 161,
	"./cy": 162,
	"./cy.js": 162,
	"./da": 163,
	"./da.js": 163,
	"./de": 166,
	"./de-at": 164,
	"./de-at.js": 164,
	"./de-ch": 165,
	"./de-ch.js": 165,
	"./de.js": 166,
	"./dv": 167,
	"./dv.js": 167,
	"./el": 168,
	"./el.js": 168,
	"./en-au": 169,
	"./en-au.js": 169,
	"./en-ca": 170,
	"./en-ca.js": 170,
	"./en-gb": 171,
	"./en-gb.js": 171,
	"./en-ie": 172,
	"./en-ie.js": 172,
	"./en-nz": 173,
	"./en-nz.js": 173,
	"./eo": 174,
	"./eo.js": 174,
	"./es": 176,
	"./es-do": 175,
	"./es-do.js": 175,
	"./es.js": 176,
	"./et": 177,
	"./et.js": 177,
	"./eu": 178,
	"./eu.js": 178,
	"./fa": 179,
	"./fa.js": 179,
	"./fi": 180,
	"./fi.js": 180,
	"./fo": 181,
	"./fo.js": 181,
	"./fr": 184,
	"./fr-ca": 182,
	"./fr-ca.js": 182,
	"./fr-ch": 183,
	"./fr-ch.js": 183,
	"./fr.js": 184,
	"./fy": 185,
	"./fy.js": 185,
	"./gd": 186,
	"./gd.js": 186,
	"./gl": 187,
	"./gl.js": 187,
	"./gom-latn": 188,
	"./gom-latn.js": 188,
	"./he": 189,
	"./he.js": 189,
	"./hi": 190,
	"./hi.js": 190,
	"./hr": 191,
	"./hr.js": 191,
	"./hu": 192,
	"./hu.js": 192,
	"./hy-am": 193,
	"./hy-am.js": 193,
	"./id": 194,
	"./id.js": 194,
	"./is": 195,
	"./is.js": 195,
	"./it": 196,
	"./it.js": 196,
	"./ja": 197,
	"./ja.js": 197,
	"./jv": 198,
	"./jv.js": 198,
	"./ka": 199,
	"./ka.js": 199,
	"./kk": 200,
	"./kk.js": 200,
	"./km": 201,
	"./km.js": 201,
	"./kn": 202,
	"./kn.js": 202,
	"./ko": 203,
	"./ko.js": 203,
	"./ky": 204,
	"./ky.js": 204,
	"./lb": 205,
	"./lb.js": 205,
	"./lo": 206,
	"./lo.js": 206,
	"./lt": 207,
	"./lt.js": 207,
	"./lv": 208,
	"./lv.js": 208,
	"./me": 209,
	"./me.js": 209,
	"./mi": 210,
	"./mi.js": 210,
	"./mk": 211,
	"./mk.js": 211,
	"./ml": 212,
	"./ml.js": 212,
	"./mr": 213,
	"./mr.js": 213,
	"./ms": 215,
	"./ms-my": 214,
	"./ms-my.js": 214,
	"./ms.js": 215,
	"./my": 216,
	"./my.js": 216,
	"./nb": 217,
	"./nb.js": 217,
	"./ne": 218,
	"./ne.js": 218,
	"./nl": 220,
	"./nl-be": 219,
	"./nl-be.js": 219,
	"./nl.js": 220,
	"./nn": 221,
	"./nn.js": 221,
	"./pa-in": 222,
	"./pa-in.js": 222,
	"./pl": 223,
	"./pl.js": 223,
	"./pt": 225,
	"./pt-br": 224,
	"./pt-br.js": 224,
	"./pt.js": 225,
	"./ro": 226,
	"./ro.js": 226,
	"./ru": 227,
	"./ru.js": 227,
	"./sd": 228,
	"./sd.js": 228,
	"./se": 229,
	"./se.js": 229,
	"./si": 230,
	"./si.js": 230,
	"./sk": 231,
	"./sk.js": 231,
	"./sl": 232,
	"./sl.js": 232,
	"./sq": 233,
	"./sq.js": 233,
	"./sr": 235,
	"./sr-cyrl": 234,
	"./sr-cyrl.js": 234,
	"./sr.js": 235,
	"./ss": 236,
	"./ss.js": 236,
	"./sv": 237,
	"./sv.js": 237,
	"./sw": 238,
	"./sw.js": 238,
	"./ta": 239,
	"./ta.js": 239,
	"./te": 240,
	"./te.js": 240,
	"./tet": 241,
	"./tet.js": 241,
	"./th": 242,
	"./th.js": 242,
	"./tl-ph": 243,
	"./tl-ph.js": 243,
	"./tlh": 244,
	"./tlh.js": 244,
	"./tr": 245,
	"./tr.js": 245,
	"./tzl": 246,
	"./tzl.js": 246,
	"./tzm": 248,
	"./tzm-latn": 247,
	"./tzm-latn.js": 247,
	"./tzm.js": 248,
	"./uk": 249,
	"./uk.js": 249,
	"./ur": 250,
	"./ur.js": 250,
	"./uz": 252,
	"./uz-latn": 251,
	"./uz-latn.js": 251,
	"./uz.js": 252,
	"./vi": 253,
	"./vi.js": 253,
	"./x-pseudo": 254,
	"./x-pseudo.js": 254,
	"./yo": 255,
	"./yo.js": 255,
	"./zh-cn": 256,
	"./zh-cn.js": 256,
	"./zh-hk": 257,
	"./zh-hk.js": 257,
	"./zh-tw": 258,
	"./zh-tw.js": 258
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 421;


/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container style=\"padding-top:50px;min-height:800px\">\n  <router-outlet></router-outlet>\n</md-sidenav-container>\n"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\" style=\"text-align:center\" *ngIf=\"!startGame\">\n  <md-select placeholder=\"Select Your Campaign\" (change)=\"selectCampaign($event)\">\n    <md-option *ngFor=\"let campaign of campaigns\" [value]=\"campaign.label\">\n      {{ campaign.label }}\n    </md-option>\n  </md-select>\n  <md-select placeholder=\"Select Your Difficulty\" (change)=\"selectDifficulty($event)\">\n    <md-option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty.label\">\n      {{ difficulty.label }}\n    </md-option>\n  </md-select>\n  <button md-raised-button *ngIf=\"sCampaign && sDifficulty\" (click)=\"newHost()\">New Host !</button>\n  <div fxLayoutWrap fxLayoutAlign=\"center center\">\n    <md-card fxFlex=\"25%\" style=\"width:300px;margin:5px\" *ngFor=\"let host of hosts\">\n      <md-card-header>\n        <md-card-title>{{ host.name }} : {{ host.difficulty }}</md-card-title>\n      </md-card-header>\n      <img md-card-image src=\"http://cdn.miniaturemarket.com/media/catalog/product/f/f/ffguffs74.jpg\">\n      <md-card-content>\n        <p> {{ host.characters.length }} Player(s) in game </p>\n        <md-select placeholder=\"Select Your Character\" (change)=\"selectCharacter($event)\">\n          <md-option *ngFor=\"let character of availableCharacters(host.characters)\" [value]=\"character.id\">\n            {{ character.label }}\n          </md-option>\n        </md-select>\n      </md-card-content>\n      <md-card-actions>\n        <button md-button (click)=\"play(host)\" >PLAY !</button>\n        <button md-button (click)=\"spectator(host)\" >SPECTATOR !</button>\n      </md-card-actions>\n    </md-card>\n  </div>\n  <div *ngIf=\"deck\">\n    <h2>CHARACTER</h2>\n    <img src=\"https://arkhamdb.com/bundles/cards/{{ deck.investigator }}.png\" (error)=\"fixUrl(deck.investigator, $event)\"  class=\"card-bottom\" />\n    <img src=\"https://arkhamdb.com/bundles/cards/{{ deck.investigator }}b.png\" (error)=\"fixUrl(deck.investigator+'b', $event)\"  class=\"card-bottom\" />\n    <h2>ASSETS</h2>\n    <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" *ngFor=\"let card of deck.assets\" />\n    <h2>EVENTS</h2>\n    <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" *ngFor=\"let card of deck.events\" />\n    <h2>SKILLS</h2>\n    <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" *ngFor=\"let card of deck.skills\" />\n    <h2>WEAKNESS</h2>\n    <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" *ngFor=\"let card of deck.weakness\" />\n    <h2>EVOLUTION</h2>\n    <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" *ngFor=\"let card of deck.evolution\" />\n  </div>\n\n  <!-- ALL CARDS -->\n  <!-- <div fxLayoutWrap fxLayoutAlign=\"center center\" style=\"margin: 80px;\">\n    <div fxFlex style=\"position:relative;padding-bottom: 30px;\" *ngFor=\"let card of cc\">\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" />\n    </div>\n  </div> -->\n\n</div>\n\n<!-- HOST -->\n\n<div class=\"app-content\" *ngIf=\"startGame && host\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" style=\"padding-bottom: 50px;\">\n    <div style=\"position:relative\" (click)=\"seeEDiscard = !seeEDiscard\">\n      <img src=\"https://raw.githubusercontent.com/GeckoTH/arkham-horror/master/o8g/cards/encounter.jpg\" class=\"card\" />\n      <span style=\"position:absolute;top: 38%;left: 50%;transform: translate(-50%, -50%);color: white;\">{{ host.ediscard.length }}</span>\n    </div>\n    <div style=\"position:relative\" (click)=\"drawEncounter()\">\n      <img src=\"https://raw.githubusercontent.com/GeckoTH/arkham-horror/master/o8g/cards/encounter.jpg\" class=\"card\" />\n      <span style=\"position:absolute;top: 38%;left: 50%;transform: translate(-50%, -50%);color: white;\">{{ host.campaign.encounter.length }}</span>\n    </div>\n    <div>\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ host.campaign.difficulty }}.png\" (error)=\"fixUrl(host.campaign.difficulty, $event)\" class=\"card-top\" />\n    </div>\n    <div style=\"position:relative\" *ngIf=\"host.campaign.agenda_active\">\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ host.campaign.agenda_active }}.png\" class=\"card-top\" (error)=\"fixUrl(host.campaign.agenda_active, $event)\" (click)=\"newAgenda()\" />\n      <a md-mini-fab style=\"position:absolute;bottom: 0;left: 0;color: white;\" (click)=\"upDoom()\">{{ host.dooms }}</a>\n    </div>\n    <div style=\"position:relative\" *ngIf=\"host.campaign.act_active\">\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ host.campaign.act_active }}.png\" class=\"card-top\" (error)=\"fixUrl(host.campaign.act_active, $event)\" (click)=\"newAct()\" />\n      <a md-mini-fab style=\"position:absolute;bottom: 0;right: 0;color: white;\" (click)=\"upClue()\">{{ host.clues }}</a>\n    </div>\n    <div style=\"text-align:center\" *ngFor=\"let card of host.campaign.setup\">\n      <div style=\"position:relative;width:145px\" >\n        <img src=\"https://raw.githubusercontent.com/GeckoTH/arkham-horror/master/o8g/cards/encounter.jpg\" class=\"card\" />\n        <md-select style=\"position:absolute;top:-35px;left:0;\" placeholder=\"Location\" (change)=\"moveEncounter($event, card)\">\n          <md-option *ngFor=\"let location of host.locations; let i = index\" [value]=\"i\">{{ i }}</md-option>\n        </md-select>\n      </div>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" style=\"padding-bottom: 50px;text-align:center\" fxLayoutAlign=\"center center\" *ngIf=\"host\">\n    <div fxFlex=\"12%\" style=\"text-align:center\" *ngFor=\"let location of host.locations; let l = index\">\n      <div style=\"position:relative;width:145px\">\n        <img src=\"https://arkhamdb.com/bundles/cards/{{ location.id + ((location.seal) ? 'b' : '') }}.png\" (error)=\"fixUrl(location.id, $event)\" class=\"card-top\" (click)=\"moveCharacter(l)\" />\n        <a md-mini-fab *ngIf=\"location.seal\" style=\"position:absolute;top: 100%;left: 30%;transform: translate(-50%, -50%);color: white;\" (click)=\"openSeal(l)\"><md-icon>lock_open</md-icon></a>\n        <a md-mini-fab style=\"position:absolute;top: 100%;transform: translate(-50%, -50%);color: white;\" (click)=\"upIndice(l)\">{{ location.indices }}</a>\n        <div style=\"position:absolute;top:-20px;\">\n          <span *ngFor=\"let player of location.characters\">| {{ player }} |</span>\n        </div>\n      </div>\n      <div *ngFor=\"let card of location.cards\">\n        <div style=\"position:relative;width:145px;margin-top:70px\" >\n          <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\" class=\"card-top\" />\n          <a md-mini-fab style=\"position:absolute;top: 100%;left: 15%;color: white;\" (click)=\"discardEncounterInLocation(card, l)\"><md-icon>delete</md-icon></a>\n          <a md-mini-fab style=\"position:absolute;top: 100%;left: 50%;color: white;\" (click)=\"charge(card)\">{{ displayCharge(card) }}</a>\n          <md-select style=\"position:absolute;top:-35px;left:0;\" placeholder=\"Location\" (change)=\"moveEncounter($event, card)\">\n            <md-option *ngFor=\"let location of host.locations; let i = index\" [value]=\"i\">\n              {{ i }}\n            </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n    <div fxFlex=\"12%\" style=\"text-align:center\" *ngFor=\"let card of host.encounters\">\n      <div style=\"position:relative;width:145px\" >\n        <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\" class=\"card-top\" />\n        <a md-mini-fab style=\"position:absolute;top: 100%;left: 15%;color: white;\" (click)=\"discardEncounter(card)\"><md-icon>delete</md-icon></a>\n        <a md-mini-fab style=\"position:absolute;top: 100%;left: 50%;color: white;\" (click)=\"charge(card)\">{{ displayCharge(card) }}</a>\n        <md-select style=\"position:absolute;top:-35px;left:0;\" placeholder=\"Location\" (change)=\"moveEncounter($event, card)\">\n          <md-option *ngFor=\"let location of host.locations; let i = index\" [value]=\"i\">\n            {{ i }}\n          </md-option>\n        </md-select>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"text-align:center\" *ngIf=\"chaos\">\n    CHAOS : {{ chaos }}\n    <button md-raised-button (click)=\"chaos = null\">OUah !</button>\n  </div>\n\n<!-- DISCARD -->\n\n  <div fxLayout=\"row\" style=\"padding-bottom: 50px;\" fxLayoutAlign=\"center center\" *ngIf=\"seeDiscard\">\n    <div fxFlex=\"12%\" *ngFor=\"let card of sdiscard\">\n      <div style=\"position:relative;width:145px\" >\n        <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" />\n        <a md-mini-fab style=\"position:absolute;top: 100%;left: 30%;transform: translate(-50%, -50%);color: white;\" (click)=\"backStack(card)\"><md-icon>add</md-icon></a>\n      </div>\n    </div>\n  </div>\n  <div fxLayout=\"row\" style=\"padding-bottom: 50px;\" fxLayoutAlign=\"center center\" *ngIf=\"seeEDiscard\">\n    <div fxFlex=\"12%\" *ngFor=\"let card of host.ediscard\">\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" />\n    </div>\n  </div>\n  <div fxLayoutWrap fxLayoutAlign=\"center center\" style=\"margin: 80px;\" *ngIf=\"sDeck\">\n    <div fxFlex style=\"position:relative;padding-bottom: 30px;\" *ngFor=\"let card of deck.stack\">\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" />\n      <a md-mini-fab style=\"position:absolute;top:70%;left:0%;\" (click)=\"deckToStack(card)\"><md-icon>add</md-icon></a>\n    </div>\n  </div>\n\n<!-- PLAYER -->\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"padding-bottom: 50px;\" *ngIf=\"deck\">\n    <div style=\"position:relative;\" (click)=\"seeDiscard = !seeDiscard\">\n      <img src=\"https://raw.githubusercontent.com/GeckoTH/arkham-horror/master/o8g/cards/card.jpg\" class=\"card\" />\n      <span style=\"position:absolute;top: 38%;left: 50%;transform: translate(-50%, -50%);color: white;\">{{ sdiscard.length }}</span>\n    </div>\n    <div style=\"position:relative;\">\n      <img src=\"https://raw.githubusercontent.com/GeckoTH/arkham-horror/master/o8g/cards/card.jpg\" class=\"card\" (click)=\"drawDeck()\" />\n      <span style=\"position:absolute;top: 38%;left: 50%;transform: translate(-50%, -50%);color: white;\">{{ deck.stack.length }}</span>\n      <a md-mini-fab style=\"position:absolute;top: 100%;\" (click)=\"seeDeck()\"><md-icon>visibility</md-icon></a>\n    </div>\n    <div style=\"position:relative;\">\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ deck.investigator }}.png\" class=\"card-bottom\" (error)=\"fixUrl(deck.investigator, $event)\" />\n    </div>\n    <div style=\"position:relative;\">\n      <p style=\"margin:0px\"> A : <md-slider max=\"3\" min=\"0\" thumb-label=\"true\" [(value)]=\"character.a\"></md-slider> </p>\n      <p style=\"margin:0px\"> D : <md-slider max=\"10\" min=\"0\" thumb-label=\"true\" [(value)]=\"character.d\"></md-slider> </p>\n      <p style=\"margin:0px\"> H : <md-slider max=\"10\" min=\"0\" thumb-label=\"true\" [(value)]=\"character.h\"></md-slider> </p>\n      <p style=\"margin:0px\"> R : <md-slider max=\"10\" min=\"0\" thumb-label=\"true\" [(value)]=\"character.r\"></md-slider> </p>\n      <p style=\"margin:0px\"> I : <md-slider max=\"10\" min=\"0\" thumb-label=\"true\" [(ngModel)]=\"character.i\"></md-slider> </p>\n    </div>\n    <div style=\"position:relative;margin:5px\">\n      <img style=\"width:50px\" src=\"https://raw.githubusercontent.com/GeckoTH/arkham-horror/master/o8g/cards/chaostokenback.jpg\" (click)=\"pickChaos()\" />\n      <p><a md-mini-fab (click)=\"newLocation()\"><md-icon>location_on</md-icon></a></p>\n    </div>\n    <div fxFlex style=\"position:relative;width:145px\" *ngFor=\"let card of assets;\">\n      <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" />\n      <a md-mini-fab style=\"position:absolute;top: 100%;left: 0px;color: white;\" (click)=\"discardAsset(card)\"><md-icon>delete</md-icon></a>\n      <a md-mini-fab style=\"position:absolute;top: 100%;left: 50px;color: white;\" (click)=\"aCharge[card] = aCharge[card] + 1\">{{ aCharge[card] }}</a>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" style=\"padding-bottom: 50px;\" fxLayoutAlign=\"center center\" *ngIf=\"deck\">\n    <div fxFlex=\"12%\" *ngFor=\"let card of stack\">\n      <div style=\"position:relative;width:145px\" >\n        <img src=\"https://arkhamdb.com/bundles/cards/{{ card }}.png\" (error)=\"fixUrl(card, $event)\"  class=\"card-bottom\" />\n        <a md-mini-fab style=\"position:absolute;top: 100%;left: 30%;transform: translate(-50%, -50%);color: white;\" (click)=\"discard(card)\"><md-icon>delete</md-icon></a>\n        <a md-mini-fab style=\"position:absolute;top: 100%;left: 70%;transform: translate(-50%, -50%);color: white;\" (click)=\"equip(card)\"><md-icon>all_inclusive</md-icon></a>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(321);


/***/ })

},[688]);
//# sourceMappingURL=main.bundle.js.map