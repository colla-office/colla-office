import { createApp } from 'vue';
import './assets/global.less';
import 'splitpanes/dist/splitpanes.css'
// import components from './components/global';
import { install as VueMonacoEditorPlugin, loader } from '@guolao/vue-monaco-editor'
import * as monaco from 'monaco-editor'

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import App from "@/App.vue";
import Router from "@/router";
import * as splitpanes from "splitpanes";

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  },
}

loader.config({ monaco })
const app = createApp(App)
app.use(VueMonacoEditorPlugin)
// app.config.productionTip = false
// // components
// for (const i in components) {
//   app.component(i, components[i])
// }

const { Splitpanes, Pane } = splitpanes
app.component(Splitpanes.name, Splitpanes)
app.component(Pane.name, Pane)

app.use(Router).mount('#app')
