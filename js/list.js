export default {
    template: `
    <div class="showList" id="showList">
        <h2 class="areaName text-center mb-4">{{selectedAreaName}}</h2>
        <div class="row justify-content-center">
            <div class="col-11">
                <div class="row list">
                    <div class="col-md-6 mb-4" v-for="item in dataPerPage" :key="item.Id">
                        <div class="card h-100">
                            <div class="card-header bg-cover d-flex align-items-end justify-content-between" style="background-position: center center; min-height: 155px;" :style="{backgroundImage:'url('+item.Picture1+')'}">
                                <h4 class="card-title text-white mb-0">{{item.Name}}</h4>
                                <h6 class="text-white mb-0">{{item.Zone}}</h6>
                            </div>
                            <div class="card-body">
                                <div class="info">
                                    <div class="d-flex align-items-center mb-2">
                                        <img class="img-fluid" src="img/icons_clock.png" alt="" style="margin-right:8px;">
                                        <p class="mb-0">{{item.Opentime}}</p>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <img class="img-fluid" src="img/icons_pin.png" alt="" style="margin-right:10px;">
                                        <p class="mb-0">{{item.Add}}</p>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <img class="img-fluid" src="img/icons_phone.png" alt="" style="margin-left: 2px; margin-right:14px;">
                                        <p class="mb-0">{{item.Tel}}</p>
                                    </div>
                                </div>
                                <div class="tag">
                                    <img src="img/icons_tag.png" alt="">
                                    <span class="ml-2">{{item.Ticketinfo}}</span>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    </div>    
    `,
    data() {
        return {}
    },
    props: {
        dataPerPage: {},
        selectedAreaName: ''
    }
}