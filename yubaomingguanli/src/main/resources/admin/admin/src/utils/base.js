const base = {
    get() {
        return {
            url : "http://localhost:8080/yubaomingguanli/",
            name: "yubaomingguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yubaomingguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "预报名管理系统"
        } 
    }
}
export default base
