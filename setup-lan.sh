#!/bin/bash

echo "🌐 配置局域网访问"
echo "=================="

# 获取本机IP地址
LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk "{print \$2}" | head -1)
echo "📱 本机IP地址: $LOCAL_IP"

# 创建环境变量文件
echo "HOST=$LOCAL_IP" > client/.env.local

echo "✅ 配置完成"
echo ""
echo "🚀 启动应用："
echo "   npm run dev:lan"
echo ""
echo "🌐 访问地址："
echo "   本机: http://localhost:3000"
echo "   局域网: http://$LOCAL_IP:3000"
echo ""
echo "⚠️  注意：局域网访问时，媒体设备功能可能受限"
echo "   建议使用HTTPS方案以获得完整功能"
