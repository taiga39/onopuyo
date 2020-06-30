let CANVAS_WIDTH	= 600; // Canvasの幅
let CANVAS_HEIGHT	= 600; // Canvasの高さ

let BLOCK_WIDTH		= 2; // ブロックの領域幅
let BLOCK_HEIGHT	= 2; // ブロックの領域高さ
let FIELD_WIDTH		= 12; // フィールドの幅
let FIELD_HEIGHT	= 22; // フィールドの高さ

let FIELD_X			= 40; // フィールドのCanvas内のX座標
let FIELD_Y			= 40; // フィールドのCanvas内のY座標

var field;
var cnt;
function init() {
	field = [ // Fieldの内容
	[9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
	[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
    ];
    bx = 4; // ブロックのX座標（マス）
	by = 0; // ブロックのY座標（マス）
	btype = 0; // ブロックの種類
    brot = 0; // ブロックの回転種類
    cnt = 1; // カウンタ変数
}
function update() {
	if(cnt % 30 == 0) {
		by++; // ブロックを１マス落下
	}
}
function drawField() {
	for(var i = 0;i < FIELD_HEIGHT;i++) {
		for(var j = 0;j < FIELD_WIDTH;j++) {
			if(field[i][j] == 0) continue; // 「０」なら描画しない
			
			context.fillStyle = "rgba(150, 150, 150, 1.0)"; // グレーに設定
			context.fillRect(FIELD_X + j * 25, FIELD_Y + i * 25, 25, 25); // 25×25の矩形（マス）を描画
		}
	}
}
function drawFrame() {
	context.fillStyle = "rgba(230, 230, 230, 1.0)"; // 白色に設定
	
	//	縦線を描画
	for(var i = 0;i < FIELD_WIDTH + 1;i++) {
		context.fillRect(FIELD_X + i * 25, FIELD_Y, 1, 25 * FIELD_HEIGHT);
	}
	
	//	横線を描画
	for(var i = 0;i < FIELD_HEIGHT + 1;i++) {
		context.fillRect(FIELD_X, FIELD_Y + i * 25, 25 * FIELD_WIDTH, 1);
	}
}
function drawBlock() {
	context.fillStyle = "rgba(255, 100, 100, 1.0)"; // 赤色に設定
	
	//	ブロックを描画
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(block[btype][brot][i][j] == 1) {
                // context.fillRect(FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25, 25, 25);
                context.font = "24px 'ＭＳ ゴシック'";
                context.fillText("の",FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25);
            }
            if(block[btype][brot][i][j] == 2) {
                // context.fillRect(FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25, 25, 25);
                context.font = "24px 'ＭＳ ゴシック'";
                context.fillText("お",FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25);
			}
		}
	}
}
init();

let block = [ // ブロックの定義
    [
        [
            [0, 0],
            [1, 1]
        ],
        [
            [1, 0],
            [1, 0]
        ],
        [
            [0, 0],
            [1, 1]
        ],
        [
            [1, 0],
            [1, 0]
        ]
    ],
    [
        [
            [0, 0],
            [2, 1]
        ],
        [
            [2, 0],
            [1, 0]
        ],
        [
            [0, 0],
            [1, 2]
        ],
        [
            [1, 0],
            [2, 0]
        ]
    ],
    [
        [
            [0, 0],
            [1, 3]
        ],
        [
            [1, 0],
            [3, 0]
        ],
        [
            [0, 0],
            [3, 1]
        ],
        [
            [1, 0],
            [3, 0]
        ]
    ],
    [
        [
            [0, 0],
            [4, 1]
        ],
        [
            [4, 0],
            [1, 0]
        ],
        [
            [0, 0],
            [1, 4]
        ],
        [
            [1, 0],
            [4, 0]
        ]
    ]
]











var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

requestAnimationFrame(main);

function main() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    update(); // 更新
	drawBlock(); // ブロックを描画
	drawField(); // フィールドを描画
    drawFrame(); // フィールド枠を描画
    cnt++;
	requestAnimationFrame(main); // ループさせる
}