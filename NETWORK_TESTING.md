# 🌐 局域网测试配置指南

## 方案选择

### 方案1：HTTPS配置（推荐）⭐
**优点：**
- 完整的媒体设备功能
- 最安全
- 兼容所有浏览器

**缺点：**
- 需要安装证书
- 配置稍复杂

### 方案2：HTTP局域网访问
**优点：**
- 配置简单
- 快速启动

**缺点：**
- 媒体设备功能受限
- 需要浏览器特殊设置

## 🚀 快速开始

### 方案1：HTTPS配置

1. **安装mkcert**（如果未安装）：
   ```bash
   brew install mkcert  # macOS
   mkcert -install
   ```

2. **生成SSL证书**：
   ```bash
   ./setup-https.sh
   ```

3. **启动HTTPS服务**：
   ```bash
   npm run dev:https
   ```

4. **访问应用**：
   - 本机：https://localhost:3000
   - 局域网：https://[你的IP]:3000

### 方案2：HTTP局域网访问

1. **配置局域网访问**：
   ```bash
   ./setup-lan.sh
   ```

2. **启动服务**：
   ```bash
   npm run dev:lan
   ```

3. **访问应用**：
   - 本机：http://localhost:3000
   - 局域网：http://[你的IP]:3000

## 📱 在另一台设备上测试

### 获取本机IP地址
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### 在另一台设备上访问
1. 确保两台设备在同一局域网
2. 在另一台设备的浏览器中输入：
   - HTTPS：https://[你的IP]:3000
   - HTTP：http://[你的IP]:3000

## ⚠️ 注意事项

### HTTP方案的限制
如果使用HTTP方案，在另一台设备上可能遇到媒体设备访问问题。解决方法：

1. **Chrome浏览器**：
   - 在地址栏输入：chrome://flags/
   - 搜索 "Insecure origins treated as secure"
   - 添加你的IP地址（如：http://192.168.1.100:3000）
   - 重启浏览器

2. **Firefox浏览器**：
   - 在地址栏输入：about:config
   - 搜索 "media.devices.insecure.enabled"
   - 设置为 true

### 防火墙设置
确保防火墙允许3000和3001端口的访问。

## 🔧 故障排除

### 端口被占用
```bash
# 查看端口占用
lsof -i :3000
lsof -i :3001

# 杀死进程
pkill -f "react-scripts\|concurrently"
```

### 证书问题
```bash
# 重新生成证书
./setup-https.sh
```

### 网络连接问题
1. 检查两台设备是否在同一网络
2. 检查防火墙设置
3. 尝试ping测试连接

## 📋 常用命令

```bash
# 查看本机IP
ifconfig | grep "inet " | grep -v 127.0.0.1

# 启动本地开发
npm run dev

# 启动HTTPS开发
npm run dev:https

# 启动局域网开发
npm run dev:lan

# 检查服务状态
curl http://localhost:3001/health
```
