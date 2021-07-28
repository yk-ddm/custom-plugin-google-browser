# 谷歌插件开发

## 空插件开发

- 需要一个入口文件, 即 `manifest.json` 文件

### manifest.json参数

- manifest_version 版本, 即 `manifest_version: 2`, manifest文件版本号  Chrome18 开始必须设置为 2

- name 插件名称, 即 `name: plugin_name`

- version 插件版本, 即 `version: 1.0`

- description 插件描述, 即 `description: yk-ddm custom plugin`

- author 作者, 即 `author: yk-ddm`

- icons 插件图标, 即 `icons: {...}`, 放置不同像素的图标icon, 常用 16、48和128像素的图标icon

- browser_action 浏览行为, 即 "browser_action: {...}

    - 默认图标default_icon: ""

    - 默认标题default_title: ""
## 总结