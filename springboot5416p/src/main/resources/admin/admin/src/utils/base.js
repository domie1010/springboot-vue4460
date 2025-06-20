const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5416p/",
            name: "springboot5416p",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "基于大数据的心脏病患者数据分析"
        } 
    }
}
export default base
