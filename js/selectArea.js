export default {
    template: `
    <div class="banner bg-cover d-flex flex-column justify-content-center align-items-center" style="background-image: url(./img/the-urban-landscape-1698285.png);">
        <h1 class="text-white text-center display-4">高雄旅遊網</h1>
        <select name="selectArea" id="selectArea" class="form-control mt-3" v-model="selectedArea" @change="sendResult">
            <option selected class="d-none" value="">--請選擇行政區--</option>
            <option v-for="(item,i) in areaData" :key="i" :value="item">{{item}}</option>
        </select>
    </div>
    `,
    props: {
        areaData: {}
    },
    data() {
        return {
            selectedArea: ''
        }
    },
    methods: {
        sendResult() {
            this.$emit('selected', this.selectedArea);
        }
    }
}