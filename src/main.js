// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router'
import 'iview/dist/styles/iview.css';
import BaiduMap from 'vue-baidu-map'
import 'swiper/dist/css/swiper.css';

// import '@/mock'
// 实际打包时应该不引入mock
/* eslint-disable */
Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'zDyZneP3vBERNestqdHYzsWQ60KfLDy0'
});

//引用远程js   <remote-script src=""></remote-script>
Vue.component('remote-script', {
    render: function (createElement) {
        var self = this;
        return createElement('script', {
            attrs: {
                type: 'text/javascript',
                src: this.src,
            },
            on: {
                load: function (event) {
                    self.$emit('load', event);
                },
                error: function (event) {
                    self.$emit('error', event);
                },
                readystatechange: function (event) {
                    if (this.readyState == 'complete') {
                        self.$emit('load', event);
                    }
                }
            }
        });
    },

    props: {
        src: {
            type: String,
            required: true
        }
    }
});

/* eslint-disable no-new */
window.app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});




