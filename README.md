# TOAST UI Chart ハンズオン

TOAST UI Chartを使用した基本的なチャート実装のハンズオンプロジェクトです。

## 環境要件

- Node.js (v16以上推奨)
- npm (v7以上推奨)
- VSCode + Live Server拡張機能（開発時）

## プロジェクト構成

```
handson-toast-ui-chart/
├── dist/               # ビルド出力ディレクトリ
├── src/
│   └── main.js        # メインのJavaScriptファイル
├── index.html         # メインのHTMLファイル
├── package.json       # プロジェクト設定ファイル
├── vite.config.js     # Vite設定ファイル
└── README.md          # このファイル
```

## セットアップ手順

1. リポジトリのクローン
```bash
git clone [リポジトリURL]
cd handson-toast-ui-chart
```

2. 依存関係のインストール
```bash
npm install
```

## 開発サーバーの起動

開発時は以下のコマンドでViteの開発サーバーを起動します：

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開くと開発版が表示されます。

## ビルドと配布

プロジェクトをビルドするには：

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## Live Serverでの確認

1. VSCodeでLive Server拡張機能をインストール
2. `dist/index.html` を右クリック
3. 「Open with Live Server」を選択

## 主な機能

- 基本的な棒グラフの表示
- データの動的更新
- レスポンシブ対応

## 実装例

```javascript
import { BarChart } from '@toast-ui/chart';

const data = {
    categories: ['Jan', 'Feb', 'Mar'],
    series: [
        {
            name: 'Sales',
            data: [30, 40, 50]
        }
    ]
};

const options = {
    chart: { 
        title: 'Monthly Sales',
        width: 800, 
        height: 400 
    }
};

const chart = new BarChart({
    el: document.getElementById('chart'),
    data,
    options
});
```

## 設定ファイル

### vite.config.js
```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  // 相対パスでアセットを参照
  server: {
    port: 3000
  },
  resolve: {
    dedupe: ['@toast-ui/chart']
  }
})
```

## トラブルシューティング

1. モジュールが見つからないエラー
   - `npm install` を再実行
   - node_modulesを削除して再インストール

2. ビルド後のパスエラー
   - vite.config.jsの `base: './'` を確認
   - 再ビルドを実行

3. チャートが表示されない
   - コンソールエラーを確認
   - チャートコンテナのサイズ設定を確認

## 参考リンク

- [TOAST UI Chart 公式ドキュメント](https://ui.toast.com/tui-chart)
- [Vite 公式ドキュメント](https://vitejs.dev/)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
詳細は[LICENSE](LICENSE)ファイルを参照してください。