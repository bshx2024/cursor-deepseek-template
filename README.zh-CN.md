# Cursor & Claude Code DeepSeek 配置模板

[English](./README.md) | **简体中文**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![OpenAI Compatible](https://img.shields.io/badge/API-OpenAI%20%26%20Anthropic%20Compatible-emerald.svg)](https://apivale.com/?utm_source=github&utm_medium=readme_zh&utm_campaign=cursor-deepseek-template)

面向 **Cursor**、**Claude Code CLI**、**Cline** 与 **Aider** 的开箱即用配置模板，通过统一 AI API 网关 [APIVALE](https://apivale.com/?utm_source=github&utm_medium=readme_zh&utm_campaign=cursor-deepseek-template) 一键接入 **DeepSeek-V4.1 Flash**、**DeepSeek-V4 Pro**、**Qwen 3.8 Max**、**GLM-5.3 Flash** 与 **Kimi K3**。

## 核心优势

- **最高节省 95% API 成本**：按量计费无最低消费门槛，实时费率见 [APIVALE 模型定价页](https://apivale.com/pricing?utm_source=github&utm_medium=readme_zh&utm_campaign=cursor-deepseek-template)。
- **100% 兼容 OpenAI / Anthropic 协议**：仅需将 Base URL 替换为 `https://apivale.com/v1`，无需改动现有开发工具链。
- **支持 PayPal 与国际信用卡**：适合海外开发者及出海团队快速充值接入。

## 快速上手

### 1. Cursor IDE
1. 打开 Cursor Settings $\to$ **Models**，添加 `deepseek-v4.1-flash`、`deepseek-v4-pro` 或 `qwen-3.8-max`。
2. 在 **OpenAI API Key** 区域填写：
   - **Override OpenAI Base URL**：`https://apivale.com/v1`
   - **OpenAI API Key**：从 [APIVALE 控制台](https://apivale.com/?utm_source=github&utm_medium=readme_zh&utm_campaign=cursor-deepseek-template) 获取的 `sk-...` 密钥。
3. 将 `.cursorrules` 与 `.cursor/rules/deepseek.mdc` 复制到项目根目录。

### 2. Claude Code CLI
```bash
export ANTHROPIC_BASE_URL="https://apivale.com/v1"
export ANTHROPIC_AUTH_TOKEN="sk-your-apivale-key"
export ANTHROPIC_MODEL="deepseek-v4.1-flash"
```

更多实测吞吐与配置细节可参考 [DeepSeek V4.1 Flash API 完整指南](https://apivale.com/blog/deepseek-v4-flash-api-guide/?utm_source=github&utm_medium=readme_zh&utm_campaign=cursor-deepseek-template)。

## 开源协议

基于 [MIT License](./LICENSE) 开源。
