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

    - 默认popup页面 default_popup: ""

- 后台background参数, 即 "background: {...}"
    - 默认后台页面page: "background.html"

- permissions 权限参数，即 permissions: [...]
    - 标签页参数tabs
    - 跨域参数：http://\*/\*
    - contextMenus 内容菜单

- content_scripts 向当前tab页注入脚本代码, 即 "content_scripts": [{...}]
    - matches 浏览器地址栏匹配模式: "matches": ["<all_urls>"],
    - js 需要注入的js 文件路径: "js": ["js/demo.js" ...] 
    - 执行此脚本的时机："run_at": "document_start" 文档加载完成执行

- chrome_url_overrides 配置打开newTab标签页时默认显示什么样的界面
    - chrome_url_overrides: {
        "newtab": "newTab.html"
    }
## 总结