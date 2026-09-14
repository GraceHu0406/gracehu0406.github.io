# Grace Q. Hu 个人网站

文艺、干净的作家个人网站，适合 GitHub Pages 直接部署。

## 网站结构

```
writer-site/
├── index.html          # 首页
├── about.html          # 关于
├── contact.html        # 联系 + 留言
├── poetry.html         # 诗歌列表
├── fiction.html        # 小说列表
├── photography.html    # 摄影
├── project.html        # 万物生 重点项目
├── css/style.css
├── js/script.js
├── poetry/             # 单篇诗歌放这里
│   └── highway0.html
├── images/             # 照片放这里
└── README.md
```

## 如何自己更新内容

### 1. 添加新诗歌
1. 复制 `poetry/highway0.html`
2. 改文件名（例如 `new-poem.html`）
3. 修改标题和正文
4. 打开 `poetry.html`，在列表里加一个新链接

### 2. 添加新小说
打开 `fiction.html`，复制一个 `<li class="work-item">...</li>`，改标题和简介即可。

### 3. 替换 / 增加照片
1. 把照片放入 `images/` 文件夹
2. 打开 `photography.html`
3. 把灰色占位换成：
   ```html
   <img src="images/你的照片.jpg" alt="描述">
   ```

### 4. 修改关于页 / 联系邮箱
直接编辑 `about.html` 和 `contact.html` 对应文字。

### 5. 更新留言
编辑 `contact.html` 里的 `.comment` 部分，增加或删除留言。

### 6. 中英文切换
已经内置，右上角按钮即可切换，偏好会自动记住。

## 部署到 GitHub Pages

1. 把整个 `writer-site` 文件夹内容上传到仓库根目录
2. Settings → Pages → Deploy from branch → main / (root)
3. 访问 `https://你的用户名.github.io`

## 建议
- 照片先用 TinyPNG 压缩
- 保持文字简洁有力
- 定期更新《万物生》相关内容
