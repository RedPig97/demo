<script lang='ts'>
import { Component } from 'vue-property-decorator';
import IbzWeeklyMobEditViewCreateBase from './ibz-weekly-mob-edit-view-create-base.vue';

import view_form from '@widgets/ibz-weekly/mob-week-edit-form/mob-week-edit-form.vue';
@Component({
    components: {
        view_form, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class IbzWeeklyMobEditViewCreate extends IbzWeeklyMobEditViewCreateBase {

}
</script>