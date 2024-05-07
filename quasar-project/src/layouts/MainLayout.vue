<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Study-Quasar
        </q-toolbar-title>
        <q-btn @click="$q.dark.toggle()" >
          暗黑模式切换按钮
        </q-btn>

        <div>Quasar 版本：v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="mini"
      @mouseout="mini = true"
      @mouseover="mini = false"

    >
      <q-list>
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>组件库</q-toolbar-title>
        </q-toolbar>
      </q-list>
      <EssentialLink
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
         />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import EssentialLink from 'components/EssentialLink.vue'

let mini = ref(true)
const linksList = []
const router = useRouter()
let allRoutes = router.options.routes
allRoutes.forEach(route => {
  if (route.children) {
    route.children.forEach(child => {
      if (child.meta) {
        linksList.push(
          {
            title: child.meta.title || child.name,
            icon: child.meta.icon,
            link: child.name
          }
        )
      }
      else{
        linksList.push(
          {
            title: child.name,
            icon: 'folder',
            link: child.name
          }
        )
      }
    })
  }
})
defineOptions({
  name: 'index',
})
const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
