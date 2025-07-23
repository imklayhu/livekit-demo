# LiveKit Demo

一个基于LiveKit的实时音视频通信演示应用，支持多人会议室和现代化的用户界面。

## 🌟 功能特性

- 🎥 实时音视频通话
- 👥 多人会议室
- 🎨 现代化用户界面
- 📱 响应式设计
- 🔐 安全的令牌认证
- 🌐 局域网和HTTPS支持

## 🚀 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn
- LiveKit Cloud 账户

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/livekit-demo.git
cd livekit-demo

# 安装依赖
npm run install-all
```

### 配置环境变量

1. 复制环境变量模板：
```bash
cp .env.example .env
```

2. 编辑 `.env` 文件，填入你的LiveKit配置：
```env
LIVEKIT_API_KEY=your_api_key_here
LIVEKIT_API_SECRET=your_api_secret_here
LIVEKIT_WS_URL=wss://your-livekit-server.com
PORT=3001
```

### 启动应用

```bash
# 本地开发
npm run dev

# 局域网开发
npm run dev:lan

# HTTPS开发
npm run dev:https

# 代理开发（推荐用于iOS设备）
npm run dev:proxy
```

## 📱 移动设备访问

### iOS设备
- 推荐使用Safari浏览器
- 访问地址：`http://[你的IP]:3002`（代理模式）
- 或使用HTTPS：`https://[你的IP]:3000`

### Android设备
- 支持Chrome、Firefox等主流浏览器
- 访问地址：`http://[你的IP]:3000`

## 🛠️ 技术栈

- **后端**: Node.js, Express, LiveKit Server SDK
- **前端**: React, LiveKit Components React
- **样式**: CSS3, 响应式设计
- **开发工具**: concurrently, http-proxy-middleware

## 📁 项目结构

```
livekit-demo/
├── server/           # 后端服务器
│   └── index.js      # Express服务器，处理令牌生成
├── client/           # 前端React应用
│   ├── src/
│   │   ├── App.js    # 主应用组件
│   │   ├── App.css   # 应用样式
│   │   ├── index.js  # React入口
│   │   └── index.css # 全局样式
│   └── public/
│       └── index.html # HTML模板
├── ssl/              # SSL证书（HTTPS模式）
├── package.json      # 后端依赖
├── client/package.json # 前端依赖
└── .env.example      # 环境变量示例
```

## 🔧 开发命令

```bash
# 安装所有依赖
npm run install-all

# 本地开发
npm run dev

# 局域网开发
npm run dev:lan

# HTTPS开发
npm run dev:https

# 代理开发（iOS友好）
npm run dev:proxy

# 构建生产版本
npm run build
```

## 🌐 访问地址

- **本地**: http://localhost:3000
- **局域网**: http://[你的IP]:3000
- **HTTPS**: https://[你的IP]:3000
- **代理**: http://[你的IP]:3002（推荐iOS设备）

## 📋 使用说明

1. 打开浏览器访问应用地址
2. 输入房间名称和你的名字
3. 点击 "Join Room" 加入房间
4. 允许浏览器访问摄像头和麦克风
5. 开始实时音视频通话

## 🔐 获取LiveKit配置

1. 注册 [LiveKit Cloud](https://cloud.livekit.io/) 账户
2. 创建新项目
3. 获取 API Key 和 API Secret
4. 使用提供的 WebSocket URL

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- [LiveKit](https://livekit.io/) - 实时音视频SDK
- [React](https://reactjs.org/) - 前端框架
- [Express](https://expressjs.com/) - 后端框架
