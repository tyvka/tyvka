<template>
  <div>
    <header>
      <div><a href="/"><img src="/assets/vka_logo.png" /></a></div>
      <div><a href="/"><img src="/assets/vka_triskele.png" /></a></div>
      <HLinks />
    </header>
    <slot />
    <footer>
      +372 435 5232 / kultuur@ut.ee / Posti 1, 71004 Viljandi
    </footer>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i');
  body {
    font-family: Montserrat, sans-serif;
    margin: 0;
    color: #444;
    line-height: 1.5em;
    font-weight: 300;
    font-size: 12px;
  }
  h1, h2, h3, h4 {
    margin-top: 0;
    line-height: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
  }
  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: #222;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }
  @media (max-width: 800px) {
    header {
      display: block;
    }
  }
  footer {
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    font-size: 0.8rem;
  }
</style>
