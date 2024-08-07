# 如何制作CE-插件
:::warning 警告：

此教程适用于最新版本的插件制作，仅适用于CE-RAMOS v2.0(UWP版本)及其后续版本，以及CE-RAMOS v1.0(非UWP版本)及其后续版本。

:::

:::tip 提示：

对于制作一个简单的PE插件可尝试使用[CE-RAMOS插件制作工具](https://files.ce-ramos.cn/d/%E4%B8%8B%E8%BD%BD/CE-RAMOS%E6%96%87%E4%BB%B6/CE-%E6%8F%92%E4%BB%B6%E5%88%B6%E4%BD%9C%E5%B7%A5%E5%85%B7/CEMake.exe)

查看PE版本号方法：

启动PE，在PE中打开CE-小助手 软件，即可看到PE版本号
![](https://pic.ce-ramos.cn/docs/cj1.png)
:::

此博文的目的是帮助新手快速上手插件包开发与让CE-RAMOS开发团队获得CE-插件的生态

对于小白来说，推荐使用CE-插件制作工具进行向导式制作，点此下载

如果CE-插件制作工具无法满足您的需要或您执意自己动手操作，那么请进行阅读

以`DiskGenius`为例，这是目前拥有的文件↓
![](https://pic.ce-ramos.cn/docs/cj2.png)

1.先新建工程文件夹再新建一个名为`DiskGenius`的文件夹，并将上述文件放在新建的文件夹中

![](https://pic.ce-ramos.cn/docs/cj3.png)
2.将`*.cmd .bat (CMD脚本文件)` `.reg (注册表文件)` `.exe (Win32应用程序)` `.ini .wcs (PECMD脚本文件)`放在工程文件夹下，执行文件会在加载插件时以相对应的方式运行

![](https://pic.ce-ramos.cn/docs/cj5.png)

:::tip 提示:
简单的创建快捷方式等功能可以通过`lnk.cfg`实现
:::

`lnk.cfg`配置文件内容规范：

![](https://pic.ce-ramos.cn/docs/cj6.png)

要求：格式为UTF-8 提示：在目标中有一个变量`%FN%`表示当前目录

:::warning 警告：在CE-RAMOS v2.0 Pro(UWP版本)中仅有创建快捷方式功能！
此图所示的其他功能，均属于CE-RAMOS v2.0 Pro(UWP版本)及其后续版本，以及CE-RAMOS v1.0(非UWP版本)及其后续版本所具备的特性。
:::

3.在工程文件夹下选中所有的文件夹并右键进行压缩，需要注意的是格式最好为7z压缩格式，并且压缩密码设置为`ZQFa08hkGv2@F`否则，将有可能加载失败或被识别为旧版插件
![](https://pic.ce-ramos.cn/docs/cj7.png)
4.将文件名称修改为`DiskGenius 插件.ce`，再删除掉无用的文件就行了

![](https://pic.ce-ramos.cn/docs/cj8.png)

5.现在，开始试试你做的插件吧！

![](https://pic.ce-ramos.cn/docs/cj9.png)

这样一个好用的插件就制作完成了