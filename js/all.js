import selectArea from './selectArea.js';
import list from './list.js';
import famousArea from './famousArea.js'
import pagination from './pagination.js';


Vue.component('selectArea', selectArea); // select元件
Vue.component('list', list); // 列表元件
Vue.component('famousArea', famousArea); // 熱門行政區元件
Vue.component('pagination', pagination); // 分頁元件

new Vue({
    el: '#app',
    data: {
        data: [], // 儲存AJAX撈回來的所有資料
        areaData: [], // 儲存不重複的行政區資料
        tempSpot: [], // 儲存符合選擇條件的景點
        tempZone: '', // 選擇的行政區名稱
        pages: {
            currentPage: 1, // 當前頁數
            pageTotal: 1, // 共有幾頁
            perPage: 4 // 每頁4筆
        },
        dataPerPage: [] // 每頁要顯示的資料
    },
    methods: {
        getData() { // AJAX取得遠端資料
            const vm = this;
            const url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
            axios.get(url)
                .then(res => {
                    vm.data = res.data.result.records;
                    this.getAreaData();
                })
                .catch(err => {
                    console.log(err);
                })
        },
        getAreaData() { // 取得不重複的行政區資料
            const vm = this;
            vm.data.forEach(item => {
                if (vm.areaData.indexOf(item.Zone) === -1) {
                    vm.areaData.push(item.Zone);
                }
            })
        },
        selectedAreaInfo(zone) { // 篩選出選擇行政區的資料
            const vm = this;
            vm.tempZone = zone;
            vm.tempSpot = vm.data.filter(item => {
                return item.Zone === zone;
            })
            vm.pageCount();
        },
        pageCount(nowPage = 1) { // 計算分頁相關數值
            const vm = this;
            vm.dataPerPage = [];
            vm.pages.pageTotal = Math.ceil(vm.tempSpot.length / vm.pages.perPage); // 總頁數
            vm.pages.currentPage = nowPage; // 當前頁數
            const minData = (vm.pages.currentPage * vm.pages.perPage) - vm.pages.perPage + 1; // 每頁第一筆資料
            const maxData = vm.pages.currentPage * vm.pages.perPage; // 每頁最後一筆資料
            vm.tempSpot.forEach((item, index) => {
                // 獲取陣列索引，但因為索引是從 0 開始所以要 +1。
                const num = index + 1;
                // 如果是當頁所需要的索引，則存入dataPerPage[]
                if (num >= minData && num <= maxData) {
                    vm.dataPerPage.push(item);
                }
            });
        }
    },
    created() {
        this.getData();
    }
})

// scroll to list
$('.goDown').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
            scrollTop: $('#showList').offset().top
        },
        500
    );
    return false;
});

// scroll to top
$('.btnGoTop').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
            scrollTop: 0
        },
        500
    );
    return false;
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset === 0) {
        document.querySelector('.btnGoTop').classList.add('d-none');
    } else {
        document.querySelector('.btnGoTop').classList.remove('d-none');
    }

}, false);