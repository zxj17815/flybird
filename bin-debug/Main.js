//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        //创建对象
        _this.start = new egret.Bitmap();
        _this.bird = new egret.Bitmap();
        _this.sky = new egret.Bitmap();
        _this.rollsky = new egret.Bitmap();
        _this.ground = new egret.Bitmap();
        _this.rollground = new egret.Bitmap();
        _this.gameOver = new egret.Bitmap();
        _this.gameStatus = false;
        _this.touchbox = new egret.Sprite();
        _this.column_top1 = new egret.Bitmap();
        _this.column_down1 = new egret.Bitmap();
        _this.column_top2 = new egret.Bitmap();
        _this.column_down2 = new egret.Bitmap();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        this.sky.texture = RES.getRes("sky_png");
        this.addChild(this.sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.sky.width = stageW;
        this.sky.height = stageH * 0.8;
        this.rollsky.texture = RES.getRes("sky_png");
        this.addChild(this.rollsky);
        this.rollsky.width = stageW;
        this.rollsky.height = stageH * 0.8;
        this.rollsky.x = stageW;
        this.column_top1.texture = RES.getRes("column_up_png");
        this.addChild(this.column_top1);
        this.column_top2.texture = RES.getRes("column_up_png");
        this.addChild(this.column_top2);
        this.column_down1.texture = RES.getRes("column_down_png");
        this.addChild(this.column_down1);
        this.column_down2.texture = RES.getRes("column_down_png");
        this.addChild(this.column_down2);
        this.ground.texture = RES.getRes("ground_png");
        this.addChild(this.ground);
        this.ground.width = stageW;
        this.ground.height = stageH * 0.2;
        this.ground.y = this.sky.height;
        this.rollground.texture = RES.getRes("ground_png");
        this.addChild(this.rollground);
        this.rollground.width = stageW;
        this.rollground.height = stageH * 0.2;
        this.rollground.y = this.sky.height;
        this.rollground.x = stageW;
        this.bird.texture = RES.getRes("bird#birdup");
        this.addChild(this.bird);
        this.bird.width = stageW * 0.12;
        this.bird.height = stageH * 0.05;
        this.bird.x = stageW * 0.2;
        this.bird.y = stageH * 0.5;
        this.column_top1.width = stageW * 0.15;
        this.column_top1.height = stageH * 0.6;
        var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10;
        this.column_top1.y = -stageH * 0.1 * r;
        console.log(this.column_top1.y);
        this.column_top1.x = stageW;
        this.column_top2.width = stageW * 0.15;
        this.column_top2.height = stageH * 0.6;
        var r2 = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10;
        this.column_top2.y = -stageH * 0.1 * r2;
        console.log(this.column_top2.y);
        this.column_top2.x = stageW * 2;
        this.column_down1.width = stageW * 0.15;
        this.column_down1.height = stageH * 0.6;
        this.column_down1.y = this.column_top1.y + stageH * 0.6 + this.bird.height * 5;
        console.log(this.column_down1.y);
        this.column_down1.x = this.column_top1.x;
        this.column_down2.width = stageW * 0.15;
        this.column_down2.height = stageH * 0.6;
        this.column_down2.y = this.column_top2.y + stageH * 0.6 + this.bird.height * 4.5;
        console.log(this.column_down2.y);
        this.column_down2.x = stageW * 2;
        this.start.texture = RES.getRes("start#start_on");
        this.start.anchorOffsetX = this.start.width / 2;
        this.start.anchorOffsetY = this.start.height / 2;
        this.start.x = stageW * 0.5;
        this.start.y = stageH * 0.9;
        this.start.touchEnabled = true;
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
        this.addChild(this.start);
        this.addChild(this.gameOver);
        this.gameOver.texture = RES.getRes("over_png");
        this.gameOver.width = this.stage.stageWidth * 0.8;
        this.gameOver.height = this.stage.stageHeight * 0.6;
        this.gameOver.x = this.stage.stageWidth * 0.1;
        this.gameOver.y = this.stage.stageHeight * 0.2;
        //绘制一个透明度为0的矩形，覆盖全屏用于触发点击事件
        this.touchbox.graphics.beginFill(0x00ff00, 0);
        this.touchbox.graphics.drawRect(0, 0, stageW, stageH);
        this.touchbox.graphics.endFill();
        this.touchbox.width = stageW;
        this.touchbox.height = stageH;
        //设置显示对象可以相应触摸事件
        this.touchbox.touchEnabled = true;
        //注册touch事件
        this.touchbox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        //注册帧监听
        this.bird.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    //点击开始
    Main.prototype.onStart = function (evt) {
        this.addChild(this.touchbox);
        this.removeChild(this.gameOver);
        this.removeChild(this.start);
        this.gameStatus = true;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.bird.x = stageW * 0.2;
        this.bird.y = stageH * 0.5;
        var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10;
        this.column_top1.y = -stageH * 0.1 * r;
        this.column_top1.x = stageW;
        r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10;
        this.column_top2.y = -stageH * 0.1 * r;
        this.column_top2.x = stageW * 2;
        this.column_down1.y = this.column_top1.y + stageH * 0.6 + this.bird.height * 5;
        this.column_down1.x = this.column_top1.x;
        this.column_down2.y = this.column_top2.y + stageH * 0.6 + this.bird.height * 4.5;
        this.column_down2.x = stageW * 2;
    };
    // 点击屏幕事件
    Main.prototype.onTouch = function (evt) {
        if (this.gameStatus) {
            egret.Tween.pauseTweens(this.bird);
            egret.Tween.removeTweens(this.bird);
            var fly = egret.Tween.get(this.bird, { loop: false }).call(function () {
                this.bird.texture = RES.getRes("bird#birdnm");
            }, this, []);
            fly.wait(100);
            fly.call(function () {
                this.bird.texture = RES.getRes("bird#birddown");
            }, this, []);
            fly.wait(100);
            fly.call(function () {
                this.bird.texture = RES.getRes("bird#birdup");
            }, this, []);
            var up = egret.Tween.get(this.bird, { loop: false });
            up.to({ x: this.bird.x, y: this.bird.y + this.stage.stageHeight * -0.11 }, 350, egret.Ease.sineOut);
            up.to({ x: this.bird.x, y: this.stage.stageHeight }, 800, egret.Ease.sineIn);
        }
    };
    Main.prototype.onEnterFrame = function (e) {
        if (this.gameStatus) {
            var rcl = 4;
            //先获取鸟的上、下、前、后轴线
            var bird_f = this.bird.x + this.bird.width - rcl;
            var bird_b = this.bird.x + rcl;
            var bird_top = this.bird.y + rcl;
            var bird_down = this.bird.y + this.bird.height - rcl;
            // 碰撞检测
            if (this.column_top1.hitTestPoint(bird_f, bird_top) || this.column_down1.hitTestPoint(bird_f - 2, bird_down) ||
                this.column_top1.hitTestPoint(bird_b, bird_top) || this.column_down1.hitTestPoint(bird_b, bird_down) ||
                this.column_top2.hitTestPoint(bird_f, bird_top) || this.column_down2.hitTestPoint(bird_f, bird_down) ||
                this.column_top2.hitTestPoint(bird_b, bird_top) || this.column_down2.hitTestPoint(bird_b, bird_down) ||
                (bird_down > this.stage.stageHeight * 0.8) || (bird_top < 0)) {
                this.gameStatus = false;
                this.addChild(this.gameOver);
                this.addChild(this.start);
            }
            else {
                //循环背景
                if (this.sky.x == -this.stage.stageWidth) {
                    this.sky.x = this.stage.stageWidth;
                }
                if (this.rollsky.x == -this.stage.stageWidth) {
                    this.rollsky.x = this.stage.stageWidth;
                }
                if (this.ground.x == -this.stage.stageWidth) {
                    this.ground.x = this.stage.stageWidth;
                }
                if (this.rollground.x == -this.stage.stageWidth) {
                    this.rollground.x = this.stage.stageWidth;
                }
                //循环生成柱子
                if (this.column_top1.x == -this.stage.stageWidth) {
                    var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10;
                    this.column_top1.y = -this.stage.stageHeight * 0.1 * r;
                    this.column_down1.y = this.column_top1.y + this.stage.stageHeight * 0.6 + this.bird.height * 4.5;
                    this.column_top1.x = this.stage.stageWidth;
                    this.column_down1.x = this.stage.stageWidth;
                }
                if (this.column_top2.x == -this.stage.stageWidth) {
                    var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10;
                    this.column_top2.y = -this.stage.stageHeight * 0.1 * r;
                    this.column_down2.y = this.column_top2.y + this.stage.stageHeight * 0.6 + this.bird.height * 4.2;
                    this.column_top2.x = this.stage.stageWidth;
                    this.column_down2.x = this.stage.stageWidth;
                }
                this.sky.x -= 8;
                this.ground.x -= 8;
                this.rollsky.x -= 8;
                this.rollground.x -= 8;
                this.column_top1.x -= 8;
                this.column_down1.x -= 8;
                this.column_top2.x -= 8;
                this.column_down2.x -= 8;
            }
        }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map