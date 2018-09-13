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

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        // const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }


    //创建对象
    private start: egret.Bitmap = new egret.Bitmap();
    private bird: egret.Bitmap = new egret.Bitmap();
    private sky: egret.Bitmap = new egret.Bitmap();
    private rollsky: egret.Bitmap = new egret.Bitmap();
    private ground: egret.Bitmap = new egret.Bitmap();
    private rollground: egret.Bitmap = new egret.Bitmap();
    private gameOver: egret.Bitmap = new egret.Bitmap();
    private gameStatus: boolean = false;
    private touchbox: egret.Sprite = new egret.Sprite();

    private column_top1: egret.Bitmap = new egret.Bitmap();
    private column_down1: egret.Bitmap = new egret.Bitmap();
    private column_top2: egret.Bitmap = new egret.Bitmap();
    private column_down2: egret.Bitmap = new egret.Bitmap();

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        this.sky.texture = RES.getRes("sky_png");
        this.addChild(this.sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
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
        this.column_top1.height = stageH * 0.6
        var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10
        this.column_top1.y = -stageH * 0.1 * r;
        console.log(this.column_top1.y)
        this.column_top1.x = stageW;

        this.column_top2.width = stageW * 0.15;
        this.column_top2.height = stageH * 0.6
        var r2 = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10
        this.column_top2.y = -stageH * 0.1 * r2;
        console.log(this.column_top2.y)
        this.column_top2.x = stageW * 2

        this.column_down1.width = stageW * 0.15;
        this.column_down1.height = stageH * 0.6;
        this.column_down1.y = this.column_top1.y + stageH * 0.6 + this.bird.height * 5;
        console.log(this.column_down1.y)
        this.column_down1.x = this.column_top1.x

        this.column_down2.width = stageW * 0.15;
        this.column_down2.height = stageH * 0.6;
        this.column_down2.y = this.column_top2.y + stageH * 0.6 + this.bird.height * 4.5;
        console.log(this.column_down2.y)
        this.column_down2.x = stageW * 2

        this.start.texture = RES.getRes("start#start_on");
        this.start.anchorOffsetX = this.start.width / 2;
        this.start.anchorOffsetY = this.start.height / 2;
        this.start.x = stageW * 0.5
        this.start.y = stageH * 0.9
        this.start.touchEnabled = true;
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this)
        this.addChild(this.start)
        this.addChild(this.gameOver)

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


    }

    //点击开始
    private onStart(evt: egret.TouchEvent) {
        this.addChild(this.touchbox)
        this.removeChild(this.gameOver)
        this.removeChild(this.start)
        this.gameStatus = true;
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        this.bird.x = stageW * 0.2;
        this.bird.y = stageH * 0.5;

        var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10
        this.column_top1.y = -stageH * 0.1 * r;
        this.column_top1.x = stageW;

        r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10
        this.column_top2.y = -stageH * 0.1 * r;
        this.column_top2.x = stageW * 2

        this.column_down1.y = this.column_top1.y + stageH * 0.6 + this.bird.height * 5;
        this.column_down1.x = this.column_top1.x

        this.column_down2.y = this.column_top2.y + stageH * 0.6 + this.bird.height * 4.5;
        this.column_down2.x = stageW * 2
    }

    // 点击屏幕事件
    private onTouch(evt: egret.TouchEvent) {
        if (this.gameStatus) {
            egret.Tween.pauseTweens(this.bird);
            egret.Tween.removeTweens(this.bird);
            var fly = egret.Tween.get(this.bird, { loop: false }).call(function () {
                this.bird.texture = RES.getRes("bird#birdnm")
            }, this, []);
            fly.wait(100)
            fly.call(function () {
                this.bird.texture = RES.getRes("bird#birddown")
            }, this, []);
            fly.wait(100)
            fly.call(function () {
                this.bird.texture = RES.getRes("bird#birdup")
            }, this, []);
            var up = egret.Tween.get(this.bird, { loop: false })
            up.to({ x: this.bird.x, y: this.bird.y + this.stage.stageHeight * -0.11 }, 350, egret.Ease.sineOut);
            up.to({ x: this.bird.x, y: this.stage.stageHeight }, 800, egret.Ease.sineIn);
        }
    }

    private onEnterFrame(e: egret.Event) {
        if (this.gameStatus) {
            var rcl = 4
            //先获取鸟的上、下、前、后轴线
            var bird_f = this.bird.x + this.bird.width - rcl;
            var bird_b = this.bird.x + rcl
            var bird_top = this.bird.y + rcl;
            var bird_down = this.bird.y + this.bird.height - rcl;

            // 碰撞检测
            if (this.column_top1.hitTestPoint(bird_f, bird_top) || this.column_down1.hitTestPoint(bird_f - 2, bird_down) ||
                this.column_top1.hitTestPoint(bird_b, bird_top) || this.column_down1.hitTestPoint(bird_b, bird_down) ||
                this.column_top2.hitTestPoint(bird_f, bird_top) || this.column_down2.hitTestPoint(bird_f, bird_down) ||
                this.column_top2.hitTestPoint(bird_b, bird_top) || this.column_down2.hitTestPoint(bird_b, bird_down) ||
                (bird_down > this.stage.stageHeight * 0.8) || (bird_top < 0)) {
                this.gameStatus = false;
                this.addChild(this.gameOver)
                this.addChild(this.start)

            } else {
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
                    var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10
                    this.column_top1.y = -this.stage.stageHeight * 0.1 * r;
                    this.column_down1.y = this.column_top1.y + this.stage.stageHeight * 0.6 + this.bird.height * 4.5;
                    this.column_top1.x = this.stage.stageWidth;
                    this.column_down1.x = this.stage.stageWidth;
                }
                if (this.column_top2.x == -this.stage.stageWidth) {
                    var r = Math.round(((Math.random() * (5 - 2) + 2)) * 10) / 10
                    this.column_top2.y = -this.stage.stageHeight * 0.1 * r;
                    this.column_down2.y = this.column_top2.y + this.stage.stageHeight * 0.6 + this.bird.height * 4.2;
                    this.column_top2.x = this.stage.stageWidth;
                    this.column_down2.x = this.stage.stageWidth;
                }
                this.sky.x -= 8
                this.ground.x -= 8
                this.rollsky.x -= 8
                this.rollground.x -= 8
                this.column_top1.x -= 8
                this.column_down1.x -= 8
                this.column_top2.x -= 8
                this.column_down2.x -= 8
            }

        }
    }


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}