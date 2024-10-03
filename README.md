# ewelint

**ewelint** é uma configuração personalizada do ESLint e Prettier para projetos JavaScript e TypeScript, facilitando a padronização do estilo de código e ajudando a evitar erros comuns.

## Recursos

- Configurações pré-definidas para **JavaScript** e **TypeScript**.
- Integração com **Prettier** para formatação de código.
- Suporte a **React** e **JSX**.
- Ignora diretórios padrão como `node_modules` e `dist`.

## Instalação

Para usar o ewelint em seu projeto, você pode instalar diretamente via npm:

```bash
npm install ewelint -D
```

ou via yarn:
```bash
yarn add ewelint -D
```

## Uso
Depois de instalado, você pode configurar o ESLint em seu projeto da seguinte maneira:

Crie um arquivo de configuração do ESLint (por exemplo, `eslint.config.js`) na raiz do seu projeto.
Importe a configuração desejada (para JavaScript ou TypeScript) e exporte-a.

- Para JavaScript

```js
import { eslintReactJs } from 'ewelint';

export default eslintReactJs;
```

- Para TypeScript
```ts
import { eslintReactTs } from 'ewelint';

export default eslintReactTs;
```

## Executando o Linter
Você pode adicionar um script no seu `package.json` para rodar o ESLint em todos os arquivos:

```json
"scripts": {
  "lint": "eslint ."
}
```

Em seguida, execute o comando:
```bash
npm run lint
```

## Configuração Personalizada
As regras do ESLint e Prettier podem ser personalizadas editando as configurações no arquivo `eslint.config.js` após a importação.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e pull requests.

## Licença
Esse projeto está licenciado sob a MIT License.