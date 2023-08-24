https://github.com/renancavichi/frontend-react-2sem2023
# React + Vite

## Comandos úteis

### NPM

Cria o projeto React com o vite
```
npm create vite@latest   (latest - última versão)
```
Instala os pacotes/módulos na pasta node_modules
```
npm install  or npm i
```
### 

Rodar o projeto React no modo Dev
```
npm run dev
```
No tecla para abrir automáticamento no windows
```
o
```



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


https://reactrouter.com/en/main
Instalação do react router dom
```
npm i react-router-dom
```

Importar criador de rotas  

```
import {Router, Route} from 'react-router-dom'
```

```
const App = () => {
  return (
    <Home/>
  )
}
```
Vamor chamar a página Home já dando a rota
```
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
    </Routes>
  )
}
```

# Fluxo

```
main => app => (components)
```