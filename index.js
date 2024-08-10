import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'


const ewelintConfig = [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      // Regras JavaScript
      ...js.configs.recommended.rules,
      'no-console': 'warn',
      'no-usused-vars': ['warn', { args: 'none', ignoreRestSiblings: true}], // Emite um aviso para variaveis que são declaras mas não utilizadas
      'eqeqeq': ['error', 'always'], // Ajusta as condições para restritos
      'no-duplicate-imports': 'error', // Garante que não haja importações duplicadas

      // Regras do React
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Não exige 'React' no escopo em JSX (React 17+)
      'react/prop-types': 'off', // Desativa checagem de PropTypes
      'react/jsx-uses-react': 'off', // Não exige 'React' em escopo em JSX (React 17+)
      'react/jsx-uses-vars': 'error', // Previne variáveis definidas de serem marcadas como não utilizadas
      'react/self-closing-comp': 'error', // Componentes sem filhos sejam escritos como elementos de fechamento automático (ex: <div />)
      'react-hooks/rules-of-hooks': 'error', // Garante que os hooks sejam usados corretamente
      'react-hooks/exhaustive-deps': 'warn', // Garante que todas as dependências necessárias estejam presentes em hooks
      'react/jsx-key': 'error', // Garante que todos os map tenha uma key
      'react/no-array-index-key': 'warn', // Avisa sobre o uso de indice em keys
      'react/no-unknown-property': 'warn',
      'react/jsx-no-target-blank': 'error',
      'no-undef': 'off',

      // Configs do prettier
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          semi: false,
          endOfLine: 'auto',
        },
      ],
    },
  },
  prettierConfig,
]

export default ewelintConfig