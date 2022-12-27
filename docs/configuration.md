
# Configuration

Project takes configurations from two places: from config files in `projectRoot/config` folder and from environment variables.

Environment variables takes precedence.

## Loading from files

There is two files, configuration will be loaded from: `default.json` and `${ENV}.json` where `${ENV}` is `ENV` environment variable or `dev` if `ENV` environment variable is not set.

If both files exists they will be merged. `${ENV}.json` takes precedence.

> **_WARNING:_**  `default.json` stored in git so do not put secret information in there (database credentials, passwords, etc.)

## Configuration variables

| Key in file               | Environment                | Type   | Required | Default value | Need for                                   |
| ------------------------- | -------------------------- | ------ | -------- | ------------- | ------------------------------------------ |
| admin.recaptcha.publicKey | ADMIN_RECAPTCHA_PUBLIC_KEY | string | false    |               | Публичный токен рекапчи приложения админки |
