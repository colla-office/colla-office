<template>
  <div >
    <div id="ccc">
      <div class="chat-container">
        <splitpanes class="default-theme" horizontal style="height: 100vh">
          <pane size="75" min-size="30">
            <div class="chat-messages" id="chatMessages">
              <div class="chat-message received">
                <div class="chat-bubble received">
                  <div style="height: 180px;width: 100vh">
                    <vue-monaco-editor
                        v-model:value="code"
                        theme="vs-light"
                        language="json"
                        :options="MONACO_EDITOR_OPTIONS"
                        @mount="handleMount"
                    />
                  </div>
                </div>
                <div class="chat-time">2024-01-18 16:22:23</div>
              </div>
              <div class="chat-message sent">
                <div class="chat-time">2024-01-18 16:22:23</div>
                <div class="chat-bubble sent">
                  <div style="height: 180px;width: 100vh">
                    <vue-monaco-editor
                        v-model:value="code"
                        theme="vs-light"
                        language="json"
                        :options="MONACO_EDITOR_OPTIONS"
                        @mount="handleMount"
                    />
                  </div>
                </div>
              </div>
              <div class="chat-message received">
                <div class="chat-bubble received">
                  <div style="height: 180px;width: 100vh">
                    <vue-monaco-editor
                        v-model:value="code"
                        theme="vs-light"
                        language="json"
                        :options="MONACO_EDITOR_OPTIONS"
                        @mount="handleMount"
                    />
                  </div>
                </div>
                <div class="chat-time">2024-01-18 16:22:23</div>
              </div>
            </div>
            <div class="chat-message received">
              <div class="chat-bubble received">
                <div>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkcdfvgbhnnnnnnnnnnbhkknhkhbkjhbkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkcdfvgbhnnnnnnnnnnbhkknhkhbkjhbkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkcdfvgbhnnnnnnnnnnbhkknhkhbkjhbkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkcdfvgbhnnnnnnnnnnbhkknhkhbkjhbkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkcdfvgbhnnnnnnnnnnbhkknhkhbkjhbkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkcdfvgbhnnnnnnnnnnbhkknhkhbkjhbkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                  fvgbhjnkmfgbh<br>
                </div>
              </div>
              <div class="chat-time">2024-01-18 16:22:23</div>
            </div>
          </pane>
          <pane size="25" max-size="70" min-size="30">
            <div class="chat-input" style="height: 100%">
              <vue-monaco-editor
                  v-model:value="code"
                  theme="vs-light"
                  language="json"
                  :options="MONACO_EDITOR_OPTIONS"
                  @mount="handleMount"
              />
            </div>
          </pane>
        </splitpanes>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {Splitpanes, Pane} from 'splitpanes'

import { ref, shallowRef } from 'vue'
import WebSocketComponent from "@/views/example/hello/WebSocketComponent.vue";

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  language:'json',
  formatOnType: true,
  formatOnPaste: true,
}

const code = ref(
    `
{
  "a": "b"
}
    `
)
const editorRef = shallowRef()
const handleMount = editor => (editorRef.value = editor)

// your action
function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
</script>
<style scoped>

#ccc{
}


.chat-container {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
}

.chat-messages {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}
.splitpanes__pane{
  overflow: auto;
}

.chat-input {
  border-top: 1px solid #ccc;
  padding: 10px;
}

.chat-message {
  display: flex;
  margin-bottom: 10px;
}

.chat-message.sent {
  justify-content: flex-end;
}

.chat-message.received {
  justify-content: flex-start;
}

.chat-bubble {
  max-width: 85%;
  padding: 10px;
  border-radius: 10px;
}

.chat-bubble.sent {
  background-color: #007bff;
  color: #fff;
  border-top-right-radius: 0;
}

.chat-bubble.received {
  background-color: #e5e5ea;
  color: #000;
  border-top-left-radius: 0;
}

.chat-time {
  font-size: 0.8em;
  color: #888;
  align-self: flex-end;
}
</style>
