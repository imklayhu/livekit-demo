# 重要提醒：请使用 localhost 访问应用

## 🚨 媒体设备访问问题解决方案

由于浏览器的安全策略，媒体设备（摄像头/麦克风）只能在以下情况下访问：
- HTTPS 网站
- localhost 环境

## ✅ 正确的访问方式

请使用以下地址访问应用：
- 前端应用：http://localhost:3000
- 后端API：http://localhost:3001

## ❌ 错误的访问方式

不要使用IP地址访问：
- http://192.168.3.116:3000 （会导致媒体设备访问错误）

## 🔧 如果仍然有问题

1. 确保使用 localhost 而不是IP地址
2. 允许浏览器访问摄像头和麦克风
3. 检查浏览器控制台是否有其他错误

## 📝 当前状态

- ✅ 后端服务器运行在 http://localhost:3001
- ✅ 前端应用运行在 http://localhost:3000
- ✅ LiveKit配置已正确设置

现在请打开浏览器访问：http://localhost:3000
