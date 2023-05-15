import chains from './chains'

export const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION

export const GATEWAY_URL_PRODUCTION = process.env.NEXT_PUBLIC_GATEWAY_URL_PRODUCTION || 'http://209.38.245.52:8080'
export const GATEWAY_URL_STAGING = process.env.NEXT_PUBLIC_GATEWAY_URL_STAGING || 'http://209.38.245.52:8080'

// Magic numbers
export const POLLING_INTERVAL = 15_000
export const BASE_TX_GAS = 21_000
export const LS_NAMESPACE = 'SAFE_v2__'
export const LATEST_SAFE_VERSION = process.env.NEXT_PUBLIC_SAFE_VERSION || '1.3.0'

// Access keys
export const INFURA_TOKEN = process.env.NEXT_PUBLIC_INFURA_TOKEN || ''
export const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || ''
export const BEAMER_ID = process.env.NEXT_PUBLIC_BEAMER_ID || ''

// Wallets
export const WC_BRIDGE = process.env.NEXT_PUBLIC_WC_BRIDGE || 'https://bridge.walletconnect.org'
export const TREZOR_APP_URL = 'app.safe.global'
export const TREZOR_EMAIL = 'support@safe.global'

// Cypress
export const CYPRESS_MNEMONIC = process.env.NEXT_PUBLIC_CYPRESS_MNEMONIC || ''

// Safe Token
export const SAFE_TOKEN_ADDRESSES: { [chainId: string]: string } = {
  [chains.tenetDev]: '0x5aFE3855358E112B5647B952709E6165e1c1eEEe',
  [chains.tenetTest]: '0xCFf1b0FdE85C102552D1D96084AF148f478F964A',
}

// Safe Apps
export const SAFE_APPS_INFURA_TOKEN = process.env.NEXT_PUBLIC_SAFE_APPS_INFURA_TOKEN || INFURA_TOKEN
export const SAFE_APPS_THIRD_PARTY_COOKIES_CHECK_URL = 'https://third-party-cookies-check.gnosis-safe.com'
export const SAFE_APPS_DEMO_SAFE_MAINNET = 'eth:0xfF501B324DC6d78dC9F983f140B9211c3EdB4dc7'
export const SAFE_APPS_SDK_DOCS_URL = 'https://docs.safe.global/learn/safe-tools/sdks/safe-apps'

// Google Tag Manager
export const GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''
export const GOOGLE_TAG_MANAGER_AUTH_LIVE = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_LIVE_AUTH || ''
export const GOOGLE_TAG_MANAGER_AUTH_LATEST = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_LATEST_AUTH || ''
export const GOOGLE_TAG_MANAGER_DEVELOPMENT_AUTH = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_DEVELOPMENT_AUTH || ''

// Tenderly - API docs: https://www.notion.so/Simulate-API-Documentation-6f7009fe6d1a48c999ffeb7941efc104
export const TENDERLY_SIMULATE_ENDPOINT_URL = process.env.NEXT_PUBLIC_TENDERLY_SIMULATE_ENDPOINT_URL || ''
export const TENDERLY_PROJECT_NAME = process.env.NEXT_PUBLIC_TENDERLY_PROJECT_NAME || ''
export const TENDERLY_ORG_NAME = process.env.NEXT_PUBLIC_TENDERLY_ORG_NAME || ''

// Safe Apps tags
export enum SafeAppsTag {
  NFT = 'nft',
  TX_BUILDER = 'transaction-builder',
  DASHBOARD_FEATURED = 'dashboard-widgets',
  SAFE_GOVERNANCE_APP = 'safe-governance-app',
  WALLET_CONNECT = 'wallet-connect',
}

// Safe Gelato relay service
export const SAFE_RELAY_SERVICE_URL_PRODUCTION =
  process.env.NEXT_PUBLIC_SAFE_RELAY_SERVICE_URL_PRODUCTION || 'https://safe-client-nest.safe.global/v1/relay'
export const SAFE_RELAY_SERVICE_URL_STAGING =
  process.env.NEXT_PUBLIC_SAFE_RELAY_SERVICE_URL_STAGING || 'https://safe-client-nest.staging.5afe.dev/v1/relay'

// Help Center
export const HELP_CENTER_URL = 'https://help.safe.global'
export const HelpCenterArticle = {
  ADDRESS_BOOK_DATA: `${HELP_CENTER_URL}/en/articles/40811-address-book-export-and-import`,
  ADVANCED_PARAMS: `${HELP_CENTER_URL}/en/articles/40837-advanced-transaction-parameters`,
  CANCELLING_TRANSACTIONS: `${HELP_CENTER_URL}/en/articles/40836-why-do-i-need-to-pay-for-cancelling-a-transaction`,
  COOKIES: `${HELP_CENTER_URL}/en/articles/40797-why-do-i-need-to-enable-third-party-cookies-for-safe-apps`,
  CONFLICTING_TRANSACTIONS: `${HELP_CENTER_URL}/en/articles/40839-why-are-transactions-with-the-same-nonce-conflicting-with-each-other`,
  FALLBACK_HANDLER: `${HELP_CENTER_URL}/en/articles/40838-what-is-a-fallback-handler-and-how-does-it-relate-to-safe`,
  MOBILE_SAFE: `${HELP_CENTER_URL}/en/articles/40801-connect-to-web-with-mobile-safe`,
  RELAYING: `${HELP_CENTER_URL}/en/articles/59203-what-is-gas-fee-sponsoring`,
  SAFE_SETUP: `${HELP_CENTER_URL}/en/articles/40835-what-safe-setup-should-i-use`,
  SIGNED_MESSAGES: `${HELP_CENTER_URL}/en/articles/40783-what-are-signed-messages`,
  SPAM_TOKENS: `${HELP_CENTER_URL}/en/articles/40784-default-token-list-local-hiding-of-spam-tokens`,
  TRANSACTION_GUARD: `${HELP_CENTER_URL}/en/articles/40809-what-is-a-transaction-guard`,
  UNEXPECTED_DELEGATE_CALL: `${HELP_CENTER_URL}/en/articles/40794-why-do-i-see-an-unexpected-delegate-call-warning-in-my-transaction`,
} as const

// Social
export const DISCORD_URL = 'https://chat.safe.global'
export const TWITTER_URL = 'https://twitter.com/safe'

// Legal
export const IS_OFFICIAL_HOST = process.env.NEXT_PUBLIC_IS_OFFICIAL_HOST || false

export const GNOSIS_SAFE_PROXY_FACTORY_ADDRESS = '0xB4691a29E2B430858d50EB75311079196a463712'
export const DEFAULT_CALLBACK_HANDLER_ADDRESS = '0x25D997B152E34b9A5B44FAA6779d679f7cD090fB'
export const COMPATIBILITY_FALLBACK_HANDLER_ADDRESS = '0x3d888982871437dD236Dd726AA9AD481CB6EdF4e'
export const CREATE_CALL_ADDRESS = '0xA30E25c65BA5AE946054b80F881FbF6A4D479f18'
export const MULTI_SEND_ADDRESS = '0x01Db1A30eD511d9Aa18C4280BDF8Ee90333Ae81c'
export const MULTI_SEND_CALL_ONLY_ADDRESS = '0x671dfBFb05de3841be5a0682ff18A06f22d7Fcd9'
export const SIGN_MESSAGE_LIB_ADDRESS = '0xf73D398D59FF7E391Bf80E9bA5625d1D8C2e3110'
export const GNOSIS_SAFE_ADDRESS = '0x51E355076D38c590AE913beFE3100aDeA81eFC89'
