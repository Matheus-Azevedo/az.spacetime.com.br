# PROJETO SPACETIME - Capsula do tempo

Aplicação de recordação de memórias, onde o usuário poderá adicionar à uma timeline textos, fotos e vídeos de acontecimentos marcantes da sua vida, organizados por mês e ano.

<br>

# SETUP: Server

npm init -y
npm i typescript -D
npm i @types/node -D
npx tsc --init
npm i tsx -D
npm i fastify
npm i eslint -D
npm i @rocketseat/eslint-config -D (.eslintrc.json e faça um extends)
npm i prisma -D
npx prisma init --datasource-provider SQLite (usar banco SQLite)
npx prisma migrate dev
npx prisma studio (visualização)
npm i @prisma/client
npm i zod (similar ao joi)
npm i @fastify/cors (segurança, determina urls que acessam a api)

  

Scripts em package.json
"dev": "tsx watch src/server.ts"
"lint": "eslint src --ext .ts --fix"
"prisma": "npx prisma studio"


Comandos
npx prisma migrate reset
npx prisma migrate dev

http GET localhost:3333/memories
http GET localhost:3333/memories/id
http POST localhost:3333/memories
http PUT localhost:3333/memories/id
http DELETE localhost:3333/memories/id

<br>

# SETUP: Web

npx create-next-app@latest web --use-npm
npm i @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
npm i lucide-react

  

delete README.md
delete public content
remove html da page.tsx
remove conteudo de globals.css

<br>

# SETUP: Mobile

npx create-expo-app mobile
npm i nativewind
npm i tailwindcss -D
npm i eslint -D
npm i @rocketseat/eslint-config -D
npm i prettier-plugin-tailwindcss -D
npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font


Script
start -> npx expo start --tunnel

<br>

# SETTINGS.JSON

