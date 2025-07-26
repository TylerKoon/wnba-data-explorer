<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const navigationItems: NavigationMenuItem[] = [
  {
    label: 'Shooting Trends',
    children: [
      {
        label: 'Individual Players',
        href: '/dashboard/shooting-trends/individual-players',
      },
      {
        label: 'Teams',
        href: '/dashboard/shooting-trends/teams',
      },
    ],
  }
];
</script>

<template>
  <UContainer class="flex flex-col gap-4">
    <p class="text-lg font-semibold">
     WNBA Data Explorer
    </p>
    <UNavigationMenu orientation="vertical" :items="navigationItems" class="data-[orientation=vertical]:w-48" />
  </UContainer>
</template>
