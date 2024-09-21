# 感谢
<br>
<Badge type="tip" style="font-size: 0.9em;">排名不分先后，如有遗漏请谅解并联系我们补充</Badge>

## 项目主要成员

PE内核开发：CJA-OS

软件开发：Hello,World!&CJA-OS

H5网站编写：CJA-OS（新版网站）&WinToGo-LZP（旧版网站）

服务器提供：CJA-OS&nachonekoawa

下载服务提供：nachonekoawa＆承心＆CJA-OS

运维：Hello,World!&CJA-OS&nachonekoawa

云盘运维：CJA-OS（Cloudreve版本）&nachonekoawa（AList版本）

视频&插件制作：TangerinePeel🍊

## 插件制作贡献人员

<Badge type="tip" style="font-size: 0.9em;">由PHP脚本自动统计，每1小时自动更新一次</Badge>

<div>
    <p v-if="message === '获取中...'">{{ message }}</p>
    <table v-else tabindex="0">
      <thead>
        <tr>
          <th>排名</th>
          <th>名称</th>
          <th>已贡献</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in contributions" :key="index">
          <td>{{ item.rank }}</td>
          <td v-if="index < 3"><strong>{{ item.contributor }}</strong></td>
          <td v-else>{{ item.contributor }}</td>
          <td>{{ item.count }}</td>
        </tr>
      </tbody>
    </table>
</div>

<table tabindex="0"><thead><tr><th>总贡献数目：</th><td v-if="message !== '获取中...'"><strong>{{ totalContributions }}个</strong></td></tr></thead></table>

## 已退出本项目的贡献人员

LiH渝（提供旧时CE-RAMOS官网托管，CE-RAMOS下载站搭建，域名提供等）<br>
Eplcx（旧时软件开发，视频制作等）

## 其余贡献人员

### 方案提供
SYSTEM-RAMOS-ZDY

CSJ-OS

<h2 id="" tabindex="-1"></h2>

### 感谢所有对本项目做出贡献的人！

<script>
  import { ref, onMounted } from 'vue';
export default {
    setup() {
    const nameKeyCount = ref(0);

    onMounted(async () => {
      try {
        const response = await fetch('https://api.ce-ramos.cn/EdgelessPlugins/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        nameKeyCount.value = data.data.list.length; // 直接计算list数组的长度
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return { nameKeyCount };
  },
  data() {
    return {
      message: '获取中...',
      contributions: []
    };
  },
  computed: {
    totalContributions() {
      return this.contributions.reduce((total, contribution) => {
        // 假设贡献数目是数字，如果不是，则需要转换
        return total + parseInt(contribution.count, 10);
      }, 0);
    }
  },
  methods: {
    fetchPluginsText() {
      fetch('https://api.ce-ramos.cn/PluginsList/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // 注意这里使用了.text()而不是.json()
        })
        .then(text => {
          // 检查文本是否为空
          if (!text.trim()) { // 使用trim()来移除可能的空白字符
            this.message = '获取失败';
          } else {
            this.message = text;
            this.parseContributions(text);
          }
        })
        .catch(error => {
          this.message = '获取失败';
          console.error('Error fetching plugins text:', error);
        });
    },
    parseContributions(text) {
      console.log('Parsing contributions:', text); // 添加日志以检查输入文本
      this.contributions = [];

      const lines = text.trim().split('<br>'); // 使用<br>来分割文本行
      lines.forEach(line => {
        // 移除行首尾的空白字符
        line = line.trim();
        // 跳过空行
        if (!line) return;

        const parts = line.split('|');
        if (parts.length === 3) {
          const rank = parts[0].trim();
          const contributor = parts[1].replace('贡献者:', '').trim();
          const count = parts[2].replace('已贡献', '').trim();
          this.contributions.push({ rank, contributor, count });
        }
      });
      console.log('Parsed contributions array:', this.contributions); // 添加日志以检查最终数组
    }
  },
  mounted() {
    this.fetchPluginsText();
  }
};


 
</script>