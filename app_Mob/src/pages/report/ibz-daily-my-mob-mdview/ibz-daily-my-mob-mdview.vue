<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzDailyMyMobMDViewBase from './ibz-daily-my-mob-mdview-base.vue';

import view_mdctrl from '@widgets/ibz-daily/mob-mobmdctrl/mob-mobmdctrl.vue';
@Component({
    components: {
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzDailyMyMobMDView extends IbzDailyMyMobMDViewBase {

}
</script>