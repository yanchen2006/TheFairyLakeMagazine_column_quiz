# 神仙湖畔杂志社 · 栏目分院帽

纯前端静态测评网站：回答 9 道单选题，根据选项加分规则计算 8 个栏目的契合度，给出分院帽结果。

不依赖后端、数据库或第三方 API。直接打开 `index.html` 即可使用。

## 本地运行

1. 下载或克隆本项目。
2. 用浏览器打开 `index.html`（双击，或在资源管理器中右键用浏览器打开）。

也可以用任意静态服务器，例如：

```bash
npx --yes serve .
```

然后访问提示的本地地址。

刷新页面时，当前题目与答案会保存在浏览器 `localStorage` 中，不会上传到任何服务器。「再测一次」会清空本地记录。

## 部署

这是纯静态站点，把仓库根目录（含 `index.html`、`style.css`、`script.js`）发布即可。

### GitHub Pages

1. 将项目推送到 GitHub 仓库。
2. 打开仓库 **Settings → Pages**。
3. Source 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`。
4. 保存后等待一两分钟，使用提示的 `https://<user>.github.io/<repo>/` 访问。

### Netlify

1. 登录 [Netlify](https://www.netlify.com/)，选择 **Add new site → Deploy manually**，或连接 Git 仓库。
2. 发布目录（Publish directory）设为项目根目录。
3. 无需 Build command。
4. 部署完成后使用 Netlify 提供的网址访问。

### Vercel

1. 登录 [Vercel](https://vercel.com/)，导入该 Git 仓库，或使用 CLI：`npx vercel`。
2. Framework Preset 选 Other。
3. 不需要 install / build 命令；Output 保持根目录。
4. 部署完成后使用 Vercel 域名访问。

## 栏目

洞见、演讲、科学说、主题报道、人物、校长专栏、书院、i思享。

并列最高分时，参考第 1 题工作量偏好决定主栏目，其余并列栏目作为备选；仍无法区分时，按固定栏目顺序取主栏目，结果不随机。
