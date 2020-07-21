export default {
    template: `
    <nav aria-label="Page navigation example">
        <ul class="pagination d-flex justify-content-center" id="pageId">
            <li class="page-item" :class="{'disabled': pages.currentPage === 1}">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent="switchPages(pages.currentPage-1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="(item,key) in pages.pageTotal" :key="key" :class="{'active': (item === pages.currentPage)}">
                <a class="page-link" href="#" @click.prevent="switchPages(item)">{{item}}</a>
            </li>
            <li class="page-item" :class="{'disabled': pages.currentPage == pages.pageTotal}">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="switchPages(pages.currentPage+1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    `,
    data() {
        return {

        }
    },
    props: {
        pages: {}
    },
    methods: {
        switchPages(targetPage) {
            this.$emit('switch', targetPage);
        }
    },
}