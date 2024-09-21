# 制作CE-插件
:::warning 警告
此教程适用于最新版本的插件制作，仅适用于CE-RAMOS v2.0（UWP版本）及其后续版本，以及CE-RAMOS v1.0（非UWP版本）及其后续版本。
:::
:::tip 提示
若您是插件制作新手，可以使用[CE-RAMOS插件制作工具](https://down.ce-ramos.cn/CE-RAMOS%E6%96%87%E4%BB%B6/CE-%E6%8F%92%E4%BB%B6%E5%88%B6%E4%BD%9C%E5%B7%A5%E5%85%B7/CEMake.exe)进行向导式制作。
要查看PE版本号，请启动PE并打开CE-小助手软件，即可看到PE版本号。

![查看PE版本号](https://pic.imgdb.cn/item/66ed7a4bf21886ccc039aee8.png)
:::
本文旨在帮助新手快速掌握插件包的开发流程，并促进CE-RAMOS开发团队构建CE-插件的生态圈。

对于初学者，我们推荐使用CE-插件制作工具进行制作。点击以下链接下载工具。

如果您发现CE-插件制作工具无法满足您的需求，或者您希望亲自尝试制作，请继续阅读以下教程。

以`DiskGenius`为例，以下是所需文件的列表：
![DiskGenius文件列表](https://pic.imgdb.cn/item/66e7b942d9c307b7e9dc932d.png)

1. 首先，创建一个新工程文件夹，并在其中新建一个名为`DiskGenius`的子文件夹，将上述文件放入该子文件夹中。
![新建工程文件夹](https://pic.imgdb.cn/item/66e7b943d9c307b7e9dc9353.png)

2. 将以下文件放在工程文件夹根目录下：`*.cmd`, `*.bat`（CMD脚本文件）, `*.reg`（注册表文件）, `*.exe`（Win32应用程序）, `*.ini`, `*.wcs`（PECMD脚本文件）。这些执行文件将在加载插件时按相应方式运行。

![放置执行文件](https://pic.imgdb.cn/item/66e7b947d9c307b7e9dc99a5.png)
:::tip 提示
简单的创建快捷方式等功能可以通过`lnk.cfg`配置文件实现。
:::
`lnk.cfg`配置文件内容规范如下：
![lnk.cfg配置文件](https://pic.imgdb.cn/item/66e7b947d9c307b7e9dc99d2.png)
要求：文件格式应为UTF-8。提示：在目标路径中可以使用变量`%FN%`表示当前目录。
:::warning 警告
在CE-RAMOS v2.0 Pro（UWP版本）中，仅支持创建快捷方式的功能。下图所示的其他功能，属于CE-RAMOS v2.0 Pro（UWP版本）及其后续版本，以及CE-RAMOS v1.0（非UWP版本）及其后续版本所具备的特性。
:::
3. 在工程文件夹中，选中所有文件夹并右键压缩。建议使用7z压缩格式，并设置压缩密码为`ZQFa08hkGv2@F`。否则，插件可能会加载失败或被误识别为旧版插件。

![压缩文件夹](https://pic.imgdb.cn/item/66e7b947d9c307b7e9dc99eb.png)
4. 将压缩文件重命名为`DiskGenius 插件.ce`，并删除不再需要的文件。

![重命名文件](https://pic.imgdb.cn/item/66e7b947d9c307b7e9dc99fd.png)

5. 现在，您可以尝试使用您制作的插件了！

![尝试插件](https://pic.imgdb.cn/item/66e7b947d9c307b7e9dc995e.png)

按照以上步骤，您就可以制作出一个好用的CE-插件。