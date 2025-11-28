# Telegram Bot API Proxy via Cloudflare Worker

该项目用于通过 Cloudflare Worker 代理 Telegram Bot API，从而解决国内访问 Telegram Bot API 受限的问题。

## 功能
- 代理所有 Telegram Bot API 调用
- 适用于国内环境
- 零服务器成本
- 自定义 API Endpoint：`https://你的worker域名/方法名`

---

## 一键部署步骤

### 1. 安装 Wrangler
```bash
npm install -g wrangler
```

### 2. 配置 BOT_TOKEN
编辑 `wrangler.toml`：
```toml
BOT_TOKEN = "123456:ABCDEF"
```

或使用命令：
```bash
wrangler secret put BOT_TOKEN
```

### 3. 部署
```bash
wrangler publish
```

部署成功后，你的 Telegram Bot API 变为：

```
https://你的worker域名/sendMessage?chat_id=XXX&text=Hello
```

也可以用于 Telegram 客户端 webhook。

---

## 示例：发送消息
```bash
curl "https://你的worker域名/sendMessage?chat_id=123456&text=hello"
```

---

## 目录结构
```
index.js
wrangler.toml
README.md
```

---

## 备注
此 Worker 不存储任何数据，只做简单反向代理。
