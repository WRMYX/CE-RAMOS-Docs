# 集成CE-插件至PE系统
> 本节将指导您如何将CE-插件集成到您的PE系统中，以实现CE-插件的加载功能。
## CE-RAMOS插件加载器
- 仓库地址：[GitHub - CE-RAMOS插件加载器](https://github.com/CJA-OS/CE-RAMOS/tree/main/CE-%E6%8F%92%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8)

- 编译后版本下载：[CE-插件加载器.exe](https://down.ce-ramos.cn/CE-RAMOS%E6%96%87%E4%BB%B6/CE-%E6%8F%92%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8/CE-%E6%8F%92%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%99%A8.exe)
CE-RAMOS插件加载器是一款图形化工具，在命令行模式下运行时不会显示通知（仅在加载开始和结束时提示）。

以下为命令行参数的说明，以帮助您实现CE-插件的相关功能：

（请注意，不同版本的CE-RAMOS插件加载器功能可能有所变化，以下展示的功能为通用功能）

:::tip 提示：
您可以通过输入一个不存在的命令行参数来调用CE-RAMOS插件加载器，以显示所有可用命令参数及其说明。
:::
```
CE-RAMOS插件加载器使用说明：
CE-RAMOS插件加载器.exe [参数]
参数：
  main               搜索并加载所有CE-插件（该选项只能使用一次，建议设置为自启动）
  <CE-插件路径>      加载指定路径下的CE-插件
```