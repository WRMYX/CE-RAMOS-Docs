# 日志
## 开发状态

### CE-RAMOS主体核心<br><br>
#### UWP版本：
* 基于 Windows11 23H2 母盘制作的内核
* 完全采用系统自带组件，确保提供与原版系统极为相似的使用体验
<Badge type="tip">版本：{{ iso_version }}</Badge> <Badge type="info">作者：CE-RAMOS开发团队</Badge> <Badge type="warning">版本类型：Stable</Badge>
:::tip 母盘信息
22635.3061.240102-1517.NI_RELEASE_SVC_BETAFLT_PROD1_CLIENTPRO_OEMRET_X64FRE_ZH-CN.ISO
:::
<br>

#### 非UWP版本：
* 与UWP相同母盘制作的内核
* 使用WinXShell、StartAllBack等第三方组件，占用更低，速度更快

<Badge type="tip">版本：{{ iso_second_version }}</Badge> <Badge type="info">作者：CE-RAMOS开发团队</Badge> <Badge type="warning">版本类型：Stable</Badge>

### CE-RAMOS Hub
* 技术栈： Tauri、TypeScript、Vite、React
<Badge type="tip">版本：{{ hub_version }}</Badge> <Badge type="info">作者：Hello,World!</Badge> <Badge type="warning">版本类型：Alpha</Badge>

:::tip 提示
CE-RAMOS Hub目前尚未发布，敬请期待
:::

### 更新日志<br>
[CE-小助手更新日志](/overview/ce-help.html)

## 项目主要成员

PE内核开发：CJA-OS

软件开发：Hello,World!&CJA-OS

H5网站编写：WinToGo-LZP

服务器提供：CJA-OS&nachonekoawa

下载服务提供：nachonekoawa＆承心＆CJA-OS

运维：Hello,World!&CJA-OS&nachonekoawa

视频&插件制作：TangerinePeel🍊

<h2 id="" tabindex="-1"></h2>

### 感谢他们对本项目做出的贡献！



<script>  
export default {  
  data() {  
    return {  
      iso_version: '获取中...',
      iso_second_version: '获取中...',
      hub_version: '获取中...'  
    };  
  },  
  methods: {  
    fetchInfo() {  
      fetch('https://api.ce-ramos.cn/GetInfo/')  
        .then(response => {  
          if (!response.ok) {  
            throw new Error('Network response was not ok');  
          }  
          return response.json();  
        })  
        .then(data => {  
          this.iso_version = data.data.iso_version === 'null' ? '获取失败' : `CE-RAMOS ${data.data.iso_version} Pro (UWP)`;
          this.iso_second_version = data.data.iso_second_version === 'null' ? '获取失败' : `CE-RAMOS ${data.data.iso_second_version} Pro`;   
          this.hub_version = data.data.hub_version === 'null' ? '获取失败' : `CE-RAMOS Hub+${data.data.hub_version}`;  
        })  
        .catch(error => {  
          console.error('There was a problem with your fetch operation:', error);  
          this.iso_version = '获取失败'; 
          this.iso_second_version = '获取失败'; 
          this.hub_version = '获取失败';  
        });  
    }  
  },  
  mounted() {  
    this.fetchInfo();  
  }  
};  
</script>  