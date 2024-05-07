<template>
  <div class="q-pa-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        indicator-color="purple"
        class="bg-primary text-white shadow-2"
        align="justify"
      >
        <q-tab name="mails" label="属性" >
          <q-badge color="red" floating>21</q-badge>
        </q-tab>
        <q-tab name="alarms" label="插槽" >
          <q-badge color="red" floating>0</q-badge>
        </q-tab>
        <q-tab name="movies" label="事件" >
          <q-badge color="red" floating>1</q-badge>
        </q-tab>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails" class="q-pa-none">

          <q-splitter
            v-model="splitterModel"
            style="height: 250px"
          >

            <template v-slot:before>
              <q-tabs
                v-model="innerTab"
                vertical
                class="text-teal"
              >
                <q-tab name="behavior" icon="mail" label="行为" />
                <q-tab name="innerAlarms" icon="alarm" label="内容" />
                <q-tab name="innerMovies" icon="movie" label="模型" />
                <q-tab name="innerMovies" icon="movie" label="样式" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="innerTab"
                animated
                transition-prev="slide-down"
                transition-next="slide-up"
              >
                <q-tab-panel name="behavior">
                  <div class="text-h5 bg-yellow-3">
                    breakpoint( 分界点 ): Number | String
                  </div>
                  <p class="text-h6"> 描述:</p>
                  <div class="text-weight-bold text-h7"> 制表符容器宽度的分界点（以像素为单位），制表符在该分界点上自动转为对齐对齐方式</div>
                  <p class="text-h6"> 默认值:</p>

                  <div class="text-weight-bold text-h7"> 768px</div>
                </q-tab-panel>

                <q-tab-panel name="innerAlarms">
                  <div class="text-h4 q-mb-md">Alarms</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="innerMovies">
                  <div class="text-h4 q-mb-md">Movies</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">插槽</div>
          没有默认插槽
        </q-tab-panel>

        <q-tab-panel name="movies" class="bg-purple-1 text-center">
          <div class="text-h6 bg-yellow-2"> 1、@update:model-value -> function(value)</div>
          <p class="text-h6"> 描述:</p>
          <div class="text-weight-bold text-h7"> 当组件需要更改模型时发出；也被 v-model 使用</div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let tab= ref('mails')
let innerTab=ref('innerMails')
let splitterModel= ref(20)

</script>


<route lang="yaml">
meta:
  title: Tabs 选项卡
  icon: tab
</route>
