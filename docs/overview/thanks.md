# 感谢
（排名不分先后，如有遗漏请谅解并联系我们补充）
## 项目主要成员

PE内核开发：CJA-OS

软件开发：Hello,World!&CJA-OS

H5网站编写：WinToGo-LZP

服务器提供：CJA-OS&nachonekoawa

下载服务提供：nachonekoawa＆承心＆CJA-OS

运维：Hello,World!&CJA-OS&nachonekoawa

视频&插件制作：TangerinePeel🍊

## 插件制作贡献人员
（由PHP脚本自动统计，每1小时自动更新一次）
<div v-html="message"></div>  

## 已退出本项目的贡献人员
LiH渝<br>
Eplcx

<h2 id="" tabindex="-1"></h2>

### 感谢所有对本项目做出贡献的人！

  
<script>  
export default {  
  data() {  
    return {  
      message: '获取中...'  
    };  
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
          }  
        })  
        .catch(error => {  
          this.message = '获取失败';  
          console.error('Error fetching plugins text:', error);  
        });  
    }  
  },  
  mounted() {  
    this.fetchPluginsText(); // 注意方法名的更改  
  }  
};  
</script>