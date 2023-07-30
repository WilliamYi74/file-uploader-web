import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/login.vue'
import Upload from '@/pages/upload.vue'
const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'LOGIN', component: Login },
    { path: '/upload', name: 'UPLOAD', component: Upload }
]
const router = createRouter({
    routes,
    history: createWebHistory('/file-uploader/')
})
export default router
