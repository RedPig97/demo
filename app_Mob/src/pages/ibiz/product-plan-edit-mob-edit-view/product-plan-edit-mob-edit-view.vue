<script lang='ts'>
import { Component } from 'vue-property-decorator';
import ProductPlanEditMobEditViewBase from './product-plan-edit-mob-edit-view-base.vue';

import view_form from '@widgets/product-plan/mob-main-table-form/mob-main-table-form.vue';
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
export default class ProductPlanEditMobEditView extends ProductPlanEditMobEditViewBase {

}
</script>