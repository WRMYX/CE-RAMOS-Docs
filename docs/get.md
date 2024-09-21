# Edgeless插件、HPM模块与CE-插件数量获取

:::tip 提示
本页面使用Vue.js编写计算插件数量代码（不计算“推荐”插件）

（本页面列出的所有数据可能与官方所列出的实际有所区别，故仅供参考，请以实际为准）
:::

<table tabindex="0"><thead><tr><th>Edgeless插件数目：</th><td><strong>{{ EdgelessPlugins }}个</strong></td></tr></thead></table>
<table tabindex="0"><thead><tr><th>HotPE模块数目：</th><td><strong>{{ HPM }}个</strong></td></tr></thead></table>
<table tabindex="0"><thead><tr><th>CE-插件数目：</th><td><strong>{{ CE }}个</strong></td></tr></thead></table>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const EdgelessPlugins = ref(0);
    const HPM = ref(0);
    const CE = ref(0);
    onMounted(async () => {
      try {
        // 获取 EdgelessPlugins 数据
        const responseEdgeless = await fetch('https://api.ce-ramos.cn/EdgelessPlugins/');
        const dataEdgeless = await responseEdgeless.json();
        console.log('EdgelessPlugins data received:', dataEdgeless);

        // 处理 EdgelessPlugins 数据
        if (Array.isArray(dataEdgeless.data)) {
          dataEdgeless.data.forEach(item => {
            if (Array.isArray(item.list) && item.class !== '推荐') {
              EdgelessPlugins.value += item.list.length;
            }
          });
        } else {
          console.error('EdgelessPlugins data structure is not as expected:', dataEdgeless);
        }

        // 获取 HPM 数据
        const responseHPM = await fetch('https://api.hotpe.top/API/HotPE/GetHPMList/');
        const dataHPM = await responseHPM.json();
        console.log('HPM data received:', dataHPM);

        // 处理 HPM 数据
        if (Array.isArray(dataHPM.data)) {
                    dataHPM.data.forEach(item => {
            if (Array.isArray(item.list) && item.class !== '推荐') {
              HPM.value += item.list.length;
            }
          });
        } else {
          console.error('HPM data structure is not as expected:', dataHPM);
        }

                // 获取 CEPlugins 数据
        const responseCE = await fetch('https://api.ce-ramos.cn/GetPlugins/');
        const dataCE = await responseCE.json();
        console.log('CE-Plugins data received:', dataCE);

        // 处理 CEPlugins 数据
        if (Array.isArray(dataCE.data)) {
          dataCE.data.forEach(item => {
            if (Array.isArray(item.list) && item.class !== '推荐') {
              CE.value += item.list.length;
            }
          });
        } else {
          console.error('CE-Plugins data structure is not as expected:', dataEdgeless);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return { EdgelessPlugins, HPM , CE };
  }
};
</script>