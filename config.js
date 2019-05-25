module.exports = {
    // 1. MongoDB
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/apijwt',

    // 2. Postgres
    POSTGRES_URI: process.env.POSTGRES_URI || 'postgresql://cc_coins:secret@localhost:5432/cc_coins',

    // 3. JWT
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'pvpnCCZfwOF85pBjbOebZiYIDhZ3w9LZrKwBZ7152K89mPCOHtbRlmr5Z91ci4L',

    // 4. Express Server Port
    LISTEN_PORT: process.env.LISTEN_PORT || 3000
};
