module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "productName": "electron-vue",
                "appId": "electron.com",
                "directories": {
                    "output": "dist_electron"
                },
                "dmg": {
                    "contents": [
                        {
                            "x": 410,
                            "y": 150,
                            "type": "link",
                            "path": "/Applications"
                        },
                        {
                            "x": 130,
                            "y": 150,
                            "type": "file"
                        }
                    ]
                },
                "mac": {
                    "icon": "build/icons/icon.icns",
                    "category": "public.app-category.utilities",
                    "target": ["dmg"]
                },
                "win": {
                    "icon": "build/icons/icon.ico",
                    "target": ["msi"]
                },
                "linux": {
                    "icon": "build/icons",
                    "target": ["deb", "rpm"],
                    "category": "Utility"
                },
                "nsis": {
                    "oneClick": false,
                    "perMachine": true,
                    "allowToChangeInstallationDirectory": true // 允许修改安装目录
                }
            }
        }
    }
}
