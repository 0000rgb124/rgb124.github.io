<template>
  <nav class="nav">
    <NuxtLink class="link  link--home nav__link" to="/">RGB <br> 124</NuxtLink>
    <NuxtLink class="link link--directing nav__link" to="/directing">Directing & production</NuxtLink>
    <NuxtLink class="link link--3d nav__link" to="/3d">3d/vfx</NuxtLink>
    <NuxtLink class="link link--contact nav__link" to="/contact">contact</NuxtLink>
    <NuxtLink class="link link--portfolio nav__link" to="/portfolio">portfolio</NuxtLink>
  </nav>
</template>

<style for="scss">
.nav {
  background-color: rgba(0, 0, 0, 0.8);
  /* mix-blend-mode: difference; */
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: fixed;
  height: 100%;
  gap: 20px;
  z-index: 2;
  overflow: hidden;
}

.link {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 18px;
  font-variant: small-caps;

  margin-inline: auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

.nav__close-button {
  position: absolute;
  top: 0;
  right: 0;
}

.link--home {
  position: absolute;
  top: 0;
  padding: 10px;
}

.link:hover {
  text-decoration: underline;
}

.router-link-active {
  color: red;
}
</style>