<h1 align="center">IMC Calculator</h1>
<p align="center">
  Um aplicativo de cálculo de IMC desenvolvido com React Native e Expo. 
  O usuário insere peso e altura, e o app calcula o IMC, mostrando o resultado de forma animada utilizando a Reanimated API.
</p>

---

<h2>📲 Funcionalidades</h2>
<ul>
  <li><strong>Calculadora de IMC:</strong>
    <ul>
      <li>Insira o peso (em kg) e a altura (em metros).</li>
      <li>Calcule o IMC instantaneamente.</li>
    </ul>
  </li>
  <li><strong>Login com Feedback de Erro:</strong>
    <ul>
      <li>Validação de email e senha.</li>
      <li>Em caso de erro (ex.: senha incorreta):
        <ul>
          <li>Feedback tátil com <code>Vibration</code> para alertar o usuário.</li>
          <li>Animação de "balanço" nos inputs usando <code>useSharedValue</code> e <code>useAnimatedStyle</code>, indicando o erro visualmente.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Animações:</strong>
    <ul>
      <li>Utiliza:
        <ul>
          <li><code>useSharedValue</code> para valores animados.</li>
          <li><code>useAnimatedStyle</code> para animar estilos dinamicamente.</li>
          <li><code>withSpring</code> para animações suaves com efeito de mola.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>APIs Nativas do React Native:</strong>
    <ul>
      <li><code>Keyboard</code> para manipulação do teclado virtual.</li>
      <li><code>Vibration</code> para feedback tátil em erros de login.</li>
    </ul>
  </li>
</ul>

---

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Frontend:</strong>
    <ul>
      <li>React Native</li>
      <li>Expo</li>
      <li>React Native Reanimated</li>
    </ul>
  </li>
</ul>

---

<h2>🚀 Como Rodar o Projeto</h2>

<h3>Pré-requisitos</h3>
<ul>
  <li><a href="https://nodejs.org/" target="_blank">Node.js</a> instalado na máquina</li>
  <li><a href="https://expo.dev/" target="_blank">Expo CLI</a> instalada globalmente</li>
  <li>Emulador Android/iOS configurado OU aplicativo Expo Go no dispositivo físico</li>
</ul>

---

<h3>🔧 Instalando as Dependências</h3>
<pre>
<code>
npm install
</code>
</pre>


---

<h3>▶️ Rodando o Projeto</h3>
<p>No terminal, execute:</p>
<pre>
<code>
npx expo start
</code>
</pre>
<p>Isso irá abrir uma aba no navegador com o Expo DevTools. Escolha uma das opções:</p>
<ul>
  <li><strong>a)</strong> Digitalize o QR Code com o Expo Go em seu dispositivo físico.</li>
  <li><strong>b)</strong> Inicie no emulador Android:
    <pre>
      <code>a</code>
    </pre>
  </li>
  <li><strong>c)</strong> Inicie no emulador iOS (somente em MacOS):
    <pre>
      <code>i</code>
    </pre>
  </li>
</ul>
