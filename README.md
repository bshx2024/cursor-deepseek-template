# Cursor & Claude Code DeepSeek Template

A ready-to-use configuration template to supercharge **Cursor**, **Claude Code CLI**, **Cline**, and **Aider** with DeepSeek-V3 and DeepSeek-R1 via the APIVALE gateway.

## Why DeepSeek via APIVALE?

- **95%+ Cost Reduction**: High-end reasoning at ~$0.14 - $0.28 per million tokens compared to $3.00 - $15.00 on Claude 3.7 / GPT-4o.
- **100% OpenAI / Anthropic Compatible**: Drop-in endpoint `https://apivale.com/v1`, zero changes to your existing developer tooling.
- **No Overseas Card Needed**: Fully supports PayPal and international credit cards with zero minimum spend barriers.

## Quick Setup

### 1. Cursor IDE Setup

1. Open Cursor Settings -> **Models**.
2. Turn off default OpenAI models if desired, or add model names:
   - `deepseek-chat`
   - `deepseek-reasoner`
3. Under **OpenAI API Key**, configure:
   - **Override OpenAI Base URL**: `https://apivale.com/v1`
   - **OpenAI API Key**: Enter your APIVALE key (`sk-...`).
4. Copy `.cursorrules` to the root of your project to enforce structured, high-efficiency responses.

### 2. Claude Code CLI Setup

Set your environment variables in your shell (`~/.bashrc` or `~/.zshrc`):

```bash
export OPENAI_BASE_URL="https://apivale.com/v1"
export OPENAI_API_KEY="sk-your-apivale-key"
export ANTHROPIC_BASE_URL="https://apivale.com/v1"
```

### 3. Cline / Roo Code (VS Code Extension)

1. Open Cline extension settings.
2. Select API Provider: **OpenAI Compatible**.
3. Base URL: `https://apivale.com/v1`.
4. API Key: Your APIVALE Key.
5. Model ID: `deepseek-chat` or `deepseek-reasoner`.

## Repository Structure

```text
├── .cursor/
│   └── rules/
│       └── deepseek.mdc        # Cursor MDC rules definition
├── scripts/
│   └── test-connection.js      # Zero-dependency latency & connection tester
├── .cursorrules                # Global Cursor engineering rules
├── .env.example                # Example environment variables
└── README.md                   # Setup guide
```

## Community & Referral Setup

Fork this repository to your GitHub account:
- In your fork's `.env.example` and `README.md`, add your personal APIVALE referral code or link.
- When colleagues or friends use your configuration, they receive a **+50% token bonus on their first top-up**, and you receive a **10% lifetime API quota rebate**!

## License

MIT License.
