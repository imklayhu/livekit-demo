#!/bin/bash

echo "🔐 配置HTTPS开发环境"
echo "======================"

# 检查是否已安装mkcert
if ! command -v mkcert &> /dev/null; then
    echo "📦 安装mkcert..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        brew install mkcert
        mkcert -install
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        sudo apt-get install mkcert
        mkcert -install
    else
        echo "❌ 不支持的操作系统，请手动安装mkcert"
        exit 1
    fi
fi

# 创建证书目录
mkdir -p ssl

# 生成证书
echo "🔑 生成SSL证书..."
mkcert -key-file ssl/key.pem -cert-file ssl/cert.pem localhost 127.0.0.1 ::1

# 获取本机IP地址
LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk "{print \$2}" | head -1)
echo "🌐 本机IP地址: $LOCAL_IP"

# 为IP地址生成证书
mkcert -key-file ssl/key-ip.pem -cert-file ssl/cert-ip.pem $LOCAL_IP

echo "✅ HTTPS证书已生成"
echo "📁 证书位置: ssl/"
echo ""
echo "🚀 现在可以使用以下命令启动HTTPS服务："
echo "   npm run dev:https"
echo ""
echo "🌐 访问地址："
echo "   https://localhost:3000 (本机)"
echo "   https://$LOCAL_IP:3000 (局域网)"
