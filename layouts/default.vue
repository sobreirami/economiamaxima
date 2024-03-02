<template>
  <div class="flex-col md:flex max-w-screen-xl mx-auto w-full">
    <header class="border-b">
      <slot name="header">
        <div class="flex h-16 items-center px-4">
          <MainNav class="mx-6" />
          <div class="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </slot>
    </header>
    <main class="flex-1 space-y-4 p-8 pt-6"><slot /></main>
  </div>
</template>
