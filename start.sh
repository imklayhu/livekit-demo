#!/bin/bash

echo "🚀 LiveKit Demo Setup"
echo "======================"

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    npm install
fi

if [ ! -d "client/node_modules" ]; then
    echo "�� Installing frontend dependencies..."
    cd client && npm install && cd ..
fi

# 检查环境变量文件
if [ ! -f ".env" ]; then
    echo "⚠️  Environment file not found!"
    echo "📝 Please copy .env.example to .env and configure your LiveKit credentials:"
    echo "   cp .env.example .env"
    echo ""
    echo "🔧 Then edit .env with your LiveKit API key, secret, and WebSocket URL"
    echo ""
    echo "🌐 Get your credentials from: https://cloud.livekit.io/"
    exit 1
fi

echo "✅ Dependencies installed"
echo "✅ Environment configured"
echo ""
echo "🎯 Starting LiveKit Demo..."
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop"
echo ""

npm run dev
