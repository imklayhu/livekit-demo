# 🚀 GitHub上传指南

## 步骤1：配置Git用户信息

```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的邮箱地址"
```

## 步骤2：在GitHub上创建新仓库

1. 访问 https://github.com
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `livekit-demo`
   - Description: `LiveKit实时音视频通信演示应用`
   - 选择 Public 或 Private
   - 不要勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

## 步骤3：连接本地仓库到GitHub

```bash
# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/livekit-demo.git

# 或者使用SSH（如果你配置了SSH密钥）
git remote add origin git@github.com:YOUR_USERNAME/livekit-demo.git
```

## 步骤4：推送代码到GitHub

```bash
# 推送主分支
git branch -M main
git push -u origin main
```

## 步骤5：验证上传

1. 访问你的GitHub仓库页面
2. 确认所有文件都已上传
3. 检查README.md是否正确显示

## 🔧 后续更新

```bash
# 修改代码后
git add .
git commit -m "更新描述"
git push
```

## 📝 重要提醒

- 确保 `.env` 文件没有被上传（已添加到.gitignore）
- SSL证书文件不会被上传（已添加到.gitignore）
- 敏感信息（API密钥等）不会被上传

## 🌟 项目特色

- ✅ 完整的LiveKit演示应用
- ✅ 支持多种部署模式
- ✅ iOS设备友好
- ✅ 详细的文档和指南
- ✅ 现代化的用户界面

现在你的LiveKit Demo项目就可以在GitHub上分享了！
