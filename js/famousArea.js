export default {
    template: `
    <div class="col-8 famousArea">
        <h4 class="famousArea-title">熱門行政區</h4>
        <ul class="d-flex text-center famousAreaLink">
            <li class="famousArea-item" style="background: #8A82CC;"><a href="#" @click.prevent="selectedFamousArea('苓雅區')" class="d-block text-white h-100">苓雅區</a></li>
            <li class="famousArea-item" style="background: #FFA782;"><a href="#" @click.prevent="selectedFamousArea('三民區')" class="d-block text-white">三民區</a></li>
            <li class="famousArea-item" style="background: #F5D105;"><a href="#" @click.prevent="selectedFamousArea('美濃區')" class="d-block text-white">美濃區</a></li>
            <li class="famousArea-item" style="background: #559AC8;"><a href="#" @click.prevent="selectedFamousArea('前鎮區')" class="d-block text-white">前鎮區</a></li>
        </ul>
    </div>    
    `,
    data() {
        return {
            selectedArea: ''
        }
    },
    methods: {
        selectedFamousArea(zone) {
            const vm = this;
            vm.selectedArea = zone;
            this.$emit('famous', vm.selectedArea);
        }
    }
}