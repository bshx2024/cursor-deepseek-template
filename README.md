# Cursor & Claude Code DeepSeek Template

**English** | [简体中文](./README.zh-CN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![OpenAI Compatible](https://img.shields.io/badge/API-OpenAI%20%26%20Anthropic%20Compatible-emerald.svg)](https://apivale.com/?utm_source=github&utm_medium=readme&utm_campaign=cursor-deepseek-template)
[![Live Pricing](https://img.shields.io/badge/Models-DeepSeek--V4.1%20%7C%20Qwen%203.8%20%7C%20Kimi%20K3-purple.svg)](https://apivale.com/pricing?utm_source=github&utm_medium=readme&utm_campaign=cursor-deepseek-template)

A production-ready configuration template to power **Cursor**, **Claude Code CLI**, **Cline**, and **Aider** with **DeepSeek-V4.1 Flash**, **DeepSeek-V4 Pro**, **Qwen 3.8 Max**, **GLM-5.3 Flash**, and **Kimi K3** through [APIVALE](https://apivale.com/?utm_source=github&utm_medium=readme&utm_campaign=cursor-deepseek-template) — a unified Chinese AI API gateway.

## Why Use DeepSeek & Qwen via APIVALE?

- **Up to 95% Cost Savings**: Run frontier coding & reasoning workloads at transparent pay-as-you-go rates — compare live token rates on the [APIVALE Model Pricing Page](https://apivale.com/pricing?utm_source=github&utm_medium=readme&utm_campaign=cursor-deepseek-template).
- **100% OpenAI & Anthropic Compatible**: Drop-in `https://apivale.com/v1` base URL works out of the box with Cursor, Claude Code, Cline, and standard SDKs.
- **PayPal & Global Cards Accepted**: Zero-friction instant access with PayPal and international cards — no mainland Chinese bank account required.

## Quick Setup

### 1. Cursor IDE

1. Open Cursor Settings $\to$ **Models** and add:
   - `deepseek-v4.1-flash` (ultra-fast coding & autocomplete)
   - `deepseek-v4-pro` (complex architecture & debugging)
   - `qwen-3.8-max` / `kimi-k3`
2. Under **OpenAI API Key**, configure:
   - **Override OpenAI Base URL**: `https://apivale.com/v1`
   - **OpenAI API Key**: Your key from [APIVALE Dashboard](https://apivale.com/?utm_source=github&utm_medium=readme&utm_campaign=cursor-deepseek-template) (`sk-...`)
3. Copy `.cursorrules` and `.cursor/rules/deepseek.mdc` into your project root.

### 2. Claude Code CLI

```bash
export OPENAI_BASE_URL="https://apivale.com/v1"
export ANTHROPIC_BASE_URL="https://apivale.com/v1"
export ANTHROPIC_AUTH_TOKEN="sk-your-apivale-key"
export ANTHROPIC_MODEL="deepseek-v4.1-flash"
```

For full benchmark numbers and 429 retry tuning, see the [DeepSeek V4.1 Flash API Guide](https://apivale.com/blog/deepseek-v4-flash-api-guide/?utm_source=github&utm_medium=readme&utm_campaign=cursor-deepseek-template).

### 3. Cline / Roo Code (VS Code)

1. Select API Provider: **OpenAI Compatible**
2. Base URL: `https://apivale.com/v1`
3. Model ID: `deepseek-v4.1-flash` or `deepseek-v4-pro`

### 4. Verify Connectivity

```bash
cp .env.example .env
node scripts/test-connection.js
```

## Repository Structure

```text
├── .cursor/
│   └── rules/
│       └── deepseek.mdc        # Cursor MDC rules definition
├── scripts/
│   └── test-connection.js      # Zero-dependency latency & connection tester
├── .cursorrules                # Global Cursor engineering rules
├── .env.example                # Example environment variables
├── LICENSE                     # MIT License
├── README.md                   # English guide
└── README.zh-CN.md             # 简体中文指南
```

## License

Released under the [MIT License](./LICENSE).