{

"emmet.syntaxProfiles": {

"javascript": "jsx"

},

"workbench.startupEditor": "newUntitledFile",

"editor.fontSize": 16,

"javascript.suggest.autoImports": true,

"javascript.updateImportsOnFileMove.enabled": "always",

"editor.rulers": [

80,

120

],

"extensions.ignoreRecommendations": true,

"typescript.tsserver.log": "off",

"files.associations": {

".sequelizerc": "javascript",

".stylelintrc": "json",

"*.tsx": "typescriptreact",

".env.*": "dotenv",

".prettierrc": "json"

},

"screencastMode.onlyKeyboardShortcuts": true,

"cSpell.userWords": [

"bootcamp",

"chakra",

"checkin",

"checkins",

"clsx",

"Codegen",

"datadog",

"Datetime",

"dayjs",

"Dotenv",

"esbuild",

"fastify",

"Fastify",

"feedbackwidget",

"ffprobe",

"Hono",

"IUGU",

"jamjuree",

"jupiter",

"liveblocks",

"LIVEBLOCKS",

"middlewares",

"mixpanel",

"monaco",

"nestjs",

"omni",

"Omni",

"Onboarded",

"pallas",

"postgres",

"postgresql",

"prefetch",

"reactflow",

"roboto",

"rocketseat",

"rotion",

"rsxp",

"Sandpack",

"shiki",

"skylab",

"sqlite",

"supergraph",

"svgr",

"sympla",

"textblock",

"tiptap",

"trpc",

"TRPC",

"tsup",

"unfollow",

"Unfollow",

"unform",

"Unform",

"unmark",

"upsert",

"Usuario",

"WEBPUSH"

],

"editor.parameterHints.enabled": false,

"editor.renderLineHighlight": "gutter",

"cSpell.language": "en,pt",

"editor.lineHeight": 26,

"material-icon-theme.languages.associations": {

"dotenv": "tune"

},

"typescript.updateImportsOnFileMove.enabled": "never",

"material-icon-theme.files.associations": {

"tsconfig.json": "tune",

"*.webpack.js": "webpack",

"*.proto": "3d",

"ormconfig.json": "database"

},

"material-icon-theme.activeIconPack": "nest",

"editor.suggestSelection": "first",

"explorer.confirmDelete": false,

"gitlens.codeLens.recentChange.enabled": false,

"terminal.integrated.showExitAlert": false,

"[prisma]": {

"editor.formatOnSave": true

},

"typescript.suggest.autoImports": true,

"terminal.integrated.env.osx": {

"FIG_NEW_SESSION": "1"

},

"workbench.editor.labelFormat": "short",

"editor.fontLigatures": true,

"emmet.includeLanguages": {

"javascript": "javascriptreact"

},

"liveshare.featureSet": "insiders",

"material-icon-theme.folders.associations": {

"adapters": "contract",

"grpc": "pipe",

"kube": "kubernetes",

"main": "lib",

"websockets": "pipe",

"implementations": "core",

"protos": "pipe",

"entities": "class",

"kafka": "pipe",

"use-cases": "functions",

"migrations": "tools",

"schemas": "class",

"useCases": "functions",

"eslint-config": "tools",

"typeorm": "database",

"_shared": "shared",

"mappers": "meta",

"fakes": "mock",

"modules": "components",

"subscribers": "messages",

"domain": "class",

"protocols": "contract",

"infra": "app",

"view-models": "views",

"presentation": "template",

"dtos": "typescript",

"http": "container",

"providers": "include",

"factories": "class",

"repositories": "mappings"

},

"cSpell.enableFiletypes": [

"!asciidoc",

"!c",

"!cpp",

"!csharp",

"!go",

"!handlebars",

"!haskell",

"!jade",

"!java",

"!latex",

"!php",

"!pug",

"!python",

"!restructuredtext",

"!rust",

"!scala",

"!scss"

],

"editor.acceptSuggestionOnCommitCharacter": false,

"explorer.compactFolders": false,

"git.enableSmartCommit": true,

"editor.accessibilitySupport": "off",

"explorer.confirmDragAndDrop": false,

"terminal.integrated.fontSize": 14,

"terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",

"editor.codeActionsOnSave": {

"source.fixAll.eslint": true,

"source.addMissingImports": true

},

"eslint.validate": [

"javascript",

"javascriptreact",

"graphql"

],

"editor.semanticHighlighting.enabled": false,

"breadcrumbs.enabled": true,

"workbench.productIconTheme": "fluent-icons",

"editor.fontFamily": "JetBrains Mono",

"gitlens.codeLens.authors.enabled": false,

"editor.tabSize": 2,

"security.workspace.trust.untrustedFiles": "newWindow",

"files.exclude": {

"**\/CVS": true,

"**\/.DS_Store": true,

"**\/.hg": true,

"**\/.svn": true,

"**\/.git": true,

// "node_modules": true

},

"tabnine.experimentalAutoImports": true,

"gitlens.codeLens.enabled": false,

"workbench.iconTheme": "symbols",

"polacode.transparentBackground": true,

"polacode.target": "snippet",

"editor.minimap.enabled": false,

"update.mode": "start",

"terminal.integrated.gpuAcceleration": "off",

"terminal.integrated.defaultProfile.osx": "fish",

"[jsonc]": {

"editor.defaultFormatter": "vscode.json-language-features"

},

"workbench.editor.untitled.hint": "hidden",

"workbench.colorTheme": "Omni",

"liveServer.settings.donotShowInfoMsg": true,

"[json]": {

"editor.defaultFormatter": "vscode.json-language-features"

},

"window.commandCenter": true,

"git.openRepositoryInParentFolders": "always",

"window.zoomLevel": 1

}

<br>

# LICENÇA

Esse projeto está sob a licença MIT. Veja o arquivo  [LICENSE](https://github.com/rocketseat-education/nlw-12-spacetime-ignite/blob/main/LICENSE)  para mais detalhes.