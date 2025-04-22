import config from '@rocketseat/eslint-config/react.mjs'

export default [
    ...config,
    {
        rules: {
            '@stylistic/max-len': ['warn', {
                ignorePattern: '^import\\s.+\\sfrom\\s.+$|^\\}\\,\\s\[[\w,\s]+\\]\\)$'
            }],
        },
    },
]
