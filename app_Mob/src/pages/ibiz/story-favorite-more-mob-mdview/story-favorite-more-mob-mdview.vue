<script lang='ts'>
import { Component } from 'vue-property-decorator';
import StoryFavoriteMoreMobMDViewBase from './story-favorite-more-mob-mdview-base.vue';

import view_searchform from '@widgets/story/mob-def-searchform/mob-def-searchform.vue';
import view_mdctrl from '@widgets/story/favorite-mob-mobmdctrl/favorite-mob-mobmdctrl.vue';
@Component({
    components: {
        view_searchform, 
        view_mdctrl, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class StoryFavoriteMoreMobMDView extends StoryFavoriteMoreMobMDViewBase {

}
</script>