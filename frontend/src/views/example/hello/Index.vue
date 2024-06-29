<template>
  <div >
    <div id="ccc">
      <div ref="scrollContainer" class="chat-container">
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
            </div>
            <div ref="scrollContainer22"></div>
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

import {nextTick, onMounted, ref, shallowRef} from 'vue'
const scrollContainer = ref<HTMLDivElement | null>(null);
const scrollContainer22 = ref<HTMLDivElement | null>(null);

const scrollToBottom = () => {
  nextTick(() => {
    const container = scrollContainer.value;
    console.log('111');
    if (container) {
      setTimeout(()=>{
        console.log('112', container.scrollTop, container);
        container.scrollIntoView({behavior: "smooth", block: "end"});
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight + 20;
      }, 2000)
    }
  });
};

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

onMounted(async () => {
  await nextTick();
  let div = scrollContainer.value!;
  div = div.querySelector('.splitpanes__pane')!;
  div.scrollTo({top: div.scrollHeight, behavior: 'smooth'});
});
const editorRef = shallowRef()
const handleMount = editor => {
  editor.onKeyDown(e => {
    if (e.metaKey && e.keyCode === 3) {
      // 处理 Enter 键按下事件
      console.log('Enter 键被按下');
    }
    if (e.keyCode === 16) {
      const position = editor.getPosition();
      if (position) {
        const lineNumber = position.lineNumber;
        console.log('光标所在行数:', lineNumber);
      } else {
        console.log('无法获取光标位置信息');
      }
    }
  });
  editorRef.value = editor
};

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
  overflow-y: scroll;
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
