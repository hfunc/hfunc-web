import {RouteRecordRaw} from "vue-router";

export const articleRouteInfo: RouteRecordRaw = {
    component: () => import('@/views/article/Article.vue'),
    path: "article",
    meta: {
        title: "知识大海",
        isMenu: true,
    },
    children: [
        {
            path: '',
            component: () => import('@/views/article/List.vue')
        }
    ]
}