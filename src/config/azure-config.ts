export const AZURE_OPENAI_CONFIG = {
    endpoint: process.env.REACT_APP_OPENAI_ENDPOINT || '',
    deploymentName: process.env.REACT_APP_OPENAI_DEPLOYMENT || '',
    key: process.env.REACT_APP_AZURE_OPENAI_KEY || '',
    keyVaultName: process.env.REACT_APP_KEY_VAULT_NAME || '',
    staticWebAppUrl: process.env.REACT_APP_STATIC_WEB_APP_URL || ''
};
